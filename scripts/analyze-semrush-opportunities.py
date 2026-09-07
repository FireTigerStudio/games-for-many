from __future__ import annotations

import csv
import json
import math
import re
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEMRUSH_DIR = ROOT / "data" / "research" / "20260825-semrush"
GSC_DIR = ROOT / "gamesformany.com-Performance-on-Search-2026-08-23"
OUTPUT_DIR = SEMRUSH_DIR / "derived"

CANDIDATE_TERMS = (
    "2 player",
    "two player",
    "multiplayer",
    "browser",
    "with friends",
    "same keyboard",
    "friend",
    "coop",
    "co op",
    "party game",
    "two people",
    "2 people",
    "pvp",
)

COMPETITOR_BRANDS = (
    "crazygames",
    "crazy games",
    "poki",
    "playhop",
    "plays.org",
    "silvergames",
    "gamnite",
    "dinogame",
    "winrogames",
)

EXCLUDED_PATTERNS = {
    "unblocked/school circumvention": r"\bunblocked\b|school games|games at school",
    "download/app intent": r"\b(download|apk|app store|google play|steam)\b",
    "adult/gambling": r"\b(adult|nsfw|casino|gambling|poker for money|strip)\b",
    "unavailable third-party IP": r"\b(roblox|minecraft|fortnite|pokemon|mario|among us|gta|call of duty)\b",
}

PAGE_RULES = (
    ("local-two-player", r"same keyboard|one (pc|computer|device|keyboard|screen)|local (2|two)[ -]?player|couch co[ -]?op|split screen", "/category/local-2-player/"),
    ("online-two-player", r"online (2|two)[ -]?player|(2|two)[ -]?player online|play online with (a )?friend|remote friend|different computers|separate devices", "/category/online-2-player/"),
    ("broad-browser-guide", r"^best (free )?browser games$", ""),
    ("friends-guide", r"games? to play with friends|browser games? with friends|games? for friends online", ""),
    ("same-keyboard-guide", r"same keyboard|shared keyboard", "/blog/same-keyboard-2-player-games/"),
    ("best-two-player-guide", r"best (2|two)[ -]?player|top (2|two)[ -]?player", "/blog/best-2-player-browser-games/"),
    ("board-card", r"\b(chess|checkers|draughts|domino|backgammon|card|board game|tic tac toe|whot|ludo)\b", "/category/board-card/"),
    ("sports-racing", r"\b(sport|sports|racing|race|soccer|football|pong|darts|billiard|pool game|carrom)\b", "/category/sports-racing/"),
    ("party", r"\bparty games?\b|group games?", "/category/party/"),
    ("io-arena", r"\.io\b|\bio games?\b|arena", "/category/io-arena/"),
    ("multiplayer", r"multiplayer|browser games?", "/category/multiplayer/"),
    ("two-player", r"(2|two)[ -]?player", "/category/local-2-player/"),
)

STOPWORDS = {
    "a", "and", "browser", "free", "game", "games", "in", "online", "play",
    "player", "players", "the", "to", "two", "with", "2", "multiplayer",
}


def number(value: str | None, default: float = 0.0) -> float:
    try:
        return float(value or default)
    except ValueError:
        return default


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[^a-z0-9]+", " ", value.lower())).strip()


def tokens(value: str) -> set[str]:
    return {token for token in normalized(value).split() if token not in STOPWORDS and len(token) > 1}


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def load_keyword_rows() -> dict[str, dict[str, object]]:
    merged: dict[str, dict[str, object]] = {}
    for path in sorted(SEMRUSH_DIR.glob("gap.keywords_*.csv")):
        for row in read_csv(path):
            keyword = row.get("Keyword", "").strip().lower()
            if not keyword:
                continue
            current = merged.setdefault(keyword, {
                "keyword": row.get("Keyword", "").strip(),
                "volume": 0,
                "kd": 101,
                "intent": set(),
                "site_position": 0,
                "site_url": "",
                "competitor_urls": set(),
                "source_files": set(),
            })
            current["volume"] = max(int(current["volume"]), int(number(row.get("Volume"))))
            current["kd"] = min(float(current["kd"]), number(row.get("Keyword Difficulty"), 101))
            current["intent"].update(part.strip() for part in row.get("Intents", "").split(",") if part.strip())
            current["source_files"].add(path.name)

            site_position = number(row.get("gamesformany.com"))
            if site_position > 0 and (not current["site_position"] or site_position < current["site_position"]):
                current["site_position"] = site_position
                current["site_url"] = row.get("gamesformany.com (pages)", "")

            for key, value in row.items():
                if key.endswith(" (pages)") and key != "gamesformany.com (pages)" and value:
                    current["competitor_urls"].add(value)
    return merged


def load_gsc() -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    query_rows = []
    for row in read_csv(GSC_DIR / "Queries.csv"):
        query_rows.append({
            "query": normalized(row.get("Top queries", "")),
            "clicks": int(number(row.get("Clicks"))),
            "impressions": int(number(row.get("Impressions"))),
            "position": number(row.get("Position"), 100),
        })
    page_rows = []
    for row in read_csv(GSC_DIR / "Pages.csv"):
        page_rows.append({
            "url": row.get("Top pages", ""),
            "clicks": int(number(row.get("Clicks"))),
            "impressions": int(number(row.get("Impressions"))),
            "position": number(row.get("Position"), 100),
        })
    return query_rows, page_rows


def load_games() -> list[dict[str, object]]:
    return json.loads((ROOT / "data" / "games.json").read_text(encoding="utf-8"))


def candidate_pool(rows: dict[str, dict[str, object]]) -> list[dict[str, object]]:
    result = []
    for key, row in rows.items():
        if row["volume"] < 20 or row["kd"] > 65:
            continue
        if not any(term in key for term in CANDIDATE_TERMS):
            continue
        if any(brand in key for brand in COMPETITOR_BRANDS):
            continue
        result.append(row)
    return result


def match_game(keyword: str, games: list[dict[str, object]]) -> dict[str, object] | None:
    keyword_tokens = tokens(keyword)
    best: tuple[float, dict[str, object] | None] = (0.0, None)
    for game in games:
        title_tokens = tokens(str(game["title"]))
        if not title_tokens:
            continue
        overlap = len(keyword_tokens & title_tokens)
        score = overlap / len(title_tokens)
        if overlap >= 2 and score > best[0]:
            best = (score, game)
    return best[1] if best[0] >= 0.6 else None


def gsc_signal(keyword: str, query_rows: list[dict[str, object]]) -> dict[str, object]:
    keyword_tokens = tokens(keyword)
    matched = []
    for row in query_rows:
        query_tokens = tokens(str(row["query"]))
        if row["query"] == normalized(keyword) or (keyword_tokens and len(keyword_tokens & query_tokens) >= min(2, len(keyword_tokens))):
            matched.append(row)
    return {
        "queries": [row["query"] for row in matched[:10]],
        "clicks": sum(int(row["clicks"]) for row in matched),
        "impressions": sum(int(row["impressions"]) for row in matched),
        "best_position": min((float(row["position"]) for row in matched), default=0),
    }


def classify(row: dict[str, object], games: list[dict[str, object]], query_rows: list[dict[str, object]]) -> dict[str, object]:
    keyword = str(row["keyword"])
    key = normalized(keyword)
    gsc = gsc_signal(keyword, query_rows)

    exclusion_reason = next((reason for reason, pattern in EXCLUDED_PATTERNS.items() if re.search(pattern, key)), "")
    game = match_game(keyword, games)
    cluster = "manual-review"
    target_url = ""
    for rule_cluster, pattern, rule_url in PAGE_RULES:
        if re.search(pattern, key):
            cluster = rule_cluster
            target_url = rule_url
            break

    ambiguous_party = cluster == "party" and not any(term in key for term in ("online", "browser", "multiplayer"))
    if exclusion_reason:
        decision = "exclude"
        target_url = ""
        reason = exclusion_reason
    elif game:
        decision = "existing-game-page"
        target_url = f"/games/{game['slug']}/"
        reason = f"keyword matches existing game: {game['title']}"
    elif cluster == "broad-browser-guide":
        decision = "manual-review"
        target_url = ""
        reason = "intent is broader than the current two-player and multiplayer site focus"
    elif ambiguous_party:
        decision = "manual-review"
        target_url = ""
        reason = "query may describe an offline party activity rather than a browser game"
    elif cluster == "friends-guide":
        decision = "new-page-candidate"
        reason = "demand exists, but requires verified private-room/invite inventory before creation"
    elif target_url:
        decision = "existing-page"
        reason = f"fits existing {cluster} search task"
    else:
        decision = "manual-review"
        reason = "theme match is too broad for an automatic URL decision"

    volume_score = min(30.0, math.log10(max(1, int(row["volume"]))) * 7.5)
    difficulty_score = 0.0 if float(row["kd"]) < 0 else max(0.0, (65.0 - float(row["kd"])) / 65.0 * 25.0)
    gsc_score = min(25.0, math.log1p(int(gsc["impressions"])) * 5.0 + int(gsc["clicks"]) * 3.0)
    existing_score = 15.0 if decision in {"existing-page", "existing-game-page"} else 5.0 if decision == "new-page-candidate" else 0.0
    ranking_score = 5.0 if row["site_position"] else 0.0
    priority_score = 0.0 if decision == "exclude" else round(volume_score + difficulty_score + gsc_score + existing_score + ranking_score, 1)

    return {
        "keyword": keyword,
        "volume": row["volume"],
        "kd": row["kd"],
        "intent": sorted(row["intent"]),
        "decision": decision,
        "cluster": cluster,
        "target_url": target_url,
        "reason": reason,
        "priority_score": priority_score,
        "semrush_site_position": row["site_position"],
        "semrush_site_url": row["site_url"],
        "gsc_clicks": gsc["clicks"],
        "gsc_impressions": gsc["impressions"],
        "gsc_best_position": gsc["best_position"],
        "gsc_queries": gsc["queries"],
        "competitor_urls": sorted(row["competitor_urls"])[:10],
        "source_files": sorted(row["source_files"]),
    }


def write_outputs(classified: list[dict[str, object]], page_rows: list[dict[str, object]]) -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    sorted_rows = sorted(classified, key=lambda row: (-float(row["priority_score"]), -int(row["gsc_impressions"]), -int(row["volume"]), float(row["kd"]), str(row["keyword"])))
    with (OUTPUT_DIR / "keyword-classification.ndjson").open("w", encoding="utf-8", newline="\n") as handle:
        for row in sorted_rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")

    decisions = Counter(str(row["decision"]) for row in sorted_rows)
    clusters = Counter(str(row["cluster"]) for row in sorted_rows if row["decision"] != "exclude")
    top = [row for row in sorted_rows if row["decision"] != "exclude"][:40]
    lines = [
        "# Semrush keyword classification",
        "",
        "> Generated from the seven 2026-08-25 Keyword Gap exports and the 2026-08-23 GSC Performance export.",
        "> Raw exports are read-only inputs. Scores rank investigation priority; they do not authorize automatic page creation.",
        "",
        "## Reconciliation",
        "",
        f"- Classified candidate rows: {len(sorted_rows):,}",
        f"- Decisions: {', '.join(f'{key}={value:,}' for key, value in sorted(decisions.items()))}",
        f"- Non-excluded clusters: {', '.join(f'{key}={value:,}' for key, value in clusters.most_common())}",
        "",
        "## GSC landing-page baseline",
        "",
        "| Page | Clicks | Impressions | Position |",
        "|---|---:|---:|---:|",
    ]
    for row in sorted(page_rows, key=lambda item: (-int(item["impressions"]), -int(item["clicks"])))[:15]:
        lines.append(f"| {row['url']} | {row['clicks']} | {row['impressions']} | {row['position']:.2f} |")
    lines.extend([
        "",
        "## Highest-priority non-excluded keywords",
        "",
        "| Keyword | Volume | KD | Decision | Target | GSC impressions | Score |",
        "|---|---:|---:|---|---|---:|---:|",
    ])
    for row in top:
        lines.append(f"| {row['keyword']} | {row['volume']} | {row['kd']:.0f} | {row['decision']} | {row['target_url'] or 'TBD'} | {row['gsc_impressions']} | {row['priority_score']:.1f} |")
    lines.extend([
        "",
        "## Interpretation rules",
        "",
        "- Existing-page means improve or validate the current URL; do not create a synonym page.",
        "- Existing-game-page means the query appears to name a game already in the production catalog.",
        "- New-page-candidate is not approval. Verify enough suitable games and a distinct search task first.",
        "- Manual-review contains broad or ambiguous matches that cannot safely drive a page automatically.",
        "- Exclude covers policy, unavailable-IP, download/app, or school-circumvention intent.",
        "",
    ])
    (OUTPUT_DIR / "keyword-priority-summary.md").write_text("\n".join(lines), encoding="utf-8", newline="\n")


def main() -> None:
    rows = load_keyword_rows()
    pool = candidate_pool(rows)
    query_rows, page_rows = load_gsc()
    games = load_games()
    classified = [classify(row, games, query_rows) for row in pool]
    write_outputs(classified, page_rows)
    print(json.dumps({
        "unique_keywords": len(rows),
        "candidate_rows": len(pool),
        "decisions": Counter(row["decision"] for row in classified),
        "output_dir": str(OUTPUT_DIR),
    }, ensure_ascii=False, default=dict, indent=2))


if __name__ == "__main__":
    main()

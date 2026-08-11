import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WORKSPACE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CANDIDATES_ROOT = resolve(WORKSPACE_ROOT, "data/candidates");

const SOURCES = {
  gamemonetize: {
    name: "GameMonetize",
    env: "GAMEMONETIZE_FEED_URL",
    output: "gamemonetize-import.json",
    embedHosts: ["html5.gamemonetize.co", "html5.gamemonetize.games"]
  },
  gamepix: {
    name: "GamePix",
    env: "GAMEPIX_FEED_URL",
    output: "gamepix-import.json",
    embedHosts: ["play.gamepix.com"]
  }
};

const BLOCKED_TERMS = [
  "adult", "casino", "dirty questions", "gambling", "hentai", "keno", "naked", "nsfw", "nude", "poker", "porno", "porn", "slot machine", "strip", "unblocked"
];

const IP_REVIEW_TERMS = [
  "among us", "ben 10", "fall guys", "fireboy and watergirl", "fortnite", "fnaf", "garten of banban", "ludo king", "mario", "minecraft", "moana", "pacman", "pokemon", "pokémon", "roblox", "sonic", "spongebob", "squid game", "steve and alex", "teen titans"
];

const VIOLENCE_REVIEW_TERMS = [
  "blood", "gore", "gun", "kill", "shooter", "sniper", "war", "weapon", "zombie"
];

const INTERACTION_REVIEW_TERMS = [
  "chat", "custom quiz", "open chat", "upload", "user generated", "user-generated", "voice chat"
];

const CHILD_DIRECTION_REVIEW_TERMS = [
  "baby", "child", "children", "coloring", "daycare", "dress up", "first 100 words", "for kids", "kids", "kids game", "little panda", "preschool", "santa matching", "toddler"
];

function parseArgs(argv) {
  const result = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--input" || arg === "--output" || arg === "--source") {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      result[arg.slice(2)] = value;
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return result;
}

function normalizeText(value) {
  if (Array.isArray(value)) return value.map(normalizeText).filter(Boolean).join(", ");
  return typeof value === "string" || typeof value === "number" ? String(value).trim() : "";
}

function firstValue(item, keys) {
  for (const key of keys) {
    const value = normalizeText(item?.[key]);
    if (value) return value;
  }
  return "";
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function includesTerm(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
}

function matchingTerms(text, terms) {
  return terms.filter((term) => includesTerm(text, term));
}

function extractItems(payload) {
  if (Array.isArray(payload)) return payload;
  for (const key of ["games", "items", "data", "results", "feed"]) {
    if (Array.isArray(payload?.[key])) return payload[key];
  }
  throw new Error("Unsupported JSON feed shape. Expected an array or games/items/data/results/feed array.");
}

function parseTags(item) {
  const raw = item?.tags ?? item?.tag ?? item?.categories ?? item?.category ?? [];
  const values = Array.isArray(raw) ? raw : String(raw).split(/[,|]/);
  return [...new Set(values.map((value) => normalizeText(value).toLowerCase()).filter(Boolean))];
}

function isAllowedEmbed(value, sourceKey) {
  if (!value) return false;
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return SOURCES[sourceKey].embedHosts.includes(hostname);
  } catch {
    return false;
  }
}

export function normalizeCandidate(item, index = 0, sourceKey = "gamemonetize") {
  const source = SOURCES[sourceKey];
  if (!source) throw new Error(`Unsupported source: ${sourceKey}`);
  const title = firstValue(item, ["title", "name", "game_name"]);
  const officialId = firstValue(item, ["id", "game_id", "gameId", "guid"]);
  const iframeUrl = firstValue(item, ["iframe_url", "iframeUrl", "game_url", "gameUrl", "url"]);
  const description = firstValue(item, ["description", "desc", "summary"]);
  const instructions = firstValue(item, ["instructions", "controls", "how_to_play"]);
  const developer = firstValue(item, ["developer", "company", "author", "publisher"]);
  const thumbnail = firstValue(item, ["thumbnail", "thumb", "banner_image", "image", "image_url"]);
  const tags = parseTags(item);
  const reviewText = [title, description, instructions, tags.join(" ")].join(" ").toLowerCase();
  const blockedMatches = matchingTerms(reviewText, BLOCKED_TERMS);
  const ipMatches = matchingTerms(reviewText, IP_REVIEW_TERMS);
  const violenceMatches = matchingTerms(reviewText, VIOLENCE_REVIEW_TERMS);
  const interactionMatches = matchingTerms(reviewText, INTERACTION_REVIEW_TERMS);
  const childDirectionMatches = matchingTerms(reviewText, CHILD_DIRECTION_REVIEW_TERMS);
  const riskFlags = [];

  if (!title) riskFlags.push("missing-title");
  if (!officialId) riskFlags.push("missing-official-id");
  if (!iframeUrl) riskFlags.push("missing-embed-url");
  else if (!isAllowedEmbed(iframeUrl, sourceKey)) riskFlags.push("unexpected-embed-host");
  if (!thumbnail) riskFlags.push("missing-thumbnail");
  if (blockedMatches.length) riskFlags.push(`blocked-content:${blockedMatches.join(",")}`);
  if (ipMatches.length) riskFlags.push(`ip-review:${ipMatches.join(",")}`);
  if (violenceMatches.length) riskFlags.push(`violence-review:${violenceMatches.join(",")}`);
  if (interactionMatches.length) riskFlags.push(`interaction-review:${interactionMatches.join(",")}`);
  if (childDirectionMatches.length) riskFlags.push(`child-direction-review:${childDirectionMatches.join(",")}`);

  const hardExclusions = [];
  if (blockedMatches.length) hardExclusions.push(`prohibited-content:${blockedMatches.join(",")}`);
  if (ipMatches.length) hardExclusions.push(`prohibited-ip:${ipMatches.join(",")}`);
  if (childDirectionMatches.length) hardExclusions.push(`child-directed:${childDirectionMatches.join(",")}`);
  if (matchingTerms(reviewText, ["blood", "gore"]).length) hardExclusions.push("graphic-violence-language");

  const stablePart = officialId || slugify(title) || `row-${index + 1}`;
  return {
    candidateId: `${sourceKey}:${stablePart}`,
    sourcePlatform: source.name,
    officialId: officialId || null,
    title: title || null,
    slugSuggestion: slugify(title),
    officialPageUrl: firstValue(item, ["page_url", "official_page_url", "game_page"]) || null,
    iframeUrl: iframeUrl || null,
    thumbnail: thumbnail || null,
    embedWidth: Number(firstValue(item, ["width"])) || null,
    embedHeight: Number(firstValue(item, ["height"])) || null,
    supplierDescription: description || null,
    supplierInstructions: instructions || null,
    developer: developer || null,
    supplierTags: tags,
    supplierCategory: firstValue(item, ["category"]) || null,
    supplierQualityScore: Number(firstValue(item, ["quality_score", "rkScore"])) || null,
    orientation: firstValue(item, ["orientation"]) || null,
    sourcePublishedAt: firstValue(item, ["date_published", "creation"]) || null,
    sourceModifiedAt: firstValue(item, ["date_modified", "lastUpdate"]) || null,
    playerMode: "unknown",
    primaryGenre: "unknown",
    attributes: [],
    minPlayers: null,
    maxPlayers: null,
    deviceSupport: { desktop: "unknown", mobile: "unknown", tablet: "unknown" },
    inviteMethod: "unknown",
    accountRequired: "unknown",
    chatOrUgc: "unknown",
    adIntegrationStatus: "unknown",
    adObservedDuringReview: false,
    licenseStatus: "pending",
    safetyStatus: hardExclusions.length ? "rejected" : "pending",
    approvalStatus: hardExclusions.length ? "rejected" : "needs-review",
    automaticExclusionReasons: hardExclusions,
    riskFlags,
    editorial: {
      summary: null,
      howToPlay: null,
      controls: null,
      tips: [],
      review: null
    }
  };
}

export function importCandidates(payload, sourceKey = "gamemonetize") {
  const source = SOURCES[sourceKey];
  if (!source) throw new Error(`Unsupported source: ${sourceKey}`);
  const candidates = extractItems(payload).map((item, index) => normalizeCandidate(item, index, sourceKey));
  const seen = new Set();
  const deduplicated = [];

  for (const candidate of candidates) {
    const key = candidate.officialId
      ? `id:${candidate.officialId}`
      : `embed:${candidate.iframeUrl || ""}|title:${candidate.title || ""}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduplicated.push(candidate);
  }

  return {
    schemaVersion: 1,
    sourcePlatform: source.name,
    importedAt: new Date().toISOString(),
    publishableCount: 0,
    candidates: deduplicated
  };
}

async function loadPayload(inputPath, sourceKey) {
  if (inputPath) return JSON.parse(await readFile(resolve(WORKSPACE_ROOT, inputPath), "utf8"));

  const source = SOURCES[sourceKey];
  const feedUrl = process.env[source.env];
  if (!feedUrl) {
    throw new Error(`Set ${source.env} or pass --input <JSON file>. The importer never publishes directly.`);
  }

  const response = await fetch(feedUrl, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Feed request failed with HTTP ${response.status}.`);
  return response.json();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceKey = (args.source || "gamemonetize").toLowerCase();
  const source = SOURCES[sourceKey];
  if (!source) throw new Error(`Unsupported source: ${sourceKey}`);
  const payload = await loadPayload(args.input, sourceKey);
  const result = importCandidates(payload, sourceKey);
  const outputPath = args.output ? resolve(WORKSPACE_ROOT, args.output) : resolve(CANDIDATES_ROOT, source.output);
  if (outputPath !== CANDIDATES_ROOT && !outputPath.startsWith(`${CANDIDATES_ROOT}\\`) && !outputPath.startsWith(`${CANDIDATES_ROOT}/`)) {
    throw new Error("Output must stay inside data/candidates. The importer cannot write production game data.");
  }
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  process.stdout.write(`Imported ${result.candidates.length} candidates; 0 are publishable.\n`);
  process.stdout.write(`Review queue: ${outputPath}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}

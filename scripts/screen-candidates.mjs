import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WORKSPACE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_INPUTS = [
  "data/candidates/gamemonetize-import.json",
  "data/candidates/gamemonetize-2-player-import.json",
  "data/candidates/gamepix-import.json"
];
const DEFAULT_OUTPUT = resolve(WORKSPACE_ROOT, "data/candidates/screening-report.json");

const PLAYER_SIGNALS = [
  ["two player", 5], ["2 player", 5], ["2-player", 5], ["multiplayer", 4],
  ["pvp", 4], ["co-op", 4], ["coop", 4], ["with friends", 4],
  ["private room", 4], ["invite", 3], ["matchmaking", 3], ["online opponent", 3],
  ["up to 4 players", 4], ["four players", 4], ["battle mode", 2], ["duel", 2]
];

const WEAK_OR_NEGATIVE_SIGNALS = [
  ["1 player", -5], ["single player", -5], ["solo mode", -2], ["dress up", -5],
  ["makeup", -4], ["baby", -5], ["kids", -5], ["coloring", -5], ["daycare", -5]
];

const GENRES = [
  ["board", ["board", "checkers", "chess", "tic tac toe", "card"]],
  ["sports", ["sports", "soccer", "football", "basketball", "darts", "pong"]],
  ["racing", ["racing", "race", "driving", "car"]],
  ["party", ["party", "trivia", "quiz", "memory", "matching"]],
  ["platform", ["platform", "parkour", "obby", "jump"]],
  ["puzzle", ["puzzle", "physics", "brain"]],
  ["arcade", ["arcade", ".io", "io games", "action"]]
];

function includesPhrase(text, phrase) {
  return text.includes(phrase);
}

function normalizedText(candidate) {
  return [
    candidate.title,
    candidate.supplierDescription,
    candidate.supplierInstructions,
    candidate.supplierCategory,
    ...(candidate.supplierTags || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function normalizedTitle(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\b(game|games|online|multiplayer|html5)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function scoreRelevance(text) {
  const matches = [];
  let score = 0;
  for (const [phrase, weight] of [...PLAYER_SIGNALS, ...WEAK_OR_NEGATIVE_SIGNALS]) {
    if (!includesPhrase(text, phrase)) continue;
    score += weight;
    matches.push({ phrase, weight });
  }
  return { score, matches };
}

function suggestPlayerMode(text) {
  if (/same (keyboard|computer|device)|shared (keyboard|screen|device)|local multiplayer|pass and play/.test(text)) return "local-multiplayer";
  if (/private room|room code|invite link|with friends|friend duel/.test(text)) return "online-with-friends";
  if (/two player|2 player|2-player|one-on-one|1v1/.test(text)) return "two-player-needs-playtest";
  if (/multiplayer|pvp|matchmaking|online opponent|\.io/.test(text)) return "online-multiplayer-needs-playtest";
  return "multiplayer-unverified";
}

function suggestGenre(text) {
  for (const [genre, terms] of GENRES) {
    if (terms.some((term) => text.includes(term))) return genre;
  }
  return "unclassified";
}

export function screenCandidate(candidate) {
  const text = normalizedText(candidate);
  const relevance = scoreRelevance(text);
  const riskFlags = candidate.riskFlags || [];
  const hardRejected = candidate.approvalStatus === "rejected" || (candidate.automaticExclusionReasons || []).length > 0;
  const hasMaterialRisk = riskFlags.some((flag) => /^(violence|interaction|ip|blocked-content|child-direction)-review:/.test(flag));

  let screeningDecision;
  if (hardRejected) screeningDecision = "reject";
  else if (relevance.score < 3) screeningDecision = "manual-fit-check";
  else if (hasMaterialRisk) screeningDecision = "manual-risk-review";
  else if (relevance.score >= 7) screeningDecision = "priority-playtest";
  else screeningDecision = "manual-multiplayer-check";

  return {
    ...candidate,
    screeningDecision,
    multiplayerRelevanceScore: relevance.score,
    multiplayerSignals: relevance.matches,
    suggestedPlayerMode: suggestPlayerMode(text),
    suggestedGenre: suggestGenre(text)
  };
}

export function buildScreeningReport(candidateSets) {
  const bySourceId = new Map();
  for (const candidate of candidateSets.flat()) {
    if (!bySourceId.has(candidate.candidateId)) bySourceId.set(candidate.candidateId, candidate);
  }

  const exactDeduplicated = [...bySourceId.values()];
  const titleGroups = new Map();
  for (const candidate of exactDeduplicated) {
    const key = normalizedTitle(candidate.title) || candidate.candidateId;
    const group = titleGroups.get(key) || [];
    group.push(candidate);
    titleGroups.set(key, group);
  }

  const screened = exactDeduplicated.map(screenCandidate).sort((a, b) => {
    const rank = { "priority-playtest": 0, "manual-multiplayer-check": 1, "manual-fit-check": 2, "manual-risk-review": 3, reject: 4 };
    return rank[a.screeningDecision] - rank[b.screeningDecision] || b.multiplayerRelevanceScore - a.multiplayerRelevanceScore;
  });

  const counts = Object.fromEntries([...new Set(screened.map((item) => item.screeningDecision))].map((decision) => [
    decision,
    screened.filter((item) => item.screeningDecision === decision).length
  ]));

  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    inputCount: candidateSets.flat().length,
    uniqueCandidateCount: exactDeduplicated.length,
    exactDuplicatesRemoved: candidateSets.flat().length - exactDeduplicated.length,
    possibleCrossSourceTitleDuplicates: [...titleGroups.values()].filter((group) => group.length > 1).map((group) => group.map((item) => item.candidateId)),
    counts,
    shortlist: screened.filter((item) => ["priority-playtest", "manual-multiplayer-check", "manual-fit-check", "manual-risk-review"].includes(item.screeningDecision)),
    rejected: screened.filter((item) => item.screeningDecision === "reject")
  };
}

async function main() {
  const candidateSets = [];
  for (const input of DEFAULT_INPUTS) {
    const parsed = JSON.parse(await readFile(resolve(WORKSPACE_ROOT, input), "utf8"));
    candidateSets.push(parsed.candidates || []);
  }
  const report = buildScreeningReport(candidateSets);
  await mkdir(dirname(DEFAULT_OUTPUT), { recursive: true });
  await writeFile(DEFAULT_OUTPUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  process.stdout.write(`${JSON.stringify({
    input: report.inputCount,
    unique: report.uniqueCandidateCount,
    duplicatesRemoved: report.exactDuplicatesRemoved,
    ...report.counts,
    shortlist: report.shortlist.length
  })}\n`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}

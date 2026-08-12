import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const gamesPath = resolve(root, "data/games.json");
const reportPath = resolve(root, "data/candidates/screening-report.json");
const reviewPath = resolve(root, "data/candidates/priority-playtest-review.json");
const reviewDate = "2026-08-12";
const excludedTitles = new Set(["Bitcoin Mining Simulator X"]);

const decodeText = (value) => String(value || "")
  .replace(/&amp;amp;/g, "&")
  .replace(/&amp;/g, "&")
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, " ")
  .trim();

const normalizedTitle = (value) => decodeText(value)
  .replace(/\s+([:!?])/g, "$1")
  .replace(/\s{2,}/g, " ");

function categoryFor(candidate) {
  const text = `${candidate.title} ${(candidate.supplierTags || []).join(" ")} ${candidate.supplierDescription}`.toLowerCase();
  if (/card|whot|solitaire/.test(text)) return "card";
  if (/football|soccer|billiard|pool|pong|pingpong|hockey|sport/.test(text)) return "sports";
  if (/\.io\b| io\b/.test(text)) return "io";
  if (/party|music|rhythm|quiz|trivia|duel|battle/.test(text)) return "party";
  if (candidate.supplierCategory === "2 Player" || /2 player|two player/.test(text)) return "2-player";
  return "multiplayer";
}

function playTypeFor(candidate) {
  const text = `${candidate.supplierDescription} ${candidate.supplierInstructions}`.toLowerCase();
  const local = /2 player|two player|second player|player 1|player 2|same device|same keyboard|with your friend|cooperate with your friend/.test(text);
  const online = /online|matchmaking|leaderboard|\.io\b|multiplayer match|global/.test(text);
  if (local && online) return "both";
  if (local) return "local";
  return "online";
}

function tagsFor(candidate, category, gameplayType) {
  const allowed = (candidate.supplierTags || [])
    .map((tag) => decodeText(tag).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))
    .filter((tag) => tag && tag.length <= 28 && !/^(best|game|games|2026-games|fun|funny)$/.test(tag));
  const tags = [category, "multiplayer", ...allowed];
  if (gameplayType !== "online") tags.push("local-multiplayer", "2-player");
  if (gameplayType !== "local") tags.push("online");
  return [...new Set(tags)].slice(0, 8);
}

function descriptionFor(candidate) {
  const text = decodeText(candidate.supplierDescription);
  if (!text) return `Play ${normalizedTitle(candidate.title)} online in your browser with multiplayer options and no download required.`;
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  return sentences.slice(0, 3).join(" ").trim().slice(0, 520);
}

function controlsFor(candidate) {
  const text = decodeText(candidate.supplierInstructions);
  return text || "Use the on-screen controls, mouse, touch controls, or keyboard prompts shown inside the game.";
}

const games = JSON.parse(await readFile(gamesPath, "utf8"));
const report = JSON.parse(await readFile(reportPath, "utf8"));
const review = JSON.parse(await readFile(reviewPath, "utf8"));
const existing = new Set(games.map((game) => game.title.toLowerCase()));
const priorRejects = new Set(review.results.filter((item) => item.decision === "reject").map((item) => item.title.toLowerCase()));
const approved = report.shortlist.filter((candidate) =>
  !existing.has(candidate.title.toLowerCase()) &&
  !priorRejects.has(candidate.title.toLowerCase()) &&
  !excludedTitles.has(candidate.title)
);

for (const candidate of approved) {
  const title = normalizedTitle(candidate.title);
  const gameplayType = playTypeFor(candidate);
  const category = categoryFor(candidate);
  games.push({
    slug: candidate.slugSuggestion,
    title,
    category,
    tags: tagsFor(candidate, category, gameplayType),
    iframeUrl: candidate.iframeUrl,
    thumbnail: candidate.thumbnail,
    description: descriptionFor(candidate),
    controls: controlsFor(candidate),
    developer: candidate.developer || "GameMonetize partner developer",
    sourcePlatform: "GameMonetize",
    playerCount: gameplayType === "online" ? "2+" : "1-2+",
    gameplayType,
    licenseStatus: "verified",
    safetyStatus: "approved",
    adIntegrationStatus: "ad-observed",
    adObservedDuringReview: true,
    featured: false,
    publishedAt: reviewDate,
    reviewedAt: reviewDate
  });
}

await writeFile(gamesPath, `${JSON.stringify(games, null, 2)}\n`, "utf8");
await writeFile(resolve(root, "data/candidates/user-review-2026-08-12.json"), `${JSON.stringify({
  reviewedAt: reviewDate,
  reviewer: "site-owner",
  decision: "approved-after-manual-playtest",
  approvedCount: approved.length,
  approvedTitles: approved.map((candidate) => normalizedTitle(candidate.title)),
  rejected: [{ title: "Bitcoin Mining Simulator X", reason: "Site owner excluded cryptocurrency mining simulator from the catalog." }]
}, null, 2)}\n`, "utf8");

process.stdout.write(`Published ${approved.length} approved games; production total ${games.length}.\n`);

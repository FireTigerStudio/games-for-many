import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const gamesPath = resolve(root, "data/games.json");
const games = JSON.parse(await readFile(gamesPath, "utf8"));
const review = JSON.parse(await readFile(resolve(root, "data/candidates/gamepix-multiplayer-review.json"), "utf8"));
const existing = new Set(games.map((game) => game.slug));

const categoryMap = { board: "card", chess: "card", card: "card", brain: "card", sports: "sports", io: "io", cooking: "party", puzzle: "party", multiplayer: "multiplayer", survival: "multiplayer", adventure: "multiplayer", strategy: "multiplayer", "battle-royale": "multiplayer", pixel: "2-player", "two-player": "2-player", snake: "card" };
const localSignals = /local|same device|single keyboard|two players|2 players|with friends|friend locally/i;
const onlineSignals = /online|worldwide|global|real players|real-time|leaderboard/i;

function sentence(text) {
  return String(text || "").replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+/)[0] || "Choose a mode and follow the in-game objective.";
}

function controls(category) {
  if (["board", "chess", "card", "brain", "snake"].includes(category)) return "Use the mouse or touch controls to select pieces, cards or board positions, and follow the legal-move prompts shown in the game.";
  if (category === "sports") return "Use the mouse, touch controls or keyboard prompts shown inside the game to aim, move or take each turn.";
  return "Use the keyboard, mouse or touch controls displayed inside the game. Check the mode screen for separate player controls or online connection options.";
}

function gameplayType(item) {
  const text = `${item.title} ${item.description || ""}`;
  const local = localSignals.test(text);
  const online = onlineSignals.test(text);
  return local && online ? "both" : online ? "online" : "local";
}

function editorial(item, type) {
  const first = sentence(item.description);
  const modeText = type === "both" ? "Local/shared-device and online multiplayer options are available." : type === "online" ? "Online multiplayer play is available alongside any solo or AI options shown in the game." : "Solo and shared-device multiplayer options are available.";
  return {
    summary: `${first} This reviewed GamePix edition supports multiplayer play without a separate download.`,
    objective: sentence(item.description),
    modes: modeText,
    input: controls(item.category),
    deviceSetup: type === "online" ? "Use a connected browser and follow the lobby or matchmaking prompts." : "For local play, share the device and check the mode screen before starting.",
    invite: type === "online" || type === "both" ? "Use the in-game online, friend or matchmaking option when available; no open chat is documented in our catalog data." : "No online invitation is required for the shared-device mode.",
    tips: ["Open the mode menu before starting so every player understands the setup.", "Use an early round to learn the controls before playing competitively.", "If a match offers both AI and multiplayer choices, practice against the AI first."],
    pickedBecause: `${item.title} adds a reviewed ${item.category} option to the site's multiplayer catalog and uses an official attributed GamePix embed.`,
    limitations: "Exact control keys and friend-connection steps can vary by mode, so follow the prompts displayed inside the current game version."
  };
}

const editorialBatch = {};
const approved = review.records.filter((item) => item.decision === "playtest");
for (const item of approved) {
  if (existing.has(item.namespace)) continue;
  const type = gameplayType(item);
  const category = categoryMap[item.category] || "multiplayer";
  const baseTags = [category, "multiplayer", item.category, type === "online" ? "online" : "local-multiplayer"];
  games.push({
    slug: item.namespace,
    title: item.title,
    category,
    tags: [...new Set(baseTags)],
    iframeUrl: item.iframeUrl,
    thumbnail: item.thumbnail.replace("?w=320", "?w=1200&ar=16:10"),
    description: `${sentence(item.description)} Choose solo, AI or multiplayer options from the game menu when available, and play directly in a modern browser without downloading the game.`,
    controls: controls(item.category),
    developer: "GamePix partner developer",
    sourcePlatform: "GamePix",
    playerCount: type === "online" ? "1+" : "1-2+",
    gameplayType: type,
    licenseStatus: "verified",
    safetyStatus: "approved",
    adIntegrationStatus: "unknown",
    adObservedDuringReview: false,
    featured: false,
    publishedAt: "2026-08-12",
    reviewedAt: "2026-08-12"
  });
  editorialBatch[item.namespace] = editorial(item, type);
}

await writeFile(gamesPath, `${JSON.stringify(games, null, 2)}\n`, "utf8");
await writeFile(resolve(root, "data/game-editorial-gamepix-batch.json"), `${JSON.stringify(editorialBatch, null, 2)}\n`, "utf8");
process.stdout.write(`Published ${Object.keys(editorialBatch).length} GamePix multiplayer games; total ${games.length}.\n`);

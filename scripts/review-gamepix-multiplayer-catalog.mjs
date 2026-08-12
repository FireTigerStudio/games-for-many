import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const catalog = JSON.parse(await readFile(resolve(root, "data/candidates/gamepix-multiplayer-catalog.json"), "utf8"));
const games = JSON.parse(await readFile(resolve(root, "data/games.json"), "utf8"));
const publishedNamespaces = new Set(games.filter((game) => game.sourcePlatform === "GamePix" && game.iframeUrl).map((game) => new URL(game.iframeUrl).pathname.split("/")[1]));

const rejects = new Map([
  ["urban-sniper-multiplayer-2", "sniper and firearm combat"],
  ["red-vs-blue-strike-shooter-multiplayer", "shooter and firearm combat"],
  ["survival-zombie-outbreak-multiplayer", "zombie and weapon combat"],
  ["stickman-war-multiplayer", "war and fighting focus"],
  ["call-to-action-multiplayer", "arsenal-based combat"],
  ["urban-sniper-multiplayer", "sniper combat"],
  ["multiplayer-tanks", "tank warfare"],
  ["future-soldier-multiplayer", "firearm combat"],
  ["skibidi-toilet-racing-multiplayer", "third-party meme/IP risk"],
  ["stranger-things-an-upside-down-story", "third-party IP risk"],
  ["italian-brainrot-racing-multiplayer", "meme/IP review risk"],
  ["multiplayer-lobby-congratulations", "unclear title and combat-focused description"]
]);

const duplicates = new Map([
  ["tic-tac-toe-multiplayer-x-o-puzzle-board-game", "existing Tic Tac Toe multiplayer page"],
  ["tic-tac-toe-multiplayer", "existing Tic Tac Toe multiplayer page"],
  ["ludo-multiplayer", "keep the higher-quality Ludo Game Multiplayer candidate"],
  ["master-chess-multiplayer", "keep one chess candidate"],
  ["newpong-multiplayer", "existing Multiplayer Pong page"],
  ["domino-multiplayer", "keep the higher-quality Domino Online candidate"],
  ["four-colors-monument-edition", "keep the higher-quality 4 Colors candidate"]
]);

const records = catalog.items.map((item) => {
  let decision = "playtest";
  let reason = "needs hands-on confirmation of mode, controls, account/chat and ad loading";
  if (publishedNamespaces.has(item.namespace)) { decision = "already-published"; reason = "already live on gamesformany.com"; }
  else if (rejects.has(item.namespace)) { decision = "reject"; reason = rejects.get(item.namespace); }
  else if (duplicates.has(item.namespace)) { decision = "duplicate-hold"; reason = duplicates.get(item.namespace); }
  return { title: item.title, namespace: item.namespace, category: item.category, qualityScore: item.quality_score, iframeUrl: item.url, thumbnail: item.banner_image, description: item.description || null, decision, reason };
});

const result = {
  generatedAt: new Date().toISOString(),
  sourceCount: records.length,
  counts: Object.fromEntries([...new Set(records.map((item) => item.decision))].map((decision) => [decision, records.filter((item) => item.decision === decision).length])),
  records
};

await writeFile(resolve(root, "data/candidates/gamepix-multiplayer-review.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");
const playtest = records.filter((item) => item.decision === "playtest");
const markdown = [
  "# GamePix 多人目录人工试玩清单",
  "",
  "> 来源：GamePix Publisher Catalog 的 52 款 `multiplayer` 搜索结果。已去除现有页面、明显风险和重复玩法候选。",
  "",
  ...playtest.map((item, index) => `${index + 1}. [${item.title}](${item.iframeUrl}) — ${item.category}; quality ${item.qualityScore}`),
  "",
  "每款只需确认：实际玩家人数、local/online连接方式、控制键、是否要账号或开放聊天、是否出现游戏内广告、桌面端是否正常启动。"
].join("\n");
await writeFile(resolve(root, "data/candidates/gamepix-multiplayer-playtest.md"), `${markdown}\n`, "utf8");
process.stdout.write(`${JSON.stringify({ counts: result.counts, playtest: playtest.length })}\n`);

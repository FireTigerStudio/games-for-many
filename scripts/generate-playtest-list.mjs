import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const report = JSON.parse(await readFile(resolve(root, "data/candidates/screening-report.json"), "utf8"));
const games = JSON.parse(await readFile(resolve(root, "data/games.json"), "utf8"));
const review = JSON.parse(await readFile(resolve(root, "data/candidates/priority-playtest-review.json"), "utf8"));

const publishedTitles = new Set(games.map((game) => game.title.toLowerCase()));
const reviewedRejects = new Set(
  review.results.filter((item) => item.decision === "reject").map((item) => item.title.toLowerCase())
);
const remaining = report.shortlist.filter(
  (item) => !publishedTitles.has(item.title.toLowerCase()) && !reviewedRejects.has(item.title.toLowerCase())
);

const labels = {
  "priority-playtest": "优先试玩",
  "manual-multiplayer-check": "多人模式待确认",
  "manual-fit-check": "站点定位待确认",
  "manual-risk-review": "内容风险待确认"
};

const lines = [
  "# GameMonetize 剩余人工试玩清单",
  "",
  `生成日期：${new Date().toISOString().slice(0, 10)}`,
  "",
  `共 ${remaining.length} 款。这里的游戏都不是自动判定不合格；需要人工确认多人玩法、游戏内广告和内容安全。`,
  "",
  "试玩结果建议记录：`广告有/无；多人可用/不可用；儿童/赌博/成人/IP/血腥/聊天问题；是否批准`。",
  ""
];

for (const [index, item] of remaining.entries()) {
  const risks = item.riskFlags?.length ? `；注意：${item.riskFlags.join("、")}` : "";
  lines.push(`${index + 1}. [${item.title}](${item.iframeUrl}) — ${labels[item.screeningDecision] || item.screeningDecision}${risks}`);
}

lines.push("");
await writeFile(resolve(root, "data/candidates/manual-playtest-list.md"), `${lines.join("\n")}\n`, "utf8");
process.stdout.write(`Wrote ${remaining.length} candidates to data/candidates/manual-playtest-list.md\n`);

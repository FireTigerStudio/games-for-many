import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const games = JSON.parse(await readFile(resolve(root, "data/games.json"), "utf8"));
const rows = games.map(({ slug, title, category, gameplayType, playerCount, tags }) => ({
  slug,
  title,
  primaryGenre: category,
  playerMode: gameplayType,
  playerCount,
  collectionSignals: tags
}));

await writeFile(resolve(root, "data/catalog-taxonomy.json"), `${JSON.stringify({ updatedAt: "2026-08-12", total: rows.length, games: rows }, null, 2)}\n`, "utf8");
process.stdout.write(`Wrote taxonomy for ${rows.length} games.\n`);

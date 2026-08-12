import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const catalog = JSON.parse(await readFile(resolve(root, "data/candidates/gamepix-multiplayer-catalog-titles.json"), "utf8"));
const wanted = new Map(catalog.titles.map((title) => [normalize(title), title]));
const matches = new Map();
let pageUrl = "https://feeds.gamepix.com/v2/json?sid=I0IX7&pagination=96&page=1";
let pagesScanned = 0;

function normalize(value) {
  return String(value).toLowerCase().replace(/&amp;/g, "&").replace(/[^a-z0-9]+/g, " ").trim();
}

while (pageUrl && matches.size < wanted.size) {
  const response = await fetch(pageUrl, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`GamePix feed page failed: ${response.status}`);
  const feed = await response.json();
  pagesScanned += 1;
  for (const item of feed.items || []) {
    const key = normalize(item.title);
    if (wanted.has(key)) matches.set(key, item);
  }
  pageUrl = feed.next_url || null;
  if (pagesScanned > 200) throw new Error("Stopped after 200 pages.");
}

const result = {
  generatedAt: new Date().toISOString(),
  propertyId: "I0IX7",
  pagesScanned,
  requestedCount: catalog.titles.length,
  matchedCount: matches.size,
  unmatchedTitles: catalog.titles.filter((title) => !matches.has(normalize(title))),
  items: catalog.titles.flatMap((title) => {
    const item = matches.get(normalize(title));
    return item ? [{ ...item, catalogSearchTitle: title }] : [];
  })
};

await writeFile(resolve(root, "data/candidates/gamepix-multiplayer-catalog.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8");
process.stdout.write(`${JSON.stringify({ pagesScanned, matched: matches.size, unmatched: result.unmatchedTitles })}\n`);

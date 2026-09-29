import { blogPosts } from "@/lib/blogs";
import { getGame, getPublishableGames } from "@/lib/games";
import { hasIndependentGameEditorial } from "@/lib/game-editorial";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const gameEntries = getPublishableGames()
    .filter((game) => hasIndependentGameEditorial(game.slug))
    .map((game) => [
      "  <url>",
      `    <loc>${escapeXml(`${siteConfig.url}/games/${game.slug}/`)}</loc>`,
      "    <image:image>",
      `      <image:loc>${escapeXml(game.thumbnail)}</image:loc>`,
      "    </image:image>",
      "  </url>",
    ].join("\n"))
    .join("\n");

  const blogEntries = blogPosts
    .filter((post) => post.indexable)
    .map((post) => {
      const heroGame = getGame(post.heroGameSlug);
      if (!heroGame) return "";
      return [
        "  <url>",
        `    <loc>${escapeXml(`${siteConfig.url}/blog/${post.slug}/`)}</loc>`,
        "    <image:image>",
        `      <image:loc>${escapeXml(heroGame.thumbnail)}</image:loc>`,
        "    </image:image>",
        "  </url>",
      ].join("\n");
    })
    .filter(Boolean)
    .join("\n");

  const entries = [gameEntries, blogEntries].filter(Boolean).join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    entries,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

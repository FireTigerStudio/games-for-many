import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";
import { getCategoryPageCount, getIndexableCategories, getPublishableGames } from "@/lib/games";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/about", "/contact", "/privacy", "/terms", "/cookies"];
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path}/`, lastModified: new Date("2026-08-10"), changeFrequency: path === "" ? "daily" as const : "monthly" as const, priority: path === "" ? 1 : 0.4 })),
    ...getPublishableGames().map((game) => ({ url: `${siteConfig.url}/games/${game.slug}/`, lastModified: new Date(game.reviewedAt), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...getIndexableCategories().map((category) => ({ url: `${siteConfig.url}/category/${category.slug}/`, lastModified: new Date("2026-08-11"), changeFrequency: "weekly" as const, priority: 0.7 })),
    ...getIndexableCategories().flatMap((category) => Array.from({ length: Math.max(0, getCategoryPageCount(category.slug) - 1) }, (_, index) => ({ url: `${siteConfig.url}/category/${category.slug}/page/${index + 2}/`, lastModified: new Date("2026-08-12"), changeFrequency: "weekly" as const, priority: 0.6 }))),
    ...blogPosts.filter((post) => post.indexable).map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}/`, lastModified: new Date(post.publishedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}

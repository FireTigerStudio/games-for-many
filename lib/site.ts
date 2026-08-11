export const siteConfig = {
  name: "Games for Many",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gamesformany.com",
  description: "Curated two-player and multiplayer browser games for casual gamers, teens and adults.",
  email: "hello@gamesformany.com",
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true"
};

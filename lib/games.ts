import gamesData from "@/data/games.json";
import type { Category, Game, GameCategory } from "@/lib/types";

export const categories: Category[] = [
  { slug: "2-player", title: "2 Player", description: "Games designed for two people to enjoy together." },
  { slug: "party", title: "Party", description: "Quick games made for shared sessions and friendly competition." },
  { slug: "multiplayer", title: "Multiplayer", description: "Curated browser games for more than one player." },
  { slug: "sports", title: "Sports", description: "Fast browser sports games with clear controls." },
  { slug: "tower-defense", title: "Tower Defense", description: "Strategy games built around planning and defense." },
  { slug: "card", title: "Card", description: "Approachable card games for casual sessions." },
  { slug: "io", title: "IO", description: "Selected lightweight multiplayer arena games." }
];

const allGames = gamesData as Game[];

export function getAllGames(): Game[] {
  return allGames;
}

export function getPublishableGames(): Game[] {
  return allGames.filter(
    (game) => game.licenseStatus === "verified" && game.safetyStatus === "approved" && game.iframeUrl
  );
}

export function getGame(slug: string): Game | undefined {
  return allGames.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: GameCategory): Game[] {
  return getPublishableGames().filter((game) => game.category === category);
}

export function getGamesByTag(tag: string): Game[] {
  return getPublishableGames().filter((game) => game.tags.includes(tag));
}

export function getAllTags(): string[] {
  return Array.from(new Set(getPublishableGames().flatMap((game) => game.tags))).sort();
}

export function getActiveCategories(): Category[] {
  return categories.filter((category) => getGamesByCategory(category.slug).length > 0);
}

export function getIndexableCategories(): Category[] {
  return categories.filter((category) => getGamesByCategory(category.slug).length >= 2);
}

export function getIndexableTags(): string[] {
  return getAllTags().filter((tag) => getGamesByTag(tag).length >= 2);
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  return getPublishableGames()
    .filter((candidate) => candidate.slug !== game.slug)
    .sort((a, b) => {
      const aScore = a.tags.filter((tag) => game.tags.includes(tag)).length;
      const bScore = b.tags.filter((tag) => game.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}

import gamesData from "@/data/games.json";
import type { Category, Game } from "@/lib/types";

export const GAMES_PER_PAGE = 24;

export const categories: Category[] = [
  { slug: "local-2-player", title: "Local 2 Player", description: "Share one computer, keyboard or screen for cooperative and competitive games.", longDescription: "Local two-player games let two people play together on the same device. Some games split the keyboard so both players move at once, while board and card games may use pass-and-play turns. Check each game's controls before starting: simultaneous action games usually need separate key groups, while turn-based games can share a mouse or touchscreen." },
  { slug: "online-2-player", title: "Online 2 Player", description: "Play head-to-head online with a friend or a matched opponent." },
  { slug: "multiplayer", title: "Multiplayer", description: "Join browser matches with several players, public opponents or friends." },
  { slug: "party", title: "Party", description: "Quick games made for shared sessions and friendly competition." },
  { slug: "board-card", title: "Board & Card", description: "Turn-based board, card and tabletop games for thoughtful matches." },
  { slug: "sports-racing", title: "Sports & Racing", description: "Compete in browser sports, ball games and fast races." },
  { slug: "io-arena", title: "IO & Arena", description: "Enter lightweight real-time arenas and survival matches." }
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

export function getGamesByCategory(category: string): Game[] {
  return getPublishableGames().filter((game) => {
    if (category === "local-2-player") return game.gameplayType === "local" || game.gameplayType === "both";
    if (category === "online-2-player") return game.gameplayType !== "local" && game.tags.some((tag) => ["2-player", "2-player-games", "two-player-games"].includes(tag));
    if (category === "multiplayer") return game.gameplayType !== "local";
    if (category === "party") return game.category === "party" || game.tags.includes("party");
    if (category === "board-card") return ["card"].includes(game.category) || game.tags.some((tag) => ["board", "card", "checkers", "draughts", "dominoes"].includes(tag));
    if (category === "sports-racing") return game.category === "sports" || game.tags.some((tag) => ["sports", "racing", "football", "soccer", "billiard", "pong", "tennis"].includes(tag));
    if (category === "io-arena") return game.category === "io" || game.tags.some((tag) => ["io", "io-games", "arena"].includes(tag));
    return false;
  });
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryPageCount(slug: string): number {
  return Math.ceil(getGamesByCategory(slug).length / GAMES_PER_PAGE);
}

export function getCategoryPage(slug: string, page: number): Game[] {
  const start = (page - 1) * GAMES_PER_PAGE;
  return getGamesByCategory(slug).slice(start, start + GAMES_PER_PAGE);
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
  return [];
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

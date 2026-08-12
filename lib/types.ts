export type GameCategory =
  | "2-player"
  | "io"
  | "tower-defense"
  | "sports"
  | "card"
  | "party"
  | "multiplayer";

export type Game = {
  slug: string;
  title: string;
  category: GameCategory;
  tags: string[];
  iframeUrl: string | null;
  thumbnail: string;
  description: string;
  controls: string;
  developer: string;
  sourcePlatform: "GameMonetize" | "GamePix" | "GameDistribution" | "Placeholder";
  playerCount: string;
  gameplayType: "local" | "online" | "both";
  licenseStatus: "pending" | "verified" | "rejected";
  safetyStatus: "pending" | "approved" | "rejected";
  adIntegrationStatus?: "unknown" | "sdk-detected" | "ad-observed" | "not-found";
  adObservedDuringReview?: boolean;
  featured: boolean;
  publishedAt: string;
  reviewedAt: string;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
};

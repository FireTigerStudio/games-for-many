import type { Game } from "@/lib/types";

const playTypeLabels: Record<Game["gameplayType"], string> = {
  local: "local two-player",
  online: "online",
  both: "local and online",
};

export function gameImageAlt(game: Game) {
  return `${game.title} ${playTypeLabels[game.gameplayType]} browser game cover`;
}

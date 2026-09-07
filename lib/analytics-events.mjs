export const GAME_EVENTS = [
  ["gfm-game-start", "game_start"],
  ["gfm-game-iframe-loaded", "game_iframe_loaded"],
  ["gfm-game-load-timeout", "game_load_timeout"],
];

export function consentState(value) {
  return value === "accepted" ? "granted" : "denied";
}

export function createGameEventDetail(game, detail = {}) {
  return {
    game_slug: game.slug,
    game_title: game.title,
    provider: game.provider,
    ...detail,
  };
}

export function forwardGameEvent(gtag, enabled, eventName, detail) {
  if (!enabled) return false;
  gtag("event", eventName, detail);
  return true;
}

export function gameEventName(domEventName) {
  return GAME_EVENTS.find(([domEvent]) => domEvent === domEventName)?.[1];
}

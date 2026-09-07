export const GAME_EVENTS: readonly (readonly [string, string])[];

export function consentState(value: unknown): "granted" | "denied";

export function createGameEventDetail(
  game: { slug: string; title: string; provider?: string },
  detail?: Record<string, unknown>
): Record<string, unknown>;

export function forwardGameEvent(
  gtag: (...args: unknown[]) => void,
  enabled: boolean,
  eventName: string,
  detail: unknown
): boolean;

export function gameEventName(domEventName: string): string | undefined;

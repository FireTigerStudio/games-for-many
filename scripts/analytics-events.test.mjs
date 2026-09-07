import assert from "node:assert/strict";
import test from "node:test";
import {
  consentState,
  createGameEventDetail,
  forwardGameEvent,
  gameEventName,
} from "../lib/analytics-events.mjs";

test("maps DOM game events to GA4 event names", () => {
  assert.equal(gameEventName("gfm-game-start"), "game_start");
  assert.equal(gameEventName("gfm-game-iframe-loaded"), "game_iframe_loaded");
  assert.equal(gameEventName("gfm-game-load-timeout"), "game_load_timeout");
});

test("builds the required game event parameters", () => {
  assert.deepEqual(
    createGameEventDetail(
      {
        slug: "multiplayer-pong",
        title: "Multiplayer Pong",
        provider: "GamePix",
      },
      {
        load_time_ms: 842,
        timeout_ms: 15_000,
      }
    ),
    {
      game_slug: "multiplayer-pong",
      game_title: "Multiplayer Pong",
      provider: "GamePix",
      load_time_ms: 842,
      timeout_ms: 15_000,
    }
  );
});

test("maps accepted consent to granted and rejection to denied", () => {
  assert.equal(consentState("accepted"), "granted");
  assert.equal(consentState("rejected"), "denied");
  assert.equal(consentState(null), "denied");
});

test("forwards game events only after consent", () => {
  const calls = [];
  const gtag = (...args) => calls.push(args);
  const detail = { game_slug: "multiplayer-pong", provider: "GamePix" };

  assert.equal(forwardGameEvent(gtag, false, "game_start", detail), false);
  assert.deepEqual(calls, []);

  assert.equal(forwardGameEvent(gtag, true, "game_start", detail), true);
  assert.deepEqual(calls, [["event", "game_start", detail]]);
});

import assert from "node:assert/strict";
import test from "node:test";
import { importCandidates, normalizeCandidate } from "./import-games.mjs";

test("normalizes a candidate without approving or publishing it", () => {
  const candidate = normalizeCandidate({
    id: "abc123",
    title: "Friendly Table Match",
    game_url: "https://html5.gamemonetize.games/abc123/",
    image: "https://example.com/thumb.jpg",
    tags: "2 Player, Sports"
  });

  assert.equal(candidate.candidateId, "gamemonetize:abc123");
  assert.equal(candidate.approvalStatus, "needs-review");
  assert.equal(candidate.licenseStatus, "pending");
  assert.equal(candidate.safetyStatus, "pending");
  assert.deepEqual(candidate.supplierTags, ["2 player", "sports"]);
});

test("flags blocked, IP, violence, and unexpected embed risks", () => {
  const candidate = normalizeCandidate({
    id: "risk-1",
    title: "Mario Casino Zombie Shooter",
    url: "https://unapproved.example/game",
    thumbnail: "https://example.com/thumb.jpg"
  });

  assert.ok(candidate.riskFlags.includes("unexpected-embed-host"));
  assert.ok(candidate.riskFlags.some((flag) => flag.startsWith("blocked-content:")));
  assert.ok(candidate.riskFlags.some((flag) => flag.startsWith("ip-review:")));
  assert.ok(candidate.riskFlags.some((flag) => flag.startsWith("violence-review:")));
  assert.equal(candidate.approvalStatus, "rejected");
  assert.equal(candidate.safetyStatus, "rejected");
});

test("normalizes a GamePix JSON Feed item and preserves its attributed embed", () => {
  const candidate = normalizeCandidate({
    id: "737HCH",
    namespace: "prism-match-3d",
    title: "Prism Match 3D",
    description: "A logic puzzle.",
    category: "match-3",
    quality_score: 0.98,
    orientation: "all",
    width: 800,
    height: 600,
    banner_image: "https://img.gamepix.com/games/prism-match-3d/cover.png",
    url: "https://play.gamepix.com/prism-match-3d/embed?sid=I0IX7"
  }, 0, "gamepix");

  assert.equal(candidate.candidateId, "gamepix:737HCH");
  assert.equal(candidate.sourcePlatform, "GamePix");
  assert.equal(candidate.iframeUrl, "https://play.gamepix.com/prism-match-3d/embed?sid=I0IX7");
  assert.equal(candidate.supplierCategory, "match-3");
  assert.equal(candidate.supplierQualityScore, 0.98);
  assert.equal(candidate.approvalStatus, "needs-review");
});

test("flags chat, uploads, and child-directed language for review", () => {
  const candidate = normalizeCandidate({
    id: "review-1",
    title: "Baby Quiz Room",
    description: "Upload a custom quiz for kids.",
    instructions: "Open chat to invite players.",
    url: "https://html5.gamemonetize.co/review-1/"
  });

  assert.ok(candidate.riskFlags.some((flag) => flag.startsWith("interaction-review:")));
  assert.ok(candidate.riskFlags.some((flag) => flag.startsWith("child-direction-review:")));
  assert.equal(candidate.approvalStatus, "rejected");
});

test("hard rejects explicit early-childhood learning titles", () => {
  const candidate = normalizeCandidate({
    id: "child-1",
    title: "My First 100 Words",
    description: "A preschool learning activity.",
    url: "https://play.gamepix.com/first-words/embed?sid=I0IX7"
  }, 0, "gamepix");

  assert.equal(candidate.approvalStatus, "rejected");
  assert.equal(candidate.safetyStatus, "rejected");
  assert.ok(candidate.automaticExclusionReasons.some((reason) => reason.startsWith("child-directed:")));
});

test("hard rejects unblocked and known third-party game brands", () => {
  const candidate = normalizeCandidate({
    id: "ip-2",
    title: "Fall Guys Unblocked Multiplayer",
    url: "https://html5.gamemonetize.co/ip-2/"
  });
  assert.equal(candidate.approvalStatus, "rejected");
  assert.ok(candidate.automaticExclusionReasons.some((reason) => reason.startsWith("prohibited-content:")));
  assert.ok(candidate.automaticExclusionReasons.some((reason) => reason.startsWith("prohibited-ip:")));
});

test("hard rejects explicit kids tags and adult party prompts", () => {
  const childCandidate = normalizeCandidate({
    id: "child-tag",
    title: "Boat Together",
    tags: "Multiplayer, Kids",
    url: "https://html5.gamemonetize.co/child-tag/"
  });
  const adultCandidate = normalizeCandidate({
    id: "adult-prompt",
    title: "Party Questions",
    description: "Includes dirty questions.",
    url: "https://html5.gamemonetize.co/adult-prompt/"
  });
  assert.equal(childCandidate.approvalStatus, "rejected");
  assert.equal(adultCandidate.approvalStatus, "rejected");
});

test("deduplicates supplier IDs and reports zero publishable candidates", () => {
  const result = importCandidates({ games: [
    { id: "same", title: "First", url: "https://html5.gamemonetize.co/same/" },
    { id: "same", title: "Duplicate", url: "https://html5.gamemonetize.co/same/" }
  ] });

  assert.equal(result.candidates.length, 1);
  assert.equal(result.publishableCount, 0);
  assert.ok(result.candidates.every((candidate) => candidate.approvalStatus !== "approved"));
});

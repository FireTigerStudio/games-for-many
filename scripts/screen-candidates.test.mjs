import assert from "node:assert/strict";
import test from "node:test";
import { buildScreeningReport, screenCandidate } from "./screen-candidates.mjs";

function candidate(overrides = {}) {
  return {
    candidateId: "gamemonetize:1",
    title: "Example",
    supplierDescription: "",
    supplierInstructions: "",
    supplierCategory: "Multiplayer",
    supplierTags: [],
    riskFlags: [],
    automaticExclusionReasons: [],
    approvalStatus: "needs-review",
    ...overrides
  };
}

test("prioritizes strong two-player candidates", () => {
  const result = screenCandidate(candidate({
    title: "Two Player Arena",
    supplierDescription: "Invite friends to a private room for online multiplayer duels."
  }));
  assert.equal(result.screeningDecision, "priority-playtest");
  assert.equal(result.suggestedPlayerMode, "online-with-friends");
});

test("sends entries without multiplayer evidence to manual fit review", () => {
  const result = screenCandidate(candidate({
    title: "Dress the Cat",
    supplierDescription: "A single player fashion activity.",
    supplierCategory: "Arcade"
  }));
  assert.equal(result.screeningDecision, "manual-fit-check");
});

test("keeps risky multiplayer games out of the priority playtest group", () => {
  const result = screenCandidate(candidate({
    title: "Online Battle",
    supplierDescription: "Multiplayer matchmaking with open chat.",
    riskFlags: ["interaction-review:chat,open chat"]
  }));
  assert.equal(result.screeningDecision, "manual-risk-review");
});

test("deduplicates source IDs and reports normalized title collisions", () => {
  const report = buildScreeningReport([
    [candidate(), candidate()],
    [candidate({ candidateId: "gamepix:2", title: "Example Online Game" })]
  ]);
  assert.equal(report.inputCount, 3);
  assert.equal(report.uniqueCandidateCount, 2);
  assert.equal(report.exactDuplicatesRemoved, 1);
  assert.equal(report.possibleCrossSourceTitleDuplicates.length, 1);
});

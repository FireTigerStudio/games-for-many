# SEO Recovery Execution Ledger — 2026-09-15

> Status: active source of truth for the current recovery cycle.
>
> Working rule: complete and verify one numbered item before starting the next. Update this file and `CURRENT_PROJECT_STATE.md` whenever an item changes state. Do not deploy, send outreach, or change external accounts without the owner's explicit approval.

## Decision

Temporarily contract indexable inventory now. Do not delete games and do not try to keep all 85 publishable game pages indexed by generating 30 batches of generic AI copy.

- The 30 C-tier pages remain available to players, but receive `noindex, follow` and leave the sitemap.
- Category pagination pages (`/category/.../page/2/` and later) receive `noindex, follow` and leave the sitemap. The first category pages remain indexable.
- Restore C-tier pages in batches of no more than five only after each page passes the evidence gate below.
- AI may organize notes and draft around verified facts. It must not invent playtest results, controls, private-room behavior, mobile support, loading behavior, developer identity, screenshots, pros/cons, or first-hand experience.

This is a reversible quality-control measure, not a permanent deletion. Google says a sitemap should contain important canonical URLs and does not guarantee indexing. Its spam policies also warn about scaled content and third-party content without substantial added value. The safer response to a large discovered-not-indexed set and a sudden visibility loss is a smaller, demonstrably useful indexable set rather than more templated text.

Official references:

- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google high-quality review guidance](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews)

## Success criteria

1. Only A/B game pages with independent editorial evidence are indexable and present in the sitemap.
2. C-tier game pages and category pagination remain playable/navigable but are `noindex, follow` and absent from the sitemap.
3. The build and relevant tests pass before deployment.
4. Each restored game page has real evidence recorded in the repository; no factual claim is generated from guesswork.
5. Outreach is individualized, relevant, and tied to a live evidence asset; no purchased links, exchanges, mass insertion pitches, or guessed addresses.

## Ordered execution board

| ID | Status | Action | Verification / exit condition |
| --- | --- | --- | --- |
| 0 | DONE | Accept the 2026-09-14/15 GSC, indexing, GA4 and Clarity package | `docs/12-seo-ab-package-analysis-2026-09-14.md`; no need to recollect this cycle |
| 1A | DONE | Classify all 85 publishable game pages | 6 A, 49 B, 30 C; exact lists below |
| 1B | DONE | Record the recovery decision, sequence and outreach rules | This ledger is linked from `CURRENT_PROJECT_STATE.md` |
| 1C | DONE | Add `noindex, follow` to C pages and category pagination; remove both from sitemap | Built output: 55 game URLs in sitemap, zero pagination URLs; C/B/pagination metadata sampled successfully |
| 1D | DONE | Run regression tests, typecheck, lint and production build | 16/16 tests, typecheck and build passed; lint passed with the pre-existing GA inline-script warning |
| 1E | DONE | Deploy the index-quality change | Production commit `6714525`; verified 2026-09-15 15:47 +08:00 |
| 2 | TODO | Strengthen A-tier pages with visible first-hand evidence | Complete in a 3–5 page batch; verify every claim against the embed |
| 3 | TODO | Recover C pages in batches of up to five | Each page passes all ten evidence-gate items before reindexing |
| 4A | DONE | Re-research initial outreach prospects | Current prospect table below supersedes old “send-ready” labels |
| 4B | TODO | Build the first 3 individualized messages around live evidence | Every promise/link already exists on the site |
| 4C | BLOCKED | Send outreach | Requires explicit owner approval of recipients and final messages |
| 5 | TODO | Add Bing Webmaster Tools / IndexNow evidence and consider Cloudflare Crawler Hints | Verify current dashboard state before changing account settings |
| 6 | TODO | Measure recovery | Recheck requested URLs around 2026-09-22; compare GSC after 14–28 complete days |

## Page tiers

### A — keep indexed and strengthen first (6)

- `bounce-path-multiplayer`
- `ninja-parkour-multiplayer`
- `darts-pro-multiplayer`
- `duo-water-and-fire`
- `whot-the-ultimate-nigerian-card-game`
- `iron-legion`

### B — keep indexed; improve when demand/evidence justifies it (49)

- `multiplayer-pong`
- `master-checkers-multiplayer`
- `tic-tac-toe-pro-multiplayer-challenge`
- `nightmare-runners`
- `gang-fall-party`
- `castle-wars-legacy`
- `carrom-pro`
- `turkish-draughts`
- `dominoes-classic-duel`
- `tic-tac-toe-with-ai-and-multiplayer`
- `music-night-battle-rhythm-game`
- `greedy-snake-multiplayer-duel`
- `battle-jitsu`
- `mcatlants`
- `black-and-white-stickman`
- `kingdom-of-toilets`
- `table-pong`
- `fish-eat-getting-big`
- `viking-tomahawk`
- `brainrot-bridge-race-3d`
- `clonium`
- `tung-sahur-io`
- `sunny-fields`
- `color-path-io`
- `billiard-champion`
- `board-kings-board-dice`
- `ballon-race-3d`
- `fish-eat-fish-2`
- `imposter-duck-online`
- `drunken-duel-2-players`
- `rocketcar-cup`
- `growwars-io`
- `aqua-dogy`
- `aquapark-balls-party`
- `backgammonia-online-backgammon-game`
- `jungle-fight`
- `popaloon`
- `pga3-zombie`
- `speen`
- `quiz-runner-io`
- `pga-toons`
- `guardz-io`
- `snake-war-multiplayer`
- `survev-io`
- `ultimate-flying-car`
- `drunken-boxing-2`
- `kobadoo-emojis`
- `kobadoo-shapes`
- `cerkio`

### C — temporarily noindex and remove from sitemap (30)

- `pingpong-dot`
- `checkers-dames`
- `neon-water`
- `multiplayer-forest-survive`
- `neon-king-a-local-multiplayer-platformer`
- `chess-multiplayer-online`
- `ludo-game-multiplayer`
- `duo-with-online-friends-multiplayer-card-game`
- `bowling-hero-multiplayer`
- `reversi-multiplayer`
- `straight-4-multiplayer`
- `goose-game-multiplayer`
- `cellular-war-online-multiplayer`
- `survival-on-raft-multiplayer`
- `4-colors-multiplayer`
- `rock-paper-scissors-multiplayer`
- `battleship-war-multiplayer`
- `rage-jump-multiplayer-physics-frenzy`
- `snake-and-ladders-multiplayer`
- `domino-online-multiplayer`
- `multiplayer-cooking-coop`
- `last-card-multiplayer`
- `online-cats-multiplayer-park`
- `8-ball-pool-multiplayer`
- `penalty-challenge-multiplayer`
- `worlds-4-a-multiplayer-platformer`
- `the-quest-arena-multiplayer`
- `red-vs-blue-multiplayer`
- `where-is`
- `vangers-cx`

The operational definition is simple: A and B currently have an independent `gameEditorial` record; C does not. A is the smaller commercial/editorial priority subset of A+B.

## Ten-item evidence gate for restoring a C page

All items must be recorded from actual inspection or clearly marked as not supported. A missing feature is acceptable; an invented feature is not.

1. Verified developer/source identity.
2. Successful desktop playtest and date.
3. Mobile playtest, or an explicit “not tested/not supported” note.
4. Actual player count and local/online/AI mode.
5. Exact controls observed in the game.
6. Private-room/friend-invite route, or an explicit statement that it was not confirmed.
7. Loading, ads and failure behavior observed.
8. One licensable first-hand screenshot or other visible evidence where permitted.
9. Original limitations/pros and at least three useful tips grounded in play.
10. Reviewed date, suitable category placement and useful internal links.

Proposed first recovery candidates, subject to real playtests and cannibalization review: `checkers-dames`, `chess-multiplayer-online`, `ludo-game-multiplayer`, `reversi-multiplayer`, and `8-ball-pool-multiplayer`. This is a queue, not approval to write claims.

## Outreach research — current working set

“Found an email” is not the same as “send-ready.” Use a public channel only, make one relevant request, and do not ask for a link as payment or disguise a link-insertion pitch as a correction.

| Priority | Prospect | Public route | Current status | Evidence-led angle |
| ---: | --- | --- | --- | --- |
| 1 | Dinobros / Picoraptor (Ninja Parkour developer) | `sam@dinobros.com`; [portfolio](https://picoraptor.com/) | Prepare after Ninja page evidence is visibly stronger | Ask them to verify controls/modes/developer facts; offer the tested page as a useful player resource and ask whether their official portfolio/press resources accept it |
| 2 | Hardik Trehan / HT Hub | `contact@nyza.us`; [current article](https://hardiktrehan.com/hthub/games/guides/best-2-player-games-same-keyboard/) | Conditional, suitable for a factual/data pitch | Share verified same-keyboard controls, key-rollover/device results and a concise correction or missing option—not a generic link request |
| 3 | Gaming Couch | [site and press/developer routes](https://gamingcouch.com/) | Good collaboration prospect; verify exact contact route before sending | Propose a small comparison of phone-controller party games versus shared-keyboard games or a developer/editor interview |
| 4 | DigitBin / Aman Kumar | [contact page](https://www.digitbin.com/contact/); [current article](https://www.digitbin.com/best-multiplayer-browser-games/) | Conditional; their page rejects unsolicited link insertions | Send only a concrete factual correction or original test result that materially improves the article |
| 5 | GamePix | [publisher/developer contact](https://company.gamepix.com/contact-us/) | Research route, not a backlink target | Ask for verified developer identities/official assets for catalog games such as Bounce Path, Darts Pro and Multiplayer Pong |
| 6 | 2PlayerFun | [contact page](https://2playerfun.com/contact) | Conditional and competitive | Only a legitimate data correction, interview or joint research idea; never reciprocal-link outreach |
| 7 | Just Game Together | [developer profile](https://justgametogether.itch.io/); [site](https://justgametogether.com/) | Strong future creator collaboration | Test their original local multiplayer games and propose an interview/feature only if they fit the site |
| 8 | Arcadigo | [same-keyboard article](https://arcadigo.com/blog/two-player-games-one-keyboard-local-co-op-browser-games) | Research exact current author/contact first | Offer actual shared-keyboard test evidence and a useful missing-game comparison |
| 9 | Iron Legion / Marat Farkhutdinov | [official listing evidence](https://www.crazygames.com/game/iron-legion) | Developer confirmed; no verified public email yet | Do not guess an address. Find an official developer route, then request factual verification of the Iron Legion guide |
| 10 | PCGamesN / Christian Vaz | [current browser-games article](https://www.pcgamesn.com/best-browser-games) | Future/high barrier | Approach only after publishing an original, citeable browser multiplayer test dataset—not with a small-site introduction |

### Hold or exclude from the first wave

- Game Duddles: current article/contact exists, but the site's school/unblocked positioning conflicts with Games for Many policy. Hold.
- TwozyGames: direct competitor; not a first-wave backlink pitch.
- GuessDoodle: a single-game product rather than a general editorial prospect; use only for a genuine developer collaboration.
- Gamulo: public contact exists, but current unblocked/IP-risk positioning conflicts with the project's brand and safety policy. Exclude.
- Paid directory listings, TAAFT, generic “submit site” lists, Fiverr links, PBNs, link exchanges and bulk guest-post vendors: exclude. TAAFT is an AI-tool directory, not a relevant browser-game authority.

This table supersedes the older claim that Game Duddles, HT Hub, TwozyGames and GuessDoodle were all “send-ready.” Relevance, current policy fit and a live evidence asset must be rechecked immediately before sending.

## Outreach message frames

### Developer fact-check

Subject: Quick fact-check for our [Game] player guide

Hi [Name] — I run Games for Many, a small reviewed browser multiplayer site. We tested [Game] on [devices/date] and documented [specific controls/mode/friend-join behavior]. Before publishing the final version, could you confirm [one or two precise facts]? If useful, here is the tested guide: [URL]. I am happy to correct anything inaccurate and credit the official source.

### Editorial correction/data contribution

Subject: Tested [specific behavior] for your [article title]

Hi [Name] — your article on [topic] helped frame a test we ran across [small exact sample]. One detail readers may find useful is [concise, verifiable finding]. The method/results are here: [URL]. If you update the article, please use only what is useful; no reciprocal link or placement is expected.

### Collaboration/interview

Subject: Small browser multiplayer test/interview idea

Hi [Name] — Games for Many focuses on verified local and online multiplayer behavior rather than large game lists. I would like to test [specific games/setup] and publish the controls, device limits and failure cases, with your factual review. If that is useful, I can send five focused questions and the test plan first.

## Measurement and stop rules

- First wave: at most three individually approved messages.
- Wait 7–10 days before one short follow-up; then stop.
- Track recipient, route, date, asset sent, reply, earned link, referral sessions and relevant referring domain.
- A reply without a link can still be valuable if it improves facts or establishes a developer relationship.
- Stop any tactic that requires payment for followed links, reciprocal linking at scale, misleading claims, or school/unblocked positioning.

## Current interpretation notes

- GSC external-link reports can lag and are not a complete real-time ledger. Track outreach and referral visits yourself; use GSC Links as delayed corroboration, not the sending workflow.
- The August 2026 Google spam update began on 2026-08-18 and completed after about 2 days 16 hours. The site's visibility break on 2026-08-24 is temporally close, but this is correlation, not proof of a penalty or causal diagnosis. GSC shows no manual action and no security issue.
- Google AI features do not require a separate “GEO” technical standard. The same crawlability, indexability, helpful content, structured data accuracy and citation-worthy evidence matter. The first-hand test dataset and developer verification planned here are useful for both conventional search and AI answers.

外链现在怎么做
第一批不要群发，最多准备三封：
1. Dinobros / Picoraptor
   Ninja Parkour 的实际开发者。公开邮箱：sam@dinobros.com，开发者作品页。
   等 Ninja 页面补上可见试玩证据后，发“事实核对邮件”：请他确认控制、模式、开发者信息，并询问其官方作品页/媒体资料是否愿意引用测试指南。不要直接说“给我一个外链”。
2. HT Hub / Hardik Trehan
   公开联系邮箱：contact@nyza.us；有一篇当前的 same-keyboard 游戏文章。
   适合发送真实的同键盘测试数据，例如按键冲突、两人控制布局、哪些游戏并非真正同设备双人。必须有数据后再发。
3. Gaming Couch
   有开发者、press kit 和社区入口：Gaming Couch。
   适合做合作内容，例如“手机当控制器”和“共享键盘”双人游戏的真实体验对比，不适合直接索要链接。
DigitBin 可以保留为第四候选，但其联系页明确不欢迎普通链接插入，所以只有真正的事实修正或原创测试数据才值得联系：DigitBin 当前文章、联系页。
TAAFT 不建议做：它主要是 AI 工具目录，与你的浏览器多人游戏主题不匹配。即使能买到收录，也很难形成相关权威和有效玩家流量。

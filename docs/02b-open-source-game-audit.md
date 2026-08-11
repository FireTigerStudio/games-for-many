# Open-source game candidate audit

Updated: 2026-08-10

## Decision standard

A launch candidate must pass all of these checks:

1. Runs in a modern desktop browser without a proprietary base game.
2. Provides real two-player or multiplayer gameplay.
3. Code has an explicit license permitting commercial use and redistribution.
4. Art, music, fonts, maps, names, and other bundled assets also permit commercial redistribution.
5. It can be self-hosted, or the owner explicitly provides an authorized external embed.
6. It does not rely on unlicensed third-party IP and is suitable for the site's AdSense-safe catalog.
7. Its hosting requirements fit the launch architecture. A Node, Redis, WebSocket, authoritative game server, or database cannot be hosted by Cloudflare Pages alone.

`Public on GitHub`, `free to play`, and `downloadable for free` do not by themselves grant redistribution or commercial-use rights. If no license is present, normal copyright restrictions apply.

## Candidate results

| Candidate | Browser / multiplayer | License finding | Decision for launch |
|---|---|---|---|
| Generic Fighter Maybe | HTML5; local 1-2 players | itch page does not provide a source or redistribution license | **Do not use** unless the owner separately grants commercial self-host/embed rights; fighting theme is also a conservative AdSense risk |
| PolyTrack | HTML5; networked multiplayer | itch page does not provide a source or redistribution license | **Do not copy or iframe**; not an open-source candidate and requires multiplayer infrastructure |
| Soccer Physics | HTML5; local 1-4 players | itch page does not provide a source or redistribution license | **Excellent gameplay fit but legally unavailable** without separate permission |
| rwmt/Multiplayer | Not a standalone browser game; RimWorld mod | MIT code | **Reject**; depends on proprietary RimWorld and its IP |
| Barotrauma | Desktop .NET game; online multiplayer | Custom EULA/source access, not a normal permissive OSS game license | **Reject**; not HTML5, commercial product, horror/violence |
| Loptr-Lab/duet-solo-hackathon | Not yet reproducibly verified | License and asset rights could not be confirmed from the repository | **Hold**; no deployment until the license and build are verified locally |
| Chessmata | Browser React/Three.js client; online chess | MIT | **Later candidate**; requires a Go/WebSocket backend, so not a static-launch game |
| Couchfriends/breakout | Browser JavaScript; multiplayer; static build present | MIT code; third-party art/music attribution needs file-level verification | **Best technical audit candidate**; clone, build, test, and replace any asset whose commercial license cannot be proved |
| I Spy A Ghost | HTML5 Phaser/WebRTC | MIT code; art/music rights are not established by the MIT license | **Reject in current form**; would require replacing all questionable media plus PeerJS setup |
| Couchfriends/Space-Shooter | Browser JavaScript/WebRTC | MIT code; third-party sprite/audio licenses need verification | **Secondary audit candidate**; mild shooter content and asset provenance make it lower priority |
| SquareOff | Browser JavaScript; two-player; client and server | AGPL-3.0 | **Later candidate**; legal if AGPL obligations are met, but requires a server and source disclosure |
| Mozilla BrowserQuest | HTML5 multiplayer; server required; archived/deprecated | MPL-2.0 code; CC BY-SA 3.0 content | **Later experiment only**; attribution/share-alike duties, old dependencies, server operations, and combat content |
| blk-game | Browser WebGL multiplayer; client/server | Repository contains license files, but exact code-and-assets coverage still needs local inspection | **Hold for local audit**; old server-based project, not a quick static embed |
| binb | Browser realtime multiplayer; Node + Redis + WebSocket | MIT code | **Reject for this site**; gameplay depends on a music catalog whose commercial streaming rights must be separately cleared |
| MysticMine | Python/Pygame desktop game | MIT code and graphics; original sound/music expressly cannot be redistributed | **Reject**; not HTML5 and incomplete media rights |
| Darkest Hour | Desktop Red Orchestra mod | Requires ownership of proprietary Red Orchestra and its SDK | **Reject**; not browser-based, proprietary dependency, realistic war violence |
| UrbanTerror4 | Not a game source repository; official bug tracker | No reusable full-game license established here | **Reject**; FPS/violence and no HTML5 distributable game |
| Stendhal | Java/web multiplayer RPG; server required | GPL-2.0+ server/Java client; AGPL-3.0+ web client | **Later platform project, not launch content**; operationally large and includes combat |
| amiruqdah/mario-party | Unity local multiplayer | License does not cure third-party IP infringement | **Hard reject**; unauthorized Mario name/IP violates project rules |
| PokerTH | C++/Qt desktop poker | AGPL/GPL-family code | **Hard reject**; gambling/poker content and not an HTML5 game |
| Blocks Beyond The Stars | Unity client + .NET authoritative server; possible WebGL transport | AGPL-3.0 | **Reject for launch**; very large server/client system and voxel/Minecraft-like positioning conflicts with the project's IP-risk posture |
| Manic Digger | Desktop .NET/OpenTK voxel multiplayer | Core project is broadly permissive/public-domain-style, with many third-party licenses | **Reject**; not HTML5 and explicitly positioned as a Minecraft clone |
| Hurry Curry | Cooperative multiplayer; an official browser build exists; server required | AGPL-3.0-only | **Promising later candidate**; safe theme and genuine OSS, but requires AGPL compliance and a game server, and the official hosted browser build is not automatically our iframe asset |
| Last Colony | HTML5/JavaScript; single-player plus Node/WebSocket two-player | No explicit repository license found | **Do not use**; technically relevant but legally all-rights-reserved by default until an explicit license exists |
| DrugsNRock | Multiplayer native/Cocos project | MIT code; art, music, images, and sound are CC BY-NC-SA | **Hard reject for monetization**; `NC` prohibits commercial use, title/theme also conflicts with advertiser-safe positioning |
| Nextpeer-UFORUN | Cocos2d-x mobile/tablet multiplayer | A license file exists but exact rights and obsolete Nextpeer service dependency need verification | **Reject for launch**; not HTML5 and depends on a discontinued/third-party mobile multiplayer stack |
| Evennia | Browser-accessible Python multiplayer framework, not a finished arcade game | BSD-3-Clause | **Reject as catalog content**; it is a MUD development framework requiring a Python server and original game content |

## Shortlist for the next engineering audit

Order matters:

1. **Couchfriends/breakout** — closest to a self-hosted browser game that may fit the launch architecture.
2. **Couchfriends/Space-Shooter** — technically similar, but only after a complete asset-license inventory and content review.
3. **Hurry Curry** — genuine, recent, advertiser-friendly multiplayer OSS; evaluate only as a later server-backed addition.
4. **Chessmata** — MIT and browser-based, but a later server-backed addition rather than a launch embed.
5. **BrowserQuest / SquareOff / blk-game** — research pool, not launch commitments.

There are currently **zero games in this list approved for immediate production publication**. `breakout` is the nearest candidate, but it must first pass a local build/play test and an asset-by-asset license audit.

## What the owner needs to collect

For future GitHub candidates, provide only the repository URL. Codex can inspect and build it. Before adding a candidate to the list, check the repository's right sidebar for an explicit license and prefer:

- MIT, BSD-2-Clause, BSD-3-Clause, Apache-2.0, ISC, or CC0 for code.
- CC0, CC BY, CC BY-SA, or an equally explicit commercial-use license for assets.
- Topics/README containing `html5`, `javascript`, `typescript`, `webgl`, `phaser`, `pixi`, or `threejs`.
- A runnable `index.html`, `dist`, `build`, or documented web build.
- Local multiplayer if possible; it avoids a backend during the first launch.

Immediately exclude repositories with no license, `Non-Commercial`/`NC`, proprietary franchise names, gambling, adult content, realistic violence, a required commercial base game, or only Windows/Java/Unity-native builds.


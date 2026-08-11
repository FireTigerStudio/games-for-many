# Game candidate review queue

Files in this directory are review inputs, not production game data.

Run the GameMonetize JSON importer with either:

```powershell
npm run import:games -- --input data/incoming/gamemonetize-feed.json
```

or set `GAMEMONETIZE_FEED_URL` in `.env.local` and run:

```powershell
npm run import:games
```

The importer writes `data/candidates/gamemonetize-import.json`. Every record starts with pending license and safety states plus `approvalStatus: needs-review`. It never writes `data/games.json`.

For the GamePix JSON Feed, keep the dashboard-provided `sid` in the URL, store the full URL in `.env.local` as `GAMEPIX_FEED_URL`, and run:

```powershell
npm run import:gamepix
```

The importer writes `data/candidates/gamepix-import.json`. It preserves the attributed GamePix embed URL but does not approve any game.

Before a candidate can be moved into production, verify its official embed permission, IP/content safety, player mode, controls, devices, invite method, advertising behavior and original editorial content. Do not commit credentials or private license evidence.

After importing the GameMonetize Multiplayer and 2 Player feeds, build the deduplicated screening report with:

```powershell
npm run screen:games
```

The report at `data/candidates/screening-report.json` separates priority playtests, multiplayer checks, risk reviews and automatic rejections. It is still a review artifact and never publishes games.

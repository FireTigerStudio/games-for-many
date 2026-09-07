# Games for Many

Static-first browser game directory for `gamesformany.com`, focused on reviewed two-player, party and multiplayer games for casual gamers, teens and adults.

## Current project state

Read [CURRENT_PROJECT_STATE.md](CURRENT_PROJECT_STATE.md) before continuing work. It is the canonical handoff for the current production version, local/undeployed work, verified analytics behavior, SEO priorities and the next task. Update it whenever a material task is completed or production changes.

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The production build is exported to `out/` for Cloudflare Pages.

## Content safety gate

An iframe is rendered only when all three game fields pass:

- `iframeUrl` is present and comes from an official publisher embed;
- `licenseStatus` is `verified`;
- `safetyStatus` is `approved`.

Until then, the game page shows a local placeholder and is marked `noindex`.

## Indexing gate

`NEXT_PUBLIC_BLOCK_INDEXING` defaults to `false`, so production remains indexable. Set it to `true` only for a private preview that search engines must not index.

## Cloudflare Pages

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Output directory: `out`
- Node version: 20 or newer
- Production environment: `NEXT_PUBLIC_SITE_URL=https://gamesformany.com`
- Production indexing: keep `NEXT_PUBLIC_BLOCK_INDEXING` unset or `false`; set it to `true` only for a private preview

`public/ads.txt` contains the GameMonetize authorization lines and is exported at `/ads.txt`.

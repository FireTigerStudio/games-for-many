# Games for Many

Static-first browser game directory for `gamesformany.com`, focused on reviewed two-player, party and multiplayer games for casual gamers, teens and adults.

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

`NEXT_PUBLIC_ALLOW_INDEXING` defaults to `false`. Keep it false for the placeholder deployment. Set it to `true` in Cloudflare only after real games and launch content have passed review.

## Cloudflare Pages

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Output directory: `out`
- Node version: 20 or newer
- Production environment: `NEXT_PUBLIC_SITE_URL=https://gamesformany.com`
- Production indexing: leave false until launch review, then set true and rebuild

`public/ads.txt` contains the GameMonetize authorization lines and is exported at `/ads.txt`.

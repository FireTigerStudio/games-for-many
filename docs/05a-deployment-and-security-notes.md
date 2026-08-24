# Deployment and security notes

## Hosting decision

The launch path is a private GitHub repository connected to Cloudflare Pages. Next.js produces a static `out/` directory, so no Vercel account or paid application server is required.

## Cloudflare settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `out` |
| Node.js | 20+ |
| Production domain | `gamesformany.com` |
| Private preview indexing block | `NEXT_PUBLIC_BLOCK_INDEXING=true` |
| Production indexing | `NEXT_PUBLIC_BLOCK_INDEXING=false` |

## Next.js 14 security tradeoff

The project requirement fixes Next.js at version 14.2.35. The current npm advisory database reports high-severity issues against the Next.js 14 line and offers only a breaking upgrade to Next.js 16 as the automatic fix.

Risk is materially reduced here because the deployed artifact is static HTML:

- no Next.js production server;
- no Server Actions;
- no middleware or rewrites;
- no image optimizer (`images.unoptimized=true`);
- no user-generated MDX or CSS.

This does not make the dependency report clean. Revisit the framework-version constraint before adding server-side features. Do not run `npm audit fix --force` without a planned major-version migration and regression test.

## Pre-indexing rule

The placeholder deployment is for publisher verification and technical testing. Search indexing stays disabled until at least the first reviewed game set, original descriptions, final navigation and legal pages are complete.

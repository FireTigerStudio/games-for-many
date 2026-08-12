# GamePix permission and first-candidate review

## Decision

GamePix catalog games are not presumed open source. A public play page confirms that a game is available to GamePix users; it does not grant a third party permission to copy the game, scrape its assets, or use that consumer URL as an iframe.

GamePix's official integration documentation states that distribution and use require GamePix Srl's consent. Approved publishers can integrate through direct embedding, a JSON API, or a white-label portal. API calls include a publisher `sid`, which must remain in the game URL for attribution and revenue tracking.

Therefore the launch gate is:

1. Games for Many is accepted or otherwise authorized as a GamePix Publisher.
2. GamePix supplies a Publisher dashboard, `sid`, or official single-game embed.
3. The selected title appears in the publisher catalog returned for that account.
4. We use the URL and thumbnail returned by that official integration, without downloading or rehosting the game.
5. The game passes hands-on controls, content, advertising, and performance review.

## Current result

The GamePix Publisher property is active for `gamesformany.com` with property ID `I0IX7`. Six reviewed games are in production data, and their official embed URLs retain `sid=I0IX7` for attribution:

- Bounce Path Multiplayer
- Ninja Parkour Multiplayer
- Multiplayer Pong
- Darts Pro Multiplayer
- Master Checkers Multiplayer
- Tic Tac Toe Pro - Multiplayer Challenge

Three official embeds remain held pending hands-on content or brand-safety review:

- Multiplayer Forest Survive
- Neon King - A Local Multiplayer Platformer
- Italian Brainrot Racing Multiplayer

Urban Sniper Multiplayer 2 is rejected for launch because its sniper/shooting focus conflicts with the site's conservative advertising policy.

The earlier ten consumer-page candidates remain in the review CSV and are not production-approved until an official Publisher embed is obtained and tested.

## Integration method

Manual embed codes are sufficient for the first release, but they are not required for every future game. GamePix documents a JSON catalog API at `https://games.gamepix.com/gameinfo/`; catalog URLs and game URLs must retain the assigned Publisher `sid` for attribution and revenue tracking. The next importer should read the catalog, apply an allowlist for two-player/multiplayer titles, and still require a manual safety decision before publishing.

Official references:

- https://partners.gamepix.com/publishers
- https://games.gamepix.com/gameinfo/
- https://company.gamepix.com/contact-us/

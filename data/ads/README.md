# Ads.txt source records

These files preserve the original platform-provided records used to assemble
the public `/ads.txt` file.

- `gamemonetize-ads.txt`: GameMonetize's three-line snippet.
- `gamepix-ads.txt`: GamePix's complete property-specific snippet for property
  `I0IX7`, copied from the publisher dashboard on 2026-08-11.
- `../../public/ads.txt`: the deployable file containing both snippets.

When either platform publishes a replacement list, update its source record
and rebuild the combined public file. Do not replace one platform's entries
with the other platform's entries.

# SEO A/B Package Analysis — 2026-09-14

## Decision

Package A is complete enough for a current SEO decision. Package B is usable for directional behavior analysis, but it is not complete enough for page-specific UX conclusions. Do not redo the existing exports.

The immediate priority is not publishing more pages or starting broad outreach. First diagnose the sharp GSC visibility loss in the current comparison period. After that, improve only the 3–5 URLs supported by the diagnosis.

## Evidence windows

- GSC Performance and GA4: current `2026-08-24` through `2026-09-08`; previous `2026-08-08` through `2026-08-23`. Both periods contain 16 days.
- GSC Page indexing export: latest chart date `2026-09-04`.
- GSC sitemap screenshot: last read `2026-09-09`; 106 discovered pages; processed successfully.
- Clarity dashboard: `2026-08-16` through `2026-09-14`. This is a 30-day snapshot and is not a like-for-like comparison with the GSC/GA4 periods.

## Package acceptance

| Item | Status | Notes |
| --- | --- | --- |
| A1 GSC Queries and Pages | Pass | Both workbooks contain all GSC tabs, including Queries, Pages, Countries, Devices and Filters. The filter is Web and the required periods are correct. The two files are redundant for analysis because each contains both Queries and Pages. |
| A2 Page indexing | Pass | Summary, indexed URLs, the 67 discovered-not-indexed URLs and the one redirect URL are present. |
| A3 Sitemap | Pass | Screenshot shows successful processing, last read 2026-09-09 and 106 discovered pages. |
| A4 GA4 traffic acquisition | Pass | Both required 16-day periods are present. |
| A5 GA4 events | Pass with limitation | Both periods are present. `game_load_timeout` is absent, so this export cannot distinguish zero timeouts from an event that has never been recorded. |
| B1 Landing pages | Usable fallback | The export is Pages and screens by page path, not the Landing page report. It supports page-use comparison but not true entry-page attribution. |
| B2 Clarity dashboards | Partial | The all-site dashboard exists. There are no per-priority-page filtered dashboard exports. |
| B3 Recordings | Partial | Three useful recording screenshots exist. This is enough for hypotheses, not a repeated-pattern conclusion for each priority page. |
| B4 Heatmaps | Missing | The screenshot is the heatmap page selector, not an opened Click or Scroll heatmap. |

## Main finding: Google visibility collapsed

GSC device totals show:

| Metric | 2026-08-24 to 2026-09-08 | 2026-08-08 to 2026-08-23 | Change |
| --- | ---: | ---: | ---: |
| Clicks | 0 | 7 | -100% |
| Impressions | 6 | 567 | -98.9% |
| CTR | 0% | 1.23% | -1.23 percentage points |
| Impression-weighted average position | 31.83 | 28.11 | 3.72 positions worse |

This is not a normal small CTR fluctuation. The period ended on 2026-09-08, so preliminary same-day data is not a plausible explanation for the whole drop.

The non-Compare supplement `GSC-260914-补充.xlsx` adds the daily `Chart` sheet. It shows 21–67 impressions per day from 2026-08-13 through 2026-08-22, 22 impressions on 2026-08-23, then zero on 2026-08-24 through 2026-08-28. Later dates contain only isolated 1–2 impression days. The break is therefore concentrated at 2026-08-24 rather than a gradual decline.

The supplement is valid even though Google named the daily sheet `Chart` rather than `Dates`; its first column is Date and the filter is Web for 2026-08-08 through 2026-09-13.

Only three pages retained visible impressions in the current period:

- `/blog/best-2-player-browser-games/`: 4 impressions, position 18.75, down from 252 impressions and 4 clicks.
- `/blog/same-keyboard-2-player-games/`: 1 impression, position 53.
- `/games/castle-wars-legacy/`: 1 impression, position 63.

The largest previous-period losses were:

- `/games/iron-legion/`: 217 impressions at position 10.7 to 0 impressions.
- `/blog/best-2-player-browser-games/`: 252 to 4 impressions.
- `/games/ninja-parkour-multiplayer/`: 29 impressions and 1 click to 0 impressions.
- `/games/darts-pro-multiplayer/`: 14 to 0 impressions.
- `/games/duo-water-and-fire/`: 12 to 0 impressions.

Do not interpret the guide's position improvement from 43.42 to 18.75 as a proven win: the current value is based on only four impressions.

## Indexing finding: submitted pages are known, but most were never crawled

- Sitemap: 106 discovered URLs.
- Indexed: 39 URLs, or 36.8% of submitted URLs.
- Discovered, currently not indexed: 67 URLs, or 63.2%.
- All 67 discovered-not-indexed rows show the exported 1970 placeholder for `Last crawled`, which means the report has no real crawl date for them.
- The 67 URLs consist of 52 game pages, 13 category/pagination pages and 2 other pages.
- The only redirect exclusion is `http://gamesformany.com/`, which correctly redirects to HTTPS and is not a problem.

Priority status:

- Indexed: best-two-player guide, Iron Legion, Bounce Path and Ninja Parkour.
- Discovered but not indexed: `/category/online-2-player/`.

The loss is therefore not explained by a site-wide robots block or missing sitemap. Live checks on 2026-09-14 returned HTTP 200 for robots, sitemap and the three checked priority pages. The sitemap contained 106 URLs, and the guide, Iron Legion and online-two-player category all exposed `index, follow` plus self-referencing canonicals. This narrows the next investigation to Google selection/ranking, crawl prioritization, content quality and possible post-launch volatility rather than an obvious global technical directive.

## URL Inspection results — 2026-09-15

| URL | Google index | Last crawl | Canonical | Live Test | Action |
| --- | --- | --- | --- | --- | --- |
| `/games/iron-legion/` | Indexed | 2026-08-13 22:36 | User canonical is self; Google selected inspected URL | Available; fetch successful; indexing allowed | Request indexing once because the indexed copy predates the 2026-08-24/25 page changes |
| `/blog/best-2-player-browser-games/` | Indexed | 2026-09-10 01:40 | User canonical is self; Google selected inspected URL | Available; fetch successful; indexing allowed | Do not request again |
| `/games/ninja-parkour-multiplayer/` | Indexed | 2026-09-09 10:39 | User canonical is self; Google selected inspected URL | Available; fetch successful; indexing allowed | Do not request again |
| `/category/online-2-player/` | Not indexed: Discovered - currently not indexed | N/A; never crawled | N/A in index report; live user canonical is self | Available; page can be indexed | Request indexing once |

All four screenshots sets are sufficient. The three indexed URLs have successful smartphone crawls, crawl/index permission and correct canonical selection. The category is in the sitemap and technically indexable in the live test, but Google has not crawled it. This rules out an obvious robots, fetch or canonical failure for these four URLs.

The current evidence does not prove why rankings disappeared on 2026-08-24. Remaining plausible areas are an early discovery/ranking test ending, Google's quality/selection reassessment, weak authority/internal signals, or a site/account issue outside URL-level inspection. Check Manual actions and Security issues before treating content quality as the sole cause.

Completed on 2026-09-15: the owner submitted one indexing request for Iron Legion and one for the online-two-player category. GSC `Manual actions` and `Security issues` both show `No issues detected`. Property-level manual penalties and reported security problems are therefore not the identified cause. This still does not prove a single ranking-loss cause or guarantee that the requested URLs will be indexed or regain visibility.

## GA4 and Clarity findings

GA4 recorded 9 sessions in the current period versus 3 previously. Current sources were AI Assistant 4, Direct 3 and Referral 2; Organic Search was absent. Page views increased from 18 to 25, but `game_start` fell from 9 to 7. Because the sample is very small and earlier activity includes testing, these are directional signals only.

The current events export records 9 `game_iframe_loaded` events from 3 users and 7 `game_start` events from 3 users. It also contains 2 `debug_check` events. Clarity attributes 3 sessions to `tagassistant.google.com`, confirming that part of the behavior sample is owner/testing traffic and should not guide content decisions.

Clarity's 30-day snapshot contains 16 sessions, 13 unique users, 10 sessions with Play, average scroll depth 54.07%, dead clicks in 6 sessions (37.5%) and quick-back clicks in 4 sessions (25%). Its top pages were the best-two-player guide (6 sessions), Iron Legion (5), the homepage (3), the online-two-player category (3) and Bounce Path (3). Referrers include ChatGPT for 7 sessions and Tag Assistant for 3.

The recording screenshots support two useful hypotheses:

1. The guide and category pages can lead users into game starts. One desktop visitor from ChatGPT moved from the guide to the online-two-player category and then started Gang Fall Party; one mobile visitor browsed seven pages and tried multiple games.
2. Some ChatGPT visitors may read or leave the tab open without interacting. One recorded guide visit lasted 5:36 with no clicks and the page hidden after six seconds.

The global dead-click and quick-back rates cannot yet be assigned to a page or element. Actual per-page recordings or heatmaps are required before changing buttons, layout or game embeds on that basis.

## Next actions

### 1. Observe the two submitted indexing requests

The owner submitted the justified requests for Iron Legion and the online-two-player category on 2026-09-15. Do not submit them again and do not request the guide or Ninja Parkour. Recheck the two requested URLs after about seven days; a request is a crawl/indexing signal, not a promise of indexing or ranking.

### 2. Property-level penalties and security are cleared

The 2026-09-15 screenshots show `No issues detected` for both GSC `Manual actions` and `Security issues`. No further screenshot is needed for this cycle unless either report changes.

### 3. Analyze the 2026-08-24 break as ranking/selection, not a global crawl failure

Compare the pages and site state before and after the break. Prioritize Iron Legion, the best-two-player guide, Ninja Parkour and the online-two-player category. Evaluate content usefulness and differentiation, internal discovery/linking, early-site ranking volatility and authority signals. Do not request indexing for all 67 URLs; pagination and low-value catalogue pages should not consume this cycle.

### 4. Delay page-specific Clarity work until the traffic sample grows

The missing B2/B4 items do not block the GSC investigation. When a priority page has enough sessions, export a filtered Clarity dashboard and capture both Click and Scroll heatmaps for desktop and mobile. Start with the guide, Iron Legion and the online-two-player category.

### 5. Hold broad outreach and new-page production

Do not send a broad backlink batch or create many new SEO pages while organic visibility is unexplained. The first content batch should remain limited to 3–5 existing pages and follow the daily trend, URL Inspection and property-level health evidence.

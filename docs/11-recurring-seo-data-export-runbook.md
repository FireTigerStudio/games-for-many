# SEO 周期数据导出操作手册

> 用途：以后需要新一轮 SEO 规划时，站长按本手册的数据包逐项操作，不再依赖聊天记录回忆 GSC、GA4、Clarity、Semrush、Bing 和 AdSense 的报告名称。
>
> 当前版本核对日期：2026-09-14（Asia/Singapore）。平台界面可能改名；找不到按钮时，认准下面的英文报告名，并截图当前页面给 Codex，不要猜测相似报告。

## 1. 固定数据包

以后 Codex 应使用这些固定说法：

- **A 包**：每轮 SEO 规划的最低必需数据（GSC + GA4）。
- **A+B 包**：页面发布 14–28 天后的完整效果复盘（再加 Clarity）。
- **C 包**：准备开新主题集群时才重跑 Semrush。
- **D 包**：每月检查 Bing、AI 引用和外链。
- **E 包**：广告审核或收入复盘时检查 AdSense。

当前状态：

| 平台 | 最后可靠证据 | 当前动作 |
|---|---|---|
| GSC | Performance 截至 2026-08-23；421 曝光、6 点击 | **现在先跑 A 包** |
| Semrush | 2026-08-25 的 7 份 Keyword Gap 和外链导出 | 暂不重跑；开新主题或 8–12 周后再跑 C 包 |
| GA4 | 2026-09-04 已验证事件能发送，缺新的后台汇总 | A 包一起导出 |
| Clarity | 已接入；仍需行为数据 | B 包导出最近 30 天并抽看录像 |
| Bing Webmaster | 仓库中没有完成接入和当前报告的证据 | 先完成 D 包的一次性接入 |
| AdSense | 审核、Policy Center、付款状态需要后台证据 | 只有审核/收入任务时跑 E 包 |

## 2. 文件保存规则

每轮建立以下本地目录，日期使用导出当天：

```text
C:\AppDev\ioGame\data\research\YYYYMMDD-seo-cycle\
  gsc\
  ga4\
  clarity\
  semrush\
  bing\
  adsense\
  notes.txt
```

1. 不修改原始文件内容，只重命名文件。
2. 文件名包含平台、报告、日期，例如 `gsc-performance-queries-20260911.xlsx`。
3. 不会建立子目录时，把本轮下载文件放进一个文件夹，再把整个文件夹复制到 `data\research\`。
4. `notes.txt` 记录：导出日期、所选日期范围、是否开启 Compare、看见但无法导出的异常。
5. 不保存或发送密码、Cookie、API Secret、完整付款账号、税号和身份证件。
6. 原始导出仅本地分析，不提交 Git。

## 3. A 包：现在就需要的数据

### A1. GSC：Queries 和 Pages

入口：[Google Search Console](https://search.google.com/search-console)

本轮不要再自己判断“最后完整日期”，直接使用下面四个固定日期。两个区间都为 16 天，并避开域名购买前的日期：

- 上面一排（本期/Current）：`2026-08-24` → `2026-09-08`；
- `vs.` 下面一排（对比期/Previous）：`2026-08-08` → `2026-08-23`。

这里的 `2026-08-24` 是因为上一批 GSC 基线截止到 2026-08-23，不是域名购买日。项目记录显示域名在 2026-08-07 购买。

1. 登录，点击左上角资源选择器。
2. 选择 `gamesformany.com`，优先选 Domain property，不要误选测试域名。
3. 左侧点击 **Performance（效果）** → **Search results（搜索结果）**。
4. 顶部确认 **Search type: Web**。
5. 点击 **Date**，在弹窗顶部点击 **Compare** 标签。不要停留在 **Filter** 标签。
6. 向下滚动，点击 **Custom** 左边的空心圆；不要选 `Compare last 3 months to previous period`。
7. `Custom` 下方有两排日期：第一排是本期，`vs.` 后面的第二排是对比期。界面可能不会显示 `Current` 或 `Previous` 文字。
8. 第一排填 `2026-08-24` 和 `2026-09-08`；第二排填 `2026-08-08` 和 `2026-08-23`。
9. 检查四个日期后点击 **Apply**。
10. 点亮四项指标：**Total clicks、Total impressions、Average CTR、Average position**。
11. 图表下点击 **Queries（查询）**。
12. 右上角 **Export（导出）** → **Excel**，重命名为 `gsc-performance-queries-YYYYMMDD.xlsx`。
13. 回到同一报告，点击 **Pages（网页）**。
14. 再次 Export → Excel，重命名为 `gsc-performance-pages-YYYYMMDD.xlsx`。
15. 只有出现明显地区/设备变化时才额外导出 Countries 和 Devices。

检查：应用后，页面顶部的日期筛选应显示 `2026/8/24–2026/9/8 vs. 2026/8/8–2026/8/23`（显示格式可能不同）。查询表和网页表应带两期数据或 Difference。总点击/曝光高于 Queries 行合计是隐私查询被隐藏造成的正常现象。不要手工删行。

### A2. GSC：Page indexing 的具体 URL

目标不是只截“多少页已收录”，而是取得**哪些 URL、因为什么原因**。

1. 左侧点击 **Indexing（编入索引）** → **Pages（网页）**。
2. 顶部范围优先选 **All submitted pages（所有已提交网页）**；能选 sitemap 时选 `https://gamesformany.com/sitemap.xml`。
3. 截包含 **Indexed**、**Not indexed** 总数的完整图，命名 `gsc-indexing-summary-YYYYMMDD.png`。
4. 找到 **Why pages aren't indexed（网页未编入索引的原因）**。
5. 对每个数量大于 0 的原因：
   1. 点击原因；
   2. 在详情页找到 **Examples / Affected pages**；
   3. 右上角 Export → Excel/CSV；
   4. 按原因重命名，例如 `gsc-indexing-crawled-not-indexed-YYYYMMDD.xlsx`；
   5. 返回处理下一种原因。
6. 优先导出非零的：
   - `Crawled - currently not indexed`；
   - `Discovered - currently not indexed`；
   - `Duplicate without user-selected canonical`；
   - `Google chose different canonical than user`；
   - `Alternate page with proper canonical`；
   - `Not found (404)`、软 404、重定向、5xx；
   - `Blocked by robots.txt`、`Excluded by noindex`。
7. 返回首页，点击 **View data about indexed pages（查看已编入索引网页的数据）**。
8. 导出 URL 表为 `gsc-indexing-indexed-urls-YYYYMMDD.xlsx`。
9. 范围切成 **All known pages（所有已知网页）**，再截汇总图；若出现大量 sitemap 之外旧 URL，在 notes 写明。

如果详情页只有示例而没有 Export，就截完整页面，并把可见 URL 复制到 `notes.txt`。不要只提供总数。

### A3. GSC：Sitemap

1. 左侧 **Indexing** → **Sitemaps**。
2. 找到 `https://gamesformany.com/sitemap.xml`。
3. 截图包含 Status、Last read、Discovered pages，命名 `gsc-sitemap-status-YYYYMMDD.png`。
4. 正常时不要反复重新提交；只在缺失、读取失败或 sitemap 真正变更时处理。

### A4. GA4：流量来源

入口：[Google Analytics](https://analytics.google.com/)

1. 选择 Games for Many 的 GA4 Property，确认 Measurement ID 为 `G-1FXG6YDPHK`。
2. 左侧 **Reports** → **Acquisition** → **Traffic acquisition**。
3. 右上角日期选成与 GSC 相同的当前周期，开启 **Compare → Previous period**。
4. 表格第一列选择 **Session source / medium**。
5. 右上角 **Share this report** → **Download file** → **Download CSV**。
6. 重命名为 `ga4-traffic-acquisition-YYYYMMDD.csv`。
7. 在表内检查并截图：`google / organic`、`bing / organic`、`chatgpt.com` 和新 referral；没有时在 notes 写“未出现”。

### A5. GA4：游戏事件

1. **Reports** → **Engagement** → **Events**。
2. 日期和 Compare 与 A4 相同。
3. 查找 `game_start`、`game_iframe_loaded`、`game_load_timeout`。
4. Share → Download file → CSV，命名 `ga4-events-YYYYMMDD.csv`。
5. 某事件完全不存在时不要手工补 0，在 notes 写“事件未显示”。

GSC 统计搜索展示/点击，GA4 统计站内会话/事件，口径不同，数字不需要完全相等。

## 4. B 包：发布 14–28 天后的体验复盘

### B1. GA4：落地页

1. **Reports** → **Engagement** → **Landing page**。
2. 日期选部署后的完整 14–28 天，与部署前等长周期 Compare。
3. 导出 `ga4-landing-pages-YYYYMMDD.csv`。
4. 没有 Landing page 时，不修改报告库；改为导出 **Pages and screens**，并在 notes 写明。

### B2. Clarity：Dashboard

入口：[Microsoft Clarity](https://clarity.microsoft.com/)

1. 选择 Games for Many → **Dashboard**。
2. 日期选最近 30 天或本批部署后的范围。
3. 点击 **Filters**；全站概览先不加 Page 过滤，Bot Traffic 保持默认排除。
4. 筛选栏右上 **Download** → **Download CSV**。
5. 命名 `clarity-dashboard-all-YYYYMMDD.csv`。
6. 对本批 3–5 页分别设置 **Path / Visited URL**，每页再导出一个 CSV。

Clarity 只覆盖加载追踪且符合当前同意条件的会话，不能用它的 session 总数替代 GA4/GSC。

### B3. Clarity：录像和热图

1. **Recordings** → **Filters**，日期选最近 30 天；普通录像只保留约 30 天。
2. `Visited URL` 选择本批页面。
3. 检查有数据的 **Rage clicks、Dead clicks、Quick backs、Excessive scrolling、JavaScript errors**。
4. 每个优先页看约 5–10 个相关会话；流量不足时看全部，不凑数。
5. 有代表性的录像点 Favorite；notes 写页面、设备、问题、位置、日期。
6. **Heatmaps** 中分别看 Desktop/Mobile 的 Click map 和 Scroll map，保存带页面 slug/设备的截图。

第三方游戏 iframe 内部通常不能被 Clarity 看见；重点看 Play 按钮、布局、误点、返回和滚动。

## 5. C 包：新主题才做 Semrush

入口：[Semrush](https://www.semrush.com/)

仅在开新主题、完成当前 GSC 复盘、旧数据超过约 8–12 周或新增真实竞品时重跑。

### C1. Keyword Magic Tool

1. **SEO** → **Keyword Research** → **Keyword Magic Tool**。
2. Database 选 **United States**；内容目标保持英文。
3. 每次一个明确 seed，如 `2 player browser games`、`same keyboard games`、`browser games with friends`。
4. 先看 **Broad Match**，再看 **Questions**。
5. Intent、Volume、KD% 只用于缩小人工复核范围，不直接决定建页。
6. 右上 **Export** → **All** → CSV；文件名包含 seed 和日期。

### C2. Keyword Gap

1. **SEO** → **Competitive Research** → **Keyword Gap**。
2. 第一个域名填 `gamesformany.com`，类型选 **Root domain**。
3. 最多加入 4 个当前 SERP 中真正争夺同一用户需求的域名；不要只因规模大就机械加入 Poki/CrazyGames。
4. Database 选 United States，类型选 **Organic keywords** → **Compare**。
5. 分别查看 **Missing、Weak、Untapped** 并导出 CSV。
6. 排除盗版 IP、`unblocked`、学校绕过、博彩和本站没有的游戏；分数不是自动发布批准。

### C3. Organic Research 和外链

1. **Organic Research** 输入相关竞品 Root domain，United States。
2. 分别导出 **Positions** 和 **Pages**。
3. **Backlink Analytics** 输入本站，导出 **Backlinks**、**Referring Domains**；变化复盘时再分别导出 **New/Lost**。
4. **Backlink Gap** 比较本站和少量相关竞品，导出候选域名。
5. 候选仍需人工检查相关性、编辑标准和真实联系方式；不购买 dofollow，不批量投垃圾目录。

## 6. D 包：Bing、AI 可见度和外链（月度）

### D1. Bing 一次性接入

入口：[Bing Webmaster Tools](https://www.bing.com/webmasters/)

1. 没有本站时点击 **Add a site**。
2. 优先 **Import from Google Search Console**，只导入 Games for Many。
3. **Sitemaps** → **Submit sitemap**，填 `https://gamesformany.com/sitemap.xml`。
4. 截 Status、Last processed、Discovered URLs；不要反复提交全部 URL。

### D2. Bing Search/AI Performance

1. 选择本站 → **Search Performance**。
2. 最近 28 天；Source 分别看 **Web and Chat**、**Crawl and Indexing**。
3. **Download** 导出 `bing-search-performance-YYYYMMDD.csv`。
4. 如果有 **AI Performance**，导出 **Grounding queries**、**Pages cited** 和时间趋势。
5. Citation count 只是趋势，不等于排名、点击或权威分数。
6. 打开 **IndexNow**，截图最近 URL、Submission source、Crawl/Index status；完全没数据就在 notes 记录。

### D3. GSC 外链

1. GSC 左侧 **Links（链接）**。
2. **External links** → **Export external links**。
3. 分别下载 **Latest links** 和 **More sample links**。
4. **Top linking sites** → **More** → Export。
5. 命名 `gsc-latest-links-YYYYMMDD.csv`、`gsc-sample-links-YYYYMMDD.csv`、`gsc-top-linking-sites-YYYYMMDD.csv`。

GSC Links 是抽样，不是实时全量外链库。新链接可结合 Semrush/Bing/GA4 referral 发现，最终效果看 GSC/GA4 趋势。

## 7. E 包：AdSense

只在申请、被拒、Policy Center 出现问题或月度收入复盘时做。

1. 登录 AdSense → **Sites**，截图 `gamesformany.com` Approval status；不要截付款资料。
2. **Policy center**：有问题时 **Download CSV → Download all items**；无问题时截健康摘要。
3. **Reports**：最近完整 28 天并与上一周期比较，导出页面浏览量、广告展示、点击、Page RPM、Estimated earnings。
4. Estimated earnings 不是最终到账金额。

## 8. URL Inspection 什么时候点

只用于新发布的重要页、已修复问题页、明确索引异常页和每批 3–5 个优先 URL，不批量请求。

Google：

### GSC URL Inspection：逐个检查本轮 4 个 URL

这一项通常**没有 Excel/CSV 导出按钮**。不要继续找 Export；每个 URL 保存两张截图即可：一张 Google 当前索引结果，一张 Live Test 结果。

本轮按下面顺序检查，不要一次粘贴多个 URL：

1. `https://gamesformany.com/games/iron-legion/`
2. `https://gamesformany.com/blog/best-2-player-browser-games/`
3. `https://gamesformany.com/games/ninja-parkour-multiplayer/`
4. `https://gamesformany.com/category/online-2-player/`

每个 URL 都执行以下步骤：

1. 进入 [Google Search Console](https://search.google.com/search-console)，左上角确认资源是 `gamesformany.com`，优先使用 Domain property。
2. 点击页面最上方的长搜索框，框内通常显示 **Inspect any URL in “gamesformany.com”**。
3. 粘贴一个完整 URL，按 Enter，等待 **Retrieving data from Google Index** 完成。
4. 先看页面顶部的大结论：
   - **URL is on Google**：当前已编入索引；
   - **URL is not on Google**：当前没有编入索引；
   - 其他警告或错误：不要猜，保留原文截图。
5. 点击或展开 **Page indexing（网页编入索引）**。在这一块依次查看：
   - **Indexing allowed?**：应为 `Yes`；
   - **Last crawl**：记录最后抓取时间；
   - **Crawled as**：记录 Googlebot 类型；
   - **User-declared canonical**：应是当前检查 URL 自己；
   - **Google-selected canonical**：最好也是当前 URL；若显示 `Inspected URL`，意思是 Google 选择了当前 URL；
   - **Page fetch**：应为成功状态。
6. 截第一张图：必须同时包含顶部大结论和展开后的 Page indexing 主要字段。文件名使用：
   - `gsc-url-inspection-iron-legion-index-YYYYMMDD.png`
   - `gsc-url-inspection-best-2-player-guide-index-YYYYMMDD.png`
   - `gsc-url-inspection-ninja-parkour-index-YYYYMMDD.png`
   - `gsc-url-inspection-online-2-player-index-YYYYMMDD.png`
7. 点击右上角 **Test live URL（测试实际网址）**，等待测试完成。这一步检查现在的线上页面，不等于已经收录。
8. Live Test 完成后查看：
   - 顶部是否显示 **URL is available to Google**；
   - **Availability / Page availability** 是否允许抓取；
   - **Indexing allowed?** 是否为 `Yes`；
   - **Page fetch** 是否成功；
   - 若有 **View tested page（查看测试的网页）**，只在出现渲染或资源错误时再打开。
9. 截第二张图：包含 Live Test 顶部结论及展开后的可用性/抓取字段。文件名把上面的 `-index-` 改成 `-live-`。
10. 返回顶部搜索框，粘贴下一个 URL，重复步骤 3–9。

结果怎么判断：

| 当前索引结果 | Live Test | 处理方式 |
|---|---|---|
| `URL is on Google` | 通过 | 不点 Request indexing；保存截图即可 |
| `URL is not on Google` | 通过 | 先把截图交给 Codex 判断；只对确认值得收录的重要页请求一次 |
| 已收录或未收录 | 不通过 | 不点 Request indexing；先根据 Page fetch、robots、canonical 或渲染错误修复 |
| Google-selected canonical 不是当前 URL | 任意 | 截图并记录 Google 选择的 URL，先分析重复页/canonical，不要反复请求收录 |

`Request indexing（请求编入索引）` 不是本轮检查的必点步骤。它不会保证收录，也不要对 67 个未收录 URL 批量点击。本轮先完成 4 个 URL 的两类截图，再统一判断。

Bing：

1. **URL Inspection** 粘贴 URL。
2. 查看 Index、SEO、Markup；必要时 **Live URL**。
3. 修复后才 Request indexing。

## 9. Codex 收到数据后的固定流程

1. 读 `CURRENT_PROJECT_STATE.md` 和本手册。
2. 核对本轮日期、Compare 和缺失报告。
3. 与上一轮原始导出增量比较，不覆盖原文件。
4. 判断索引、曝光、CTR、页面/查询匹配、自然流量和游戏启动。
5. 只选 3–5 个有证据的页面进入一批修改。
6. 记录假设、部署提交和 14–28 天观察窗口。
7. 内容价值上线后才决定外联。
8. 更新 `CURRENT_PROJECT_STATE.md` 的数据日期和下一动作。

## 10. 官方参考

- [GSC Performance](https://support.google.com/webmasters/answer/7576553?hl=en-GB)；[日期比较](https://support.google.com/webmasters/answer/17011165)；[Page indexing](https://support.google.com/webmasters/answer/7440203?hl=en)；[Links](https://support.google.com/webmasters/answer/9049606?hl=en)
- [GA4 日期比较](https://support.google.com/analytics/answer/13412290?hl=en)；[报告导出](https://support.google.com/analytics/answer/9317657?hl=en)
- [Clarity Dashboard 下载](https://learn.microsoft.com/en-us/clarity/insights/download-dashboard)；[过滤器](https://learn.microsoft.com/en-us/clarity/filters/clarity-filters)；[录像保留](https://learn.microsoft.com/en-us/clarity/session-recordings/session-list)
- [Semrush Keyword Magic](https://www.semrush.com/kb/617-keyword-magic-tool-manual)；[Keyword Gap](https://www.semrush.com/kb/28-keyword-gap)；[Backlinks](https://www.semrush.com/kb/501-backlinks-report-manual)
- [Bing Search Performance](https://www.bing.com/webmasters/help/search-performance-c680da36)；[AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)；[URL Inspection](https://www.bing.com/webmasters/help/url-inspection-55a30305)；[IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)
- [AdSense 报告导出](https://support.google.com/adsense/answer/9830628?hl=en)；[Policy Center](https://support.google.com/adsense/answer/9485926?hl=en-GB)

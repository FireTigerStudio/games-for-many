# SEO 当前进度与 GSC 数据基线（2026-08-24）

> 目的：把本轮审计结果沉淀在仓库中。以后拿到新的 GSC/GA4/Clarity 数据时，以本文件为基线做增量对比，不重新从零分析。
>
> 状态说明：本文记录的代码优化目前只在本地工作区，尚未 commit、push 或部署；线上网站尚未因此发生变化。

## 1. 一页结论

网站已经具备基础技术 SEO、可抓取页面和第一批真实 Google 曝光，但目前仍处于“Google 正在试探页面、尚未形成稳定流量”的早期阶段，不是已经完成 SEO 的成熟站点。

当前最重要的事实：

- GSC 基线为 **421 次曝光、6 次点击、CTR 约 1.4%**；数据量还小，不能据此预测稳定收入。
- 曝光从前半段 130 增至后半段 291，说明 Google 正在扩大测试；点击仍为 3 对 3，CTR 从 2.31% 降至 1.03%，说明新获得的曝光还没有有效转化为点击。
- `Iron Legion` 页面获得 147 次曝光、平均排名 10.53，却没有点击；相关可见查询合计 132 次曝光、0 点击。它是当前最接近第一页、最值得优先提升 CTR 和内容匹配的页面。
- `WHOT` 平均排名 8.17、`Bounce Path Multiplayer` 平均排名 7.8，但样本分别只有 6 和 5 次曝光，不能因为排名数字好看就大规模投入。
- `/blog/best-2-player-browser-games/` 有 193 次曝光、3 次点击，是曝光最多的页面，但平均排名 46.12，说明主题有需求，页面权威度、内容竞争力和外链仍不足。
- 设备端存在明显机会：移动端 83 次曝光、平均排名 8.83，却是 0 点击；需要继续检查移动 SERP 标题、页面体验和游戏可玩性。
- 目前没有任何证据能保证“Google 第一”。Google 排名第一是针对具体关键词，不是整个网站的一个总开关。现实路径是先把已有曝光且排名 8–20 的词推入稳定 Top 10，再逐步争取 Top 3。

## 2. 本轮分析了哪些原始文件

原始导出当前保存在：

`gamesformany.com-Performance-on-Search-2026-08-23/`

已完整读取和交叉核对以下 7 个 GSC CSV：

| 文件 | 用途 | 本轮得到的结果 |
|---|---|---|
| `Chart.csv` | 时间趋势 | 两个时间段曝光 130 → 291；点击 3 → 3；CTR 2.31% → 1.03% |
| `Queries.csv` | 用户搜索词 | 51 个可见查询，197 次曝光、3 次点击；部分查询被 Google 隐藏 |
| `Pages.csv` | 获得曝光的页面 | 20 个页面，共 421 次曝光、6 次点击 |
| `Countries.csv` | 国家分布 | 共 421 次曝光、6 次点击；印度曝光最高但无点击 |
| `Devices.csv` | 设备分布 | 桌面 324/6，移动 83/0，平板 14/0（曝光/点击） |
| `Filters.csv` | 导出口径 | Web 搜索，Last 3 months |
| `Search appearance.csv` | 搜索外观 | 文件无数据，当前没有可分析的富结果类型 |

口径注意：

- `Pages.csv`、`Countries.csv`、`Devices.csv` 的总量一致，都是 421 次曝光、6 次点击。
- `Queries.csv` 只有 197 次曝光、3 次点击，是因为 GSC 会隐藏低量或隐私相关查询；查询行不能代替网站总量。
- 查询和页面是两个独立聚合导出，不能仅凭这两张表证明某一个查询一定落到某一个页面，也不能据此断言关键词蚕食。
- 本轮还参考了此前提供的 GSC 索引截图/数字：sitemap 成功发现 106 个 URL，约 40 个已编入索引、67 个未编入索引。该数字不是这 7 个 Performance CSV 的内容，后续应从 GSC Page indexing 重新导出核验。

## 3. 关键页面结果与处理判断

| 优先级 | 页面 | 点击 / 曝光 | CTR | 平均排名 | 判断 |
|---|---|---:|---:|---:|---|
| P0 | `iron-legion` | 0 / 147 | 0% | 10.53 | 当前最明确机会；先改善标题摘要、首屏意图匹配和内容，再观察 2–4 周 |
| P0 | `best-2-player-browser-games` | 3 / 193 | 1.55% | 46.12 | 需求最大但竞争位置弱；需要提升真实试玩内容、内链和外链，不只是改标题 |
| P1 | `duo-water-and-fire` | 0 / 12 | 0% | 17.00 | 有进入第一页的可能；已发现玩法类型应为本地双人而非在线双人 |
| P1 | `darts-pro-multiplayer` | 0 / 11 | 0% | 30.82 | 精确游戏词可优化，但当前样本小 |
| P1 | `whot-the-ultimate-nigerian-card-game` | 0 / 6 | 0% | 8.17 | 排名不错、样本太小；围绕 Nigerian WHOT 在线玩法准确表达 |
| 观察 | `bounce-path-multiplayer` | 0 / 5 | 0% | 7.80 | 暂不扩写；尚未证实它有真实多人功能，必须先实际试玩 |
| 已有点击 | `fish-eat-getting-big` | 2 / 6 | 33.33% | 48.83 | 点击样本很小但标题/意图可能有效，保留观察 |
| 已有点击 | `ninja-parkour-multiplayer` | 1 / 21 | 4.76% | 41.38 | 有品牌/实体词需求，后续用更多数据判断 |

### Iron Legion 查询簇

`Queries.csv` 中包含 `iron` 或 `legion` 的可见查询合计 **132 次曝光、0 点击**。主要词包括：

- `iron legion`：119 次曝光，平均排名 10.65；
- `iron legion tank game`：4 次曝光，平均排名 10.5；
- `iron legion tank`：3 次曝光，平均排名 12；
- `iron legion game`：2 次曝光，平均排名 15.5；
- 其余为低量变体和拼写变体。

结论：这是现阶段最强的“已经有需求、Google 已接近第一页、但搜索结果没有赢得点击”的信号。本地代码已针对该意图调整 title 和 description；部署后应记录发布日期，并至少观察 14–28 天，不能每天反复改标题。

## 4. 国家与设备结论

### 国家

- 印度：138 次曝光、0 点击、平均排名 22.33。曝光最多但没有转化，需要关注标题是否匹配英语用户意图、移动体验和游戏加载情况。
- 美国：38 次曝光、2 点击、CTR 5.26%。量小，但对广告价值更重要，应持续观察而不是用全球总量掩盖。
- 菲律宾 30 次曝光、英国和马来西亚各 18 次曝光，当前均无点击。
- 其他国家样本太小，不能据 1 次点击得出市场结论。

### 设备

- Desktop：324 次曝光、6 点击、CTR 1.85%、平均排名 36.56。
- Mobile：83 次曝光、0 点击、平均排名 8.83。
- Tablet：14 次曝光、0 点击、平均排名 10.29。

移动端“排名看起来较好但无点击”值得检查，不过只有 83 次曝光。下一步应结合 GA4 游戏启动率、iframe 加载事件、Clarity 移动录屏判断是 SERP 点击问题还是页面/游戏体验问题。

## 5. 技术 SEO 审计结论

本轮对线上与本地构建的检查结论：

- 首页、`robots.txt`、`sitemap.xml` 和三个核心分类页可以正常返回。
- sitemap 当前共 106 个 URL：85 个游戏页、13 个分类/分页、2 篇博客和 6 个其他页面。
- 三个核心分类 `/category/local-2-player/`、`/category/online-2-player/`、`/category/multiplayer/` 已在 sitemap 中，具有 self-canonical、允许索引，并从首页和静态页面获得内链。
- 因此“multiplayer 分类目前完全发现不了”不符合当前线上/代码状态；此前 GSC 的异常更可能是旧快照、处理延迟或当时状态，精确原因需要新的 GSC 索引导出才能确认。
- 分类页原先使用 2 款游戏即可进入 sitemap，而页面 metadata 使用 8 款才允许索引，规则不一致；本地已统一为 8 款。
- sitemap 分类 `lastModified` 原先是固定日期；本地已改为该分类中最近一次审核游戏的日期。
- 生产索引环境变量的代码与文档命名不一致；本地文档已统一为 `NEXT_PUBLIC_BLOCK_INDEXING`。

## 6. 本地已经完成的改动（尚未上线）

### 追踪与隐私

- 保留并修正 GA4 Consent Mode：回访用户已接受时，在 GA 配置前恢复同意状态。
- Clarity 接入 Consent V2；用户拒绝时保持拒绝，接受后才加载并授权。
- 页脚新增 `Cookie settings`，用户可以重新打开同意选择。
- 新增三个可用于 GA4 的游戏事件：
  - `game_start`：用户点击开始游戏；
  - `game_iframe_loaded`：iframe 文档触发 load，并记录 `load_time_ms`；
  - `game_load_timeout`：15 秒仍未触发 load。
- 事件包含 `game_slug`、`game_title` 和 `provider`，以后可按游戏和供应商比较启动/加载表现。

限制：`game_iframe_loaded` 只能证明 iframe 文档触发了浏览器 load，不能证明游戏内部广告或玩法已经真正可用。若供应商以后提供 postMessage/API，才可追踪更准确的 ready/play/revenue。

### 页面与内容匹配

- 为 Local 2 Player、Online 2 Player、Multiplayer 三个核心分类设置更准确的英文 title/description。
- 为 Iron Legion、WHOT、Darts Pro、Duo Water and Fire 设置基于现有 GSC 意图的 title/description。
- 将 `Duo Water and Fire` 从 `online` 更正为 `local`；`Survev.io` 仍保持 `online`。
- 没有优化 `Bounce Path Multiplayer`，因为真实多人能力尚未完成试玩验证，不能为了关键词写未经证实的内容。

### 已完成验证

- TypeScript typecheck：通过。
- ESLint：通过；仅保留一个原有的 GA inline script 建议警告。
- 游戏导入测试：8/8 通过。
- 游戏筛选测试：4/4 通过。
- Next.js production build：通过，共生成 228 个静态页面。
- 构建产物中已核对 sitemap 数量、核心分类 metadata、Duo/Survev 分类和追踪事件字符串。

尚未完成的验证：由于本机 Codex 浏览器控制被 Windows sandbox 错误拦截，尚未在真实浏览器里点击同意/拒绝并查看 GA4 DebugView、Clarity 或网络请求。部署后必须做一次真实浏览器验收。

## 7. 当前真正还差什么

### P0：让已完成工作真正上线并可测

1. 审阅本地 diff，只提交本轮 SEO/追踪文件，不夹带站长原有的 `docs/07-first-backlink-outreach-batch.md` 改动、空的 `WEbsite-trackcodes.txt` 或原始 GSC 文件夹。
2. commit 并 push 到 GitHub，等待 Cloudflare 完成部署。
3. 在线核对版本、canonical、robots、sitemap、四个优先游戏页标题。
4. 用真实浏览器测试 Cookie 接受/拒绝/重新设置，以及 GA4 的三个游戏事件和 Clarity 会话。

完成标准：线上代码与本地一致；同意前后行为符合预期；GA4 能按游戏/供应商收到事件；没有把生产站误设为 noindex。

### P1：先吃掉已经出现的排名机会

1. Iron Legion：部署新 snippet，补充真实试玩后的坦克职业、匹配模式、控制、优缺点、适合玩家等独有内容，并加强相关游戏/分类内链。
2. Best 2 Player Browser Games：提升榜单的真实比较价值，包括同机/异地、设备、邀请方式、控制、优缺点和明确推荐场景。
3. Duo、WHOT、Darts：保持 URL 不变，按真实玩法补强正文和内部链接。
4. Bounce Path：先试玩确认是否真实多人；证据不足就改名/分类或降低 SEO 优先级。

完成标准：每次修改有发布日期；14–28 天后比较同 URL 的曝光、排名、CTR 和点击，而不是凭感觉继续改。

### P1：解决索引差距

1. 在 GSC 导出最新 Page indexing 明细，而不只看总数字。
2. 只对三个核心分类和少数高价值页面做 URL Inspection / Request indexing。
3. 按原因分组处理：Discovered/Crawled currently not indexed、Duplicate、Soft 404、Blocked 等。
4. 不批量请求全部游戏页，不为增加数量制造薄页。

完成标准：确认 106 个 sitemap URL 中哪些应索引、哪些不应索引；提高“应该索引”的页面覆盖率，而不是追求 100% 的表面数字。

### P2：建立权威度和真实外链

执行 `docs/07-first-backlink-outreach-batch.md` 中的第一批开发者、游戏作者、相关资源页和社区联系。目标先获得 10–20 个高相关、真实编辑或开发者来源的引用，不购买垃圾 dofollow 链接，不批量提交低质目录。

完成标准：新增相关 referring domains、品牌搜索和目标页曝光；每封联系和结果可追踪。

### P2：建立收入闭环

流量不等于收入。还需同时具备：

- 可稳定启动的游戏和供应商广告填充；
- GA4 的游戏启动/加载数据；
- 按 provider、country、device 的收入或分成报表；
- 足够自然会话后再评估页面展示广告，避免广告破坏首屏和游戏体验；
- 每周比较：自然落地页 → 游戏启动率 → 有效游戏会话 → 收入。

目前 6 次自然点击不足以评估稳定广告收入。当前阶段重点是获得可重复的有效搜索会话，而不是先堆广告位。

## 8. 30/60/90 天执行顺序

### 接下来 7 天

- 部署并完成追踪验收。
- 在 GSC 请求三个核心分类重新抓取。
- 完成 Iron Legion 和 Best 2 Player Browser Games 的真实试玩内容升级。
- 建立每周一次的数据记录，不日更标题。

### 8–30 天

- 优化排名 8–20 且已有曝光的页面。
- 修复 Page indexing 导出中能够明确行动的问题。
- 发出第一批高质量 outreach，并记录回复和链接。
- 根据 GA4/Clarity 淘汰加载失败、误导或移动端不可玩的游戏。

### 31–60 天

- 只围绕 GSC 已证明的赢家扩写相邻页面和内容，不批量铺新标签页。
- 增加第二轮开发者/资源页外链。
- 比较国家、设备、页面、provider 的有效游戏启动和收入。

### 61–90 天

- 评估是否形成稳定 Top 10/Top 20 关键词、自然点击增长和可测收入。
- 合并或 noindex 没有价值、重叠或长期无法提供独特内容的页面。
- 只有在主双人/多人主题出现稳定赢家后，才扩展第二主题集群。

## 9. 站长与 Codex 的分工

### 站长需要做/授权

- 明确授权本轮代码是否可以 commit、push 并触发 Cloudflare 部署。
- 在登录状态下查看 GA4 DebugView、GSC URL Inspection、Clarity；可以提供截图或导出，不要提供密码。
- 对外联名单和邮件做最终批准；需要以站长身份发送时由站长发送。
- 提供游戏供应商实际收入/分成报表，才能把 SEO 流量和广告收入连起来。

### Codex 可以继续完成

- 只提交本轮相关文件并部署，保护站长原有未提交内容。
- 做线上 SEO、追踪和 consent 验收。
- 读取新的 GSC/GA4/Clarity 导出，基于本文件做增量周报。
- 按优先级完成页面内容、内链、索引问题和外联草稿。
- 维护“修改日期—页面—假设—指标结果”，避免同一项重复分析。

## 10. 以后如何保存，避免再分析六小时

建议固定采用两层记录：

1. **原始证据**：保留每次 GSC/GA4/Clarity CSV，目录名带导出日期，不修改原文件。
2. **决策摘要**：每次只在本文件或新的日期版进度文档中写清基线、变化、结论、动作和观察期。

下一次复盘只需要：

- 导出相同维度的新数据；
- 与本文 421 曝光、6 点击及关键页面基线比较；
- 判断哪些假设被证实；
- 更新下一批动作。

没有新数据时，不应重新分析同一批 CSV，也不应重复修改刚部署的标题。

## 11. 与现有文档的关系

- 长期项目路线：`docs/00-project-plan.md`
- SEO 原则与页面质量门槛：`docs/01-seo-strategy.md`
- 关键词到 URL 分工：`docs/02-keyword-map.md`
- 部署与安全：`docs/05a-deployment-and-security-notes.md`
- 外链执行名单：`docs/07-first-backlink-outreach-batch.md`
- **本文件**：截至 2026-08-24 的真实数据基线、代码进度和下一步执行顺序

## 12. 2026-08-24 第一轮内容与 AdSense 跟进

本轮内容批次：

- Iron Legion 保持已部署 title 不变；正文改为控制点目标、十余种坦克、PvE/PvP、完整控制、优点和限制。
- 公开来源对在线人数存在 10 人和 20 人两种说法；页面不再在搜索摘要中宣传 20 人，正文采用更新较近的 10 人公开信息，并保留私人邀请未验证说明。
- Multiplayer 分类新增指向 Iron Legion 的上下文内链。
- Best 2 Player Browser Games 对比表和正文新增 Duo Water and Fire、WHOT、Darts Pro Multiplayer，并明确同机/在线、输入方式、适合场景和邀请限制。
- 该批次属于多来源资料核验，不记作亲手完成的游戏内试玩。真实启动、匹配和移动端体验仍需浏览器试玩复核。

AdSense 截图结论：

- `gamesformany.com` 已完成网站连接，但截图未显示 `Ready` 审批状态。
- `Tell us about you` 付款资料仍为 Required；AdSense 官方说明，未完成必要账户设置时，网站审核可能不会启动。
- 广告预览为 Optional，目前不是阻塞项。
- 下一步由站长在 `Payments > Payments info > Manage settings` 核对账户类型是 Individual 还是 Organization，并使用能够完成身份/税务核验和接收国际平信的真实姓名或公司地址。
- 再进入 `Sites` 查看 `Requires review`、`Getting ready`、`Needs attention` 或 `Ready` 的准确状态并保存截图。

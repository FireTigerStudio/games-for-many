# SEO 优先级、外联审计与测量验收（2026-08-31）

> 2026-09-07 状态更新：当前总状态以仓库根目录 CURRENT_PROJECT_STATE.md 为准。Cloudflare 和 GA4/Consent 已取得后续真实后台证据，本文件第 5 节已同步。

> 本文只整理证据和下一批修改清单，不授权自动新增页面或批量外联。
> Semrush 原始导出日期为 2026-08-25；GSC 基线导出截至 2026-08-23。8 月 25 日后的后台数据仍需新导出或截图确认。

## 1. 2,128 个 Semrush 候选的归类结果

分析脚本：`scripts/analyze-semrush-opportunities.py`

本地衍生结果：

- `data/research/20260825-semrush/derived/keyword-classification.ndjson`
- `data/research/20260825-semrush/derived/keyword-priority-summary.md`

对账结果：

| 处置 | 数量 | 含义 |
|---|---:|---|
| existing-page | 1,337 | 先验证或加强已有分类/指南，不新建同义页面 |
| manual-review | 540 | 词义过宽、库存不匹配或需要人工判断 |
| exclude | 170 | 下载、平台限定、绕过学校限制、无权使用的 IP 或不适合本站 |
| new-page-candidate | 55 | 只有确认存在足够真实库存和独立搜索任务后才可建页 |
| existing-game-page | 26 | 查询指向站内已有具体游戏页 |
| 合计 | 2,128 | 每条候选均有分类、目标、理由和优先分 |

校正规则：

1. GSC 已有曝光优先于 Semrush 估算流量。
2. `KD=-1` 视为“未知”，不再获得低难度加分。
3. 站内没有对应游戏的品牌词（例如 Slope、Slender、Switch）不能因搜索量高就进入页面任务。
4. 自动分类只是调查队列，不等同于页面创建许可。

当前 GSC 证据最强的页面：

| 页面 | 点击 | 曝光 | 平均排名 | 解释 |
|---|---:|---:|---:|---|
| `/blog/best-2-player-browser-games/` | 3 | 193 | 46.12 | 曝光最大，需改善主题覆盖和内部链接 |
| `/games/iron-legion/` | 0 | 147 | 10.53 | 最接近第一页，优先处理 CTR、标题和首屏答案 |
| `/games/ninja-parkour-multiplayer/` | 1 | 21 | 41.38 | 已有明确查询与点击，可加强玩法和控制信息 |
| `/games/duo-water-and-fire/` | 0 | 12 | 17.00 | 接近前两页，适合小幅精确优化 |
| `/games/darts-pro-multiplayer/` | 0 | 11 | 30.82 | 有多人飞镖意图，可补真实模式说明 |
| `/games/whot-the-ultimate-nigerian-card-game/` | 0 | 6 | 8.17 | 已在第一页但无点击，优先检查 snippet 和搜索意图 |
| `/games/bounce-path-multiplayer/` | 0 | 5 | 7.80 | 已在第一页但样本小，先改善 snippet 后观察 |

## 2. 首批 20 个外联目标审计

结论：不能为了凑满 20 个而发送。当前只有 4 个可以直接进入首封个性化邮件，3 个需要先找到正确联系人或形成新闻点；其余应暂缓或排除。

| # | 目标页面/域名 | 作者或主体 | 已验证联系方式 | 判断 | 可提供的独特价值 |
|---:|---|---|---|---|---|
| 1 | Game Duddles：same-keyboard / multiplayer 文章 | Game Duddles Team | `support@gameduddles.com`（Terms） | P1 可发送 | 已测试的本地/在线/轮流模式与控制键对照；指出失效或含糊条目 |
| 2 | HT Hub / Hardik Trehan：same-keyboard games | Hardik Trehan；Nyza Creations LLC | `contact@hardiktrehan.com`（Contact） | P1 可发送 | 3–5 款可在同一键盘玩的真实游戏、双键位冲突说明 |
| 3 | TwozyGames：same-keyboard collection | TwozyGames 编辑团队 | `contact@twozygames.com`（About） | P1 可发送但按同行合作处理 | 提供可复核的控制方式数据，不要求互换链接或排名锚文本 |
| 4 | GuessDoodle：multiplayer games 文章 | GuessDoodle / Postlister 团队 | `contact@guessdoodle.com`（Privacy） | P1 可发送 | 私人房间、团队玩法与无需安装的实测说明 |
| 5 | Gaming Couch：browser party games 文章 | Gaming Couch 团队 | 站内 FAQ/contact，未验证公开邮箱 | P1 条件式 | 手机作控制器与共享键盘方案的差异表；先确认编辑联系人 |
| 6 | Arcadigo：same-keyboard games 文章 | Arcadigo 团队 | 站内 contact form；未验证个人作者 | P1 条件式 | 原创游戏同行交流、控制方式校正；不做普通目录式索链 |
| 7 | FRVR：multiplayer browser games 文章 | FRVR Editorial | `press@frvr.com`、`hello@frvr.com`（Press） | P2 条件式 | 只有形成原创数据或新闻点后才联系，不发送普通目录介绍 |
| 8 | Gamnite：Best Multiplayer Browser Games | Gamnite Editorial | 未找到已验证公开联系人 | 暂缓 | 文章较新，先找作者页；可提供 2026 实测模式数据 |
| 9 | Ready2Play Studio | 独立浏览器多人游戏团队 | 未找到已验证公开联系人 | 暂缓 | 开发者归属、官方玩法说明和交叉纠错价值 |
| 10 | Playhop：multiplayer games 文章 | Playhop Editorial | `support-team@playhop.com`；publisher form | 暂缓 | 大型直接竞品；客服/发行表单不是编辑外联入口 |
| 11 | OtterGames：local 2-player article | OtterGames Editorial | `hello@ottergames.org` | 排除 | 网站以 “unblocked” 为定位，与本站政策冲突 |
| 12 | OtterGames：multiplayer web games article | OtterGames Editorial | `hello@ottergames.org` | 排除 | 与 #11 同域同主体，不作为第二次外联目标 |
| 13 | FunPlayed：same-keyboard / catalog | FunPlayed Editorial | 未验证 | 排除 | 目录存在品牌/IP、安全及受众混杂风险，品牌不匹配 |
| 14 | DoYouMaze：maze resource / cited pattern | DoYouMaze creator | 仅发现作者/commission 路径 | 排除 | 当前站内没有足够迷宫库存，无法提供相关独特价值 |
| 15 | PC Gamer：Primo 等浏览器游戏报道 | PC Gamer Editorial / 文章记者 | 未验证适合本题的直接联系人 | 暂缓 | 只有原创数据、独家游戏或明显新闻点才 pitch |
| 16 | 2MinuteGames | 独立游戏创作者 | 未验证 | 暂缓 | 可做开发者归属与实测玩法纠错，但主题匹配不足 |
| 17 | Qookie Games (Carrd) | 独立游戏创作者 | 未验证 | 暂缓 | 先确认作品与站内游戏的直接关系 |
| 18 | PlayWithPals | 浏览器多人游戏团队 | 未验证 | 暂缓 | 若有站内对应作品，可提供准确玩家模式和来源链接 |
| 19 | Antics.gg | 浏览器多人游戏团队 | 未验证 | 暂缓 | 先确认仍活跃、作品相关性和正式联系方式 |
| 20 | GameFriday.party | 浏览器派对游戏团队 | 未验证 | 暂缓 | 可提供聚会游戏控制与人数矩阵；先验证主体与联系渠道 |

已核验联系方式来源：

- Hardik Trehan Contact: https://hardiktrehan.com/contact/
- Game Duddles Terms: https://gameduddles.com/terms-of-service/
- TwozyGames About: https://twozygames.com/about/
- GuessDoodle Privacy: https://guessdoodle.com/privacy-policy/
- FRVR Press: https://frvr.com/press/
- OtterGames Contact: https://ottergames.org/contact-us/
- Playhop Privacy: https://playhop.com/privacy-policy

发送前最低条件：页面仍在线、作者/主体真实、联系人用途合适、能指出至少一个对方文章的具体缺口、对应本站页面已完成修改。每天不超过 3–5 封，7–10 天最多跟进一次。

## 3. 第一批页面修改清单（先审清单，再改代码）

| 顺序 | 页面 | 建议修改 | 验收标准 |
|---:|---|---|---|
| 1 | `/games/iron-legion/` | 标题/description 直接回答游戏名与多人模式；首屏补 PvP/PvE、control-point、经典载具类型；加强到相关多人分类的内链 | 页面事实与实际游戏一致；新 GSC 周期观察 CTR，不能靠关键词堆砌 |
| 2 | `/blog/best-2-player-browser-games/` | 增加“同键盘/共享鼠标/在线设备”对照表；纳入 Duo、WHOT、Darts 等已验证条目；每项写清人数和控制 | 表格中每项可由真实游戏验证；不添加站内不存在的热门品牌词 |
| 3 | `/games/whot-the-ultimate-nigerian-card-game/` | 优化标题和 description 的可读性；首段说明 WHOT、玩家模式、是否共享设备；补规则和相关卡牌内链 | 保留准确游戏名；第一页曝光下重点改善搜索摘要而非扩写空话 |
| 4 | `/games/bounce-path-multiplayer/` | 首段明确 multiplayer 类型、人数和控制；改善 title/description 的点击理由 | 不改变玩法事实；小样本先观察 14–28 天 |
| 5 | `/games/duo-water-and-fire/` | 补同键盘控制键、合作目标、双人设定和失败条件；链接到双人指南 | 与实际嵌入测试一致；避免暗示在线匹配 |
| 6 | `/games/darts-pro-multiplayer/` | 明确本地/在线/轮流方式、计分和控制设备；链接到 sports/racing 或多人分类中最准确的一个 | “multiplayer darts” 查询能在首屏得到直接答案 |
| 7 | `/games/ninja-parkour-multiplayer/` | 围绕已有查询补玩家模式、关卡目标、控制和开局步骤；避免把品牌词泛化成新分类 | 保留现有点击对应意图；内容可实测 |
| 8 | `/category/local-2-player/` | 增加简短筛选说明：同键盘、共享鼠标、轮流；把指南与高证据游戏互链 | 只使用真实库存；不为 Slope 等不存在游戏建立入口 |

不建议现在做的事：批量生成 55 个新候选页、复制 Semrush 高量词进标题、一次修改 20+ 页面、为外联先造薄内容。

## 4. Analytics 最小自动测试

新增纯函数模块和 Node 内置测试，未引入新依赖：

- DOM 事件映射：`gfm-game-start` → `game_start`、`gfm-game-iframe-loaded` → `game_iframe_loaded`、`gfm-game-load-timeout` → `game_load_timeout`
- 参数：`game_slug`、`game_title`、`provider`、`load_time_ms`、`timeout_ms`
- Consent：accepted 时转发；rejected 和 unknown 时不转发

验收命令：`npm run test:analytics`。同时需通过 typecheck、lint 和 production build。

## 5. Cloudflare、GA4、Cookie 的真实验收

### 已验证

- Cloudflare Pages 后台和构建日志确认 Production 为 `main` 的 `8b85ecebe793e1c4486fc094aebca06ef6e6b276`，2026-08-25 部署成功；构建命令为 `npm run build`，生成 228 个静态页面。
- 2026-09-04 Tag Assistant 对 `G-1FXG6YDPHK` 的真实浏览器测试确认：接受后发送 `game_start` 和 `game_iframe_loaded`。
- `game_start` 参数确认：`game_slug=iron-legion`、`game_title=Iron Legion`、`provider=GameMonetize`。
- `game_iframe_loaded` 还包含数值 `load_time_ms=33`。该值只表示 iframe load 事件，不表示游戏内容完全可玩。
- 拒绝后四项 Consent 的 Default/Update 均为 Denied；实际 Page View 请求携带 `gcs=G100`，且同一次重新启动没有新增两个游戏自定义事件。
- 拒绝状态下仍可能出现 Page View/Scroll 的无 Cookie 测量信号，这是当前高级 Consent Mode 的设计，不能仅凭存在请求判定拒绝失败。

### 尚未验证

- `game_load_timeout` 的可控真实浏览器场景。
- 首次访问默认状态、接受后不刷新直接撤回、实际浏览器 Cookie 读写。
- Clarity 在接受/拒绝状态下的实际脚本、Cookie 和记录行为。
- 仓库中的 Analytics 测试重构尚未验证为已部署；上述线上验收针对 Production `8b85ece`。

### 请提供的 GSC 数据（CSV 优先于截图）

1. Performance → Search results：比较 2026-08-24 至最新完整日期与前一等长周期；导出 Queries 和 Pages。
2. Page indexing：导出已编入/未编入的具体 URL 和原因，而不只提供汇总数量。
3. 新数据评估后，只对少数优先 URL 做 URL Inspection。

### 后续测量

不再重复上述 Tag Assistant 接受/拒绝测试。下一批只补 `game_load_timeout`、Clarity/Cookie 行为，并在需要趋势判断时导出 GA4 Events 报告。

### 请提供的 Clarity 截图

1. 2026-08-25 至今 Dashboard：sessions、users、pages/session、dead clicks、quick backs。
2. Top pages 表。
3. 一段已接受 Cookie 并启动游戏的录屏摘要；不要提供含个人敏感输入的录屏。

### 请提供的 AdSense 截图

1. Sites 中 `gamesformany.com` 的 approval 和 ads.txt 状态。
2. Payments overview 是否仍要求 “Tell us about you”；遮盖姓名、地址、证件、税务和银行信息。
3. Policy center 是否有问题。

## 6. 数据、空文件与执行顺序
- Semrush/GSC 原始大文件只应本地保存并加入 `.gitignore`；不要提交 Git。
- 大体积 NDJSON 衍生文件也只保留本地。提交脚本和小型 Markdown 摘要即可重现结论。
- 空的 `WEbsite-trackcodes.txt` 未被代码引用，没有运行用途；不应把 tracking ID 或凭据放进此文件。建议忽略并在确认无人工用途后删除。
- 保留 `docs/07-first-backlink-outreach-batch.md` 作为策略草稿；本文件作为 2026-08-31 的核验补充，不覆盖原草稿。

最合理顺序：先确认线上版本和测量链路 → 获取 8 月 25 日后 GSC 导出 → 逐页实施上面前 3–5 项并观察 → 只向已验证且能提供具体价值的 4 个 P1 目标发送 → 再扩到下一批。原因是可靠的索引、CTR 和事件数据会同时提高页面优化质量与外联说服力，最接近“尽快提高 SEO 并最终获得广告收入”的目标。
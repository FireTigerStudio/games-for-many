# Games for Many 关键词分类与 URL Map

> 状态：阶段 3 初版，基于 2026-08-11 Semrush 美国数据库导出
> 更新日期：2026-08-11
> 市场：美国；语言：英文；首发设备重点：桌面浏览器

## 1. 数据质量结论

- 输入：`data/research/` 中 9 份关键词 CSV（715 行）和 6 份 SERP URL CSV（590 行）。
- 关键词去重：652 个唯一查询，63 个重复行；Keyword、Volume、KD、CPC 均无空值。
- 明显噪声：成人/NSFW、赌博、下载、开发工具、盗版、无关品牌或未授权 IP、单款非供应商游戏实体词。
- 初步规则命中 219 个明显排除项；其余仍需按搜索意图、授权供给和 SERP 逐项复核，不能把“未命中规则”等同于可用。
- SERP 的 Organic 结果中 YouTube 出现 115 次，CrazyGames 18 次，Poki 11 次；视频、论坛和大型聚合站占比较高。Volume/KD 只能用于排序，不能替代 SERP 意图判断。
- 当前导出对泛 `browser games` 和 `games with friends` 覆盖较多，但对核心 `2 player games online` 及其同义词覆盖不足。核心首页词沿用既有决策，后续应补一轮 Phrase Match/Related/Questions 数据，不能用这批数据的缺失误判为无需求。

原始 CSV 保持不改写、不删除。正式清洗结果只用于选词和映射，不自动创建页面。

## 2. 关键词分类体系

每个关键词先按“玩家连接方式”进入一个主集群，再按“游戏类型、设备输入、内容意图”加辅助属性。辅助属性用于页内小节、筛选和自然语言覆盖，不应自动生成大量标签页。

### 2.1 玩家连接方式（一级分类）

| cluster_id | 玩家任务 | 可用关键词方向 | 主要页面 | 首发条件 |
|---|---|---|---|---|
| MODE-LOCAL-2P | 两人在同一台电脑一起玩 | `two player games on one computer`、`local 2 player games`、`same keyboard games`、`2 player games on the same device` | `/category/local-2-player/` | ≥8 款，其中大部分已验证同键盘/同设备 |
| MODE-ONLINE-2P | 两人从不同设备在线对战或合作 | `online 2 player games`、`2 player browser games online`、`online games for two friends` | `/category/online-2-player/` | ≥8 款，并明确房间码、邀请或匹配方式 |
| MODE-FRIENDS | 与已认识的朋友在线玩 | `web browser games with friends`、`games to play with friends online`、`online games to play with friends long distance` | `/category/online-with-friends/` | ≥8 款，能说明如何邀请朋友 |
| MODE-RANDOM | 与随机玩家在线匹配 | `multiplayer browser games`、`online multiplayer browser games`、`browser multiplayer games` | `/category/online-multiplayer/` | ≥8 款，聊天、账号和内容安全已审核 |
| MODE-LOCAL-MULTI | 3 人以上共享设备/房间 | `local multiplayer browser games`、`same computer multiplayer games`、`pass and play browser games` | 暂不建页，先作筛选 | ≥8 款且与 local 2-player 有足够差异 |
| MODE-GROUP | 大群体、聚会或远程团队 | `group online games`、`games online for groups`、`online party games for large groups` | `/category/group-games/` 或专门 Guide | ≥8 款；先用 SERP 判断直接玩还是活动指南意图 |

### 2.2 游戏类型（二级分类）

| subtype | 关键词方向 | 建议用途 | 当前处理 |
|---|---|---|---|
| Board & strategy | two-player board games、online checkers with friends、online tic tac toe for two | 分类页分组、游戏页属性、库存足够后独立集合 | 优先；已有 Checkers、Tic Tac Toe |
| Sports | 2 player sports games、multiplayer sports browser games、online darts with friends | 分类页分组或 `/category/sports/` | 优先；已有 Darts、Pong |
| Racing | 2 player racing games、multiplayer racing browser games、racing games with friends | 分类页分组，库存足够后独立集合 | 第二批；需补合法库存 |
| Arcade & action | 2 player arcade games、multiplayer arcade browser games、quick games with friends | 分类页分组 | 优先；已有 Pong、Parkour |
| Platform & parkour | 2 player platform games、online parkour games with friends | 标签/Guide 小节，不单独建薄页 | 第二批 |
| Puzzle & physics | 2 player puzzle games、multiplayer puzzle browser games | 标签/Guide 小节 | 第二批 |
| Trivia & party | online trivia games with friends、free online trivia games for groups、party games online with friends | Group/Party 集群 | 有需求，但需先找到合规供给 |
| Card | multiplayer card games online、browser card games with friends | 后续分类 | 供应不足前 noindex |

不得使用未授权的 Pokémon、Mario、Roblox、Minecraft、Fortnite 或单款第三方品牌名来扩展这些分类。

### 2.3 设备与输入方式（辅助属性）

| attribute | 词语与用户问题 | 放置位置 |
|---|---|---|
| Same keyboard | same keyboard、one keyboard、shared keyboard | Local 分类导语、卡片徽标、游戏详情和 Guide 对比表 |
| Same computer/device | one computer、same computer、same device、shared screen | Local 分类、游戏详情 |
| Separate devices | separate devices、different computers、long distance | Online with friends 分类、游戏详情 |
| Desktop/mobile | browser games on phone、mobile browser、desktop browser | 仅在实际测试后写入游戏详情和筛选 |
| Invite method | room code、private room、invite link、random matchmaking | Online 游戏页的 How to start 小节 |
| Account/download | no account、no sign up、no download | 只陈述实际事实；`no download` 导出噪声很高，不建立泛薄页 |

### 2.4 内容意图（页面角色）

| intent | 关键词形态 | 页面类型 | 内容任务 |
|---|---|---|---|
| Play/browse | free、online、browser、multiplayer + 类型 | 首页/分类页 | 让用户快速找到并启动合适游戏 |
| Compare/choose | best、good、top、2026、for couples/friends/groups | Guide | 实测比较、适合谁、限制和选择方法 |
| Learn | how to play、controls、tips、rules | 游戏页或深度 Guide | 回答具体操作问题，不另建短问答页 |
| Entity | `[licensed game title] online/controls/how to play` | 游戏页 | 一个游戏只有一个 canonical URL |
| Brand | Games for Many、gamesformany | 首页/About | 品牌防守，不作为泛词重复塞入正文 |

## 3. 本批数据中的可执行机会

以下是已清洗后最值得保留的代表词，不表示看到一个词就立即创建一个 URL。

| priority | primary keyword/theme | volume | KD | CPC USD | intent | 拟定主 URL | 决策 |
|---:|---|---:|---:|---:|---|---|---|
| 1 | two player games on one computer | 110 | 34 | 0.12 | Informational | `/category/local-2-player/` | 与首发供给最匹配；补充 same-keyboard 同义词数据后发布 |
| 1 | best multiplayer browser games | 260 | 34 | 2.05 | Informational, Commercial | `/blog/best-multiplayer-browser-games/` | Guide；分类页主词保留给 play/browse 意图 |
| 1 | good multiplayer browser games | 170 | 25 | 1.32 | Informational | 同上 | 作为 Guide 次级表达，不另建页 |
| 1 | group online games | 480 | 34 | 0.81 | Informational | `/category/group-games/` 或 Group Guide | 先复核 SERP 与游戏库存再确定页面类型 |
| 1 | games online for groups | 260 | 30 | 1.07 | Informational | 同上 | 与 group online games 合并 |
| 1 | web browser games with friends | 90 | 35 | 0.00 | Informational | `/category/online-with-friends/` | 强相关但量小；以实际邀请能力作为入库条件 |
| 1 | online games to play with friends long distance | 70 | 29 | 1.88 | Informational | `/blog/browser-games-for-long-distance-friends/` | 可形成场景型 Guide，需先有足够可邀请游戏 |
| 2 | best browser games | 6,600 | 36 | 1.66 | Commercial | `/blog/best-browser-games/` | 高量但主题更宽、SERP 强；首发不抢在 multiplayer 主题之前 |
| 2 | best web browser games | 4,400 | 43 | 1.66 | Commercial | 同上 | 同义词，不另建页 |
| 2 | best browser based games | 1,600 | 34 | 1.99 | Informational, Commercial | 同上 | 同义词，不另建页 |
| 2 | best free browser games 2026 | 390 | 17 | 1.26 | Informational | `/blog/best-free-browser-games-2026/` | 低 KD 但必须持续更新，且不能复制普通 best 榜单 |
| 2 | online games to play with friends on phone | 390 | 36 | 1.68 | Informational | `/blog/browser-games-to-play-with-friends-on-phone/` | 必须先完成真实移动端测试 |
| 2 | online trivia games with friends | 320 | 43 | 0.49 | Informational | Group/Trivia Guide | 有供给后再建 |
| 2 | free online trivia games for groups | 260 | 30 | 0.69 | Informational | Group/Trivia Guide | 与上项按 SERP 意图合并，避免蚕食 |
| 3 | online party games for large groups | 50 | 30 | 1.43 | Informational | Group Guide | 后续扩展，首批库存不足时不建页 |
| 3 | online games for large groups | 30 | 14 | 1.53 | Informational | 同上 | 低量低 KD 的辅助表达 |

## 4. URL Map 与页面边界

| target URL | page type | primary theme | 可自然覆盖的次级主题 | 不应争夺的词 |
|---|---|---|---|---|
| `/` | Home | 2 player games online / 2 player browser games | free browser play、local and online choices | best browser games、group games |
| `/category/local-2-player/` | Category | local 2 player games | one computer、same keyboard、shared screen | online with friends |
| `/category/online-2-player/` | Category | online 2 player games | two friends、separate devices、private match | random multiplayer、local games |
| `/category/online-with-friends/` | Category | browser games with friends | invite link、room code、long distance | generic best browser games |
| `/category/online-multiplayer/` | Category | multiplayer browser games | random players、online matches | best multiplayer browser games（Guide 主词） |
| `/category/group-games/` | Category, pending | group online games | party、trivia、large groups | local two-player games |
| `/blog/best-multiplayer-browser-games/` | Guide | best multiplayer browser games | good/cool multiplayer browser games | generic category play intent |
| `/blog/best-browser-games/` | Guide, phase 2 | best browser games | best web/browser-based/internet browser games | two-player homepage theme |
| `/games/[slug]/` | Game | licensed game title + play intent | controls、how to play、player mode、device | generic category or best-list primary terms |

现有 `/category/2-player/` 在新 IA 落地前保留。进入代码阶段时应决定其作为总览页还是重定向到首页/更具体分类，不能与首页同时瞄准同一核心词。

## 5. 页面创建与索引门槛

| URL 类型 | 创建/索引门槛 |
|---|---|
| 首页 | 品牌、主垂类、Local/Online 分流和编辑推荐完整 |
| 游戏页 | 授权、安全、可玩、原创试玩内容、controls 和设备信息全部通过 |
| 分类页 | 至少 8 款强相关游戏，450–800 字真正帮助选择的独有内容 |
| 标签页 | 至少 5 款强相关游戏，且搜索任务不能由现有分类页满足 |
| Guide | 有独立比较/问题意图、实测证据和足够合规游戏支持 |

低于门槛的属性可用于站内筛选，但应 `noindex` 且不进入 sitemap。近义词合并到同一页面，不按拼写和词序制造页面。

## 6. 排除与人工复核规则

直接排除：成人/色情、赌博/赌场/真钱博彩、盗版、下载器、开发引擎、学校解锁、明显幼儿导向、未授权 IP，以及与浏览器多人游戏无关的查询。

必须人工复核：

- 单款游戏名：只有进入授权供应商清单后才可使用；
- `horror`、`zombie`、`drinking games`：需分别检查暴力、年龄和广告安全，不进入首发词库；
- `phone`、`mobile`、`same keyboard`、`private room`：只有实测功能成立才可写；
- 年份词：只有页面确实按当年更新并显示方法/日期才使用；
- 高 CPC 品牌词：不得因 CPC 高而偏离 multiplayer 主题。

## 7. 验收清单

- [x] 已盘点 715 行关键词和 590 行 SERP 数据；
- [x] 已建立玩家模式、游戏类型、设备输入和内容意图四维分类；
- [x] 每个已规划 URL 只有一个主要关键词主题；
- [x] 分类页、游戏页和 Guide 的搜索任务已分开；
- [x] 已记录当前导出对核心 two-player 词覆盖不足；
- [ ] 补导核心 two-player Phrase Match、Related 和 Questions 数据；
- [ ] 对 Priority 1 查询逐个完成 Top 10 SERP 人工复核；
- [ ] 游戏库存达到门槛后再确认并创建新 URL。

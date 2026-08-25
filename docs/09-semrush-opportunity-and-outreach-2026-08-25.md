# Semrush 关键词机会与外链分析（2026-08-25）

> 状态：分析进行中。本文件保存已确认结论；原始 CSV 保持在 `data/research/20260825-semrush/`，不修改、不覆盖。

## 1. 分析目标

1. 找出未来 14–30 天最值得增强的 5–10 个现有 URL。
2. 区分“现有页次级词”“可能的新页面”和“明确排除词”，避免关键词蚕食和批量薄页。
3. 从竞品具体 Backlinks 中筛选首批 20 个真实、相关、可解释的外联目标。
4. 将结论转换为小批次 App 修改、部署日期和 GSC 观察指标，而不是只保存 Semrush 数字。

## 2. 数据口径与清洗进度

- 7 份 Keyword Gap 共 162,481 行，去重后 102,852 个唯一关键词。
- 第一轮按主题词、非品牌、Volume 不低于 20、KD 不高于 65 筛出 2,128 个候选；这只是候选池，不是发布清单。
- 4 份 Active Backlinks 已包含 Source URL、Source Title、Target URL、Anchor、链接属性和 First/Last Seen，资料已足够，不再追加 Semrush 导出。
- Plays.org 50,000 条 Active Backlinks 是主要正向样本；Gamnite、Dinogame、WinroGames 的大量 SEO 售卖、PBN、过期域和不相关链接主要作为排除样本。

## 3. 已确认的关键词判断

| 主题/代表词 | Semrush 信号 | 当前决策 | 主要 URL/条件 |
|---|---:|---|---|
| `2 player games` | Volume 201,000；KD 62 | 长期核心，不作为短期新页面 | 首页；继续用 GSC 判断真实进展 |
| `games to play with friends` | 18,100；KD 39 | 有需求但暂不建页 | 先验证足够多私人邀请、房间码或远程朋友玩法 |
| `2 player games to play on one pc` | 2,400；KD 40 | 可执行现有页机会 | `/category/local-2-player/`，覆盖同机、同键盘、共享屏幕 |
| `ninja parkour multiplayer` | 1,900；KD 18 | 近期实体页机会 | 现有 Ninja Parkour 页；与 GSC 已有排名/点击交叉验证 |
| `multiplayer online dominoes` | 4,400；KD 43 | 可由现有页/Board & Card 承接 | 必须先验证在线真人模式和匹配方式 |
| `2 player chess` | 14,800；KD 53 | 有需求但竞争较强 | 棋类游戏页和 Board & Card；不另造近义标签页 |
| `best browser games` | 6,600；KD 43 | 延期 | 主题过宽，先做强双人/多人主题 |

明确排除：`unblocked`/规避学校限制、未授权或本站没有供给的 IP 游戏、现实生活聚会题、泛 MMO、下载/手机 App 意图、竞品导航词、成人/赌博及错误多人承诺。

## 4. 库存与数据质量约束

- 当前 `data/games.json` 有 94 款游戏，其中 85 款满足授权、安全和 iframe 发布条件。
- 约 40 款标记为 Local/Both，61 款标记为 Online/Both。
- 94 款全部带 `multiplayer` tag，因此 tag 不能作为真实多人证明。
- 关键词到游戏的匹配必须使用 `gameplayType`、玩家数、控制、邀请/匹配方式和试玩证据。无法验证时不写入页面承诺，也不为该词建索引页。

## 5. 已确认的外链模式

优先学习：

1. 具体主题资源文章引用具体游戏或数据页；例如迷宫类型、卡牌玩法、浏览器游戏专题。
2. 编辑文章因一个可核验事实、独特游戏或新闻点引用具体页面，而不是泛泛引用首页。
3. 开发者作品页、Speedrun/游戏资料页在信息准确且社区真实存在时引用游戏详情页。
4. 近两年仍更新的 two-player、same-keyboard、browser multiplayer、games with friends 作者，可接收真实控制/人数/连接方式对照资料。

明确排除：购买链接、PBN、自动目录、搜索结果页、站点级重复链接、异常大量外链页、博彩/成人混杂、`unblocked` 推广、要求精确商业锚文本的交换。

当前外联候选仍需逐页验证相关性、更新日期、作者、联系方式和本站能提供的独特事实；Authority Score 不能代替人工判断。

## 6. 与需求和 App 的同步方式

1. 本文件保存分析证据、排除理由、URL 决策和外联目标。
2. `docs/08-seo-progress-and-gsc-baseline-2026-08-24.md` 只同步最终进度和下一批动作，不重复粘贴全部分析。
3. `docs/02-keyword-map.md` 仅在主关键词到 URL 的正式分工改变时更新。
4. `docs/07-first-backlink-outreach-batch.md` 在首批 20 个目标完成核验后更新，并保护站长现有未提交改动。
5. App 只按 5–10 页的小批次修改；每批记录页面、假设、部署日期、GSC/GA4 指标和 14–28 天观察窗口。

## 7. 剩余分析任务

- 将 2,128 个候选按现有页、新页候选和排除项完成主题归并。
- 用 GSC 真实曝光优先级校正 Semrush Volume/KD。
- 对前 20 个外链候选逐页验证联系人和可提供价值。
- 输出第一批 App 修改清单；在清单确认前不修改页面代码。

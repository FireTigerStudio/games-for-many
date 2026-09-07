# 首批外链与分发执行稿（Semrush 证据版）

> 更新日期：2026-08-12
> 数据来源：仓库中的 `plays.org-backlinks.csv`、`plays.org-backlinks_refdomains.csv`、`plays.org-backlinks_anchors.csv`。
> 目标：获得真实推荐访问、编辑提及和少量高相关引用；不购买链接、不群发、不做垃圾目录。

## 1. 证据结论

本地 Semrush 导出并不是 Games for Many 自己的外链数据，而是竞品 `plays.org` 的样本，因此只能用于判断“什么类型的页面和内容容易获得链接”，不能把其中域名当作可以直接提交的名单。

- 外链明细共 1,470 条，来源域汇总 431 个，锚文本记录 13,109 条。
- 1,470 个来源页面的 Page AS 均值约 1.11，中位数为 0；Page AS 不低于 10 的只有 29 条，不低于 20 的只有 6 条。数量很大不等于质量很高。
- 431 个来源域中，Domain AS 不低于 40 的有 76 个，不低于 50 的有 37 个，不低于 60 的有 13 个；但高域分也不代表该链接可主动复制。
- 样本中表现最好的链接通常指向具体游戏页或具体专题页，而不是只指向首页。例如迷宫专题、Reversi、数学游戏、卡牌游戏和节日游戏。
- 高质量案例主要来自编辑文章、教育资源页、游戏专题文章、媒体报道和开发者/游戏资料页；大量低分页面、通用目录和站点级重复链接不应复制。
- Semrush 明细中的 `nofollow/sponsored/sitewide` 字段可能受导出范围或识别方式影响，不能据此断言所有链接都是自然 dofollow；执行前仍需逐站人工确认。

## 2. 竞品样本中值得学习的链接模式

| 模式 | 样本案例 | 对 Games for Many 的可复制做法 | 优先级 |
|---|---|---|---:|
| 具体主题资源文章 | DoYouMaze 的迷宫类型文章引用具体迷宫游戏 | 制作可被引用的多人游戏专题、控制方式对照和玩法数据页，再联系真正写该主题的作者 | 1 |
| 编辑媒体报道 | PC Gamer、How-To Geek 的文章引用具体游戏页 | 只有当游戏、数据或选题具有新闻点时做定向媒体 pitch；不群发首页介绍 | 3 |
| 教育/教学资源页 | University of Iowa、Edutopia、Tech & Learning 引用数学或活动游戏 | 当前站点不主打儿童教育，不能照搬；仅对适合成人课堂、团队活动的安全多人游戏做资源页 | 3 |
| 游戏数据库/开发者资料页 | Speedrun.com 的游戏资料页链接游戏网站 | 仅为真正适合速通、且有社区和准确资料的游戏提交；不批量创建空页面 | 2 |
| 高相关评测/推荐文章 | 浏览器游戏、朋友聚会、双人游戏文章引用具体页面 | 首批重点寻找已经写过 browser multiplayer、two-player、same keyboard 的作者，提供准确可核验的补充素材 | 1 |
| 产品社区 | Semrush 样本中 Product Hunt 仅出现 1 个来源域链接 | 只作为品牌发布备选，不把它当首批 SEO 外链渠道；当前官方规则明确不重点展示 directories/lists | 暂缓 |
| 通用目录/站群 | Viesearch 等产生大量重复链接 | 不复制。重复量、域名分和真实推荐价值不是一回事 | 排除 |

## 3. 首批真正执行顺序

### P1：已收录游戏的开发者或发行平台

目标：优先联系能够确认游戏资料、拥有开发者主页、作品页、媒体页或社交主页的真实主体。

执行：

1. 每封邮件只对应一款已上线游戏和一个准确详情页。
2. 提供已核验的信息：玩家人数、连接方式、控制键、桌面/手机可用性和来源平台。
3. 先请对方纠错或确认；只有对方确实维护作品/媒体资源页时，才自然提出可以引用该详情页。
4. 不要求指定锚文本，不交换排名，不把 GamePix/GameMonetize 的平台支持邮箱当成几十款游戏的批量外链入口。

邮件模板：

```text
Subject: We reviewed and listed [GAME TITLE]

Hello [NAME],

We tested [GAME TITLE] and published a reviewed multiplayer listing here:
[GAME PAGE URL]

It records the player setup, controls, supported devices and the official playable source. Could you confirm that these details are accurate? We will correct anything that is wrong.

If you maintain an official portfolio, press page or community resource for the game, you are welcome to reference this tested setup page for players who need the multiplayer instructions.

Best,
Games for Many
https://gamesformany.com/
```

### P1：高相关内容作者定向外联

目标对象必须已经发布过以下主题之一：browser multiplayer games、two-player browser games、same-keyboard games、online board games、party games、games to play with friends。

先准备能让作者直接核验和引用的素材：

- 一张“本地双人 / 在线匹配 / 同屏轮流”对照表；
- 每款游戏的真实控制键、玩家人数和启动限制；
- 一个具体分类页或指南页，而不是只发首页；
- 3 至 5 款最符合该作者文章主题的游戏，不发 94 款总目录。

外联模板：

```text
Subject: Tested browser multiplayer details for your [TOPIC] article

Hi [NAME],

I read your article “[ARTICLE TITLE]”. I noticed readers choosing browser multiplayer games often need to know whether a title is local, online matchmaking or turn-based before opening it.

I maintain Games for Many and manually checked the player setup and controls for these relevant games:
- [GAME + ONE VERIFIED FACT]
- [GAME + ONE VERIFIED FACT]
- [GAME + ONE VERIFIED FACT]

The full tested comparison is here: [MOST RELEVANT GUIDE/CATEGORY URL]

If it improves the article, feel free to use the data or reference the page. Disclosure: I operate the site.
```

### P2：Indie Hackers 建站复盘

目的首先是获得真实反馈和品牌发现，不承诺产生 dofollow 或排名提升。

建议主题：`I built a curated browser multiplayer site instead of importing thousands of games`。

正文必须包含可复用经验：为什么厂商标签不能直接等同于多人玩法、如何识别本地/在线模式、如何控制重复页和薄内容、如何审核广告及嵌入来源。文末披露站长身份，并仅放首页或最相关的方法页。

### P2：相关游戏社区和问答

只在真实问题能够由现有页面直接解决时参与。先完整回答，再给补充链接并披露站长身份。禁止复制粘贴模板、伪装用户或集中发布。

回答骨架：

```text
For two people on one keyboard, first check whether the game lists two separate key groups. Turn-based board games can usually share one mouse, while real-time games need non-conflicting controls.

[Give 2-3 concrete game suggestions and explain why they fit.]

I maintain a tested list with player modes and controls here: [RELEVANT PAGE]. Disclosure: this is my site.
```

### 暂缓：Product Hunt

Product Hunt 的 2026 官方 Featuring Guidelines 明确列出 directories or lists 通常不予重点展示。Games for Many 当前形态与目录接近，因此暂不投入首发素材和拉票精力。只有未来形成明显独立产品能力（例如多人游戏匹配工具、可交互控制筛选器或原创数据产品）后再评估。

## 4. 第一批 20 个目标如何从 Semrush 数据得到

不要直接照抄 `plays.org` 的来源域。按以下流程建立真正适合本站的名单：

1. 从 Google/Semrush 搜索上述六类主题文章，而不是搜索“submit website”。
2. 仅保留近两年仍更新、作者和联系方式真实、正文确实推荐浏览器游戏的页面。
3. 核对页面是否已有失效游戏、缺少多人模式说明或控制信息；只有存在真实补充价值才联系。
4. 每个域只保留一个最佳联系人，首批上限 20 个。
5. 评分：主题相关性 40%、页面真实流量/排名 25%、编辑独立性 20%、可提供独特资料 15%。低于 60/100 不联系。

`plays.org` 样本中的 PC Gamer、How-To Geek、Edutopia 等用于证明“编辑引用具体资源页”的模式有效，不代表新站可以直接索要链接。Product Hunt、AlternativeTo、SaaSHub 也不能因为竞品出现过就自动列入首批。

## 5. 执行记录字段和跟进规则

每次外联记录：日期、目标 URL、域名、作者/联系人、主题相关性、对应本站页面、可提供的独特事实、发送内容、是否披露、回复、最终链接属性、引荐访问和后续动作。

- 每日最多 3 至 5 封真正个性化邮件；
- 7 至 10 天无回复时最多跟进一次；
- 不购买 dofollow、不做 PBN、不做自动目录、不做垃圾评论；
- 不用精确匹配商业关键词要求锚文本；
- 每月按“新增相关 referring domains + 引荐访问 + 有效回复”复盘，不按总链接数复盘。

## 6. 用户现在可以做的事

1. 在 Semrush 中导出 20 至 50 个直接同行（多人/双人浏览器游戏站）的 Backlink Gap，而不只分析 `plays.org` 一个站。
2. 导出字段至少包含：Source URL、Source Title、Referring Domain、Authority Score、Target URL、Anchor、Follow/Nofollow、First Seen、Last Seen、Estimated Traffic。
3. 把导出文件放入本仓库根目录或 `data/research/`；下一轮按相关性和可复制性生成首批 20 个真实联系人。
4. 如果暂时不再导出，先从已上线游戏中挑 10 款最有特色的，寻找其开发者官网/作品页联系人。这是当前最安全、最可执行的一批。

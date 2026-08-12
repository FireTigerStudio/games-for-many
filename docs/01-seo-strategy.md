# HTML5 游戏聚合站 SEO 策略

> 文档状态：阶段 3 执行规则（已加入关键词词簇与页面分工）
> 更新日期：2026-08-11
> 适用范围：英文站、美国为首要市场（已确认）  
> 原则：围绕真实玩家任务建立小型主题权威，不靠批量薄页或未授权品牌词获流量。

## 1. SEO 的核心判断

这个项目的 SEO 不是“导入几千款游戏并等 Google 收录”。新站需要证明三件事：

1. **可玩且可信：** 游戏能稳定启动，来源和开发者透明，无侵权、欺骗或危险广告。
2. **页面有新增价值：** 除 iframe 外，有人工试玩后的玩法摘要、控制、技巧、适合人群、设备信息和相关游戏推荐。
3. **站点主题集中：** 首批页面围绕一个明确垂类，游戏页、分类页和文章互相支持，而不是随机覆盖所有热门词。

Google 当前明确强调 people-first content、原创信息/分析、清晰站点焦点与实际经验；批量自动生成、仅改写他人描述、为搜索流量跨大量主题铺页都属于风险信号。因此 Programmatic SEO 在本项目中只自动化确定性部分（路由、元数据字段、sitemap、内链候选），不自动制造无独有价值的正文。

## 2. 关键词分层

`data/research/` 的首批 Semrush 数据已完成盘点。具体数字、multiplayer 细分类与 URL 分配见 `docs/02-keyword-map.md`；本节规定全站如何使用这些词。

关键词不是一张需要逐项塞进正文的清单。每个 URL 只承担一个主要搜索任务，并自然覆盖该任务的同义表达：

1. **玩家连接方式：** local two-player、online two-player、online with friends、random multiplayer、local multiplayer、group/party；
2. **游戏类型：** board、sports、racing、arcade、platform、puzzle、trivia/party、card；
3. **设备和输入：** same keyboard、same computer、separate devices、mobile/desktop、room code/invite link；
4. **内容意图：** 直接玩、浏览选择、比较榜单、学习 controls/how to play、寻找指定合法游戏。

连接方式决定主要分类或 Guide；游戏类型和设备通常是页内分组、卡片属性与自然语言，不因存在关键词就自动建标签页。

### 2.1 品牌词（防守层）

已确认品牌为 `Games for Many`，主域名为 `gamesformany.com`。品牌词包括 `games for many`、`gamesformany`、`games for many 2 player games` 等自然组合。

- 目标 URL：首页、About、核心分类页。
- 目标：建立可识别品牌实体与直接访问，而不是只依赖泛词。
- 首页的品牌呈现与 WebSite/Organization 结构化数据统一使用 `Games for Many`；不把域名连写形式强塞入正文。
- 禁止：把第三方游戏、平台或知名 IP 名称伪装成本站品牌。

### 2.2 核心非品牌词（主题层）

形式示例（不是最终选词）：`tower defense games`、`2 player party games`、`io arcade games`。

- 目标 URL：`/category/[slug]` 或少量权威榜单。
- 搜索量通常高、竞争强，前 90 天用于构建主题，不把进入 Top 3 当作短期预测。
- 一个核心词簇只设一个主要目标 URL，避免分类页和榜单自相竞争。

### 2.3 中尾玩法词（增长层）

形式示例：`multiplayer tower defense browser games`、`local 2 player games on one keyboard`、`quick io games for short sessions`。

- 目标 URL：细分分类页、达到索引阈值的标签页或榜单文章。
- 优先找 SERP 与浏览器即玩意图一致、KD 较低、现有结果内容较旧/较薄的词。
- 不因有关键词就创建标签页；至少有 5–8 款高度相关游戏和独有导语才允许索引。

### 2.4 游戏实体与问题词（转化层）

形式：`[licensed game title] online`、`how to play [game]`、`[game] controls`、`games like [game]`。

- 目标 URL：`/games/[slug]`；“games like”在内容足够时可成为文章。
- 只使用供应商授权提供的正式标题；标题若包含潜在第三方 IP，先人工商标/授权复核。
- 页面应基于实际试玩或开发者资料回答问题，不照抄供应商 description。

### 2.5 信息型支持词（信任与链接层）

形式：玩法策略、机制解释、类型历史、设备/控制比较、策划访谈。

- 目标 URL：`/blog/[slug]`。
- 作用：获得自然链接、覆盖玩家问题、向商业价值更高的分类/游戏页导流。
- 不写与站点主垂类无关、只因 CPC 高的内容。

### 2.6 关键词在页面中的使用边界

- Title、H1、开头摘要围绕一个主主题，不重复罗列同义词。
- H2/H3 按用户问题组织，例如 local vs online、same keyboard、how to invite a friend；标题中只在自然时使用次级词。
- 正文通过真实机制、设备、控制和玩家场景覆盖语义，不设置关键词密度或强制重复次数。
- Meta description 是清晰、独有的点击摘要，不承载一串关键词。
- 分类页获得类型词；Guide 获得 best/compare/year/场景词；游戏页获得正式游戏名、controls 和 how-to-play 词。
- 若一个查询可由现有页面完整回答，就更新该页，不创建近似 URL。

## 3. Semrush + Google Trends 研究流程

### 3.1 你在 Semrush 要查什么

对每个候选垂类分别建立 Keyword Manager 列表，数据库选 United States、Desktop 与 Mobile 都检查：

1. Seed：核心类别词及 5–10 个玩法修饰词。
2. Keyword Magic Tool：导出 Phrase Match、Related、Questions。
3. Keyword Overview：记录 Volume、KD%、CPC、Intent、Trend、SERP Features。
4. SERP Analysis：记录 Top 10 中有多少是大平台、独立游戏站、文章、视频和官方游戏页。
5. Organic Research：对 CrazyGames、Poki、Playhop、SilverGames、Plays.org、BGames 做关键词差距；排除纯导航品牌流量后再看机会。
6. Backlink Gap：只保留与游戏、HTML5、开发者、休闲娱乐相关的 referring domains。

阶段 1 推荐导出：每个候选垂类 300–1,000 个关键词即可，不要先导出几十万行。CSV 放到 `/research/raw/semrush/2026-08/`；不要覆盖原始导出。

### 3.2 免费验证

- Google Trends：美国、过去 5 年、Web Search，对比垂类词；再看过去 12 个月季节性。Trends 是相对热度，不是绝对搜索量。
- Google Search：无痕手工检查 20–30 个优先词的真实意图和 SERP 类型。
- Google Keyword Planner：作为量级与商业意图的第二参考，不与 Semrush 数值硬拼。
- 上线后以 Search Console 的真实 query/page/device/country 数据为主要依据。

### 3.3 关键词筛选与评分

建议优先级分数（用于人工排序，不作为自动发布规则）：

`Opportunity = Intent Fit × Supply Fit × SERP Weakness × Topic Fit × Trend Stability`

每项 1–5 分：

- Intent Fit：用户是否明确想在浏览器直接玩或寻找该类型游戏。
- Supply Fit：是否至少有 3 款高质量、合法、移动/桌面适配的游戏支持该词。
- SERP Weakness：前十是否存在内容薄、体验差、过时或不完全匹配的页面。
- Topic Fit：是否强化首站垂类，而不是把主题拉散。
- Trend Stability：五年需求是否稳定；爆发词需说明事件/IP 风险。

Volume 和 KD 是辅助字段。低量但强意图、可形成主题集群的词，优先于高量但被品牌/应用商店垄断的词。

## 4. 关键词到 URL 的规则

| 搜索意图 | 主 URL 类型 | 创建条件 | 避免冲突 |
|---|---|---|---|
| 广泛寻找某类游戏 | `/category/[slug]` | 属于固定 IA 六分类之一，有足够库存 | 同主题榜单瞄准年份/选择帮助，不与分类页同标题 |
| 属性/玩法筛选 | `/tag/[slug]` | ≥5–8 款强相关游戏，有独有导语和稳定需求 | 近义标签合并；薄标签 noindex 且不进 sitemap |
| 玩指定合法游戏 | `/games/[slug]` | 授权验证、可稳定 iframe、原创内容完成 | 一个游戏只有一个 canonical URL |
| 比较/榜单/问题 | `/blog/[slug]` | 能提供试玩证据、选择标准或原创分析 | 不复制分类卡片列表充当文章 |
| 品牌/信任查询 | 首页/法律与信任页 | 品牌确定、信息真实 | About 不瞄准泛游戏词 |

`docs/02-keyword-map.md` 保存当前正式词簇、代表数据与 URL 分配。任何关键词在发布前只有一个 `primary_target_url`；次级页面只能作为支持页并用不同意图切分。

### 4.1 目录分页与筛选规范（2026-08-12 确认）

- 分类每页固定 24 款，库存不足时不制造空分页；
- 第一页使用 `/category/[slug]/`，第二页起使用 `/category/[slug]/page/[n]/`；
- 每个分页 URL 使用 self-canonical，不把第 2 页以后 canonical 到第一页；
- 上一页、下一页和页码必须是可抓取的 `<a href>`，不能仅依赖滚动或按钮加载；
- sitemap 只收录真实、200、canonical 的分类分页；
- 排序、设备、模式等筛选参数用于用户体验，默认 `noindex` 且不进入 sitemap；
- 分类第一页承载独有导语和选择内容，后续页避免重复长文，只保留准确标题、分页说明和游戏列表；
- 首页只展示有限编辑精选，完整库存由分类与分页承载。

| 分类 | 主要任务 | 关键区别 |
|---|---|---|
| Local 2 Player | 同设备双人游戏 | 同键盘、共享屏幕、轮流操作 |
| Online 2 Player | 两名真人在线游戏 | 好友、随机匹配、不同设备 |
| Multiplayer | 三人以上或多人大厅 | 在线匹配、多人房间 |
| Party | 快速聚会与轻竞技 | 易上手、短对局、淘汰赛 |
| Board & Card | 桌游与卡牌 | 回合、策略、棋盘规则 |
| Sports & Racing | 体育与竞速 | 足球、球类、赛车、计时 |
| IO & Arena | 实时竞技场 | IO、即时生存、排名 |

## 5. 内容矩阵

首个 90 天建议控制在可人工保证质量的范围：

| 内容类型 | 数量 | 搜索任务 | 必须提供的独有价值 |
|---|---:|---|---|
| 首页 | 1 | 发现站点与主垂类 | 编辑推荐逻辑、清晰定位、最近更新 |
| 主分类页 | 1 个重点 + 必要 IA 页 | 浏览某类游戏 | 选择指南、子玩法、精选理由 |
| 游戏页 | 30–50 | 立即游玩/学控制 | 实测摘要、控制、机制、设备、提示、来源 |
| 可索引标签页 | 初期 3–6 | 按属性筛选 | 足够库存、独有说明、非近义重复 |
| 榜单/指南 | 4–6 | 比较与决策 | 入选标准、逐款差异、适合谁、实测记录 |
| 开发者/编辑内容 | 1–3 | 经验与行业信息 | 采访、幕后资料、原创数据或方法 |
| 法律与信任页 | 5 + About/Contact | 信任与合规 | 真实公司/联系方式、数据与供应商披露 |

### 5.1 游戏页最低质量门槛

- 可玩的官方 iframe，清晰 Play 区域和加载失败提示。
- 150–300 字原创介绍（最终以内容是否完整为准，不机械凑字）。
- Controls、How to play、2–4 条真实技巧、设备/输入说明。
- Developer、source platform、最后审核日期与内容安全标签。
- 4–8 个语义相关游戏，不只按同标签随机抽取。
- `VideoGame`、Breadcrumb 结构化数据只填写页面真实可见且可验证的信息。
- 若没有足够独有内容或游戏失效：不索引/下架，不保留空壳页。

建议内容模块不是为了凑字，而是为了覆盖玩家在搜索后真正需要的信息：

1. 40–70 字编辑摘要：玩法、胜利目标和最明显差异；
2. `How to Play`：开始方式、回合/比赛循环、胜负条件；
3. `Controls`：按设备列出实际按键/触控，不把一句供应商文案当完整说明；
4. `Player Setup`：local/online、same keyboard/separate devices、人数、邀请或匹配方法；
5. `Tips`：2–4 条经过试玩验证的具体建议；
6. `Why We Picked It`：适合谁、会话长度、优点和限制；
7. 可验证的开发者、来源、审核日期和设备状态。

这些模块自然承接游戏实体词、`how to play [title]`、`[title] controls` 和设备问题；游戏页不重复争夺 `best multiplayer browser games` 等集合词。

### 5.2 分类页最低质量门槛

- 解释类别及玩家选择维度，不写百科式空话。
- 编辑精选、热门、最新或按机制分组，排序依据可解释。
- 300–600 字独有内容，分布在用户需要的位置，不把大段 SEO 文本堆在页脚。
- 链接至 1–3 篇真正帮助选择/游玩的指南。

### 5.3 博客页最低质量门槛

- 明确作者/审核者、更新时间、选择方法。
- 榜单中的游戏必须实际可玩且已审核；说明优点、限制和适合人群。
- 使用自有截图前确认供应商素材许可；否则使用授权媒体包并标注来源。
- 每篇服务一个主问题，避免把同一榜单按年份/数字批量复制。

Guide 不应只是几行站点政策说明。一个可索引榜单/指南至少要给出：快速结论、测试/选择方法、可扫描对比表、按真实场景组织的推荐、每款优缺点和适合人群、设备/邀请限制、相关分类内链、作者/审核者及更新时间。授权和安全方法可以作为信任模块，但不能替代用户来找的游戏选择答案。

## 6. 内链规则

采用“小型主题集群”，不是全站每页互链：

1. 首页 → 主分类、3–6 个编辑推荐、最新高价值指南。
2. 主分类 → 该类所有合格游戏、相关标签、1–3 篇指南。
3. 标签 → 主分类、该属性游戏；不链接无关标签制造爬虫迷宫。
4. 游戏页 → 主分类、1–2 个最相关标签、4–8 款相关游戏、最多 2 篇相关指南。
5. 榜单/指南 → 所提游戏页、主分类；游戏页在确有帮助时反链该指南。
6. Breadcrumb 固定：首页 > 分类 > 游戏；文章为：首页 > Blog > 文章。

锚文本以描述用户去向为主，例如游戏正式名、`more tower defense games`、`local two-player picks`。不在每页重复完全相同的关键词锚文本，不用“click here”堆砌，也不通过隐藏链接操纵排名。

孤儿页、断链、重定向链、canonical 与 sitemap 不一致，每次发布前自动检查；链接数量不设机械指标，以可导航性为准。

## 7. 外链策略（本文件只定原则）

90 天详细名单和节奏将在 `docs/05-backlink-plan.md` 提供。现在先确定四条获取路径：

### 7.1 开发者与供应商关系

- 向已收录游戏的开发者发送上线页和真实反馈，请其从作品/Press 页面引用（不强求关键词锚文本）。
- 争取开发者访谈、更新日志、独家试玩或数据故事。
- 供应商若有 publisher showcase/directory，按规则提交。

### 7.2 资源型链接

- 创建有真实用途的资产：HTML5 游戏控制方式对照、塔防机制术语表、轻量游戏性能测试、合法分发指南。
- 面向 web game 开发者社区、HTML5/游戏引擎资源页和休闲游戏媒体做一对一 outreach。

### 7.3 社区参与

- Reddit、Quora 等先回答问题和参与讨论；只有链接直接解决问题时才附上。
- 不批量发相同内容、不买账号、不伪装普通用户、不把社区链接视为 PageRank 购买渠道。
- 最终板块/话题须逐个检查最新规则；“能发链接”不等于“应该发链接”。

### 7.4 目录与竞品 gap

- 从现有 `plays.org-backlinks_refdomains.csv` 等导出中筛选真实、相关、有编辑审核的目录/资源页。
- DR 不是准入标准；排除站群、自动收录、博彩/成人混杂、异常锚文本和付费 dofollow 套餐。
- 记录引荐访问、被收录页面和关系价值，不用链接总数作为唯一 KPI。

外链红线：购买 PageRank 链接、批量 guest post 网络、私有博客网络、站点范围页脚友链、精确匹配锚文本交换、低质目录群发、通过奖品强制链接。

## 8. 技术 SEO 与页面体验

- SSG 生成游戏、分类、标签与博客页；失效内容返回正确状态，不把所有 404 重定向到首页。
- 唯一 title/H1、准确 description、self-canonical、OG/Twitter；分页/筛选 URL 控制索引。
- `sitemap.xml` 只含 canonical、可索引、200 状态 URL；按更新时间维护 `lastmod`，不伪造每日更新。
- `robots.txt` 用于爬取控制，不用于移除已索引敏感 URL。
- `VideoGame` 与 Breadcrumb JSON-LD 和可见内容一致；不伪造 rating/review。
- iframe 延迟加载并预留固定比例空间；首屏关键图使用合适尺寸与现代格式。
- 目标：字段数据第 75 百分位 LCP ≤2.5s、INP ≤200ms、CLS ≤0.1；实验室测试只是上线前门槛。
- 第三方游戏可能影响性能与隐私；只在用户开始游戏后加载 iframe 是优先候选方案，阶段 2 再根据体验方案确认。

## 9. SEO、广告与隐私共同约束

- AdSense 页面广告不得贴近游戏操作区；Google 对游戏页建议至少 150px 距离。
- 不使用广告主导的中间页、假 Play/Download 按钮、自动刷新广告或误导标签。
- 页面广告代码不放进第三方游戏 iframe；游戏内广告由有权的游戏源按其 SDK/协议负责。
- 对 EEA、英国和瑞士投放个性化 Google 广告时，需要使用 Google 认证并集成 IAB TCF 的 CMP；上线前同步检查当期要求。
- GA4、Clarity、广告和游戏 iframe 的加载应纳入 cookie/consent 设计；Privacy/Cookies 页面披露实际供应商。
- 定位明确写 `casual gamers, teens and adults`，但一句免责声明不能单独决定 COPPA 状态。FTC 会综合主题、视觉、角色、语言、广告与受众证据判断是否面向儿童。
- 不主动收集生日、精确位置、聊天内容或其他非必要个人信息；若游戏包含账户、聊天或额外数据处理，必须单独审核供应商与隐私披露。

## 10. 衡量与复盘节奏

### 每周

- GSC：有效页面、抓取/索引异常、query/page 点击与曝光、CTR、平均排名（只看趋势）。
- 站点：游戏加载失败、启动率、iframe 错误、404、CWV/前端异常。
- 内容：新页首次发现/收录时间、内部链接、是否出现自相竞争。

### 每月

- 按主题集群查看非品牌点击，而不是只看全站总流量。
- 内容分为：扩大、刷新、合并、noindex/下架。
- 外链查看新增相关 referring domains、引荐访问与锚文本自然度。
- 收益按国家、设备、页面类型、供应商拆分；优化 session revenue，不用异常高 CTR 驱动决策。

### 90 天决策

满足以下大部分条件才扩大内容速度：主集群曝光持续增长、至少 10 页获得自然点击或有效引荐、游戏体验稳定、内容生产能保持人工质量、授权供应充足。否则先修正定位/质量/抓取问题，不增加页面数量掩盖问题。

## 11. 域名与关键词的关系

- 已购主域名为 `gamesformany.com`，品牌为 `Games for Many`。
- `games for many` 在现有 SERP 中偏大型聚会/桌游意图，因此只作为品牌防守词，不作为首页主要获客关键词。
- 首页主要目标主题仍是 `2 player games online` / `2 player browser games`，品牌与非品牌关键词各司其职。
- 域名优先可品牌化、无商标风险、可承载相邻垂类；不因 Semrush 显示某个高量词就注册精确匹配域名。
- 可以含轻度语义提示（如 play、arcade、arena 等），但必须避免与现有平台近似和儿童导向措辞。
- 不使用 Pokemon、Mario、Roblox、Minecraft、Fortnite 等未授权 IP，也不通过拼写变体蹭流量。
- 最终候选需要结合 USPTO/WIPO、Google、Internet Archive 与 Semrush 历史数据复核。

## 12. 下一阶段需要你准备的数据（现在先不用提交）

确认本文件后，我会在阶段 1 输出 CSV 模板和逐字段说明。届时优先需要：

1. 双人游戏词簇的 Semrush Keyword Magic 导出及后续补充词。
2. 双人游戏自然搜索竞品的 Keyword Gap/Top Pages。
3. Google Trends 五年与十二个月对比截图或 CSV。
4. GameDistribution/GamePix Publisher 后台可用游戏清单或 feed/API 样例（去掉账号、token）。

## 13. 参考资料

- [Google Search Central：创建有帮助、可靠、以人为本的内容](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central：Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google AdSense：游戏页面内容广告指南](https://support.google.com/adsense/answer/2768340?hl=en)
- [Google AdSense：广告展示政策](https://support.google.com/adsense/answer/1346295?hl=en)
- [Google AdSense：EEA、英国和瑞士的 CMP 要求](https://support.google.com/adsense/answer/13554020?hl=en-GB)
- [FTC：COPPA FAQ 与儿童导向判断因素](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
- [GameMonetize：Publisher FAQ](https://gamemonetize.com/faq)
- [CrazyGames：Developer FAQ](https://docs.crazygames.com/faq/)

## 14. 阶段 0（本文件）验收清单

- [ ] 同意关键词按品牌/核心/中尾/游戏实体/信息内容五层管理。
- [ ] 同意一个搜索意图只指定一个主要 URL，标签页达到质量阈值才索引。
- [x] 同意首 90 天控制在 30–50 款游戏、4–6 篇高质量指南，而非批量铺页。
- [ ] 同意内容必须加入试玩、选择标准或原创分析，不能直接复用供应商描述。
- [ ] 同意内链、外链和社区推广规则及红线。
- [x] 确认英文/美国为首发语言与市场。
- [x] 选择双人浏览器游戏为首发垂类。
- [x] 确认品牌为 `Games for Many`，主域名为 `gamesformany.com`。

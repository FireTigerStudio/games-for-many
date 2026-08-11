# 内容模板与质量门槛

> 状态：阶段 3 内容需求
> 更新日期：2026-08-11

字数是编辑范围，不是机械排名因素。内容必须来自实际试玩、开发者资料和可验证页面信息，不能直接改写供应商 description 充数。

## 1. 游戏页 `/games/[slug]`

- Title：`Play [Game Title] Online | Games for Many`
- H1：正式游戏名
- 可见正文：约 350–650 英文词
- H2：3–4 个

结构与对应搜索任务：

1. Breadcrumb；
2. H1 + 40–70 字编辑摘要：游戏类型、目标、local/online 和适合场景；
3. 16:9 或供应商指定比例的游戏区域；
4. `Quick Facts`：人数、local/online、same keyboard/separate devices、desktop/mobile、邀请方式；
5. H2 `How to Play [Game Title]`：开始步骤、游戏循环、目标和胜负条件；
6. H2 `Controls`：按玩家和设备列出实际按键/触控；
7. H2 `Tips for Playing`：2–4 条经过试玩验证的技巧；
8. H2 `Why We Picked This Game`：优点、限制、适合谁和典型会话长度；
9. Developer、source platform、最后审核日期和内容/授权状态；
10. 4–6 款真正相关的游戏，并说明关联维度；
11. 游戏区至少 150px 外的广告占位。

关键词角色：游戏页只承担正式游戏实体、`play [title] online`、`how to play [title]`、`[title] controls` 和页面真实支持的玩家/设备属性。不得在每个游戏页重复堆入 `best multiplayer browser games`、`group online games` 等集合词。

图片：卡片缩略图 1 张；正文只有在供应商素材许可明确时增加截图。不得自行截取未授权 IP。

## 2. 分类页 `/category/[slug]`

- Title：`Free [Category] Games Online | Games for Many`
- H1：类别名称
- 可见正文：约 450–800 英文词
- H2：3 个

结构：

1. 60–100 字类别定义和快速选择提示；
2. 编辑精选与完整游戏网格，首屏优先帮助用户开始玩；
3. 按真实差异分组，例如 local/online、same keyboard/separate devices、board/sports/racing/arcade；
4. H2 `How to Choose`：人数、设备、邀请方式、控制难度和时长；
5. H2 `Local vs Online` 或该分类真正需要的比较；
6. 1–3 篇相关 Guide；
7. FAQ 只回答数据或玩家真实提出的问题，不批量生成。

关键词角色：分类页承担稳定的 play/browse 类型词及自然同义词，不承担 `best` 榜单主词。至少 8 款游戏才索引。

图片：首屏不使用沉重 hero；以游戏卡片缩略图构成视觉内容，避免 CLS。

## 3. 标签页 `/tag/[slug]`

- 正文：250–450 英文词
- H2：2 个
- 至少 5 款强相关游戏；否则 `noindex`。
- 不为同义词分别建页；说明这个玩法标签适合谁、输入方式和选择差异。

## 4. 榜单文章 `/blog/[slug]`

- Title 示例：`10 Best 2 Player Browser Games to Play Together`
- 正文：1,200–2,000 英文词
- H2：5–8 个（按选择标准或子类型组织，不要求一款一个机械 H2）

结构：

1. 80–140 字直接回答和前三推荐，不能用泛泛背景拖延答案；
2. `How We Chose and Tested`：设备、浏览器、玩家模式、安全和选择标准；
3. 对比表：游戏、玩家数、local/online、设备、适合场景和主要限制；
4. 按场景组织推荐，例如 same keyboard、long-distance friends、quick matches、groups；
5. 每款约 100–180 字实测点评：玩法差异、优点、限制、适合谁和相关游戏页链接；
6. `How to Choose`：帮助用户在候选之间作决定；
7. 相关分类、游戏内链、作者/审核者、测试方法和更新时间。

关键词角色：Guide 承担 `best`、`good`、年份、比较和具体使用场景。一个 Guide 自然覆盖近义表达，不为 `browser`、`web browser`、`browser based` 分别复制文章。

图片：首图 1 张；每 2–3 款最多放 1 张获得许可的素材。不得从 Google 图片或竞品网站复制。

## 5. 法律与信任页

- About：真实定位、编辑方法、受众和游戏来源。
- Contact：可用域名邮箱或联系表单，不公开私人地址。
- Privacy：实际披露 Cloudflare、分析、广告和 iframe 供应商。
- Terms：使用规则、第三方游戏、IP 投诉和免责声明。
- Cookies：实际 Cookie 类别、选择和撤回方式。

法律页在供应商、分析和广告配置确定后复核；占位文字不得冒充最终法律意见。

## 6. 原创性检查

- 每页描述具体机制、控制、优缺点和适合场景；
- 不复制供应商描述；
- 不把相同段落仅替换游戏名；
- 不伪造评分、评论、玩家数或更新时间；
- 未实际试玩的技巧不能发布；
- 失效游戏下架并从 sitemap 移除。

## 7. SEO 写作检查

- 每页先确定一个 primary topic 和对应搜索任务；
- Title、H1 和开头能准确说明页面用途，但不重复罗列关键词；
- 次级词只在相关小节自然出现，不设置关键词密度；
- 页面提供供应商 description 之外的试玩、选择或设备信息；
- 分类、Guide、游戏页之间不争夺同一个主词；
- 内链锚文本描述目标页面，不全部使用同一精确匹配词；
- 不为同义词、拼写变体或低库存属性批量生成近似页面；
- Meta description 独有、准确、面向点击，不写关键词清单。

## 8. 验收清单

- [ ] 每个模板满足独有价值和内链要求；
- [ ] iframe 外有足够可见正文；
- [ ] 图片均有来源许可；
- [ ] 广告不贴近控制区；
- [ ] 法律页披露与实际上线供应商一致。

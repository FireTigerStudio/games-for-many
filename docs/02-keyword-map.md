# 关键词到 URL 映射模板

> 状态：阶段 0 模板  
> 更新日期：2026-08-10  
> 市场：美国；语言：英文；设备优先级：PC 浏览器

## 1. 使用原则

每个搜索意图只能有一个主要 URL。首页承担品牌与 `2 player games online` 总主题；分类页承担稳定玩法集合；标签页只有达到库存和独有内容门槛才索引；游戏实体词只映射到获得正式嵌入许可的游戏页。

`games for many` 是品牌防守词，不是首页主要获客词。禁止使用 `unblocked`、`at school`、`kids games`、成人、赌博及未授权 IP 词。

## 2. 映射表模板

| cluster_id | keyword | intent | volume | KD | CPC | primary_url | page_type | secondary_keywords | inventory_required | content_required | status |
|---|---|---|---:|---:|---:|---|---|---|---:|---|---|
| BRAND-01 | games for many | navigational | 待填 | 待填 | 待填 | `/` | home | gamesformany | 10 | 品牌说明、编辑推荐 | planned |
| CORE-01 | 2 player games online | commercial/informational | 9,900 | 72 | 0.11 | `/` | home | two player browser games | 10 | 定位、分类入口、精选游戏 | planned |
| TAG-01 | local 2 player games | commercial | 待填 | 待填 | 待填 | `/tag/local-multiplayer` | tag | same keyboard games | 5 | 250–400 字独有导语 | research |
| BLOG-01 | best 2 player browser games | commercial | 待填 | 待填 | 待填 | `/blog/best-2-player-browser-games` | blog | best games to play with a friend | 8 | 实测榜单与选择方法 | research |

## 3. URL 分配门槛

| URL 类型 | 创建/索引门槛 |
|---|---|
| `/` | 品牌、主垂类和编辑推荐齐全 |
| `/games/[slug]` | 授权、可玩、原创介绍、controls、安全审核全部通过 |
| `/category/[slug]` | 至少 8 款相关游戏和 300–600 字独有内容 |
| `/tag/[slug]` | 至少 5 款强相关游戏和 250–400 字独有内容 |
| `/blog/[slug]` | 有实测证据、独立搜索意图和自然内链价值 |

低于门槛的标签可用于站内筛选，但应 `noindex` 且不进入 sitemap。近义词合并，例如 `same keyboard games` 与 `local 2 player games` 不分别制造薄页。

## 4. 用户填写方式

原始关键词统一填入阶段 1 的 `data/templates/keywords.csv`。`target_url` 暂不确定时留空；不要为了填满表格强行创建 URL。Codex 复核搜索意图、SERP 类型和库存后再确定正式映射。

## 5. 验收清单

- [ ] 每个关键词簇只有一个 primary URL；
- [ ] 首页与分类/榜单没有同词竞争；
- [ ] 标签页达到库存和内容门槛；
- [ ] 未授权 IP 和灰色词全部排除；
- [ ] 每个目标 URL 都有合法游戏供给或原创内容计划。

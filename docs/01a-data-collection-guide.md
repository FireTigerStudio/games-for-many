# 阶段 1：CSV 数据采集说明

> 所有模板位于 `data/templates/`。示例行均为演示，不得直接发布；`example.com` URL 必须替换为供应商官方数据。

## 1. `games.csv`

| 字段 | 去哪里拿 / 怎么判断 |
|---|---|
| slug | 根据正式英文标题生成小写连字符；由 Codex 最终去重 |
| title | GameMonetize 官方详情页正式标题 |
| category | 官方分类 + 实际试玩；首发优先 `2-player` |
| tags | 试玩确认，用 `|` 分隔，如 `local-multiplayer|same-keyboard` |
| iframe_url | 只复制官方详情页/Publisher 后台给出的 iframe `src` |
| thumbnail | 官方详情页提供且允许使用的缩略图 URL |
| description | 你写试玩要点，Codex 后续编辑成原创英文；不复制供应商全文 |
| controls | 官方说明并用实际试玩校验 |
| developer | 官方详情页开发者/工作室 |
| source_platform | 当前填 `GameMonetize`；其他平台获批后再填 |

免费工具：供应商官方目录、浏览器试玩、Google Lens/Google 搜索做明显 IP 风险初筛。付费工具通常不需要；若要品牌检索可使用专业商标数据库/律师服务。每款还需在候选审核表记录授权、安全和广告体验，核心 `games.csv` 只收最终批准项。

## 2. `keywords.csv`

| 字段 | 获取方式 |
|---|---|
| keyword | Semrush Keyword Magic Tool、Google Search Console（上线后）、Google 自动补全 |
| search_volume/kd/cpc/intent | Semrush 美国数据库；数值字段只填数字 |
| target_url | 依据 `docs/02-keyword-map.md`，不确定先留空 |
| priority | `high/medium/low`，结合意图、供给、SERP与主题匹配人工判断 |
| status | `research/validated/mapped/published` |

免费方案：Google Trends、Keyword Planner、Google 搜索手查 SERP、Search Console。付费方案：现有 Semrush；如另有预算可用 Ahrefs 交叉验证。不要把不同工具的 Volume/KD 当作同一口径直接相加。

## 3. `backlinks.csv`

DR、traffic 可从 Semrush 免费/付费数据、Ahrefs 或站点公开资料获取；contact 从网站 Contact/媒体包查；submission_url 必须是具体规则/提交页。免费方案：Google 搜索、现有 Plays.org 外链导出、社区规则页。付费方案：Semrush Backlink Gap/Ahrefs Link Intersect。

`status` 建议：`research/rule-check/planned/submitted/accepted/rejected`. `date_submitted` 使用 `YYYY-MM-DD`。成人、博彩、盗版、自动收录和付费 dofollow 站直接排除。

## 4. `blog-topics.csv`

选题从关键词问题、People Also Ask、竞品内容缺口和实际试玩产生。`internal_links` 用 `|` 分隔目标 URL；`word_count` 是规划范围，不机械凑字；`publish_date` 用 `YYYY-MM-DD`。

免费方案：Google SERP/PAA、Google Trends、Reddit/Quora 真实问题。付费方案：Semrush Topic Research、Keyword Gap、Ahrefs Content Gap。

## 5. `competitors.csv`

`domain` 只填根域；DR/traffic 使用同一工具同一日期口径；`top_keywords`、`top_pages` 和 `backlink_gap` 用 `|` 分隔摘要。免费方案：手查 SERP 与现有导出。付费方案：Semrush Organic Research、Traffic Analytics、Backlink Gap；Ahrefs Site Explorer 交叉验证。

## 6. `redirects.csv`

只在 URL 真正变更或页面合并时填写。`source_url` 与 `destination_url` 使用站内相对路径；永久迁移填 301。不要把所有 404 重定向到首页。来源是发布记录、GSC 404、站点审计和内容合并决策；无需付费工具，Semrush Site Audit/Ahrefs Site Audit 可辅助发现。

## 7. 通用填写规则

- CSV 保存为 UTF-8；第一行表头不得改名。
- 不上传密码、API Secret、完整合同、税务或银行资料。
- URL 必须来自官方来源；不复制竞品 iframe/CDN。
- 空值保留空白，不用 `N/A` 填充数值字段。
- 日期统一 `YYYY-MM-DD`；多值统一使用 `|`。
- 示例行在正式填写时删除。

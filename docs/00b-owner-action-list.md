# 站长行动清单：游戏供应商注册与资料准备

> 当前范围：为审核版 MVP 手工选择 10 款合规双人游戏并保存授权证据；不要购买游戏包，不要复制其他网站的 iframe/CDN，不要把密码或 API Secret 发给 Codex。

> 已确认品牌与域名：`Games for Many` / `gamesformany.com`（2026-08-07 已购买）。

## 1. 先准备一个项目邮箱

### 要什么

优先使用项目域名邮箱，例如 `publisher@gamesformany.com` 或 `hello@gamesformany.com`。如果邮箱路由尚未配置，可先使用长期保留的公司邮箱注册，之后在平台允许的情况下更新。

### 去哪里拿

- 只需收信、不需要主动发信：可用 Cloudflare Email Routing 转发至常用邮箱；
- 需要稳定发送审核邮件和外联：使用 Google Workspace、Microsoft 365 或其他支持 SPF/DKIM/DMARC 的邮箱服务。

### 放哪里、什么格式

不需要把密码放进项目。只在 `data/source-accounts.csv` 中记录平台、注册邮箱、账号状态和日期；该文件将在阶段 1 提供模板。

## 2. GameDistribution（当前延后）

### 去哪里

- Publisher 页面：https://www.gamedistribution.com/publishers/
- DGI 嵌入说明：https://gamedistribution.com/publishers/embedded-links/
- Publisher 条款：https://static.gamedistribution.com/terms/publisher.html

### 当前处理

本次申请因新域名流量不足被拒。当前不使用 GameDistribution 的游戏、iframe 或目录数据，也不使用无关高流量域名绕过审核。网站产生 60–90 天真实 GA4/GSC 数据后再询问并重新申请。

### 拿完放哪里

- 条款、审批邮件、后台权限截图：`compliance/private/game-sources/gamedistribution/`
- 候选游戏导出或手工表：`research/raw/game-sources/gamedistribution/`

这些目录可以先在本地私有保存，不上传公开仓库。不要截图或提交密码、完整税号、银行账户、API Secret。

## 3. 注册 GamePix Publisher（备用源）

### 去哪里

- Publisher 页面：https://partners.gamepix.com/publishers
- API 说明：https://games.gamepix.com/gameinfo/

### 做什么

1. 申请 Publisher/affiliate 账号；
2. 说明用途：`Games for Many`，面向美国英文市场的双人浏览器游戏网站，域名为 `https://gamesformany.com`；
3. 申请确认 direct embed 和 JSON API 是否均可使用；
4. 询问是否需要提前登记域名，以及是否允许在同一父页面展示 AdSense；
5. 保存审核结果、当期合同/条款和 API 使用条件；
6. 只导出双人、本地多人、合作或对战相关候选游戏。

### 拿完放哪里

- 条款、邮件与截图：`compliance/private/game-sources/gamepix/`
- API 文档样例或候选导出：`research/raw/game-sources/gamepix/`

API key/secret 只保存在本地密码管理器；以后开发时由 Codex 指导放入 `.env.local`，现在不要发给我。

## 4. GameMonetize 手工冷启动（当前主线）

账号已经建立，`gamesformany.com` 已添加，当前需要部署 ads.txt 并完成人工选品：

- Publisher FAQ：https://gamemonetize.com/faq
- 游戏目录：https://gamemonetize.com/all-games.php

不要根据 `2 Player` 标签一键全量导入。先筛 20 款候选，试玩后批准 10 款用于审核版 MVP；每款只使用 GameMonetize 官方详情页提供的 iframe。

## 5. 建立首批 20 款候选清单（批准 10 款上线）

现在可以先用 Excel 建表，文件名为：

`game-source-candidates.xlsx`

完成后放到：

`C:\AppDev\ioGame\data\game-source-candidates.xlsx`

### 每款游戏填写这些列

| 字段 | 填什么 | 去哪里找 |
|---|---|---|
| candidate_id | 自己连续编号，如 `GD-001` | 自己填写 |
| source_platform | 当前填写 `GameMonetize` | 当前供应商 |
| official_game_id | 平台游戏 ID | 游戏详情页或 API |
| title | 平台正式标题 | 游戏详情页 |
| official_page_url | 平台官方详情页 | 浏览器地址栏 |
| official_embed_url | 后台生成的官方 iframe/embed URL | Publisher 后台；没有权限先留空 |
| developer | 开发者/工作室 | 游戏详情页或 API |
| gameplay_type | `local` / `online` / `both` | 试玩后判断 |
| player_count | 如 `2`、`2-4` | 详情页和试玩 |
| controls | 如 `same keyboard`、`keyboard + mouse` | 详情页和试玩 |
| account_required | `yes/no` | 试玩 |
| chat_or_ugc | `yes/no` | 试玩 |
| target_age | `teens-adults` / `unclear` / `child-directed` | 画面、文案和玩法审核 |
| ip_risk | `pass/reject/review` | 检查标题、角色、图标、车辆和素材 |
| content_safety | `pass/reject/review` | 检查成人、赌博、血腥和仇恨内容 |
| ad_experience | `pass/reject/review` | 试玩中观察广告频率、跳转和误导按钮 |
| desktop_quality | `pass/reject/review` | PC 浏览器试玩 |
| license_evidence | 条款/后台证据文件名 | 私有证据目录 |
| decision | `approve/reject/review` | 审核结论 |
| notes | 具体问题或推荐理由 | 自己填写 |

## 6. 每款候选的试玩步骤

每款至少试玩 5–10 分钟，并检查：

1. 确实支持两个人，不只是名字里写着 multiplayer；
2. PC 浏览器中能正常加载、开始、重新开始和全屏；
3. 两个玩家的按键不会冲突；
4. 没有强制注册、开放聊天或无法关闭的用户内容；
5. 没有 Pokemon、Mario、Roblox、Minecraft、Fortnite、影视角色、球队徽标或明显仿作；
6. 没有成人色情、真钱/模拟赌博、重度血腥、仇恨或危险挑战；
7. 页面素材和标题没有明显低龄儿童导向；
8. 游戏广告不会频繁强跳转、伪装控制按钮或展示明显不合规内容；
9. 记录加载速度、画面比例、控制方式和推荐理由；
10. 有疑问统一标记 `review`，不要自行猜测为合格。

## 7. 你需要发回给 Codex 的资料

只需要把以下内容放入项目目录，然后告诉我文件已准备好：

| 要什么 | 拿完放哪里 | 格式 |
|---|---|---|
| 20 款候选游戏表 | `data/game-source-candidates.xlsx` | Excel `.xlsx` |
| GameMonetize 官方详情页/iframe 示例 | `research/raw/game-sources/gamemonetize/` | URL 清单或去敏截图 |
| GamePix 可用字段/API 示例 | `research/raw/game-sources/gamepix/` | CSV、JSON 或去敏截图 |
| 平台是否批准、支持何种嵌入 | 直接在对话中告诉我 | 简短文字即可 |
| 平台要求必须先提供域名的问题 | 截图放 `research/raw/game-sources/` | PNG/JPG，隐藏账号信息 |

不要发送：密码、API Secret、银行账号、完整税号、身份证件、未打码合同中的敏感个人信息。

## 8. 完成标准

- [x] `gamesformany.com` 已购买；
- [ ] 项目收件邮箱已配置并完成收信测试；
- [x] GameDistribution Publisher 已申请但因流量不足被拒，已决定延后重申；
- [ ] GameDistribution 当前条款和审批证据已私下保存；
- [ ] GamePix Publisher 已申请；
- [ ] GamePix 的 embed/API 权限已确认；
- [ ] 已建立 20 款 GameMonetize 候选清单；
- [ ] 至少 10 款标记为 `approve`，用于审核版 MVP；
- [ ] 至少 5 款为 `local` 或 `same keyboard`；
- [ ] 所有 approve 游戏都有官方来源和授权证据；
- [ ] 没有向 Codex 或 GitHub 提交任何密码、Secret 或财务身份资料。

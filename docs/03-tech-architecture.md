# 技术架构与数据模型

> 状态：阶段 0 已确认方案  
> 更新日期：2026-08-10

## 1. 架构结论

第一版采用 Next.js 14 App Router、TypeScript、Tailwind CSS、静态导出和本地 JSON/MDX。代码保存在 GitHub 私有仓库，由 Cloudflare Pages 免费计划自动构建并托管 `gamesformany.com`。Vercel 不作为首发生产环境。

游戏接入采用 `manual-first、API-later`：首批 10 款由人工把官方 iframe 和元数据写入 CSV/JSON；未来 API 只负责生成同样的数据结构，页面组件不重写。

```mermaid
flowchart LR
  A["人工 CSV / 后续供应商 API"] --> B["导入与合规校验"]
  B --> C["静态 JSON / MDX"]
  C --> D["Next.js 14 SSG"]
  D --> E["GitHub"]
  E --> F["Cloudflare Pages"]
  F --> G["gamesformany.com"]
  G --> H["官方游戏 iframe"]
```

## 2. 目录结构

```text
app/
  games/[slug]/page.tsx
  category/[slug]/page.tsx
  tag/[slug]/page.tsx
  blog/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  cookies/page.tsx
  sitemap.ts
  robots.ts
components/
  GameCard.tsx
  CategoryGrid.tsx
  AdSlot.tsx
  Breadcrumb.tsx
  SEOHead.tsx
data/
  templates/
  generated/
  games.json
content/blog/
lib/
  games.ts
  seo.ts
  schema.ts
scripts/
  import-games.ts
public/
  ads.txt
  images/
```

## 3. Game 数据模型

| 字段 | 类型 | 说明 |
|---|---|---|
| slug | string | 唯一、稳定、小写连字符 |
| title | string | 供应商正式标题，需 IP 审核 |
| category | enum | 主分类 |
| tags | string[] | 玩法属性 |
| iframeUrl | URL | 官方嵌入地址 |
| thumbnail | URL/string | 授权缩略图 |
| description | string | 本站原创摘要 |
| controls | string | 实测操作方式 |
| developer | string | 权利人/开发者 |
| sourcePlatform | enum | GameMonetize/GamePix 等 |
| playerCount | string | 如 `2`、`2-4` |
| gameplayType | enum | local/online/both |
| licenseStatus | enum | pending/verified/rejected |
| safetyStatus | enum | pending/approved/rejected |
| featured | boolean | 编辑推荐 |
| publishedAt | ISO date | 首次发布日 |
| reviewedAt | ISO date | 最近人工审核日 |

构建必须拒绝 `licenseStatus != verified` 或 `safetyStatus != approved` 的游戏进入生产页面。

## 4. 静态部署约束

- `next.config` 使用静态导出；所有动态路由实现 `generateStaticParams`。
- 不使用 SSR、Server Actions、运行时数据库或服务端 API Route。
- iframe 在用户主动点击 Play 后加载，并预留固定比例空间。
- 供应商 token/secret 不进入浏览器；未来 API 在构建前导入。
- 图片避免依赖 Vercel Image Optimization；使用授权的预处理图片或普通静态/远程资源。
- `public/ads.txt` 公开，真实广告代码在获批前不加载。

## 5. SEO 与分析

- 每页唯一 title、description、canonical、OG、Twitter Card。
- 游戏页输出与可见内容一致的 `VideoGame` 与 Breadcrumb JSON-LD。
- sitemap 只包含 200、canonical、可索引页面。
- 预留 GA4、GSC、Clarity 和 CMP 配置位；默认不开启需要同意的追踪。

## 6. 迁移路径

当需要 ISR、服务端搜索或 Supabase 时，优先迁移至 Cloudflare Workers + OpenNext；必要时再评估 Vercel Pro。数据层保持统一，迁移不改变 URL。

## 7. 验收清单

- [x] GitHub + Cloudflare Pages 为首发部署方案；
- [x] 手工 JSON 与未来 API 共用数据模型；
- [ ] 静态构建能生成所有指定路由；
- [ ] 未授权游戏无法进入生产构建；
- [ ] ads.txt、sitemap、robots 可公开访问；
- [ ] LCP、INP、CLS 达到既定门槛。

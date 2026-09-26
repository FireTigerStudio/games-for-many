import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOHead } from "@/components/SEOHead";
import { blogPosts } from "@/lib/blogs";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Browser Game Guides",
  "Browse tested browser game guides for two-player, same-keyboard, racing and .io games.",
  "/blog/",
);

export default function BlogIndexPage() {
  const posts = [...blogPosts].filter((post) => post.indexable).sort((a, b) => b.modifiedAt.localeCompare(a.modifiedAt));
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Browser Game Guides",
    url: `${siteConfig.url}/blog/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.heading,
        url: `${siteConfig.url}/blog/${post.slug}/`,
      })),
    },
  };

  return (
    <div className="page-shell">
      <SEOHead data={schema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Browser Game Guides</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Tested picks and practical comparisons for choosing two-player, same-keyboard, racing and .io games.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" key={post.slug}>
            <h2 className="text-xl font-bold text-slate-950"><Link className="hover:text-violet-700" href={`/blog/${post.slug}/`}>{post.heading}</Link></h2>
            <p className="mt-3 leading-7 text-slate-600">{post.description}</p>
            <Link className="mt-4 inline-block font-semibold text-violet-700" href={`/blog/${post.slug}/`}>Read guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

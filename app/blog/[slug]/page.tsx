import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOHead } from "@/components/SEOHead";
import BestTwoPlayerBrowserGames from "@/content/blog/best-2-player-browser-games.mdx";
import { blogPosts } from "@/lib/blogs";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  const metadata = pageMetadata(post.title, post.description, `/blog/${post.slug}/`);
  if (!post.indexable) metadata.robots = { index: false, follow: true };
  return metadata;
}
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug); if (!post) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description, datePublished: post.publishedAt, author: { "@type": "Organization", name: siteConfig.name }, mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/` };
  return <article className="page-shell max-w-4xl"><SEOHead data={schema} /><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }, { label: post.title }]} /><h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{post.description}</p><div className="prose-copy"><BestTwoPlayerBrowserGames /></div></article>;
}

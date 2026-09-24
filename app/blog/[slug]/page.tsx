import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOHead } from "@/components/SEOHead";
import BestTwoPlayerBrowserGames from "@/content/blog/best-2-player-browser-games.mdx";
import TwoPlayerRacingGamesOnline from "@/content/blog/2-player-racing-games-online.mdx";
import GamesLikeAgarIo from "@/content/blog/games-like-agar-io.mdx";
import GamesLikeDiepIo from "@/content/blog/games-like-diep-io.mdx";
import GamesLikeSlitherIo from "@/content/blog/games-like-slither-io.mdx";
import GamesLikeTerritorialIo from "@/content/blog/games-like-territorial-io.mdx";
import SameKeyboardTwoPlayerGames from "@/content/blog/same-keyboard-2-player-games.mdx";
import UnblockedIoGames from "@/content/blog/unblocked-io-games.mdx";
import { blogPosts } from "@/lib/blogs";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const blogContent = {
  "best-2-player-browser-games": BestTwoPlayerBrowserGames,
  "2-player-racing-games-online": TwoPlayerRacingGamesOnline,
  "same-keyboard-2-player-games": SameKeyboardTwoPlayerGames,
  "games-like-agar-io": GamesLikeAgarIo,
  "games-like-diep-io": GamesLikeDiepIo,
  "games-like-slither-io": GamesLikeSlitherIo,
  "games-like-territorial-io": GamesLikeTerritorialIo,
  "unblocked-io-games": UnblockedIoGames,
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  const metadata = pageMetadata(post.title, post.description, `/blog/${post.slug}/`);
  if (post.slug === "best-2-player-browser-games") metadata.title = { absolute: post.title };
  if (!post.indexable) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const Content = blogContent[params.slug as keyof typeof blogContent];
  if (!Content) notFound();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.heading,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
  };
  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;
  return (
    <article className="page-shell max-w-4xl">
      <SEOHead data={articleSchema} />
      {faqSchema ? <SEOHead data={faqSchema} /> : null}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Guides" }, { label: post.title }]} />
      <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{post.heading}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-600">{post.description}</p>
      <div className="prose-copy"><Content /></div>
    </article>
  );
}

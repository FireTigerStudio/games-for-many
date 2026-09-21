import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SEOHead } from "@/components/SEOHead";
import BestTwoPlayerBrowserGames from "@/content/blog/best-2-player-browser-games.mdx";
import SameKeyboardTwoPlayerGames from "@/content/blog/same-keyboard-2-player-games.mdx";
import { blogPosts } from "@/lib/blogs";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const bestTwoPlayerFaq = [
  {
    question: "Can I play these 2 player browser games without downloading anything?",
    answer: "Yes. Every game on this list runs inside a browser tab. There's no installer, no launcher, and no account needed for the games themselves. Some online modes may ask for a display name before you enter a public lobby — it's usually optional and you can type anything.",
  },
  {
    question: "Which of these work if my second player is in a different city?",
    answer: "Two have share-code private rooms — Ninja Parkour Multiplayer and Multiplayer Pong — which means you can guarantee playing a specific friend rather than random opponents. Rocketcar Cup, Brainrot Bridge Race 3D, Ballon Race 3D, Master Checkers Multiplayer, Battle Jitsu, and Nightmare Runners all have online modes, but you're matched with whoever's in the lobby. The rest are local-only — both players need to be at the same keyboard.",
  },
  {
    question: "Do any of these support gamepads?",
    answer: "The games on this list are designed around keyboard input, with Ballon Race 3D using mouse or touch instead. Most browsers can map a controller to keyboard keys through a third-party utility, but that's a workaround rather than built-in support, and results vary by game. If you want first-class gamepad support, browser games aren't the format — this list assumes shared keyboards.",
  },
  {
    question: "What's the best one to start a session with?",
    answer: "Aquapark Balls Party if you're playing with someone new to gaming — rounds finish in under a minute, controls are two keys per player, and the number-gate mechanic means beginners sometimes win on a single lucky decision. If your group is already comfortable, jump straight to Rocketcar Cup for something with a proper skill curve, or Duo Water and Fire if you want cooperation rather than competition.",
  },
  {
    question: "Are these games safe for younger players?",
    answer: "Games for Many is aimed at players 13 and up as a general policy. None of the games on this list are graphic, but Nightmare Runners leans into a horror atmosphere — dim lighting, chase music, cartoon monsters — which is worth previewing if you're playing with a younger sibling nearby. Parents of under-13 players should preview each game before handing it over.",
  },
];

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
  const Content = params.slug === "same-keyboard-2-player-games" ? SameKeyboardTwoPlayerGames : BestTwoPlayerBrowserGames;
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
  const faqSchema = post.slug === "best-2-player-browser-games" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bestTwoPlayerFaq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } : null;

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

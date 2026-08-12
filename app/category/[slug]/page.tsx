import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { SEOHead } from "@/components/SEOHead";
import { categories, getCategory, getCategoryPage, getCategoryPageCount, getGamesByCategory } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  const metadata = pageMetadata(`Free ${category.title} Games Online`, category.description, `/category/${category.slug}/`);
  if (getGamesByCategory(category.slug).length < 8) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const games = getCategoryPage(category.slug, 1);
  const pageCount = getCategoryPageCount(category.slug);
  const isLocal = category.slug === "local-2-player";
  const faq = isLocal ? [
    { question: "Can two people play these games on one computer?", answer: "Yes. Every game in this collection has reviewed evidence of local multiplayer through a shared keyboard, shared screen, mouse or pass-and-play controls." },
    { question: "Do local two-player games need an account?", answer: "The local modes in this collection can be started on the shared device without creating a separate account for each player. Individual games may still show optional online features." },
    { question: "Which controls work best for two players?", answer: "Action games usually split the keyboard between WASD and the Arrow Keys. Turn-based board games can share a mouse or touchscreen, while a few games support a third player with the mouse." },
    { question: "Are local two-player games the same as online multiplayer games?", answer: "No. Local games put both players on one device. Online games connect separate devices or match players over the internet. Some reviewed games support both modes." }
  ] : [];
  const schema = isLocal ? { "@context": "https://schema.org", "@type": "CollectionPage", name: "Local 2 Player Games", url: `${siteConfig.url}/category/local-2-player/`, description: category.description, mainEntity: { "@type": "ItemList", numberOfItems: getGamesByCategory(category.slug).length, itemListElement: games.map((game, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteConfig.url}/games/${game.slug}/`, name: game.title })) } } : null;
  return (
    <div className="page-shell">
      {schema && <SEOHead data={schema} />}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: `${category.title} Games` }]} />
      <h1 className="text-4xl font-black text-slate-950">{category.title} Games</h1>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">{category.description} Every listing is checked for official embedding permission and audience safety before publication.</p>
      {games.length ? <div className="game-grid mt-8">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div> : <p className="mt-8 rounded-2xl bg-white p-6 text-slate-600">The first reviewed games for this category are being selected.</p>}
      {pageCount > 1 && <nav aria-label="Category pages" className="mt-10 flex flex-wrap gap-2">{Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <Link aria-current={page === 1 ? "page" : undefined} className={`rounded-lg border px-4 py-2 ${page === 1 ? "border-violet-700 bg-violet-700 text-white" : "border-slate-300 bg-white text-slate-700"}`} href={page === 1 ? `/category/${category.slug}/` : `/category/${category.slug}/page/${page}/`} key={page}>{page}</Link>)}</nav>}
      {isLocal && <section className="prose-copy mt-14">
        <h2>How to choose a local two-player game</h2><p>{category.longDescription}</p>
        <h2>Shared keyboard games</h2><p>Choose simultaneous keyboard play when both people want to move at the same time. <Link href="/games/nightmare-runners/">Nightmare Runners</Link> divides movement and jump keys between two players, while <Link href="/games/gang-fall-party/">Gang Fall Party</Link> gives each player separate movement, run and punch controls. Cooperative options such as <Link href="/games/mcatlants/">MCATLANTS</Link> work best when both players coordinate rather than compete.</p>
        <h2>Pass-and-play board games</h2><p>For a slower session, choose a game where both players can share one pointer or touchscreen. <Link href="/games/carrom-pro/">Carrom Pro</Link>, <Link href="/games/master-checkers-multiplayer/">Master Checkers Multiplayer</Link> and <Link href="/games/backgammonia-online-backgammon-game/">Backgammonia</Link> let players focus on turns, positioning and strategy without fitting four hands onto one keyboard.</p>
        <h2>Two players or a larger group?</h2><p>Most games here are built around two people, but <Link href="/games/fish-eat-getting-big/">Fish Eat Getting Big</Link> and <Link href="/games/fish-eat-fish-2/">Fish Eat Fish 2</Link> document controls for a third player using the mouse. If everyone has a separate device, browse <Link href="/category/online-2-player/">online two-player games</Link> or the wider <Link href="/category/multiplayer/">multiplayer collection</Link>.</p>
        <h2>Local vs online multiplayer</h2><p>Local play is the quickest choice when two people are in the same room: load one page and share the available controls. Online play is better for separate devices or long-distance friends, but matchmaking and room options vary by game. Titles marked “both” let you choose either setup.</p>
        <h2>Related guide</h2><p>Read our <Link href="/blog/best-2-player-browser-games/">two-player browser game testing guide</Link> to see how we check controls, player modes, official embeds and audience safety.</p>
        <h2>Frequently asked questions</h2>{faq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
    </div>
  );
}

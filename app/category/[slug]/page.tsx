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
  const isOnlineTwoPlayer = category.slug === "online-2-player";
  const faq = isLocal ? [
    { question: "Can two people play these games on one computer?", answer: "Yes. Every game in this collection has reviewed evidence of local multiplayer through a shared keyboard, shared screen, mouse or pass-and-play controls." },
    { question: "Do local two-player games need an account?", answer: "The local modes in this collection can be started on the shared device without creating a separate account for each player. Individual games may still show optional online features." },
    { question: "Which controls work best for two players?", answer: "Action games usually split the keyboard between WASD and the Arrow Keys. Turn-based board games can share a mouse or touchscreen, while a few games support a third player with the mouse." },
    { question: "Are local two-player games the same as online multiplayer games?", answer: "No. Local games put both players on one device. Online games connect separate devices or match players over the internet. Some reviewed games support both modes." }
  ] : [];
  const onlineFaq = isOnlineTwoPlayer ? [
    { question: "Can two people play these games from different devices?", answer: "Yes. This collection is limited to games with reviewed online head-to-head, friend or opponent modes. Each person should open the game on their own supported device unless the game also offers a local mode." },
    { question: "Can I invite a specific friend?", answer: "It depends on the game. Some titles expose friend, room or direct challenge options, while others place you into public matchmaking. Check the game menu and the mode notes before starting." },
    { question: "Do online two-player games include AI opponents?", answer: "Some games also include an AI practice mode, but AI alone does not qualify a title for this category. Every listed game has a reviewed online mode against another player." },
    { question: "What is the difference between online two-player and multiplayer games?", answer: "Online two-player games focus on a duel or two-person match. The broader multiplayer category also includes larger rooms, team games and public arenas with three or more participants." }
  ] : [];
  const schema = (isLocal || isOnlineTwoPlayer) ? { "@context": "https://schema.org", "@type": "CollectionPage", name: `${category.title} Games`, url: `${siteConfig.url}/category/${category.slug}/`, description: category.description, mainEntity: { "@type": "ItemList", numberOfItems: getGamesByCategory(category.slug).length, itemListElement: games.map((game, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteConfig.url}/games/${game.slug}/`, name: game.title })) } } : null;
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
      {isOnlineTwoPlayer && <section className="prose-copy mt-14">
        <h2>How to choose an online two-player game</h2><p>Start with the kind of connection you need. A direct friend or room option is best when you already know your opponent. Public matchmaking is faster when you simply want a live rival. Several games also include AI practice, but every title collected here has a reviewed online player mode rather than qualifying through AI alone.</p>
        <h2>Online board and card duels</h2><p>Choose a turn-based game when connection speed and fast reactions should not decide the match. <Link href="/games/dominoes-classic-duel/">Dominoes Classic Duel</Link>, <Link href="/games/master-checkers-multiplayer/">Master Checkers Multiplayer</Link>, <Link href="/games/turkish-draughts/">Turkish Draughts</Link> and <Link href="/games/whot-the-ultimate-nigerian-card-game/">WHOT</Link> focus on planning, legal moves and reading an opponent.</p>
        <h2>Fast competitive matches</h2><p>For real-time play, try <Link href="/games/music-night-battle-rhythm-game/">Music Night Battle</Link> for rhythm timing, <Link href="/games/rocketcar-cup/">Rocketcar Cup</Link> for arcade soccer, or <Link href="/games/greedy-snake-multiplayer-duel/">Greedy Snake Multiplayer Duel</Link> for a quicker arena-style contest. Larger online battles also appear in <Link href="/games/gang-fall-party/">Gang Fall Party</Link> and <Link href="/games/nightmare-runners/">Nightmare Runners</Link>.</p>
        <h2>Friend challenge or random opponent?</h2><p>Friend modes are better for planned sessions, but availability varies between room codes, invitations and in-game friend menus. Matchmaking is designed for immediate play and may pair you with a random opponent. We do not label every online game as friend-invite capable unless that option was visible during review.</p>
        <h2>Online vs local two-player</h2><p>Online play is designed for separate devices or remote opponents. If both people are in the same room and want one shared screen, use the <Link href="/category/local-2-player/">local two-player collection</Link>. For rooms, teams and larger player counts, continue to the full <Link href="/category/multiplayer/">multiplayer collection</Link>.</p>
        <h2>Related guide</h2><p>Our <Link href="/blog/best-2-player-browser-games/">two-player browser game testing guide</Link> explains how player modes, controls, official embeds and safety are reviewed before a game is recommended.</p>
        <h2>Frequently asked questions</h2>{onlineFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
    </div>
  );
}

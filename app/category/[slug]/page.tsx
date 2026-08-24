import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { SEOHead } from "@/components/SEOHead";
import { categories, getCategory, getCategoryPage, getCategoryPageCount, getGamesByCategory, MIN_INDEXABLE_CATEGORY_GAMES } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const coreCategoryMetadata: Record<string, { title: string; description: string }> = {
  "local-2-player": {
    title: "Free Local 2 Player Games on One Computer",
    description: "Play reviewed local two-player browser games on one computer with a shared keyboard, screen, mouse or pass-and-play controls.",
  },
  "online-2-player": {
    title: "Free Online 2 Player Browser Games",
    description: "Play reviewed online two-player browser games from separate devices with a friend, room or matched opponent where verified.",
  },
  multiplayer: {
    title: "Free Multiplayer Browser Games",
    description: "Join reviewed multiplayer browser games with real players in public matches, teams, rooms and online arenas.",
  },
};

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};
  const seo = coreCategoryMetadata[category.slug];
  const metadata = pageMetadata(seo?.title ?? `Free ${category.title} Games Online`, seo?.description ?? category.description, `/category/${category.slug}/`);
  if (getGamesByCategory(category.slug).length < MIN_INDEXABLE_CATEGORY_GAMES) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();
  const games = getCategoryPage(category.slug, 1);
  const pageCount = getCategoryPageCount(category.slug);
  const isLocal = category.slug === "local-2-player";
  const isOnlineTwoPlayer = category.slug === "online-2-player";
  const isMultiplayer = category.slug === "multiplayer";
  const isParty = category.slug === "party";
  const isBoardCard = category.slug === "board-card";
  const isSportsRacing = category.slug === "sports-racing";
  const isIoArena = category.slug === "io-arena";
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
  const multiplayerFaq = isMultiplayer ? [
    { question: "What counts as a multiplayer browser game here?", answer: "A game must include a reviewed mode involving real players online. AI-only games and single-player games with misleading multiplayer tags are not included in this collection." },
    { question: "Can I play multiplayer games with a specific friend?", answer: "Some games offer a room, invitation or friend challenge, while others use public matchmaking. The available connection method is described on the individual game page when it has been verified." },
    { question: "Are all multiplayer games designed for more than two people?", answer: "No. Multiplayer is the broad collection and includes head-to-head games as well as larger rooms, teams, co-op modes and public arenas. Use the online two-player category when you specifically want a duel." },
    { question: "Do these games require a download?", answer: "No. The listed games launch through reviewed HTML5 browser embeds. A game may still have its own loading screen, matchmaking step or optional account features." }
  ] : [];
  const partyFaq = isParty ? [
    { question: "What makes a browser game good for a party?", answer: "Party games should be quick to understand, easy to restart and entertaining for people watching as well as playing. Short races, simple duels and shared-screen action work especially well." },
    { question: "Can party games be played on one computer?", answer: "Many games in this collection support shared-keyboard or shared-screen play. Others use online matches, so check the local or online label on each card and the controls on its game page." },
    { question: "How many people can play these party games?", answer: "The collection includes two-player games, three-player shared-device games and larger online matches. Player counts and control arrangements are listed on individual game pages." },
    { question: "Are party games always competitive?", answer: "No. Many are competitive races or duels, but cooperative games can also work for a party when players communicate, take turns or try to beat a shared challenge." }
  ] : [];
  const boardCardFaq = isBoardCard ? [
    { question: "Which board and card games can two people play together?", answer: "Every game in this collection has a reviewed two-player option. Some use local pass-and-play controls, some connect online opponents, and several support both." },
    { question: "Can I practice against the computer first?", answer: "Several titles include AI practice, including checkers, Turkish draughts, dominoes and Castle Wars. AI availability is listed as an extra mode and is not treated as proof of multiplayer by itself." },
    { question: "Are these games turn-based?", answer: "Most are turn-based or alternate actions between players. Carrom uses physics-based shots, while Battle Jitsu uses faster card choices, so the pace varies even within the collection." },
    { question: "Do I need to know the rules before playing?", answer: "Simple games such as tic-tac-toe are immediately familiar. Checkers, Turkish draughts, backgammon, WHOT and Castle Wars have more specific rules, so review the controls and objective on the game page first." }
  ] : [];
  const sportsRacingFaq = isSportsRacing ? [
    { question: "Which sports and racing games support two players?", answer: "The collection includes verified local and online options. Table Pong, Carrom Pro and Aquapark Balls Party support shared-device play, while Multiplayer Pong and Rocketcar Cup include online competition." },
    { question: "Are all racing games car games?", answer: "No. This collection uses racing for any game built around reaching a finish first, including parkour courses, bridge races, balloon races and water-park races as well as vehicle competition." },
    { question: "Do these games work with a keyboard?", answer: "Several games use keyboard controls, particularly local table tennis, soccer and parkour titles. Darts, billiards and carrom rely more on mouse, touch or aiming gestures. Check the controls before starting." },
    { question: "Can I practice sports games against AI?", answer: "AI availability varies. Some titles provide solo practice, but this category is organized by the sport or race mechanic rather than by AI support. Player mode details appear on each game page." }
  ] : [];
  const ioArenaFaq = isIoArena ? [
    { question: "What is an IO game?", answer: "IO games are lightweight browser games commonly built around quick online sessions, shared arenas, public opponents and simple controls. The name alone is not enough for inclusion here; the multiplayer or arena behavior must be verified." },
    { question: "Are all IO games battle royale games?", answer: "No. This collection includes territory games, snake survival, social deduction, trivia races, team sports and direct arena duels as well as battle royale games." },
    { question: "Can I play IO games with friends?", answer: "Some games expose friend, team or room options, while others place players into public matches. Check the individual page because a public multiplayer game does not automatically support private invitations." },
    { question: "Do IO and arena games include weapons?", answer: "Some do, while others use racing, territory, trivia or cartoon-style contact. Games with shooting or weapons are reviewed for graphic violence before inclusion and are described clearly on their pages." }
  ] : [];
  const schema = (isLocal || isOnlineTwoPlayer || isMultiplayer || isParty || isBoardCard || isSportsRacing || isIoArena) ? { "@context": "https://schema.org", "@type": "CollectionPage", name: `${category.title} Games`, url: `${siteConfig.url}/category/${category.slug}/`, description: category.description, mainEntity: { "@type": "ItemList", numberOfItems: getGamesByCategory(category.slug).length, itemListElement: games.map((game, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteConfig.url}/games/${game.slug}/`, name: game.title })) } } : null;
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
      {isMultiplayer && <section className="prose-copy mt-14">
        <h2>How to choose a multiplayer browser game</h2><p>Decide whether you want a private duel, a public match or a larger arena before loading a game. Head-to-head titles are easier to organize with one friend, while public matchmaking starts faster when nobody else is available. Arena and co-op games may support more players but can take longer to fill or explain.</p>
        <h2>Quick online matches</h2><p>For a direct contest, try <Link href="/games/multiplayer-pong/">Multiplayer Pong</Link>, <Link href="/games/battle-jitsu/">Battle Jitsu</Link> or <Link href="/games/music-night-battle-rhythm-game/">Music Night Battle</Link>. These games focus on one clear competitive mechanic rather than a large open lobby. The <Link href="/category/online-2-player/">online two-player collection</Link> contains more verified duel options.</p>
        <h2>Public arenas and larger matches</h2><p><Link href="/games/tung-sahur-io/">Tung Sahur IO</Link>, <Link href="/games/guardz-io/">Guardz IO</Link>, <Link href="/games/snake-war-multiplayer/">Snake War Multiplayer</Link> and <Link href="/games/survev-io/">Survev.io</Link> are designed around public opponents and survival-style competition. These games are better when you want unpredictable matches rather than a fixed two-person session.</p>
        <h2>Co-op, teams and social deduction</h2><p><Link href="/games/pga3-zombie/">PGA3 Zombie</Link> documents online cooperative play, while <Link href="/games/imposter-duck-online/">Imposter Duck: Online</Link> uses social deduction and changing player roles. Team or social modes can be more engaging for groups, but they also depend more heavily on active matchmaking and the behavior of other players.</p>
        <h2>How this collection is reviewed</h2><p>Supplier categories are not accepted as proof by themselves. A game must show a real online player mode during review or describe one clearly in its verified gameplay information. AI practice can be included as an extra mode, but an AI-only game does not qualify. For two people sharing one device, browse <Link href="/category/local-2-player/">local two-player games</Link>.</p>
        <h2>Related guide</h2><p>See our <Link href="/blog/best-2-player-browser-games/">browser game testing guide</Link> for the control, player-mode, embedding and safety checks used across the catalog.</p>
        <h2>Frequently asked questions</h2>{multiplayerFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
      {isParty && <section className="prose-copy mt-14">
        <h2>How to choose a party game</h2><p>Pick a game that matches where everyone is sitting and how quickly the group wants to start. Shared-keyboard games are best when players are together, while online races and arenas suit separate devices. Simple controls and short rounds make it easier to rotate players without a long tutorial.</p>
        <h2>Quick games for two people</h2><p><Link href="/games/table-pong/">Table Pong</Link> and <Link href="/games/drunken-duel-2-players/">Drunken Duel 2 Players</Link> use compact controls and short head-to-head rounds. <Link href="/games/music-night-battle-rhythm-game/">Music Night Battle</Link> is a faster online option for players who prefer timing and score competition.</p>
        <h2>Shared-screen games for three players</h2><p><Link href="/games/fish-eat-getting-big/">Fish Eat Getting Big</Link> and <Link href="/games/fish-eat-fish-2/">Fish Eat Fish 2</Link> document controls for up to three people on one device. Two players use separate keyboard layouts and the third uses the mouse, making them practical when an extra person wants to join.</p>
        <h2>Races and knockout matches</h2><p><Link href="/games/nightmare-runners/">Nightmare Runners</Link>, <Link href="/games/gang-fall-party/">Gang Fall Party</Link>, <Link href="/games/aquapark-balls-party/">Aquapark Balls Party</Link> and <Link href="/games/brainrot-bridge-race-3d/">Brainrot Bridge Race 3D</Link> create more visible competition through obstacle courses, knockouts or races. These are useful when spectators want to follow the result without learning detailed rules.</p>
        <h2>Local or online party play?</h2><p>Use the <Link href="/category/local-2-player/">local two-player collection</Link> when everyone is sharing one device. Choose <Link href="/category/multiplayer/">multiplayer games</Link> for public rooms and larger online matches, or <Link href="/category/online-2-player/">online two-player games</Link> for a remote duel.</p>
        <h2>Related guide</h2><p>Our <Link href="/blog/best-2-player-browser-games/">two-player browser game testing guide</Link> explains how we verify controls, player modes, official embeds and audience safety before including a game.</p>
        <h2>Frequently asked questions</h2>{partyFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
      {isBoardCard && <section className="prose-copy mt-14">
        <h2>How to choose a board or card game</h2><p>Choose by pace, rules and where the other player is located. Familiar grid games are easiest for a quick session, while card games and backgammon reward learning a deeper ruleset. Local pass-and-play works well on one screen; online modes are better for remote opponents.</p>
        <h2>Classic board games</h2><p><Link href="/games/master-checkers-multiplayer/">Master Checkers Multiplayer</Link>, <Link href="/games/turkish-draughts/">Turkish Draughts</Link>, <Link href="/games/dominoes-classic-duel/">Dominoes Classic Duel</Link> and <Link href="/games/backgammonia-online-backgammon-game/">Backgammonia</Link> adapt established tabletop rules for the browser. Their multiplayer modes range from shared-device turns to online opponents, and several also include AI practice.</p>
        <h2>Card battles and matching rules</h2><p><Link href="/games/castle-wars-legacy/">Castle Wars: Legacy</Link> combines deck building, resources and tactical attacks. <Link href="/games/battle-jitsu/">Battle Jitsu</Link> uses a faster fire-water-ice counter system, while <Link href="/games/whot-the-ultimate-nigerian-card-game/">WHOT</Link> focuses on matching cards and emptying your hand before an opponent.</p>
        <h2>Short strategy games</h2><p><Link href="/games/tic-tac-toe-pro-multiplayer-challenge/">Tic Tac Toe Pro</Link> is the quickest rules-light option. <Link href="/games/carrom-pro/">Carrom Pro</Link> replaces grid movement with aiming and collision physics, making it a useful choice when players want tabletop competition without a long sequence of turns.</p>
        <h2>Local, online or AI?</h2><p>Use <Link href="/category/local-2-player/">local two-player games</Link> for one shared device and <Link href="/category/online-2-player/">online two-player games</Link> for remote opponents. AI is useful for learning rules or practicing, but this collection only includes games whose two-player mode was separately reviewed.</p>
        <h2>Related guide</h2><p>Our <Link href="/blog/best-2-player-browser-games/">two-player browser game testing guide</Link> explains how controls, modes, official embeds and audience safety are checked before publication.</p>
        <h2>Frequently asked questions</h2>{boardCardFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
      {isSportsRacing && <section className="prose-copy mt-14">
        <h2>How to choose a sports or racing game</h2><p>Choose between precision sports, direct head-to-head games and finish-line races. Aiming games reward patience and repeatable control, while paddle and soccer games demand quicker reactions. Racing games are easier to understand at a glance but may use very different movement systems.</p>
        <h2>Ball, paddle and aiming games</h2><p><Link href="/games/multiplayer-pong/">Multiplayer Pong</Link> and <Link href="/games/table-pong/">Table Pong</Link> focus on paddle positioning and quick returns. <Link href="/games/darts-pro-multiplayer/">Darts Pro Multiplayer</Link>, <Link href="/games/billiard-champion/">Billiard Champion</Link> and <Link href="/games/carrom-pro/">Carrom Pro</Link> use slower aiming, angle and power decisions.</p>
        <h2>Soccer and vehicle competition</h2><p><Link href="/games/rocketcar-cup/">Rocketcar Cup</Link> combines car movement with arcade soccer. Players need to manage acceleration, positioning, boosts and contact with the ball rather than following a traditional racing line.</p>
        <h2>Obstacle and finish-line races</h2><p><Link href="/games/ninja-parkour-multiplayer/">Ninja Parkour Multiplayer</Link> rewards precise jumps, while <Link href="/games/brainrot-bridge-race-3d/">Brainrot Bridge Race 3D</Link>, <Link href="/games/ballon-race-3d/">Ballon Race 3D</Link> and <Link href="/games/aquapark-balls-party/">Aquapark Balls Party</Link> use collection, lane or obstacle mechanics on the way to a finish.</p>
        <h2>Local or online competition?</h2><p>For people sharing one device, browse the full <Link href="/category/local-2-player/">local two-player collection</Link>. Remote opponents should start with <Link href="/category/online-2-player/">online two-player games</Link>, while public races and larger matches also appear under <Link href="/category/multiplayer/">multiplayer games</Link>.</p>
        <h2>Related guide</h2><p>Our <Link href="/blog/best-2-player-browser-games/">two-player browser game testing guide</Link> explains how player modes, controls, official embeds and audience safety are checked.</p>
        <h2>Frequently asked questions</h2>{sportsRacingFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
      {isIoArena && <section className="prose-copy mt-14">
        <h2>How to choose an IO or arena game</h2><p>Start with the match format. Public survival games are easy to enter but unpredictable, territory games reward movement and map control, and direct arenas focus on short fights. Social deduction and trivia use the same online-lobby idea without relying on traditional combat.</p>
        <h2>Survival and last-player-standing games</h2><p><Link href="/games/snake-war-multiplayer/">Snake War Multiplayer</Link> is built around growing, trapping rivals and surviving in a shared arena. <Link href="/games/survev-io/">Survev.io</Link> uses a shrinking battle-royale map, while <Link href="/games/tung-sahur-io/">Tung Sahur IO</Link> turns a large public session into an infection-style chase.</p>
        <h2>Territory and movement arenas</h2><p><Link href="/games/color-path-io/">Color Path IO</Link> asks players to claim space by drawing a path. <Link href="/games/speen/">Speen</Link> combines momentum-based movement with territory painting and player duels, while <Link href="/games/greedy-snake-multiplayer-duel/">Greedy Snake Multiplayer Duel</Link> offers a simpler competitive snake format.</p>
        <h2>Teams, trivia and social play</h2><p><Link href="/games/imposter-duck-online/">Imposter Duck: Online</Link> uses hidden roles and group decisions. <Link href="/games/quiz-runner-io/">Quiz Runner.io</Link> combines trivia with a race, and <Link href="/games/rocketcar-cup/">Rocketcar Cup</Link> turns a shared arena into an arcade soccer match.</p>
        <h2>Direct arena battles</h2><p><Link href="/games/gang-fall-party/">Gang Fall Party</Link>, <Link href="/games/growwars-io/">GrowWars.io</Link>, <Link href="/games/viking-tomahawk/">Viking Tomahawk</Link> and <Link href="/games/guardz-io/">Guardz IO</Link> focus on knocking out or defeating opponents. Weapon and combat intensity varies, so use the individual page description before choosing.</p>
        <h2>Public matches or planned games?</h2><p>For a specific remote opponent, start with <Link href="/category/online-2-player/">online two-player games</Link>. The broader <Link href="/category/multiplayer/">multiplayer collection</Link> includes team and co-op formats, while <Link href="/category/party/">party games</Link> are better for quick rounds and player rotation.</p>
        <h2>Frequently asked questions</h2>{ioArenaFaq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}
      </section>}
    </div>
  );
}

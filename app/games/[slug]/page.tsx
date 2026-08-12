import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { GamePlayer } from "@/components/GamePlayer";
import { SEOHead } from "@/components/SEOHead";
import { getAllGames, getGame, getRelatedGames } from "@/lib/games";
import { getGameEditorial } from "@/lib/game-editorial";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return getAllGames().map((game) => ({ slug: game.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = getGame(params.slug);
  if (!game) return {};
  const metadata = pageMetadata(`${game.title} - Play Online`, game.description, `/games/${game.slug}/`);
  if (game.licenseStatus !== "verified" || game.safetyStatus !== "approved" || !game.iframeUrl) {
    metadata.robots = { index: false, follow: false };
  }
  return metadata;
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const canEmbed = game.iframeUrl && game.licenseStatus === "verified" && game.safetyStatus === "approved";
  const related = getRelatedGames(game);
  const editorial = getGameEditorial(game.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    url: `${siteConfig.url}/games/${game.slug}/`,
    image: new URL(game.thumbnail, siteConfig.url).toString(),
    genre: [game.category, ...game.tags],
    playMode: "MultiPlayer",
    author: { "@type": "Organization", name: game.developer },
    dateModified: game.reviewedAt,
  };
  return (
    <div className="page-shell">
      <SEOHead data={schema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Games", href: game.gameplayType === "local" ? "/category/local-2-player/" : "/category/multiplayer/" }, { label: game.title }]} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article>
          <h1 className="text-4xl font-black tracking-tight text-slate-950">{game.title}</h1>
          <div className="mt-6 aspect-[3/2] overflow-hidden rounded-2xl bg-slate-900">
            <GamePlayer canEmbed={Boolean(canEmbed)} slug={game.slug} title={game.title} />
          </div>
          <div className="prose-copy mt-8">
            {editorial && <><p className="text-lg leading-8 text-slate-700">{editorial.summary}</p><h2>Quick facts</h2><ul><li>Players: {game.playerCount}</li><li>Play type: {game.gameplayType}</li><li>Input: {editorial.input}</li><li>Device setup: {editorial.deviceSetup}</li><li>Friend connection: {editorial.invite}</li></ul></>}
            <h2>About {game.title}</h2><p>{game.description}</p>
            <h2>How to play {game.title}</h2><p>{editorial?.objective ?? game.controls}</p>
            <h2>Controls</h2><p>{editorial?.input ?? game.controls}</p>
            {editorial && <><h2>Game modes</h2><p>{editorial.modes}</p><h2>Tips for playing</h2><ul>{editorial.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul><h2>Why we picked this game</h2><p>{editorial.pickedBecause}</p><h2>What to know before playing</h2><p>{editorial.limitations}</p></>}
            <h2>Game details</h2><ul><li>Players: {game.playerCount}</li><li>Play type: {game.gameplayType}</li><li>Developer: {game.developer}</li><li>Official source: {game.sourcePlatform}</li><li>Last reviewed: {game.reviewedAt}</li></ul>
          </div>
        </article>
        <aside><AdSlot slot="game-sidebar" /><div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Safety note</strong><p className="mt-2">We list only reviewed official embeds and avoid adult, gambling, graphic violence and unauthorized IP content.</p></div></aside>
      </div>
      {related.length > 0 && <section className="mt-14"><h2 className="text-3xl font-bold text-slate-950">Related games</h2><div className="game-grid mt-6">{related.map((item) => <GameCard game={item} key={item.slug} />)}</div></section>}
    </div>
  );
}

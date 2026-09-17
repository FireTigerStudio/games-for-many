import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { GamePlayer } from "@/components/GamePlayer";
import gamePageCopy from "@/data/game-page-copy-260917.json";
import { NinjaParkourContent } from "@/components/NinjaParkourContent";
import { SEOHead } from "@/components/SEOHead";
import { getAllGames, getGame, getRelatedGames } from "@/lib/games";
import { getGameEditorial, hasIndependentGameEditorial } from "@/lib/game-editorial";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const pageCopy = gamePageCopy as Record<string, {
  new_title: string;
  new_description: string;
  new_h1: string;
  new_intro: string;
}>;

export function generateStaticParams() { return getAllGames().map((game) => ({ slug: game.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const game = getGame(params.slug);
  if (!game) return {};
  const copy = pageCopy[game.slug];
  const metadata = pageMetadata(copy.new_title, copy.new_description, `/games/${game.slug}/`);
  metadata.title = { absolute: copy.new_title };
  if (game.licenseStatus !== "verified" || game.safetyStatus !== "approved" || !game.iframeUrl) {
    metadata.robots = { index: false, follow: false };
  } else if (!hasIndependentGameEditorial(game.slug)) {
    metadata.robots = { index: false, follow: true };
  }
  return metadata;
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) notFound();
  const copy = pageCopy[game.slug];
  const canEmbed = game.iframeUrl && game.licenseStatus === "verified" && game.safetyStatus === "approved";
  const related = getRelatedGames(game);
  const editorial = getGameEditorial(game.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: copy.new_description,
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
          <h1 className="text-4xl font-black tracking-tight text-slate-950">{copy.new_h1}</h1>
          <div className="mt-6 aspect-[3/2] overflow-hidden rounded-2xl bg-slate-900">
            <GamePlayer canEmbed={Boolean(canEmbed)} slug={game.slug} title={game.title} />
          </div>
          <div className="prose-copy mt-8">
            {game.slug === "ninja-parkour-multiplayer" ? <><p>{copy.new_intro}</p><NinjaParkourContent /></> : <>
            {editorial && <><p className="text-lg leading-8 text-slate-700">{copy.new_intro}</p><h2>Quick facts</h2><ul><li>Players: {game.playerCount}</li><li>Play type: {game.gameplayType}</li><li>Input: {editorial.input}</li><li>Device setup: {editorial.deviceSetup}</li><li>Friend connection: {editorial.invite}</li></ul></>}
            {editorial?.testEvidence && <section className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-5"><h2 className="!mt-0">Our hands-on check</h2><p>Tested on {editorial.testEvidence.date} using {editorial.testEvidence.setup}.</p><ul>{editorial.testEvidence.observations.map((observation) => <li key={observation}>{observation}</li>)}</ul><p><strong>Not tested:</strong> {editorial.testEvidence.notTested}.</p><p><strong>Sources:</strong> {editorial.testEvidence.sources.map((source, index) => <span key={source.url}>{index > 0 ? ", " : ""}<a className="font-semibold text-violet-800 underline" href={source.url} rel="noopener noreferrer" target="_blank">{source.label}</a></span>)}</p></section>}
            <h2>About {game.title}</h2><p>{editorial ? game.description : copy.new_intro}</p>
            <h2>How to play {game.title}</h2><p>{editorial?.objective ?? game.controls}</p>
            <h2>Controls</h2><p>{editorial?.input ?? game.controls}</p>
            {editorial && <><h2>Game modes</h2><p>{editorial.modes}</p>{editorial.friendSteps && <><h2>How to play with friends</h2><ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">{editorial.friendSteps.map((step) => <li key={step}>{step}</li>)}</ol></>}<h2>Tips for playing</h2><ul>{editorial.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul><h2>Why we picked this game</h2><p>{editorial.pickedBecause}</p><h2>What to know before playing</h2><p>{editorial.limitations}</p></>}
            <h2>Game details</h2><ul><li>Players: {game.playerCount}</li><li>Play type: {game.gameplayType}</li><li>Developer: {game.developer}</li><li>Official source: {game.sourcePlatform}</li><li>Last reviewed: {game.reviewedAt}</li></ul>
            </>}
          </div>
        </article>
        <aside><AdSlot slot="game-sidebar" /><div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Safety note</strong><p className="mt-2">We list only reviewed official embeds and avoid adult, gambling, graphic violence and unauthorized IP content.</p></div></aside>
      </div>
      {related.length > 0 && <section className="mt-14"><h2 className="text-3xl font-bold text-slate-950">Related games</h2><div className="game-grid mt-6">{related.map((item) => <GameCard game={item} key={item.slug} />)}</div></section>}
    </div>
  );
}

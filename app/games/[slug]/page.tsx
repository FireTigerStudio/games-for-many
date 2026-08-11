import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { SEOHead } from "@/components/SEOHead";
import { getAllGames, getGame, getRelatedGames } from "@/lib/games";
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
  };
  return (
    <div className="page-shell">
      <SEOHead data={schema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Games", href: "/category/2-player/" }, { label: game.title }]} />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article>
          <h1 className="text-4xl font-black tracking-tight text-slate-950">{game.title}</h1>
          <div className="mt-6 aspect-[3/2] overflow-hidden rounded-2xl bg-slate-900">
            {canEmbed ? (
              <iframe allow="autoplay; fullscreen; gamepad" allowFullScreen className="h-full w-full" loading="eager" referrerPolicy="strict-origin-when-cross-origin" src={game.iframeUrl!} title={`Play ${game.title}`} />
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center text-slate-300"><div><p className="text-xl font-semibold text-white">Game integration pending review</p><p className="mt-2 max-w-lg">This development page does not load a third-party game until its official embed permission and content safety are verified.</p></div></div>
            )}
          </div>
          <div className="prose-copy mt-8">
            <h2>About {game.title}</h2><p>{game.description}</p>
            <h2>How to play</h2><p>{game.controls}</p>
            <h2>Game details</h2><ul><li>Players: {game.playerCount}</li><li>Play type: {game.gameplayType}</li><li>Developer: {game.developer}</li><li>Official source: {game.sourcePlatform}</li></ul>
          </div>
        </article>
        <aside><AdSlot slot="game-sidebar" /><div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600"><strong className="text-slate-950">Safety note</strong><p className="mt-2">We list only reviewed official embeds and avoid adult, gambling, graphic violence and unauthorized IP content.</p></div></aside>
      </div>
      {related.length > 0 && <section className="mt-14"><h2 className="text-3xl font-bold text-slate-950">Related games</h2><div className="game-grid mt-6">{related.map((item) => <GameCard game={item} key={item.slug} />)}</div></section>}
    </div>
  );
}

import { AdSlot } from "@/components/AdSlot";
import { CategoryGrid } from "@/components/CategoryGrid";
import { GameCard } from "@/components/GameCard";
import { getActiveCategories, getPublishableGames } from "@/lib/games";

export default function HomePage() {
  const games = getPublishableGames();
  const categories = getActiveCategories();
  return (
    <div className="page-shell">
      <section className="rounded-3xl bg-gradient-to-br from-violet-800 to-indigo-950 px-6 py-14 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Play together</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Two-player browser games for shared screens and friendly competition</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-violet-100">A human-reviewed collection for casual gamers, teens and adults. No downloads, misleading buttons or unauthorized game copies.</p>
      </section>
      <AdSlot className="my-8" slot="home-banner" />
      <section aria-labelledby="featured-heading">
        <h2 className="text-3xl font-bold text-slate-950" id="featured-heading">Editor picks</h2>
        <p className="mt-2 text-slate-600">Officially embedded HTML5 games selected for multiplayer fit and audience safety.</p>
        <div className="game-grid mt-6">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div>
      </section>
      <section aria-labelledby="categories-heading" className="mt-14">
        <h2 className="text-3xl font-bold text-slate-950" id="categories-heading">Browse game categories</h2>
        <div className="mt-6"><CategoryGrid categories={categories} /></div>
      </section>
    </div>
  );
}

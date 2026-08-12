import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { categories, getCategory, getCategoryPage, getCategoryPageCount, getGamesByCategory } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";

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
  return (
    <div className="page-shell">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: `${category.title} Games` }]} />
      <h1 className="text-4xl font-black text-slate-950">{category.title} Games</h1>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">{category.description} Every listing is checked for official embedding permission and audience safety before publication.</p>
      {games.length ? <div className="game-grid mt-8">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div> : <p className="mt-8 rounded-2xl bg-white p-6 text-slate-600">The first reviewed games for this category are being selected.</p>}
      {pageCount > 1 && <nav aria-label="Category pages" className="mt-10 flex flex-wrap gap-2">{Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => <Link aria-current={page === 1 ? "page" : undefined} className={`rounded-lg border px-4 py-2 ${page === 1 ? "border-violet-700 bg-violet-700 text-white" : "border-slate-300 bg-white text-slate-700"}`} href={page === 1 ? `/category/${category.slug}/` : `/category/${category.slug}/page/${page}/`} key={page}>{page}</Link>)}</nav>}
      {category.longDescription && <section className="prose-copy mt-14"><h2>How to choose a local two-player game</h2><p>{category.longDescription}</p><h2>Shared keyboard or pass and play?</h2><p>Choose shared-keyboard games when both players want simultaneous action. Choose pass-and-play board or card games when you prefer slower turns and can share one mouse or touchscreen. Each game page lists the verified controls and play type.</p></section>}
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { categories, getGamesByCategory } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";
import type { GameCategory } from "@/lib/types";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = categories.find((item) => item.slug === params.slug);
  return category ? pageMetadata(`${category.title} Games`, category.description, `/category/${category.slug}/`) : {};
}
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();
  const games = getGamesByCategory(category.slug as GameCategory);
  return <div className="page-shell"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: `${category.title} Games` }]} /><h1 className="text-4xl font-black text-slate-950">{category.title} Games</h1><p className="mt-4 max-w-3xl leading-7 text-slate-600">{category.description} Every listing is checked for official embedding permission and audience safety before publication.</p>{games.length ? <div className="game-grid mt-8">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div> : <p className="mt-8 rounded-2xl bg-white p-6 text-slate-600">The first reviewed games for this category are being selected.</p>}</div>;
}

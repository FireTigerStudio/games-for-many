import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { getAllTags, getGamesByTag } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return getAllTags().map((slug) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { return getAllTags().includes(params.slug) ? pageMetadata(`${params.slug.replaceAll("-", " ")} games`, `Browse reviewed ${params.slug.replaceAll("-", " ")} browser games.`, `/tag/${params.slug}/`) : {}; }
export default function TagPage({ params }: { params: { slug: string } }) {
  if (!getAllTags().includes(params.slug)) notFound();
  const games = getGamesByTag(params.slug);
  const title = params.slug.replaceAll("-", " ");
  return <div className="page-shell"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} /><h1 className="text-4xl font-black capitalize text-slate-950">{title} games</h1><div className="game-grid mt-8">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div></div>;
}

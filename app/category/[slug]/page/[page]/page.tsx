import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GameCard } from "@/components/GameCard";
import { categories, getCategory, getCategoryPage, getCategoryPageCount } from "@/lib/games";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return categories.flatMap((category) => Array.from({ length: Math.max(0, getCategoryPageCount(category.slug) - 1) }, (_, index) => ({ slug: category.slug, page: String(index + 2) })));
}

export function generateMetadata({ params }: { params: { slug: string; page: string } }): Metadata {
  const category = getCategory(params.slug);
  const page = Number(params.page);
  if (!category || !Number.isInteger(page) || page < 2 || page > getCategoryPageCount(params.slug)) return {};
  return pageMetadata(`${category.title} Games - Page ${page}`, `Browse page ${page} of reviewed ${category.title.toLowerCase()} browser games.`, `/category/${category.slug}/page/${page}/`);
}

export default function CategoryPaginationPage({ params }: { params: { slug: string; page: string } }) {
  const category = getCategory(params.slug);
  const page = Number(params.page);
  if (!category || !Number.isInteger(page) || page < 2 || page > getCategoryPageCount(params.slug)) notFound();
  const games = getCategoryPage(category.slug, page);
  const pageCount = getCategoryPageCount(category.slug);
  return <div className="page-shell"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: `${category.title} Games`, href: `/category/${category.slug}/` }, { label: `Page ${page}` }]} /><h1 className="text-4xl font-black text-slate-950">{category.title} Games – Page {page}</h1><p className="mt-4 text-slate-600">Continue browsing reviewed games in this category.</p><div className="game-grid mt-8">{games.map((game) => <GameCard game={game} key={game.slug} />)}</div><nav aria-label="Category pages" className="mt-10 flex flex-wrap gap-2">{Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => <Link aria-current={number === page ? "page" : undefined} className={`rounded-lg border px-4 py-2 ${number === page ? "border-violet-700 bg-violet-700 text-white" : "border-slate-300 bg-white text-slate-700"}`} href={number === 1 ? `/category/${category.slug}/` : `/category/${category.slug}/page/${number}/`} key={number}>{number}</Link>)}</nav></div>;
}

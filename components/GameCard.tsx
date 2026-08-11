import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/lib/types";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link aria-label={`View ${game.title}`} href={`/games/${game.slug}/`}>
        <Image alt="" className="aspect-[16/10] w-full object-cover" height={360} src={game.thumbnail} width={576} />
        <div className="p-4">
          <h3 className="font-semibold text-slate-950">{game.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{game.playerCount} players · {game.gameplayType}</p>
        </div>
      </Link>
    </article>
  );
}

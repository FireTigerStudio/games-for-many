import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link className="text-xl font-black tracking-tight text-violet-800" href="/">Games for Many</Link>
        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
          <Link href="/category/local-2-player/">Local 2 Player</Link>
          <Link href="/category/online-2-player/">Online 2 Player</Link>
          <Link href="/category/multiplayer/">Multiplayer</Link>
          <Link href="/blog/best-2-player-browser-games/">Guides</Link>
        </nav>
      </div>
    </header>
  );
}

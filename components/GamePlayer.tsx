"use client";

import { useState } from "react";
import gamesData from "@/data/games.json";
import type { Game } from "@/lib/types";

type GamePlayerProps = {
  canEmbed: boolean;
  slug: string;
  title: string;
};

const games = gamesData as Game[];

export function GamePlayer({ canEmbed, slug, title }: GamePlayerProps) {
  const [started, setStarted] = useState(false);
  const iframeUrl = started ? games.find((game) => game.slug === slug)?.iframeUrl : null;

  if (!canEmbed) {
    return (
      <div className="flex h-full items-center justify-center p-8 text-center text-slate-300">
        <div>
          <p className="text-xl font-semibold text-white">Game integration pending review</p>
          <p className="mt-2 max-w-lg">This page does not load a third-party game until its official embed permission and content safety are verified.</p>
        </div>
      </div>
    );
  }

  if (!started || !iframeUrl) {
    return (
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 p-8 text-center text-white">
        <div className="max-w-lg">
          <p className="text-2xl font-bold">Ready to play {title}?</p>
          <p className="mt-3 leading-7 text-slate-300">The official third-party game and its advertising services load only after you start.</p>
          <button className="mt-6 rounded-full bg-violet-500 px-7 py-3 font-bold text-white shadow-lg transition hover:bg-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-300" onClick={() => setStarted(true)} type="button">
            Play game
          </button>
        </div>
      </div>
    );
  }

  return <iframe allow="autoplay; fullscreen; gamepad" allowFullScreen className="h-full w-full" referrerPolicy="strict-origin-when-cross-origin" src={iframeUrl} title={`Play ${title}`} />;
}

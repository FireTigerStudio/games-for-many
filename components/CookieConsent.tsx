"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "gfm-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem(CONSENT_KEY) === null);
    const openSettings = () => setVisible(true);
    window.addEventListener("gfm-open-cookie-settings", openSettings);
    return () => window.removeEventListener("gfm-open-cookie-settings", openSettings);
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent("gfm-consent-change", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside aria-label="Cookie choices" aria-modal="true" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl" role="dialog">
      <p className="font-semibold text-slate-950">Your privacy choices</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">We use essential storage to remember this choice. Optional analytics and advertising cookies stay off unless you accept them.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button className="rounded-full bg-violet-700 px-4 py-2 text-sm font-semibold text-white" onClick={() => choose("accepted")} type="button">Accept optional cookies</button>
        <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800" onClick={() => choose("rejected")} type="button">Reject optional cookies</button>
        <a className="px-2 py-2 text-sm text-violet-700" href="/cookies/">Cookie policy</a>
      </div>
    </aside>
  );
}

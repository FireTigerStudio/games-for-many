"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "gfm-cookie-consent";
const CLARITY_ID = "y15ydkah2h";

type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    clarity: ClarityFunction;
  }
}

export function Analytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = (event?: Event) => {
      const value = event instanceof CustomEvent ? event.detail : localStorage.getItem(CONSENT_KEY);
      const state = value === "accepted" ? "granted" : "denied";
      setEnabled(value === "accepted");

      window.gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state,
      });
    };

    updateConsent();
    window.addEventListener("gfm-consent-change", updateConsent);
    return () => window.removeEventListener("gfm-consent-change", updateConsent);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    if (!window.clarity) {
      const clarityQueue: ClarityFunction = (...args: unknown[]) => {
        clarityQueue.q = clarityQueue.q || [];
        clarityQueue.q.push(args);
      };
      window.clarity = clarityQueue;
    }

    if (!document.querySelector(`script[src*="clarity.ms/tag/${CLARITY_ID}"]`)) {
      const clarityScript = document.createElement("script");
      clarityScript.async = true;
      clarityScript.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
      document.head.appendChild(clarityScript);
    }
  }, [enabled]);

  useEffect(() => {
    const trackGameStart = (event: Event) => {
      if (!(event instanceof CustomEvent)) return;
      window.gtag("event", "game_start", event.detail);
    };
    window.addEventListener("gfm-game-start", trackGameStart);
    return () => window.removeEventListener("gfm-game-start", trackGameStart);
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "gfm-cookie-consent";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "y15ydkah2h";

const GAME_EVENTS = [
  ["gfm-game-start", "game_start"],
  ["gfm-game-iframe-loaded", "game_iframe_loaded"],
  ["gfm-game-load-timeout", "game_load_timeout"],
] as const;

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

      if (window.clarity) {
        window.clarity("consentv2", {
          ad_Storage: state,
          analytics_Storage: state,
        });
      }
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

    window.clarity("consentv2", {
      ad_Storage: "granted",
      analytics_Storage: "granted",
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const listeners = GAME_EVENTS.map(([domEvent, analyticsEvent]) => {
      const listener = (event: Event) => {
        if (!(event instanceof CustomEvent)) return;
        window.gtag("event", analyticsEvent, event.detail);
      };
      window.addEventListener(domEvent, listener);
      return [domEvent, listener] as const;
    });

    return () => listeners.forEach(([eventName, listener]) => window.removeEventListener(eventName, listener));
  }, [enabled]);

  return null;
}

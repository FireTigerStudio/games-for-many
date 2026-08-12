"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "gfm-cookie-consent";
const GA_ID = "G-1FXG6YDPHK";
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
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = (event?: Event) => {
      const value = event instanceof CustomEvent ? event.detail : localStorage.getItem(CONSENT_KEY);
      setEnabled(value === "accepted");
    };

    updateConsent();
    window.addEventListener("gfm-consent-change", updateConsent);
    return () => window.removeEventListener("gfm-consent-change", updateConsent);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(gaScript);
    }

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
    if (!enabled || !window.gtag) return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [enabled, pathname]);

  useEffect(() => {
    if (!enabled) return;
    const trackGameStart = (event: Event) => {
      if (!(event instanceof CustomEvent) || !window.gtag) return;
      window.gtag("event", "game_start", event.detail);
    };
    window.addEventListener("gfm-game-start", trackGameStart);
    return () => window.removeEventListener("gfm-game-start", trackGameStart);
  }, [enabled]);

  return null;
}

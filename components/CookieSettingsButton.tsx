"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="text-left hover:text-white"
      onClick={() => window.dispatchEvent(new Event("gfm-open-cookie-settings"))}
      type="button"
    >
      Cookie settings
    </button>
  );
}

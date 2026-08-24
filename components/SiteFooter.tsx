import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <AdSlot className="mb-8" slot="footer" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Games for Many</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-4">
            <Link href="/about/">About</Link><Link href="/contact/">Contact</Link><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/cookies/">Cookies</Link><CookieSettingsButton />
          </nav>
        </div>
      </div>
    </footer>
  );
}

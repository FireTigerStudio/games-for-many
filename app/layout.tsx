import type { Metadata } from "next";
import "@/app/globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Games for Many - Two Player Browser Games", template: "%s | Games for Many" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, url: siteConfig.url },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  verification: {
    other: {
      "msvalidate.01": "430AC269B1B809BD214A8DDB7D37DF2B",
      "google-adsense-account": "ca-pub-8786029149560475",
    },
  },
  robots: siteConfig.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Analytics /><SiteHeader /><main>{children}</main><SiteFooter /><CookieConsent /></body></html>;
}

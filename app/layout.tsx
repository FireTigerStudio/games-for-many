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
  return <html lang="en"><head>
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
      var gfmConsent = 'denied';
      try {
        gfmConsent = window.localStorage.getItem('gfm-cookie-consent') === 'accepted' ? 'granted' : 'denied';
      } catch (error) {}
      window.gtag('consent', 'default', {
        ad_storage: gfmConsent,
        ad_user_data: gfmConsent,
        ad_personalization: gfmConsent,
        analytics_storage: gfmConsent
      });
      window.gtag('js', new Date());
      window.gtag('config', 'G-1FXG6YDPHK');
    ` }} />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1FXG6YDPHK" />
  </head><body><Analytics /><SiteHeader /><main>{children}</main><SiteFooter /><CookieConsent /></body></html>;
}

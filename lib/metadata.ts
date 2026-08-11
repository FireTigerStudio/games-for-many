import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: siteConfig.name },
    twitter: { card: "summary_large_image", title, description },
  };
}

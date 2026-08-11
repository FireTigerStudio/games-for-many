import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
export const metadata = pageMetadata("Contact", "Contact Games for Many about games, rights or site issues.", "/contact/");
export default function ContactPage() { return <LegalPage intro="Use the address below for game corrections, rights concerns, business questions or accessibility feedback." title="Contact"><h2>Email</h2><p><a className="text-violet-700 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><h2>Rights and takedown requests</h2><p>Include the affected URL, your relationship to the work, and enough detail for us to investigate. We will disable a disputed embed while a credible rights concern is reviewed.</p><h2>Do not send passwords</h2><p>We will never ask for publisher, analytics, advertising or hosting passwords by email.</p></LegalPage>; }

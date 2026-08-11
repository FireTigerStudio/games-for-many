import { Breadcrumb } from "@/components/Breadcrumb";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <article className="page-shell max-w-4xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} /><h1 className="text-4xl font-black text-slate-950">{title}</h1><p className="mt-4 text-lg leading-8 text-slate-600">{intro}</p><div className="prose-copy">{children}</div><p className="mt-10 text-sm text-slate-500">Last updated: August 10, 2026</p></article>;
}

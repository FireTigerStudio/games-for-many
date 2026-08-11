import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-violet-300" href={`/category/${category.slug}/`} key={category.slug}>
          <h3 className="font-semibold text-slate-950">{category.title} Games</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
        </Link>
      ))}
    </div>
  );
}

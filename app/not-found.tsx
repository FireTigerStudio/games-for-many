import Link from "next/link";
export default function NotFound() { return <div className="page-shell text-center"><h1 className="text-5xl font-black text-slate-950">Page not found</h1><p className="mt-4 text-slate-600">This game or page is not available.</p><Link className="mt-6 inline-block rounded-full bg-violet-700 px-5 py-3 font-semibold text-white" href="/">Return home</Link></div>; }

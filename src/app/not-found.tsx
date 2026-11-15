"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-[#050507] text-white flex flex-col items-center justify-center px-4 font-mono">
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center max-w-md">
        <span className="text-4xl font-black text-[#5eead4] block mb-2">404</span>
        <h1 className="text-xl font-bold mb-2">Sector Not Found</h1>
        <p className="text-xs text-gray-400 mb-6 font-sans">
          The requested coordinate does not exist in the Vikas Sharma universe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5eead4] text-[#050507] text-xs font-bold uppercase tracking-wider hover:bg-[#5eead4]/90 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Orbit</span>
        </Link>
      </div>
    </main>
  );
}

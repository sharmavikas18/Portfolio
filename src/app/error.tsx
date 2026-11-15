"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Boundary caught:", error);
  }, [error]);

  return (
    <main className="w-full min-h-screen bg-[#050507] text-white flex flex-col items-center justify-center px-4 font-mono">
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] text-center max-w-md">
        <span className="text-3xl font-black text-red-400 block mb-2">500</span>
        <h1 className="text-lg font-bold mb-2">Subsystem Interrupted</h1>
        <p className="text-xs text-gray-400 mb-6 font-sans">
          An unexpected anomaly occurred. Click below to re-initialize.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5eead4] text-[#050507] text-xs font-bold uppercase tracking-wider hover:bg-[#5eead4]/90 transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Re-Initialize System</span>
        </button>
      </div>
    </main>
  );
}

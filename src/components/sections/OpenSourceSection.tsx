"use client";

import { useState } from "react";
import { GitPullRequest, GitMerge, Globe, ExternalLink } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { OSS_CONTRIBUTIONS } from "@/lib/data";

export default function OpenSourceSection() {
  const [filter, setFilter] = useState("all");

  const orgFilters = [
    { id: "all", label: "All Upstream" },
    { id: "fossasia", label: "FOSSASIA" },
    { id: "apache", label: "Apache" },
    { id: "freecodecamp", label: "freeCodeCamp" },
  ];

  const filteredContributions = OSS_CONTRIBUTIONS.filter(
    (c) => filter === "all" || c.orgSlug === filter
  );

  return (
          <section id="open-source" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-[#5eead4]" />
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                      {"02 // Upstream Ecosystem"}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                    Open Source <span className="text-accent-gradient">Constellation</span>
                  </h2>
                </div>
                <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                  Writing code that runs in projects used by millions. Active contributor across FOSSASIA, Apache, and developer education.
                </p>
              </div>

                {/* Philosophy Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/[0.08] mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#5eead4]/10 border border-[#5eead4]/30 text-[#5eead4] shrink-0 mt-1">
                      <GitPullRequest className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                        Engineering Tempered by Upstream Scrutiny
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-3xl">
                        Open source is where software is tempered by real peer review, distributed collaboration, and relentless standards. Every PR merged into an upstream project is proof of engineering discipline.
                      </p>
                    </div>
                  </div>

                <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                  <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-lg font-bold text-white">4+</span>
                    <span className="text-[10px] text-gray-500 uppercase">Major Orgs</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-lg font-bold text-[#5eead4]">100%</span>
                    <span className="text-[10px] text-gray-500 uppercase">Upstream PRs</span>
                  </div>
                </div>
              </div>

        {/* Filter Tabs */ }
                  < div className = "flex items-center gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar" >
                  {
                    orgFilters.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          soundFX.playClick(700);
                          setFilter(tab.id);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border cursor-pointer ${filter === tab.id
                            ? "bg-[#5eead4] text-[#050507] border-[#5eead4] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                            : "bg-white/[0.03] text-gray-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
                          }`}
                      >
                        {tab.label}
                      </button>
                    ))
                  }
        </div>

              {/* Contribution Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredContributions.map((contrib) => (
                  <div
                    key={contrib.id}
                    className="glass-card rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between hover:border-[#5eead4]/40 transition-all duration-300 group"
                  >
                    <div>
                      {/* Top Meta Strip */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#5eead4] uppercase tracking-wider">
                          {contrib.organization}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-mono text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/20 px-2 py-0.5 rounded">
                          <GitMerge className="w-3 h-3" />
                          <span>{contrib.type}</span>
                        </span>
                      </div>

                      {/* Repository Name */}
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#5eead4] transition-colors">
                        {contrib.repository}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                        {contrib.description}
                      </p>

                      {/* Impact Highlight */}
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-0.5">
                          Upstream Impact
                        </span>
                        <p className="text-xs font-mono text-gray-300">
                          {contrib.impact}
                        </p>
                      </div>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {contrib.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-gray-400 border border-white/[0.06]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                        <a
                          href={contrib.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFX.playClick(650)}
                          className="text-xs font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Repo</span>
                        </a>

                        <a
                          href={contrib.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundFX.playClick(750)}
                          className="text-xs font-mono text-[#5eead4] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>View PRs</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          );
}

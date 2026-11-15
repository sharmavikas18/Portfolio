"use client";

import { Users, Trophy, GitPullRequest, Cpu, Flame } from "lucide-react";
import { DEVFORGE_INFO } from "@/lib/data";

export default function DevForgeSection() {
  return (
      <section id="devforge" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-[#5eead4]" />
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                    {"03 // Leadership & Community"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  Forging Engineers at <span className="text-accent-gradient">DevForge</span>
                </h2>
              </div>
                <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                  Vice President of the student-led technology club at Newton School of Technology, Bangalore.
                </p>
            </div>

            {/* Hero Leadership Banner */}
              <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/[0.08] relative overflow-hidden mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/30 text-[#5eead4] text-xs font-mono mb-4">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{"Executive Leadership // Vice President"}</span>
                    </div>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                        From Writing Toy Code to Shipping Production Software
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl mb-6">
                        {DEVFORGE_INFO.mission}
                      </p>
                        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                          <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300">
                            📍 Newton School of Technology
                          </span>
                          <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300">
                            ⚡ Open Source & Hackathons
                          </span>
                          <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300">
                            🚀 Peer Mentorship Drives
                          </span>
                        </div>
                      </div>

                        <div className="lg:col-span-4 grid grid-cols-2 gap-3">
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                            <span className="text-2xl sm:text-3xl font-black text-white block">Multi</span>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1 block">
                              Hackathons Run
                            </span>
                          </div>
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                            <span className="text-2xl sm:text-3xl font-black text-[#5eead4] block">100+</span>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1 block">
                              Students Mentored
                            </span>
                          </div>
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                            <span className="text-2xl sm:text-3xl font-black text-[#38bdf8] block">Git</span>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1 block">
                              Bootcamps Led
                            </span>
                          </div>
                          <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-center">
                            <span className="text-2xl sm:text-3xl font-black text-[#f59e0b] block">1st</span>
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1 block">
                              PR Milestone
                            </span>
                          </div>
                        </div>
                      </div>
                  </div>

                  {/* 4 Pillars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {DEVFORGE_INFO.pillars.map((pillar, idx) => {
                        const icons = [GitPullRequest, Trophy, Cpu, Users];
                        const Icon = icons[idx % icons.length];
                        return (
                          <div
                            key={pillar.title}
                            className="glass-card rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between hover:border-[#5eead4]/40 transition-all duration-300"
                          >
                            <div>
                                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#5eead4] mb-3">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <h4 className="text-base font-bold text-white mb-1.5">{pillar.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-light">
                                  {pillar.desc}
                                </p>
                              </div>
                                <div className="mt-4 pt-2.5 border-t border-white/[0.06] text-[10px] font-mono text-gray-500">
                                  DevForge Pillar 0{idx + 1}
                                </div>
                              </div>
                              );
          })}
                            </div>
                          </div>
    </section>
                    );
}

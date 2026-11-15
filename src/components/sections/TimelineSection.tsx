"use client";

import { GraduationCap, Trophy, Users, GitPullRequest, Calendar } from "lucide-react";
import { TIMELINE_MILESTONES } from "@/lib/data";

export default function TimelineSection() {
  return (
      <section className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-[#5eead4]" />
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                    {"06 // Trajectory"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  Milestones & <span className="text-accent-gradient">Impact</span>
                </h2>
              </div>
                <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                  Verified milestones across competitive hackathons, academic rigor, student leadership, and upstream software.
                </p>
            </div>

            {/* Timeline Stream */}
                <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
                  {TIMELINE_MILESTONES.map((item) => {
                    const icons = {
                      education: GraduationCap,
                      leadership: Users,
                      achievement: Trophy,
                      "open-source": GitPullRequest,
                    };
                    const Icon = icons[item.type] || Trophy;

                    return (
                        <div
                key={item.title}
                        className="relative group"
                      >
                        {/* Node on line */}
                        <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#050507] border border-[#5eead4] flex items-center justify-center text-[#5eead4] group-hover:bg-[#5eead4] group-hover:text-[#050507] transition-all duration-300">
                          <div className="w-2 h-2 rounded-full bg-current" />
                        </div>

                        {/* Content Card */}
                            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-[#5eead4]/40 transition-all duration-300">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                <span className="text-xs font-mono text-[#5eead4] flex items-center gap-1.5 font-semibold">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {item.year}
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#5eead4]/10 text-[#5eead4] border border-[#5eead4]/20 font-semibold">
                                    {item.badge}
                                  </span>
                                )}
                              </div>

                                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#5eead4] transition-colors">
                                  {item.title}
                                </h3>
                                  <div className="text-xs font-mono text-gray-400 mb-2">
                                    <span className="text-white font-medium">{item.role}</span> • {item.organization}
                                  </div>
                                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light font-sans">
                                    {item.description}
                                  </p>
                                </div>
                            </div>
                            );
          })}
                          </div>
                        </div>
                      </section>
                    );
                  }

"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { SKILL_CATEGORIES } from "@/lib/data";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSkillHover, setActiveSkillHover] = useState<{
    name: string;
    context: string;
    level: string;
    projects: string[];
  } | null>(null);

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, categoryName: c.name }))
  );

  const displayedSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.categoryName === selectedCategory);

  return (
          <section id="skills" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-[#5eead4]" />
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                      {"04 // Technical Matrix"}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                    Tools & <span className="text-accent-gradient">Capabilities</span>
                  </h2>
                </div>
                <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                  No arbitrary percentages. Hover or tap any capability to inspect verified project context, production usage, and architectural role.
                </p>
              </div>

        {/* Category Filter Pills */ }
                  < div className = "flex items-center gap-2 overflow-x-auto pb-3 mb-8 custom-scrollbar" >
                  {
                    categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          soundFX.playClick(680);
                          setSelectedCategory(cat);
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border cursor-pointer ${selectedCategory === cat
                            ? "bg-[#5eead4] text-[#050507] border-[#5eead4] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                            : "bg-white/[0.03] text-gray-400 border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
                          }`}
                      >
                        {cat}
                      </button>
                    ))
                  }
        </div>

              {/* Live Context Inspector Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-8 min-h-[72px] flex items-center justify-between transition-all">
                {activeSkillHover ? (
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base font-bold text-white font-mono">{activeSkillHover.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5eead4]/10 text-[#5eead4] border border-[#5eead4]/30">
                          {activeSkillHover.level}
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 font-mono">{activeSkillHover.context}</p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-mono text-gray-500 uppercase mr-1">Applied In:</span>
                      {activeSkillHover.projects.map((p) => (
                        <span key={p} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-gray-300">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#5eead4]" />
                    <span>Hover or tap any technology card below to inspect its production application.</span>
                  </div>
                )}
              </div>

              {/* Skills Constellation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {displayedSkills.map((skill) => (
                  <div
                    key={skill.name}
                    onClick={() => {
                      soundFX.playKeypress();
                      setActiveSkillHover(skill);
                    }}
                    onMouseEnter={() => {
                      soundFX.playKeypress();
                      setActiveSkillHover(skill);
                    }}
                    className="glass-card rounded-2xl p-4 border border-white/[0.07] hover:border-[#5eead4]/50 cursor-pointer group flex flex-col justify-between transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#5eead4] transition-colors font-mono">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 line-clamp-2 font-mono font-light">
                      {skill.context}
                    </p>
                    <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-gray-500">
                      <span>{skill.categoryName}</span>
                      <span className="text-gray-600 group-hover:text-[#5eead4] transition-colors">↗</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          );
}

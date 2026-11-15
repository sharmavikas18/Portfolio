"use client";

import { useState } from "react";
import { ExternalLink, Github, CheckCircle2, ShieldCheck, Zap, Activity, Clock, Layers, Sparkles, DollarSign, Gamepad2, BookOpen, Plane } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  // RAASTA Interactive Dependency Graph State
  const [raastaCompletedNodes, setRaastaCompletedNodes] = useState<string[]>(["spec"]);

  const raastaNodes = [
    { id: "spec", label: "01. Intent Specification", desc: "User inputs real-world goal target", unlockedBy: [] },
    { id: "dag", label: "02. DAG Topological Sort", desc: "Engine resolves task dependencies & critical paths", unlockedBy: ["spec"] },
    { id: "deadline", label: "03. Dynamic Deadline Sync", desc: "Accounts for real-world delays & friction", unlockedBy: ["dag"] },
    { id: "deploy", label: "04. AWS Serverless Execution", desc: "Schedules automated triggers & telemetry", unlockedBy: ["deadline"] },
  ];

  const handleToggleRaastaNode = (nodeId: string) => {
  soundFX.playClick(750);
  if (raastaCompletedNodes.includes(nodeId)) {
    setRaastaCompletedNodes(raastaCompletedNodes.filter((id) => id !== nodeId));
  } else {
    setRaastaCompletedNodes([...raastaCompletedNodes, nodeId]);
    soundFX.playSuccess();
  }
};

              return (
              <section id="projects" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-8 h-[2px] bg-[#5eead4]" />
                        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                          {"01 // Selected Works"}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                        Featured <span className="text-accent-gradient">Products</span>
                      </h2>
                    </div>
                    <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                      Architected for genuine utility, performance, and real-world impact. Explore live production deployments and source code repositories.
                    </p>
                  </div>

                  {/* Product Cards Stack */}
                  <div className="space-y-12">
                    {PROJECTS.map((project) => (
                      <div
                        key={project.id}
                        className="glass-card rounded-3xl p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden"
                      >
                        {/* Top Accent Strip */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                          style={{
                            backgroundImage: `linear-gradient(to right, ${project.accentColor}, transparent)`,
                          }}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          {/* Left Column: Product Narrative */}
                          <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                              {/* Category & Badge */}
                              <div className="flex flex-wrap items-center gap-2 mb-4">
                                <span className="text-xs font-mono uppercase tracking-widest text-[#5eead4] px-3 py-1 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/20">
                                  {project.category}
                                </span>
                                {project.award && (
                                  <span className="text-xs font-mono text-[#f59e0b] px-3 py-1 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center gap-1 font-semibold">
                                    {project.award}
                                  </span>
                      )}
                            </div>

                              {/* Title & Tagline */}
                              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm sm:text-base text-[#38bdf8] font-mono mb-5">
                                {project.tagline}
                              </p>

                                {/* Problem & Solution */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                                      {"// The Problem"}
                                    </span>
                                    <p className="text-xs text-gray-300 leading-relaxed font-light">
                                      {project.problem}
                                    </p>
                                  </div>

                                        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                                            {"// The Solution"}
                                          </span>
                                          <p className="text-xs text-gray-300 leading-relaxed font-light">
                                            {project.solution}
                                          </p>
                                        </div>
                                      </div>

                                      {/* Vikas's Engineering Contribution */}
                                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                                        <span className="text-xs font-mono uppercase tracking-wider text-[#5eead4] block mb-1 flex items-center gap-1.5">
                                          <Sparkles className="w-3.5 h-3.5" /> Vikas&apos;s Engineering Contribution
                                        </span>
                                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">
                                          {project.contribution}
                                        </p>
                                      </div>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                          {project.techStack.map((tech) => (
                                            <span
                                              key={tech}
                                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-300"
                                            >
                                              {tech}
                                            </span>
                                          ))}
                                        </div>
                                      </div>

                                    {/* Bottom Action Links */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                                      <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => soundFX.playClick(750)}
                                        className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-mono text-xs flex items-center gap-2 transition-all border border-white/[0.1] cursor-pointer"
                                      >
                                        <Github className="w-4 h-4" />
                                        <span>GitHub</span>
                                      </a>

                                    {project.liveUrl && (
                                      <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => soundFX.playClick(800)}
                                        className="px-4 py-2 rounded-xl bg-[#5eead4] text-[#050507] font-mono text-xs font-semibold flex items-center gap-1.5 hover:bg-[#5eead4]/90 transition-all shadow-[0_0_15px_rgba(94,234,212,0.25)] cursor-pointer"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span>Live Preview</span>
                                      </a>
                                    )}
                                  </div>
                                </div>

                                    {/* Right Column: Custom Interactive Product Widget */ }
                                    < div className="lg:col-span-5 flex flex-col justify-center">
                                  {/* 1. RAASTA INTERACTIVE DEPENDENCY GRAPH */}
                                  {project.id === "raasta" && (
                                    <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#5eead4]/30 space-y-3.5">
                                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                                        <div className="flex items-center gap-2">
                                          <Layers className="w-4 h-4 text-[#5eead4]" />
                                          <span className="text-xs font-mono font-bold text-white uppercase">
                                            RAASTA DAG Simulator
                                          </span>
                                        </div>
                                        <span className="text-[10px] font-mono text-[#5eead4]">Click to resolve</span>
                                      </div>

                                      <div className="space-y-2">
                                        {raastaNodes.map((node) => {
                                          const isCompleted = raastaCompletedNodes.includes(node.id);
                                          const canUnlock = node.unlockedBy.every((dep) => raastaCompletedNodes.includes(dep));

                                          return (
                                            <button
                                              key={node.id}
                                              type="button"
                                              onClick={() => canUnlock && handleToggleRaastaNode(node.id)}
                                              className={`w-full p-3 rounded-xl border text-left transition-all ${isCompleted
                                                  ? "bg-[#5eead4]/15 border-[#5eead4] shadow-[0_0_15px_rgba(94,234,212,0.2)]"
                                                  : canUnlock
                                                    ? "bg-white/[0.03] border-white/[0.15] hover:border-[#5eead4]/50 cursor-pointer"
                                                    : "bg-white/[0.01] border-white/[0.05] opacity-50 cursor-not-allowed"
                                                }`}
                                            >
                                              <div className="flex items-center justify-between">
                                                <span className={`text-xs font-mono font-semibold ${isCompleted ? "text-[#5eead4]" : "text-gray-300"}`}>
                                                  {node.label}
                                                </span>
                                                {isCompleted ? (
                                                  <CheckCircle2 className="w-4 h-4 text-[#5eead4]" />
                                                ) : (
                                                  <span className="text-[10px] font-mono text-gray-500">
                                                    {canUnlock ? "Ready" : "Locked"}
                                                  </span>
                                                )}
                                              </div>
                                              <p className="text-[11px] font-mono text-gray-400 mt-0.5">
                                                {node.desc}
                                              </p>
                                            </button>
                                          );
                                        })}
                                      </div>

                                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-gray-400">
                                    <span>Milestones: {raastaCompletedNodes.length}/4</span>
                                    <span className="text-[#5eead4]">Critical Path Active</span>
                                  </div>
                                </div>
                  )}

                                    {/* 2. 7TH HOUR CODEDAY WINNING SPRINT */}
                                    {project.id === "7th-hour" && (
                                      <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#f59e0b]/40 space-y-3.5">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                                          <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[#f59e0b]" />
                                            <span className="text-xs font-mono font-bold text-white uppercase">
                                              CodeDay Bangalore Sprint
                                            </span>
                                          </div>
                                          <span className="text-xs font-mono text-[#f59e0b] font-bold">1st Place 🏆</span>
                                        </div>

                                        <div className="p-4 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20">
                                          <div className="text-3xl font-black text-white font-mono mb-0.5">12:00:00</div>
                                          <span className="text-xs font-mono text-gray-300">Continuous Hacking Window</span>
                                        </div>

                                    <div className="space-y-2 text-xs font-mono">
                                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                                        <span className="text-gray-400">Squad Formation</span>
                                        <span className="text-white font-semibold">4 Developers</span>
                                      </div>
                                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                                        <span className="text-gray-400">Real-Time Sync Protocol</span>
                                        <span className="text-[#5eead4] font-semibold">WebSockets Broker</span>
                                      </div>
                                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                                        <span className="text-gray-400">Judging Outcome</span>
                                        <span className="text-[#f59e0b] font-bold">1st Place Champions</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                    {/* 3. NEXT GEN CARE HEALTHCARE TRIAGE */}
                                    {project.id === "next-gen-care" && (
                                      <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#38bdf8]/40 space-y-3.5">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                                          <div className="flex items-center gap-2">
                                            <Activity className="w-4 h-4 text-[#38bdf8]" />
                                            <span className="text-xs font-mono font-bold text-white uppercase">
                                              Clinical Triage Simulator
                                            </span>
                                          </div>
                                          <span className="text-[10px] font-mono text-[#38bdf8]">PostgreSQL ACID</span>
                                        </div>

                                    <div className="space-y-2 text-xs font-mono">
                                      {[
                                        { patient: "Patient #842", priority: "Urgent", status: "Telemetry Monitored", time: "2m ago" },
                                        { patient: "Patient #843", priority: "Scheduled", status: "Cardiology Consult", time: "14m ago" },
                                        { patient: "Patient #844", priority: "Resolved", status: "Records Synced", time: "45m ago" },
                                      ].map((item) => (
                                        <div key={item.patient} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                                          <div>
                                            <span className="font-bold text-white block">{item.patient}</span>
                                            <span className="text-[10px] text-gray-400">{item.status}</span>
                                          </div>
                                          <div className="text-right">
                                            <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${item.priority === "Urgent" ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"
                                              }`}>
                                              {item.priority}
                                            </span>
                                            <span className="block text-[9px] text-gray-500 mt-0.5">{item.time}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                    {/* 4. BUDGET BUDDY ANALYTICS */}
                                    {project.id === "budget-buddy" && (
                                      <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#10b981]/40 space-y-3.5">
                                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                                          <div className="flex items-center gap-2">
                                            <DollarSign className="w-4 h-4 text-[#10b981]" />
                                            <span className="text-xs font-mono font-bold text-white uppercase">
                                              Financial Health Monitor
                                            </span>
                                          </div>
                                          <span className="text-[10px] font-mono text-[#10b981]">Real-Time Balance</span>
                                        </div>

                                        <div className="space-y-2 text-xs font-mono">
                                          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                            <div className="flex items-center justify-between text-gray-300 mb-1">
                                              <span>Development Tools & Cloud</span>
                                              <span className="text-[#10b981] font-semibold">28% Target</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                              <div className="h-full bg-[#10b981] rounded-full w-[65%]" />
                                            </div>
                                          </div>

                                        <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                          <div className="flex items-center justify-between text-gray-300 mb-1">
                                            <span>Living & Essentials</span>
                                            <span className="text-[#38bdf8] font-semibold">50% Target</span>
                                          </div>
                                          <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#38bdf8] rounded-full w-[45%]" />
                                          </div>
                                        </div>

                                            <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                              <div className="flex items-center justify-between text-gray-300 mb-1">
                                                <span>Savings & Emergency Fund</span>
                                                <span className="text-[#a855f7] font-semibold">22% Target</span>
                                              </div>
                                              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                                                <div className="h-full bg-[#a855f7] rounded-full w-[80%]" />
                                              </div>
                                            </div>
                                          </div>
                    </div>
                                    )}

                        {/* 5. GAMECRAFT SHOWCASE */}
                        {project.id === "gamecraft" && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#a855f7]/40 space-y-3.5">
                            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                              <div className="flex items-center gap-2">
                                <Gamepad2 className="w-4 h-4 text-[#a855f7]" />
                                <span className="text-xs font-mono font-bold text-white uppercase">
                                  Graphics & Frame Pipeline
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-[#a855f7]">60 FPS Fluid</span>
                            </div>

                            <div className="space-y-2 text-xs font-mono">
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">Render Loop</span>
                                <span className="text-[#a855f7] font-bold">16.6ms / Frame</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">Media Optimization</span>
                                <span className="text-white font-semibold">WebP + Lazy Streaming</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">Interactive UI Elements</span>
                                <span className="text-[#5eead4] font-semibold">GPU-Accelerated</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 6. NST NOTES REPOSITORY */}
                        {project.id === "nst-notes" && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#f59e0b]/40 space-y-3.5">
                            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-[#f59e0b]" />
                                <span className="text-xs font-mono font-bold text-white uppercase">
                                  Campus Academic Hub
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-[#f59e0b]">Sub-Second Index</span>
                            </div>

                            <div className="space-y-2 text-xs font-mono">
                              {[
                                { course: "Operating Systems & Concurrency", sem: "Semester 3", docs: "18 Modules" },
                                { course: "Database Management & SQL", sem: "Semester 3", docs: "24 Modules" },
                                { course: "Data Structures & Algorithms", sem: "Core CS", docs: "32 Problem Sets" },
                              ].map((item) => (
                                <div key={item.course} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                                  <div>
                                    <span className="font-bold text-white block">{item.course}</span>
                                    <span className="text-[10px] text-[#f59e0b]">{item.sem}</span>
                                  </div>
                                  <span className="text-[10px] text-gray-500">{item.docs}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* 7. FLIGHT MANAGEMENT SYSTEM */}
                        {project.id === "flight-management" && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-[#38bdf8]/40 space-y-3.5">
                            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                              <div className="flex items-center gap-2">
                                <Plane className="w-4 h-4 text-[#38bdf8]" />
                                <span className="text-xs font-mono font-bold text-white uppercase">
                                  Route Dispatch Matrix
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-[#38bdf8]">ACID Locks</span>
                            </div>

                            <div className="space-y-2 text-xs font-mono">
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">BLR ⇄ DEL Flight #AI-804</span>
                                <span className="text-green-400 font-bold">On Schedule</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">Seat Inventory Status</span>
                                <span className="text-white font-semibold">178 / 180 Reserved</span>
                              </div>
                              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <span className="text-gray-400">Concurrency Lock Mode</span>
                                <span className="text-[#38bdf8] font-bold">Row-Level Isolation</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
              </div>
                </div>
          ))}
          </div>
        </div>
      </section>
      );
}

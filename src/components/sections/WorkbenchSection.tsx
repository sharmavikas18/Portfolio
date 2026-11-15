"use client";

import { useState } from "react";
import { Cpu, Layers, Music, Trophy, CheckCircle2, Play, Volume2 } from "lucide-react";
import { soundFX } from "@/lib/sound";

export default function WorkbenchSection() {
  const [activeTab, setActiveTab] = useState<string>("architecture");
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSprintHour, setSelectedSprintHour] = useState(12);

  const handleSimulateTrace = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(1);
    soundFX.playClick(600);

      setTimeout(() => {
        setActiveStep(2);
        soundFX.playClick(750);
      }, 600);

        setTimeout(() => {
          setActiveStep(3);
          soundFX.playClick(900);
        }, 1200);

          setTimeout(() => {
            setActiveStep(4);
            soundFX.playSuccess();
            setSimulating(false);
          }, 1800);
        };

        const sprintHours = [
          {
            hour: 0,
            title: "Kickoff & Problem Definition",
            desc: "CodeDay Bangalore begins. Brainstormed core pain points around fragmented team collaboration under high-stress hackathons.",
            tag: "Hour 00:00",
            status: "Ideation",
          },
          {
            hour: 3,
            title: "Architecture & Data Schemas",
            desc: "Mapped out WebSocket message broker, client state synchronization, and low-latency event bus.",
            tag: "Hour 03:00",
            status: "Systems Design",
          },
          {
            hour: 7,
            title: "Real-Time Engine Build",
            desc: "Overcame race conditions and concurrent state updates. Implemented optimistic UI updates on the React frontend.",
            tag: "Hour 07:00",
            status: "Deep Coding",
          },
          {
            hour: 10,
            title: "Stress Testing & UI Polish",
            desc: "Simulated multiple client nodes, handled edge reconnections, refined typography, responsive layout, and demo narrative.",
            tag: "Hour 10:00",
            status: "QA & Hardening",
          },
          {
            hour: 12,
            title: "Pitch & 1st Place Victory 🏆",
            desc: "Presented live working product to the judging panel. Secured 1st Place overall at CodeDay Bangalore out of all teams!",
            tag: "Hour 12:00",
            status: "1st Place Winner 🏆",
          },
        ];

        return (
                <section id="workbench" className="py-20 relative bg-[#050507] border-t border-white/[0.06] scroll-mt-20">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-8 h-[2px] bg-[#5eead4]" />
                          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                            Interactive Lab
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                          The Developer <span className="text-accent-gradient">Workbench</span>
                        </h2>
                      </div>
                      <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                        Step into my engineering environment. Test architectural data flows, review sprint logs, or trigger audio frequencies.
                      </p>
                    </div>

                      {/* Workbench Control Tabs */}
                      <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl w-fit">
                        <button
                          type="button"
                          onClick={() => {
                            soundFX.playClick(600);
                            setActiveTab("architecture");
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${activeTab === "architecture"
                              ? "bg-[#5eead4] text-[#050507] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                              : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                            }`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Architecture Flow Matrix</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            soundFX.playClick(650);
                            setActiveTab("warroom");
                          }}
            className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${activeTab === "warroom"
                              ? "bg-[#5eead4] text-[#050507] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                              : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                            }`}
          >
                        <Trophy className="w-3.5 h-3.5" />
                        <span>CodeDay War Room</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick(700);
                          setActiveTab("specs");
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${activeTab === "specs"
                            ? "bg-[#5eead4] text-[#050507] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                            : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                          }`}
                      >
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Workstation Specs</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          soundFX.playClick(750);
                          setActiveTab("synth");
                        }}
            className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all cursor-pointer ${activeTab === "synth"
                            ? "bg-[#5eead4] text-[#050507] font-semibold shadow-[0_0_15px_rgba(94,234,212,0.3)]"
                            : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                          }`}
          >
                    <Music className="w-3.5 h-3.5" />
                    <span>Cyber Synth Pad</span>
                  </button>
              </div>

                      {/* Workbench Body */}
                      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden">
                        {/* TAB 1: ARCHITECTURE MATRIX */}
                        {activeTab === "architecture" && (
                          <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                  Live Distributed Flow Simulation
                                  <span className="text-xs px-2 py-0.5 rounded bg-[#5eead4]/10 text-[#5eead4] font-mono font-normal">
                                    Interactive Trace
                                  </span>
                                </h3>
                                <p className="text-xs font-mono text-gray-400 mt-1">
                                  Simulate a live request traveling through Vikas&apos;s full-stack architecture.
                                </p>
                              </div>

                            <button
                              type="button"
                              onClick={handleSimulateTrace}
                              disabled={simulating}
                              className="px-5 py-2.5 rounded-xl bg-[#5eead4] text-[#050507] font-mono text-xs font-semibold flex items-center gap-2 hover:bg-[#5eead4]/90 transition-all shadow-[0_0_15px_rgba(94,234,212,0.25)] active:scale-95 disabled:opacity-50 cursor-pointer"
                            >
                              <Play className="w-3.5 h-3.5 fill-current" />
                              <span>{simulating ? "Tracing Request..." : "Trigger Request Trace"}</span>
                            </button>
                          </div>

                          {/* Architecture Pipeline Nodes */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Step 1 */}
                            <div
                              className={`p-4 rounded-2xl border transition-all duration-300 ${activeStep >= 1
                                  ? "bg-[#5eead4]/15 border-[#5eead4] shadow-[0_0_15px_rgba(94,234,212,0.2)]"
                                  : "bg-white/[0.02] border-white/[0.08]"
                                }`}
                            >
                              <div className="text-[10px] font-mono uppercase tracking-widest text-[#5eead4] mb-2 flex items-center justify-between">
                                <span>{"Node 01 // Client Edge"}</span>
                                {activeStep >= 1 && <CheckCircle2 className="w-3.5 h-3.5 text-[#5eead4]" />}
                              </div>
                              <h4 className="text-base font-bold text-white">Next.js Edge Runtime</h4>
                              <p className="text-xs text-gray-400 mt-1 font-mono">
                                Server-rendered components, optimistic dispatch, dynamic hydration.
                              </p>
                              <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-gray-500">
                                Payload: Intent DAG Spec
                              </div>
                            </div>

                            {/* Step 2 */}
                            <div
                              className={`p-4 rounded-2xl border transition-all duration-300 ${activeStep >= 2
                                  ? "bg-[#38bdf8]/15 border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                  : "bg-white/[0.02] border-white/[0.08]"
                                }`}
                            >
                              <div className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] mb-2 flex items-center justify-between">
                                <span>{"Node 02 // API & Routing"}</span>
                                {activeStep >= 2 && <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />}
                              </div>
                              <h4 className="text-base font-bold text-white">FastAPI / Node Engine</h4>
                              <p className="text-xs text-gray-400 mt-1 font-mono">
                                Token validation, rate-limiting, dependency topological sorting.
                              </p>
                              <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-gray-500">
                                Compute: Sub-12ms DAG Sort
                              </div>
                            </div>

                            {/* Step 3 */}
                            <div
                              className={`p-4 rounded-2xl border transition-all duration-300 ${activeStep >= 3
                                  ? "bg-[#a855f7]/15 border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                                  : "bg-white/[0.02] border-white/[0.08]"
                                }`}
                            >
                              <div className="text-[10px] font-mono uppercase tracking-widest text-[#a855f7] mb-2 flex items-center justify-between">
                                <span>{"Node 03 // Persistence"}</span>
                                {activeStep >= 3 && <CheckCircle2 className="w-3.5 h-3.5 text-[#a855f7]" />}
                              </div>
                              <h4 className="text-base font-bold text-white">PostgreSQL / Supabase</h4>
                              <p className="text-xs text-gray-400 mt-1 font-mono">
                                ACID transactions, Row-Level Security, relational integrity indexing.
                              </p>
                              <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-gray-500">
                                Query: Indexed Foreign Keys
                              </div>
                            </div>

                          {/* Step 4 */}
                          <div
                            className={`p-4 rounded-2xl border transition-all duration-300 ${activeStep >= 4
                                ? "bg-[#22c55e]/15 border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                                : "bg-white/[0.02] border-white/[0.08]"
                              }`}
                          >
                            <div className="text-[10px] font-mono uppercase tracking-widest text-[#22c55e] mb-2 flex items-center justify-between">
                              <span>{"Node 04 // Cloud Delivery"}</span>
                              {activeStep >= 4 && <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />}
                            </div>
                            <h4 className="text-base font-bold text-white">AWS Infrastructure</h4>
                            <p className="text-xs text-gray-400 mt-1 font-mono">
                              S3 CDN asset caching, serverless event triggers, zero-downtime deploy.
                            </p>
                            <div className="mt-3 pt-2 border-t border-white/[0.06] text-[10px] font-mono text-gray-500">
                              Status: 200 OK — 18ms Roundtrip
                            </div>
                          </div>
                        </div>

                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse" />
                          <span>Active Telemetry: Zero Bottleneck Detected</span>
                        </div>
                        <span className="text-gray-500 hidden sm:inline">RAASTA & Next Gen Care Standard Stack</span>
                      </div>
                    </div>
          )}

                        {/* TAB 2: CODEDAY WAR ROOM */}
                        {activeTab === "warroom" && (
                          <div className="space-y-6">
                            <div>
                              <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 text-xs font-mono font-semibold">
                                  🏆 1st Place — CodeDay Bangalore
                                </span>
                                <span className="text-xs font-mono text-gray-400">12-Hour Continuous Hackathon</span>
                              </div>
                              <h3 className="text-2xl font-bold text-white mt-2.5">
                                Inside the 12-Hour Winning Sprint: <span className="text-[#f59e0b]">7th Hour</span>
                              </h3>
                              <p className="text-xs font-mono text-gray-400 mt-1">
                                Click through the sprint timeline milestones to inspect our decision-making under intense time constraints.
                              </p>
                            </div>

                                {/* Timeline Selector */ }
                                < div className = "grid grid-cols-2 sm:grid-cols-5 gap-2" >
                                {
                                  sprintHours.map((item) => (
                                    <button
                                      key={item.hour}
                                      type="button"
                                      onClick={() => {
                                        soundFX.playClick(600 + item.hour * 30);
                                        setSelectedSprintHour(item.hour);
                                      }}
                                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedSprintHour === item.hour
                                          ? "bg-[#f59e0b]/15 border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                                          : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05]"
                                        }`}
                                    >
                                      <span className="text-[10px] font-mono text-gray-400 block">{item.tag}</span>
                                      <span className="text-xs font-bold text-white block mt-1 truncate">{item.status}</span>
                                    </button>
                                  ))
                                }
                          </div>

                          {/* Active Milestone Card */ }
                          {
                            (() => {
                              const current = sprintHours.find((h) => h.hour === selectedSprintHour) || sprintHours[4];
                              return (
                                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-[#f59e0b]/30">
                                  <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono uppercase tracking-widest text-[#f59e0b]">
                                      {"Sprint Stage // "}{current.tag}
                                    </span>
                                    <span className="text-xs font-mono text-gray-400">Team: 4 Engineers</span>
                                  </div>
                                  <h4 className="text-xl font-bold text-white mb-2">{current.title}</h4>
                                  <p className="text-sm text-gray-300 leading-relaxed font-light">{current.desc}</p>
                                </div>
                              );
                            })()
                          }
            </div>
                )}

                    {/* TAB 3: WORKSTATION SPECS */}
                    {activeTab === "specs" && (
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-white">Engineering Environment & Tooling Philosophy</h3>
                          <p className="text-xs font-mono text-gray-400 mt-1">
                            Carefully chosen tools optimized for maximum feedback velocity and deep focus.
                          </p>
                        </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                              <span className="text-[10px] font-mono text-[#5eead4] uppercase tracking-wider block mb-1">
                                Operating System & Shell
                              </span>
                              <h4 className="text-sm font-bold text-white">macOS / Linux Shell</h4>
                              <p className="text-xs font-mono text-gray-400 mt-2">
                                Zsh, custom aliases, tmux multi-pane multiplexing, Git CLI first.
                              </p>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                              <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider block mb-1">
                                Editor & Typefaces
                              </span>
                              <h4 className="text-sm font-bold text-white">VS Code + Neovim Keybindings</h4>
                              <p className="text-xs font-mono text-gray-400 mt-2">
                                JetBrains Mono font, minimalist monochrome dark theme, zero clutter status lines.
                              </p>
                            </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                          <span className="text-[10px] font-mono text-[#a855f7] uppercase tracking-wider block mb-1">
                            Engineering Philosophy
                          </span>
                          <h4 className="text-sm font-bold text-white">Ship Fast, Refine Relentlessly</h4>
                          <p className="text-xs font-mono text-gray-400 mt-2">
                            Solve real problems, respect user latency, write self-documenting type-safe code.
                          </p>
                        </div>
                      </div>
            </div>
                )}

                    {/* TAB 4: CYBER SYNTH PAD */}
                    {activeTab === "synth" && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                              Tactile Cybernetic Synth Pad
                              <Volume2 className="w-4 h-4 text-[#5eead4]" />
                            </h3>
                            <p className="text-xs font-mono text-gray-400 mt-1">
                              Synthesized in browser with Web Audio API. Click any pad to play atmospheric pentatonic tones.
                            </p>
                          </div>
                          <span className="text-[11px] font-mono text-[#5eead4] px-3 py-1 rounded-full bg-[#5eead4]/10 border border-[#5eead4]/20 hidden sm:inline-block">
                            Synthesizer Active
                          </span>
                        </div>

                            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                              {[
                                { note: "C4", name: "Alpha" },
                                { note: "D4", name: "Beta" },
                                { note: "E4", name: "Gamma" },
                                { note: "G4", name: "Delta" },
                                { note: "A4", name: "Epsilon" },
                                { note: "C5", name: "Zeta" },
                                { note: "D5", name: "Eta" },
                                { note: "E5", name: "Theta" },
                              ].map((pad, idx) => (
                                <button
                                  key={pad.name}
                                  type="button"
                                  onClick={() => {
                                    soundFX.playSynthPad(idx);
                                  }}
                                  className="aspect-square rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#5eead4]/60 p-3 flex flex-col items-center justify-between transition-all hover:scale-105 active:scale-95 group shadow-lg cursor-pointer"
                                >
                                  <span className="text-[10px] font-mono text-gray-500 group-hover:text-white">
                                    0{idx + 1}
                                  </span>
                                  <span className="text-xs font-bold text-white group-hover:text-[#5eead4] transition-colors">
                                    {pad.note}
                                  </span>
                                  <span className="text-[9px] font-mono text-gray-500 uppercase">
                                    {pad.name}
                                  </span>
                  </button>
                          ))}
                      </div>
            </div>
          )}
            </div>
          </div>
    </section >
  );
}

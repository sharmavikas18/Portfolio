"use client";

import Image from "next/image";
import { MapPin, Compass } from "lucide-react";

export default function About() {
  return (
      <section id="about" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-[#5eead4]" />
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                    {"05 // About Vikas Sharma"}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  Behind the <span className="text-accent-gradient">Terminal</span>
                </h2>
              </div>
                <p className="text-sm font-mono text-gray-400 mt-3 md:mt-0 max-w-md">
                  Second-year undergraduate at Newton School of Technology, Bangalore. Builder, hacker, team player.
                </p>
            </div>

            {/* Editorial Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Portrait & Live Badges */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="glass-card rounded-3xl p-4 sm:p-5 border border-white/[0.08] relative group overflow-hidden">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02]">
                      <Image
                        src="/profile.png"
                        alt="Vikas Sharma — Software Developer"
                        fill
                        priority
                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-75" />

                      {/* Floating Chips over portrait */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                        <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#5eead4]" />
                          <span>Bangalore, IN</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-full bg-[#5eead4]/20 backdrop-blur-md border border-[#5eead4]/40 text-[#5eead4] font-semibold">
                          NST CSE &apos;27
                        </div>
                      </div>
                    </div>

                  <div className="mt-3.5 px-1 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span className="font-semibold text-white">Vikas Sharma</span>
                    <span className="text-[#5eead4]">Software Developer</span>
                  </div>
                </div>

              {/* Quick Stats Bento Strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-4 rounded-2xl border border-white/[0.06] text-center">
                  <span className="text-2xl font-black text-white block">1st</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase mt-1 block">
                    CodeDay Bangalore 🏆
                  </span>
                </div>
                <div className="glass-card p-4 rounded-2xl border border-white/[0.06] text-center">
                  <span className="text-2xl font-black text-[#5eead4] block">VP</span>
                  <span className="text-[10px] font-mono text-gray-400 uppercase mt-1 block">
                    DevForge NST Club
                  </span>
                </div>
              </div>
            </div>

                {/* Right Column: Conversational Narrative */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] space-y-5">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      &ldquo;I build software because I love taking vague ideas and turning them into systems that work.&rdquo;
                    </h3>

                      <div className="space-y-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                        <p>
                          I am a second-year B.Tech Computer Science student at{" "}
                          <span className="text-white font-medium">Newton School of Technology, Bangalore</span>. My fascination with software started from the realization that with a text editor and an internet connection, you can engineer solutions that touch real human lives.
                        </p>

                        <p>
                          Rather than specializing exclusively in either frontend or backend, I operate across the entire surface area of a product: designing database schemas in PostgreSQL, writing typed services in Next.js and FastAPI, and obsessing over micro-interactions and tactile visual performance.
                        </p>

                          <p>
                            As Vice President of <span className="text-[#5eead4] font-medium">DevForge</span>, I spend considerable time demystifying open source for junior engineers—running hands-on Git workshops, coordinating hackathon teams, and pushing people to ship their first pull requests to global repositories.
                          </p>
                      </div>

                      {/* Beyond the Screen */}
                      <div className="pt-5 border-t border-white/[0.08]">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#38bdf8]" />
                          <span>Life Outside The Terminal</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-300">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                            🏀 <span className="font-semibold text-white">Competitive Basketball</span>
                            <p className="text-[11px] text-gray-400 mt-1 font-sans">
                              Court awareness, fast decisions under physical pressure, and team synchronization.
                            </p>
                          </div>
                            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                              🌍 <span className="font-semibold text-white">Avid Traveler</span>
                              <p className="text-[11px] text-gray-400 mt-1 font-sans">
                                Curious about how different places operate and finding inspiration in unexpected spaces.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              );
}

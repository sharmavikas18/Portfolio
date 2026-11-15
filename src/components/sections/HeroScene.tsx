"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Sparkles, ExternalLink, Award, Code2 } from "lucide-react";
import dynamic from "next/dynamic";
import { soundFX } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";

const WebGLBackground = dynamic(() => import("@/components/ui/WebGLBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#050507]" />,
});

interface HeroSceneProps {
  onOpenTerminal: () => void;
}

  export default function HeroScene({ onOpenTerminal }: HeroSceneProps) {
    return (
        <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-center">
          {/* Interactive 3D WebGL Galaxy */}
          <WebGLBackground />

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 z-0" />

          {/* Main Hero Container */}
            <div className="relative z-10 max-w-6xl mx-auto w-full">
              {/* Status Chip */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#5eead4]/30 backdrop-blur-md mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5eead4] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5eead4]"></span>
                  </span>
                  <span className="text-xs font-mono text-gray-300 tracking-wider">
                    {PERSONAL_INFO.currentRole} • <span className="text-[#5eead4] font-semibold">{PERSONAL_INFO.institution}</span>
                  </span>
            </div>

            {/* Oversized Expressive Headline */}
            <div className="mb-6">
              <span className="block text-gray-400 font-mono text-sm sm:text-base tracking-[0.25em] uppercase mb-2">
                {"// Developer • Builder • Open Source Enthusiast"}
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] text-white">
                <span className="sr-only">Vikas Sharma — Software Developer — </span>
                Hey, I&apos;m <span className="text-accent-gradient">Vikas</span>.
              </h1>
            </div>

            {/* Subtitle / Engineering Statement */}
            <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-8">
              I build <span className="text-white font-medium underline decoration-[#5eead4]/50 underline-offset-8">intelligent goal engines</span>, distributed full-stack systems, and open-source software. Vice President at <span className="text-[#5eead4] font-medium">DevForge</span>.
            </p>

              {/* Action Dock */}
              <div className="flex flex-wrap items-center gap-3.5 mb-12">
                {/* Primary CTA: Explore Selected Works */}
                <a
                  href="#projects"
                  onClick={() => soundFX.playClick(800)}
                  className="group px-7 py-3.5 rounded-full bg-[#5eead4] text-[#050507] font-semibold text-sm font-mono tracking-wide flex items-center gap-2 hover:bg-[#5eead4]/90 transition-all duration-200 shadow-[0_0_25px_rgba(94,234,212,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Explore Works</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                  {/* Secondary CTA: Launch Terminal */}
          <button
                  type="button"
                  onClick={() => {
                    soundFX.playClick(650);
                    onOpenTerminal();
                  }}
                  className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-mono text-sm border border-white/[0.12] hover:border-[#5eead4]/50 flex items-center gap-2.5 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                <Terminal className="w-4 h-4 text-[#5eead4]" />
                <span>Launch VikasOS</span>
                <span className="text-[10px] text-gray-400 border border-white/10 px-1.5 py-0.5 rounded">
                  &gt;_
                </span>
              </button>

              {/* OSS Quick Link */}
              <a
                href="#open-source"
                onClick={() => soundFX.playClick(700)}
                className="px-5 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white font-mono text-sm border border-white/[0.08] flex items-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#38bdf8]" />
                <span>Open Source</span>
              </a>
            </div>

              {/* Live Verified Quick Strip */}
              <div className="w-full pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#f59e0b]" /> Hackathon
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">1st Place — CodeDay</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#5eead4]" /> Open Source
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">FOSSASIA & Apache</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Club Leadership
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">VP @ DevForge NST</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white mt-1">Bangalore, India 📍</span>
                </div>
              </div>
      </div>
    </section >
  );
  }

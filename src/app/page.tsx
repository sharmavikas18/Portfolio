"use client";

import { useState } from "react";
import Navigation from "@/components/ui/Navigation";
import CommandPalette from "@/components/ui/CommandPalette";
import HeroScene from "@/components/sections/HeroScene";
import WorkbenchSection from "@/components/sections/WorkbenchSection";
import Projects from "@/components/sections/Projects";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import DevForgeSection from "@/components/sections/DevForgeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/TimelineSection";
import TerminalContact from "@/components/sections/TerminalContact";
import ContactSection from "@/components/sections/ContactSection";
import { soundFX } from "@/lib/sound";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalModalOpen, setIsTerminalModalOpen] = useState(false);

  const scrollToTop = () => {
    soundFX.playClick(800);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#050507] text-[#e2e8f0] selection:bg-[#5eead4]/20 selection:text-[#5eead4] relative">
      {/* Top Floating Navigation */}
      <Navigation
        onOpenTerminal={() => setIsTerminalModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Command Palette Modal (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalModalOpen(true)}
      />

      {/* Floating Modal Terminal */}
      {isTerminalModalOpen && (
        <TerminalContact
          isModal
          onClose={() => setIsTerminalModalOpen(false)}
        />
      )}

      {/* 1. Hero Section */}
      <HeroScene onOpenTerminal={() => setIsTerminalModalOpen(true)} />

      {/* 2. Flagship Products Showcase */}
      <Projects />

      {/* 3. The Developer Workbench & Lab */}
      <WorkbenchSection />

      {/* 4. Open Source Constellation */}
      <OpenSourceSection />

      {/* 5. DevForge Student Leadership */}
      <DevForgeSection />

      {/* 6. Technical Matrix & Skills */}
      <SkillsSection />

      {/* 7. About Vikas: The Human Story */}
      <About />

      {/* 8. Trajectory & Milestones */}
      <TimelineSection />

      {/* 9. VikasOS Interactive Terminal */}
      <TerminalContact />

      {/* 10. Contact & Final Dispatch */}
      <ContactSection onOpenTerminal={() => setIsTerminalModalOpen(true)} />

      {/* Footer */}
      <footer className="w-full py-10 border-t border-white/[0.08] bg-[#030406] relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5eead4] font-bold">
              Vikas Sharma // 2026
            </span>
            <p className="text-xs text-gray-500 font-mono mt-0.5">
              Engineered with Next.js, TypeScript, Tailwind CSS & Three.js.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <a
              href="https://github.com/sharmavikas18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/sharmavikas18/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#5eead4] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}

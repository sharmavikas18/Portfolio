"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundFX } from "@/lib/sound";
import { Terminal, Volume2, VolumeX, Github, Linkedin, Mail, Menu, X, Sparkles } from "lucide-react";

interface NavigationProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
}

export default function Navigation({ onOpenTerminal, onOpenCommandPalette }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    soundFX.enabled = newState;
    if (newState) {
      soundFX.playSuccess();
    }
  };

  const navLinks = [
    { label: "Works", href: "#projects" },
    { label: "Lab", href: "#workbench" },
    { label: "Open Source", href: "#open-source" },
    { label: "DevForge", href: "#devforge" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
          <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "py-3 bg-[#050507]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80"
                : "py-4 sm:py-5 bg-gradient-to-b from-[#050507]/90 to-transparent"
              }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
              {/* Logo / Identity */}
              <a
                href="#"
                onClick={() => soundFX.playClick(800)}
                className="group flex items-center gap-3 text-white font-mono cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-[#5eead4]/60 flex items-center justify-center font-bold text-sm tracking-wider transition-all duration-200 group-hover:bg-[#5eead4]/10 group-hover:shadow-[0_0_20px_rgba(94,234,212,0.3)]">
                  <span className="text-white group-hover:text-[#5eead4] transition-colors">VS</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
                    Vikas Sharma
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                    NST Bangalore
                  </span>
                </div>
              </a>

                {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      soundFX.playClick(680);
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-1.5 text-xs font-mono text-gray-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.08] cursor-pointer"
                  >
              { link.label }
            </a>
          ))}
            </nav>

            {/* Quick Action Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Audio Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                title={soundEnabled ? "Mute sound effects" : "Enable tactile sound FX"}
                className={`p-2 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-all duration-200 border cursor-pointer ${soundEnabled
                    ? "bg-[#5eead4]/15 border-[#5eead4]/40 text-[#5eead4] shadow-[0_0_15px_rgba(94,234,212,0.25)]"
                    : "bg-white/[0.04] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20"
                  }`}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-[10px] hidden sm:inline uppercase tracking-wider font-semibold">
                  {soundEnabled ? "FX ON" : "FX OFF"}
                </span>
              </button>

            {/* Terminal Launcher */}
            <button
              type="button"
              onClick={() => {
                soundFX.playClick(720);
                onOpenTerminal();
              }}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white/[0.04] hover:bg-[#5eead4]/10 border border-white/[0.08] hover:border-[#5eead4]/40 text-gray-300 hover:text-[#5eead4] text-xs font-mono flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
              title="Open VikasOS Terminal"
            >
              <Terminal className="w-4 h-4 text-[#5eead4]" />
              <span className="hidden sm:inline font-mono text-xs">VikasOS</span>
            </button>

            {/* Command Palette Trigger */}
            <button
              type="button"
              onClick={() => {
                soundFX.playClick(600);
                onOpenCommandPalette();
              }}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-1 cursor-pointer"
              title="Command Palette (Cmd+K)"
            >
              <Sparkles className="w-4 h-4 text-[#38bdf8]" />
              <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-gray-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
      </div>

              {/* Mobile Dropdown Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="lg:hidden border-b border-white/[0.08] bg-[#050507]/98 backdrop-blur-2xl px-6 py-6 overflow-hidden"
                  >
                    <div className="flex flex-col gap-1.5">
                      {navLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={() => {
                            soundFX.playClick(680);
                            setMobileMenuOpen(false);
                          }}
                          className="py-2.5 px-3 rounded-lg text-sm font-mono text-gray-300 hover:text-[#5eead4] hover:bg-white/[0.05] transition-all flex items-center justify-between cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <span className="text-xs text-gray-600 font-mono">→</span>
                        </a>
                      ))}
                      <div className="pt-4 mt-2 border-t border-white/[0.08] flex items-center gap-4">
                        <a
                          href="https://github.com/sharmavikas18"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors p-2"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/sharmavikas18/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors p-2"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="mailto:vikassharma180507@gmail.com"
                          className="text-gray-400 hover:text-white transition-colors p-2"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
            </div>
    </motion.div >
        )
}
      </AnimatePresence >
    </header >
  );
}

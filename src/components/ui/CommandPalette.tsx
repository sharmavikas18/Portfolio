"use client";

import { useState, useEffect } from "react";
import { Search, FolderGit2, Terminal, User, Code2, Users, Mail, ExternalLink, Sparkles, X } from "lucide-react";
import { soundFX } from "@/lib/sound";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
          if (isOpen) {
            onClose();
          }
        }
        if (e.key === "Escape" && isOpen) {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

  const commands = [
    {
      id: "projects",
      name: "Explore Selected Works",
      category: "Navigation",
      icon: FolderGit2,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "workbench",
      name: "Developer Workbench & Lab",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        window.location.hash = "#workbench";
        onClose();
      },
    },
    {
      id: "opensource",
      name: "Open Source Contributions (FOSSASIA, Apache)",
      category: "Navigation",
      icon: Code2,
      action: () => {
        window.location.hash = "#open-source";
        onClose();
      },
    },
    {
      id: "devforge",
      name: "DevForge NST Leadership",
      category: "Navigation",
      icon: Users,
      action: () => {
        window.location.hash = "#devforge";
        onClose();
      },
    },
    {
      id: "terminal",
      name: "Launch VikasOS Terminal",
      category: "Interactive",
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: "about",
      name: "About Vikas Sharma (Bio & Philosophy)",
      category: "Navigation",
      icon: User,
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "copy-email",
      name: "Copy Email Address (vikassharma180507@gmail.com)",
      category: "Action",
      icon: Mail,
      action: () => {
        try {
          navigator.clipboard.writeText("vikassharma180507@gmail.com");
        } catch { }
        soundFX.playSuccess();
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "github",
      name: "Visit GitHub (@sharmavikas18)",
      category: "External",
      icon: ExternalLink,
      action: () => {
        window.open("https://github.com/sharmavikas18", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownInList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      soundFX.playKeypress();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      soundFX.playKeypress();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        soundFX.playClick(750);
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

            {/* Modal Box */}
            <div className="relative w-full max-w-xl bg-[#090b10] border border-white/[0.12] rounded-2xl shadow-2xl shadow-[#5eead4]/5 overflow-hidden z-10">
              {/* Search Header */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDownInList}
                  placeholder="Search sections, actions, tools (or press Esc)..."
                  className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none font-mono"
                />
                {copied && (
                  <span className="text-xs font-mono text-[#5eead4] bg-[#5eead4]/10 px-2 py-0.5 rounded animate-pulse">
                    Copied!
                  </span>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

                          {/* Results List */}
                          <div className="max-h-80 overflow-y-auto p-2 custom-scrollbar">
                            {filteredCommands.length === 0 ? (
                              <div className="p-6 text-center text-xs font-mono text-gray-500">
                                No commands matching &ldquo;{query}&rdquo;
                              </div>
                            ) : (
                              filteredCommands.map((cmd, idx) => {
                                const Icon = cmd.icon;
                                const isSelected = idx === selectedIndex;
                                return (
                                  <button
                                    key={cmd.id}
                                    type="button"
                                    onClick={() => {
                                      soundFX.playClick(750);
                                      cmd.action();
                                    }}
                                    onMouseEnter={() => setSelectedIndex(idx)}
                                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs font-mono transition-all cursor-pointer ${isSelected
                                        ? "bg-[#5eead4]/10 text-white border border-[#5eead4]/30"
                                        : "text-gray-300 hover:bg-white/[0.04] border border-transparent"
                                      }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`p-1.5 rounded-lg ${isSelected ? "text-[#5eead4] bg-[#5eead4]/20" : "text-gray-400 bg-white/[0.05]"}`}>
                                        <Icon className="w-4 h-4" />
                                      </div>
                          <div>
                            <span className="block font-medium">{cmd.name}</span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">{cmd.category}</span>
                          </div>
                        </div>
                        {isSelected && (
                          <span className="text-[10px] font-mono text-[#5eead4] flex items-center gap-1">
                            Press ↵
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>

                {/* Footer Bar */}
                <div className="px-4 py-2 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <div className="flex items-center gap-3">
                    <span>↑↓ Navigate</span>
                    <span>↵ Select</span>
                    <span>Esc Close</span>
                  </div>
                <span className="text-[#5eead4]/70">Vikas Sharma Universe</span>
              </div>
            </div>
        </div>
        );
}

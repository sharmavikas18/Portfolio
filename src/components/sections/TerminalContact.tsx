"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, RefreshCw, X } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { PERSONAL_INFO, PROJECTS, OSS_CONTRIBUTIONS } from "@/lib/data";

interface TerminalProps {
  isModal?: boolean;
  onClose?: () => void;
}

export default function TerminalContact({ isModal, onClose }: TerminalProps) {
  const [history, setHistory] = useState<
    { sender: "user" | "system"; text: string; link?: string }[]
  >([
    { sender: "system", text: "VikasOS [Version 2.4.0-release]" },
    { sender: "system", text: "(c) 2026 Vikas Sharma. Type 'help' to inspect available system commands." },
    { sender: "system", text: "Pro tip: Try 'projects', 'oss', 'raasta', 'matrix', or 'contact'." },
  ]);

  const [input, setInput] = useState("");
  const [matrixMode, setMatrixMode] = useState(false);
  const [accentColor, setAccentColor] = useState<"teal" | "amber" | "cyan" | "purple">("teal");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCommand: string) => {
    const cmd = rawCommand.trim().toLowerCase();
    if (!cmd) return;

    soundFX.playKeypress();
    const newLines: { sender: "user" | "system"; text: string; link?: string }[] = [
      { sender: "user", text: `vikas@universe:~$ ${rawCommand}` },
    ];

    switch (cmd) {
      case "help":
        newLines.push(
          { sender: "system", text: "Available VikasOS commands:" },
          { sender: "system", text: "  about     - Identity, engineering values & background" },
          { sender: "system", text: "  projects  - Flagship product breakdown" },
          { sender: "system", text: "  raasta    - Deep dive on the RAASTA goal engine" },
          { sender: "system", text: "  7thhour   - CodeDay Bangalore 1st place hackathon winner" },
          { sender: "system", text: "  oss       - Open source contributions (FOSSASIA, Apache)" },
          { sender: "system", text: "  devforge  - Leadership role & community impact at NST" },
          { sender: "system", text: "  skills    - Full technical stack summary" },
          { sender: "system", text: "  contact   - Direct email & social coordinates" },
          { sender: "system", text: "  github    - Launch GitHub profile" },
          { sender: "system", text: "  resume    - View credentials & resume info" },
          { sender: "system", text: "  theme     - Cycle terminal color themes" },
          { sender: "system", text: "  matrix    - Toggle digital rain Easter egg" },
          { sender: "system", text: "  whoami    - System user identity" },
          { sender: "system", text: "  sudo      - Execute privileged supervisor command" },
          { sender: "system", text: "  clear     - Wipe terminal screen history" }
        );
        break;

      case "about":
        newLines.push(
          { sender: "system", text: `Name: ${PERSONAL_INFO.name}` },
          { sender: "system", text: `Role: ${PERSONAL_INFO.title}` },
          { sender: "system", text: `Education: ${PERSONAL_INFO.currentRole} at ${PERSONAL_INFO.institution}` },
          { sender: "system", text: `DevForge: ${PERSONAL_INFO.clubRole}` },
          { sender: "system", text: "Focus: Intelligent goal engines, distributed systems, open-source software." }
        );
        break;

      case "projects":
        newLines.push({ sender: "system", text: "Featured Projects:" });
        PROJECTS.forEach((p) => {
          newLines.push({
            sender: "system",
            text: `• [${p.title}] - ${p.tagline} (${p.techStack.slice(0, 3).join(", ")})`,
          });
        });
        break;

      case "raasta":
        newLines.push(
          { sender: "system", text: "RAASTA // Real-world Awareness, Action, Sequencing & Timing Assistant" },
          { sender: "system", text: "Category: Intelligent Goal & Dependency Engine" },
          { sender: "system", text: "Stack: Next.js, TypeScript, AWS, Tailwind CSS, Supabase" },
          { sender: "system", text: "Live: https://raasta-fawn.vercel.app/", link: "https://raasta-fawn.vercel.app/" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/raasta", link: "https://github.com/sharmavikas18/raasta" }
        );
        break;

      case "7thhour":
        newLines.push(
          { sender: "system", text: "7th Hour // CodeDay Bangalore 1st Place Champion 🏆" },
          { sender: "system", text: "Duration: 12-Hour Continuous Hackathon Sprint (Team of 4)" },
          { sender: "system", text: "Stack: React, Node.js, WebSockets, Tailwind CSS" },
              { sender: "system", text: "Live: https://7th-hour.vercel.app/", link: "https://7th-hour.vercel.app/" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/7th-hour", link: "https://github.com/sharmavikas18/7th-hour" }
        );
        break;

      case "budgetbuddy":
        newLines.push(
          { sender: "system", text: "Budget Buddy // Personal Expense Analytics & Financial Decision Companion" },
          { sender: "system", text: "Live: https://budget-buddy-liard-one.vercel.app/", link: "https://budget-buddy-liard-one.vercel.app/" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/BudgetBuddy", link: "https://github.com/sharmavikas18/BudgetBuddy" }
        );
        break;

      case "gamecraft":
        newLines.push(
          { sender: "system", text: "Gamecraft // Interactive Gaming & Community Showcase Platform" },
          { sender: "system", text: "Live: https://meenakshi-marketing.vercel.app/", link: "https://meenakshi-marketing.vercel.app/" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/Gamecraft", link: "https://github.com/sharmavikas18/Gamecraft" }
        );
        break;

      case "nstnotes":
        newLines.push(
          { sender: "system", text: "NST Notes // Centralized Academic Knowledge Base for NST Students" },
          { sender: "system", text: "Live: https://nst-notes.vercel.app/", link: "https://nst-notes.vercel.app/" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/NST_Notes", link: "https://github.com/sharmavikas18/NST_Notes" }
        );
        break;

      case "flight":
        newLines.push(
          { sender: "system", text: "Flight Management System // Airline Scheduling & Booking Architecture" },
          { sender: "system", text: "Repo: https://github.com/sharmavikas18/flight_management_system", link: "https://github.com/sharmavikas18/flight_management_system" }
        );
        break;

      case "oss":
        newLines.push({ sender: "system", text: "Upstream Open Source Contributions:" });
        OSS_CONTRIBUTIONS.forEach((c) => {
          newLines.push({
            sender: "system",
            text: `• ${c.organization} (${c.repository}): ${c.prTitle}`,
          });
        });
        break;

      case "devforge":
        newLines.push(
          { sender: "system", text: "DevForge at Newton School of Technology (NST)" },
          { sender: "system", text: "Role: Vice President" },
          { sender: "system", text: "Mission: Transitioning students from toy projects to upstream production code." },
          { sender: "system", text: "Activities: Hackathons, open-source contributor drives, Git masterclasses." }
        );
        break;

      case "skills":
        newLines.push(
          { sender: "system", text: "Languages: Python, TypeScript, JavaScript, SQL, HTML/CSS, C" },
          { sender: "system", text: "Frontend: Next.js (App Router), React, Tailwind CSS, Three.js, Framer Motion" },
          { sender: "system", text: "Backend: Node.js, Express, FastAPI, REST APIs, WebSockets" },
          { sender: "system", text: "Data & Cloud: PostgreSQL, Supabase, MongoDB, AWS, Firebase, Docker" }
        );
        break;

      case "contact":
        newLines.push(
          { sender: "system", text: `Email: ${PERSONAL_INFO.email}` },
          { sender: "system", text: `LinkedIn: ${PERSONAL_INFO.linkedin}`, link: PERSONAL_INFO.linkedin },
          { sender: "system", text: `GitHub: ${PERSONAL_INFO.github}`, link: PERSONAL_INFO.github }
        );
        break;

      case "github":
        newLines.push({ sender: "system", text: "Opening GitHub in a new tab..." });
        window.open(PERSONAL_INFO.github, "_blank");
        break;

      case "resume":
        newLines.push({
          sender: "system",
          text: `Contact ${PERSONAL_INFO.email} for current resume or view credentials on LinkedIn.`,
        });
        break;

      case "whoami":
        newLines.push({
          sender: "system",
          text: "guest@vikassharma-digital-universe (Permissions: read-only)",
        });
        break;

      case "theme": {
        const themes: ("teal" | "amber" | "cyan" | "purple")[] = ["teal", "amber", "cyan", "purple"];
        const nextTheme = themes[(themes.indexOf(accentColor) + 1) % themes.length];
        setAccentColor(nextTheme);
        newLines.push({ sender: "system", text: `Accent theme updated to: ${nextTheme}` });
        soundFX.playSuccess();
        break;
      }

      case "matrix":
        setMatrixMode((prev) => !prev);
        newLines.push({
          sender: "system",
          text: matrixMode ? "Exited Matrix mode." : "Entering Matrix mode... Wake up, Neo.",
        });
        soundFX.playSuccess();
        break;

      case "sudo":
        newLines.push({
          sender: "system",
          text: "Permission denied: Vikas holds root privileges. This incident has been logged.",
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newLines.push({
          sender: "system",
          text: `Command not recognized: '${cmd}'. Type 'help' for valid commands.`,
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  const themeColors = {
    teal: "text-[#5eead4] border-[#5eead4]/40 shadow-[0_0_25px_rgba(94,234,212,0.15)]",
    amber: "text-[#f59e0b] border-[#f59e0b]/40 shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    cyan: "text-[#38bdf8] border-[#38bdf8]/40 shadow-[0_0_25px_rgba(56,189,248,0.15)]",
    purple: "text-[#a855f7] border-[#a855f7]/40 shadow-[0_0_25px_rgba(168,85,247,0.15)]",
  };

  const accentHex = {
    teal: "#5eead4",
    amber: "#f59e0b",
    cyan: "#38bdf8",
    purple: "#a855f7",
  }[accentColor];

  const quickCommands = ["help", "projects", "raasta", "7thhour", "oss", "skills", "theme", "clear"];

  const content = (
    <div className="w-full">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white/[0.04] border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline">
            vikas@universe:~ (VikasOS v2.4)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleCommand("clear")}
            className="text-[10px] font-mono text-gray-400 hover:text-white px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Clear</span>
          </button>
          {isModal && onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Output Area */}
      <div
        className={`p-4 sm:p-6 h-[320px] sm:h-[360px] overflow-y-auto font-mono text-xs sm:text-sm custom-scrollbar cursor-text ${matrixMode ? "text-green-400 bg-black/95" : "text-gray-300 bg-[#07090e]/95"
          }`}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, i) => (
          <div
            key={i}
            className={`mb-1.5 leading-relaxed ${line.sender === "user"
              ? "font-semibold"
              : matrixMode
                ? "text-green-400"
                : "text-gray-300"
              }`}
            style={{
              color: line.sender === "user" ? accentHex : undefined,
            }}
          >
            {line.link ? (
              <a
                href={line.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors cursor-pointer"
              >
                {line.text}
              </a>
            ) : (
              line.text
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center gap-2 mt-4 pt-2 border-t border-white/[0.06]">
          <span style={{ color: accentHex }} className="font-semibold shrink-0">
            vikas@universe:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. help, projects, oss, clear)..."
            className="w-full bg-transparent border-none outline-none text-white placeholder-gray-600 font-mono text-xs sm:text-sm caret-[#5eead4]"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Click Command Chips */}
      <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto custom-scrollbar">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest shrink-0">
          Quick:
        </span>
        {quickCommands.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handleCommand(c)}
            className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[11px] font-mono text-gray-400 hover:text-white border border-white/[0.06] shrink-0 transition-colors cursor-pointer"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <div className={`w-full max-w-2xl rounded-2xl overflow-hidden border ${themeColors[accentColor]}`}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="terminal" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#5eead4]/30 text-[#5eead4] text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>{"Interactive Console // VikasOS"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Prefer Keyboard-First Exploration?
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2 max-w-lg mx-auto">
            Interact with my portfolio through a fully working CLI shell.
          </p>
        </div>

        <div className={`rounded-3xl overflow-hidden border ${themeColors[accentColor]}`}>
          {content}
        </div>
      </div>
    </section>
  );
}

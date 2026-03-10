"use client";
import { useState, useRef, KeyboardEvent, useEffect } from "react";
import { motion } from "framer-motion";

const INIT_SYSTEM = [
    "Booting VikasOS v2.0...",
    "Loading core infrastructure... [OK]",
    "Establishing secure connection... [OK]",
    "Type 'help' to see available commands or 'email' to contact me."
];

export default function TerminalContact() {
    const [history, setHistory] = useState<string[]>(INIT_SYSTEM);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            let response = "";

            switch (cmd) {
                case "help":
                    response = "Available: help, about, resume, github, email, clear, sudo";
                    break;
                case "about":
                    response = "Vikas Sharma: Full Stack Dev. Building exceptional experiences.";
                    break;
                case "resume":
                    response = "Downloading resume.pdf... (mocked)";
                    break;
                case "github":
                    response = "Redirecting to github.com/sharmavikas18...";
                    window.open("https://github.com/sharmavikas18", "_blank");
                    break;
                case "email":
                    response = "Sending signal to vikassharma180507@gmail.com...";
                    setTimeout(() => {
                        window.location.href = "mailto:vikassharma180507@gmail.com";
                    }, 1000);
                    break;
                case "clear":
                    setHistory([]);
                    setInput("");
                    return;
                case "sudo":
                    response = "Nice try. This incident will be reported.";
                    break;
                case "":
                    response = "";
                    break;
                default:
                    response = `Command not found: ${cmd}`;
            }

            setHistory((prev) => [...prev, `vikas@os:~$ ${cmd}`, ...(response ? [response] : [])]);
            setInput("");
        }
    };

    return (
        <section id="contact" className="py-24 bg-black relative">
            <div className="absolute top-10 left-10 md:left-24 z-20 flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-primary">03. Communication</h2>
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-20">
                <motion.div
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    onClick={() => inputRef.current?.focus()}
                >
                    {/* Terminal Header */}
                    <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-500 tracking-widest">
                            root@vikassharma:~
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={terminalRef}
                        className="p-6 h-80 font-mono text-sm overflow-y-auto text-gray-300 custom-scrollbar"
                    >
                        {history.map((line, i) => (
                            <div key={i} className={`mb-2 ${line.startsWith("vikas@") ? "text-primary" : "text-gray-400"}`}>
                                {line}
                            </div>
                        ))}

                        <div className="flex items-center gap-2 mt-4 text-primary">
                            <span>vikas@os:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleCommand}
                                className="bg-transparent border-none outline-none text-white w-full caret-primary"
                                autoFocus
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 text-center text-gray-600 font-mono text-xs uppercase tracking-widest">
                    Press <kbd className="px-2 py-1 rounded bg-white/10 text-gray-400">ENTER</kbd> to execute commands.
                </div>
            </div>
        </section>
    );
}

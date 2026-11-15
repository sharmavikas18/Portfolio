"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { soundFX } from "@/lib/sound";
import { PERSONAL_INFO } from "@/lib/data";

interface ContactSectionProps {
  onOpenTerminal: () => void;
}

export default function ContactSection({ onOpenTerminal }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
    } catch {
      // fallback
    }
    soundFX.playSuccess();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    soundFX.playClick(700);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "cd2e4673-b5cf-40a3-a93b-c3accfa67749",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        soundFX.playSuccess();
        setFormData({ name: "", email: "", message: "" });
      } else {
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
      }
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-20 relative bg-[#050507] text-white border-t border-white/[0.06] scroll-mt-20 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#5eead4]/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Direct Call to Action */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-[2px] bg-[#5eead4]" />
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#5eead4]">
                        {"07 // Initiate Signal"}
                      </span>
                    </div>
                      <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                        Have something interesting to build? <br />
                        <span className="text-accent-gradient">Let&apos;s make it happen.</span>
                      </h2>
                  </div>

                  <p className="text-base text-gray-400 font-light leading-relaxed max-w-lg">
                    Whether you are looking for a dedicated full-stack engineer, collaborating on open-source systems, or building a high-impact product, my inbox is open.
                  </p>

                  {/* Direct Email Click-to-Copy Pill */}
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#5eead4]/10 text-[#5eead4] flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                          Direct Email
                        </span>
                        <span className="text-sm font-mono text-white select-all">
                          {PERSONAL_INFO.email}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-[#5eead4]/10 border border-white/[0.08] hover:border-[#5eead4]/30 text-xs font-mono text-gray-300 hover:text-[#5eead4] transition-all flex items-center gap-1.5 cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#5eead4]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Social Nodes */}
                    <div className="flex flex-wrap gap-3 pt-1">
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick(650)}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-[#5eead4]" />
                        <span>github.com/sharmavikas18</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                      </a>

                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick(650)}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-gray-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Linkedin className="w-4 h-4 text-[#38bdf8]" />
                        <span>LinkedIn Profile</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Web3Forms Contact Form */}
                  <div className="lg:col-span-6">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] relative">
                        <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                          <span>Send a Dispatch</span>
                          <Sparkles className="w-4 h-4 text-[#5eead4]" />
                        </h3>
                        <p className="text-xs font-mono text-gray-400 mb-6">
                          Delivered straight to my personal inbox. Response typically within 24 hours.
                        </p>

                        {submitted ? (
                          <div className="p-8 rounded-2xl bg-[#5eead4]/10 border border-[#5eead4]/30 text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-[#5eead4]/20 text-[#5eead4] flex items-center justify-center mx-auto">
                              <Check className="w-6 h-6" />
                            </div>
                            <h4 className="text-lg font-bold text-white">Transmission Received</h4>
                            <p className="text-xs font-mono text-gray-300">
                              Thank you! Your message has been sent. I will get back to you shortly.
                            </p>
                            <button
                              type="button"
                              onClick={() => setSubmitted(false)}
                              className="mt-4 text-xs font-mono text-[#5eead4] hover:underline cursor-pointer"
                            >
                              Send another message
                            </button>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                                Your Name
                              </label>
                              <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Ada Lovelace"
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#5eead4]/60 text-sm text-white placeholder-gray-600 outline-none font-mono transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                                Your Email
                              </label>
                              <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="ada@computing.org"
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#5eead4]/60 text-sm text-white placeholder-gray-600 outline-none font-mono transition-colors"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                                Message
                              </label>
                              <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Hi Vikas, I'd love to collaborate on..."
                                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#5eead4]/60 text-sm text-white placeholder-gray-600 outline-none font-mono transition-colors resize-none"
                              />
                            </div>

                            <button
                              type="submit"
                              disabled={submitting}
                              className="w-full py-3.5 rounded-xl bg-[#5eead4] text-[#050507] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#5eead4]/90 transition-all shadow-[0_0_20px_rgba(94,234,212,0.25)] active:scale-98 disabled:opacity-50 cursor-pointer"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>{submitting ? "Transmitting..." : "Send Dispatch"}</span>
                            </button>
                          </form>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            );
}

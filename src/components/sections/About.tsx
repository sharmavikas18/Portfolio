"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, Code2, Globe, Cpu } from "lucide-react";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 1, scale: 0.95, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    return (
        <section id="about" className="py-32 relative bg-black text-white selection:bg-primary/20">
            <div className="max-w-6xl mx-auto px-6" ref={ref}>
                <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-1 bg-primary rounded-full"></span>
                        <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-primary">01. Identity</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient">The Builder Behind the Code.</h3>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    {/* Main Bio Card */}
                    <motion.div variants={item} className="md:col-span-8 glass-dark p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
                        <p className="text-xl leading-relaxed text-gray-300 font-light max-w-2xl">
                            I am a dedicated Computer Science student and Open Source enthusiast with an obsession for building scalable, high-performance web applications. <br /><br />
                            Bridging the gap between complex backend logic and pixel-perfect, interactive frontend design, my work focuses on real-world impact. Currently, I architect computer vision pipelines for <span className="text-white font-medium">PictoPy</span> and manage full-stack state for <span className="text-white font-medium">SaveBook</span>.
                        </p>
                    </motion.div>

                    {/* Quick Stats Grid */}
                    <motion.div variants={item} className="md:col-span-4 grid grid-cols-2 gap-4">
                        <div className="glass p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 transition-colors">
                            <Code2 className="text-primary w-8 h-8 opacity-70" />
                            <div className="text-3xl font-bold">15+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Projects</div>
                        </div>
                        <div className="glass p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 transition-colors">
                            <Globe className="text-primary w-8 h-8 opacity-70" />
                            <div className="text-3xl font-bold">500+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Commits</div>
                        </div>
                        <div className="glass p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 transition-colors">
                            <Cpu className="text-primary w-8 h-8 opacity-70" />
                            <div className="text-3xl font-bold">4+</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Years</div>
                        </div>
                        <div className="glass p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 transition-colors">
                            <Coffee className="text-primary w-8 h-8 opacity-70" />
                            <div className="text-3xl font-bold">∞</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Passion</div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}

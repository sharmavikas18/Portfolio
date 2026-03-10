"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const PROJECTS = [
    {
        id: 1,
        title: "SaveBook",
        category: "Web Application",
        description: "SaveBook is a modern web application designed for note-taking and knowledge management. Focused on seamless productivity.",
        tech: ["JavaScript", "React", "Node.js", "Express"],
        link: "#",
        github: "https://github.com/sharmavikas18/SaveBook",
        color: "from-blue-600 to-cyan-500",
        imagePlaceholder: "SB"
    },
    {
        id: 2,
        title: "PictoPy",
        category: "Desktop Application",
        description: "A desktop image gallery with a privacy-first approach. It detects objects and clusters faces automatically without cloud processing.",
        tech: ["Python", "Computer Vision", "Machine Learning"],
        link: "#",
        github: "https://github.com/sharmavikas18/PictoPy",
        color: "from-purple-600 to-pink-500",
        imagePlaceholder: "PY"
    },
    {
        id: 3,
        title: "Placement-Prep",
        category: "Educational",
        description: "A structured placement preparation repository covering DSA, coding practice, core CS concepts, and interview resources.",
        tech: ["TypeScript", "Data Structures", "Algorithms", "CS Concepts"],
        link: "#",
        github: "https://github.com/sharmavikas18/Placement-Prep",
        color: "from-emerald-500 to-teal-400",
        imagePlaceholder: "PP"
    }
];

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden flex-col justify-center pt-24">

                <div className="absolute top-10 left-10 md:left-24 z-20 flex items-center gap-4">
                    <span className="w-12 h-1 bg-primary rounded-full"></span>
                    <h2 className="text-sm font-mono tracking-[0.3em] uppercase text-primary">02. Selected Works</h2>
                </div>

                <motion.div style={{ x }} className="w-max flex gap-10 md:gap-20 px-10 md:px-24">
                    {PROJECTS.map((proj, idx) => {
                        return (
                            <ProjectCard key={proj.id} project={proj} index={idx} />
                        );
                    })}
                </motion.div>

                <div className="absolute bottom-10 left-10 md:left-24 z-20 text-gray-500 font-mono text-sm tracking-widest hidden md:block">
                    Scroll Horizontally — {PROJECTS.length} Projects
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            className="shrink-0 w-[85vw] md:w-[60vw] max-w-4xl h-[60vh] md:h-[70vh] flex flex-col md:flex-row glass-dark overflow-hidden group border border-white/5 relative"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            initial={{ opacity: 1, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative z-10 border-r border-white/5">
                <div>
                    <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">Case Study 0{index + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{project.title}</h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-6">
                    <a href={project.github} target="_blank" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2 magnetic">
                        GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">&rarr;</span>
                    </a>
                    <a href={project.link} className="text-sm font-bold uppercase text-gray-500 hover:text-white transition-colors">
                        Live Preview
                    </a>
                </div>
            </div>

            <div className="md:w-1/2 relative bg-black flex items-center justify-center overflow-hidden">
                {/* Placeholder for project mockups. Abstract beautiful gradient for now. */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-1000 ${project.color}`} />
                <motion.div
                    animate={{ scale: hover ? 1.05 : 1, rotate: hover ? 2 : 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-8xl md:text-[150px] font-black italic opacity-10 text-white select-none pointer-events-none"
                >
                    {project.imagePlaceholder}
                </motion.div>

                {/* Fake interface floating */}
                <motion.div
                    animate={{ y: hover ? -20 : 0, opacity: hover ? 1 : 0.5 }}
                    className="glass absolute w-3/4 h-1/2 rounded-xl shadow-2xl flex flex-col shadow-black/80 border-white/10"
                >
                    <div className="h-6 w-full border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col gap-3">
                        <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                        <div className="w-3/4 h-2 bg-white/5 rounded mt-2"></div>
                        <div className="w-2/3 h-2 bg-white/5 rounded"></div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

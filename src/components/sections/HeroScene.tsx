"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from 'next/dynamic';

const WebGLBackground = dynamic(() => import('@/components/ui/WebGLBackground'), { ssr: false });

export default function HeroScene() {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            <WebGLBackground />

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                style={{ y: yText, opacity: opacityText }}
            >
                <motion.div
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-8 tracking-widest uppercase"
                >
                    <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="block text-white/50 text-4xl md:text-6xl mb-2 font-medium">Hello, I&apos;m</span>
                    Vikas Sharma
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-10"
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    I engineer pixel-perfect, scalable web products with
                    <span className="text-white font-medium"> extreme attention to detail</span>.
                </motion.p>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="text-xs text-gray-500 font-mono rotate-90 mb-8 uppercase tracking-widest">Scroll</div>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-primary w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}

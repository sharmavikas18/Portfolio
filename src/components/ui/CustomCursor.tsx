"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("magnetic")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Circle Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-primary/50 rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(94, 234, 212, 0.1)" : "rgba(0,0,0,0)",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </>
    );
}

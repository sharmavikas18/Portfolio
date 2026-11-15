"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });

    useEffect(() => {
      // Only show on desktop devices with fine pointer (mouse)
      if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
        return;
      }

      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (!target) return;

      const clickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") !== null ||
        target.closest("a") !== null;

        setIsPointer(clickable);
      };

      const handleMouseLeave = () => setIsVisible(false);

      window.addEventListener("mousemove", moveCursor, { passive: true });
      window.addEventListener("mouseover", handleMouseOver, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("mouseover", handleMouseOver);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {/* Subtle trailing ambient glow - purely decorative, zero click blocking */}
        <motion.div
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200"
          style={{
            x: cursorX,
            y: cursorY,
            width: isPointer ? 36 : 24,
            height: isPointer ? 36 : 24,
            border: isPointer ? "1px solid rgba(94, 234, 212, 0.5)" : "1px solid rgba(94, 234, 212, 0.2)",
            backgroundColor: isPointer ? "rgba(94, 234, 212, 0.08)" : "transparent",
          }}
        />
      </div>
      );
}

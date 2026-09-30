"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* Dot — follows cursor exactly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C0442C] pointer-events-none z-[9999]"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms" }}
      />

      {/* Ring — outer div handles position (JS), inner handles scale/color (CSS) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 300ms" }}
      >
        <div
          className="w-10 h-10 rounded-full border-2"
          style={{
            borderColor: hovered ? "#C0442C" : "#1B3A5C",
            backgroundColor: hovered ? "rgba(192, 68, 44, 0.08)" : "transparent",
            transform: `scale(${hovered ? 1.6 : 1})`,
            transition: "border-color 150ms, background-color 150ms, transform 150ms",
          }}
        />
      </div>
    </>
  );
}

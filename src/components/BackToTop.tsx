"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/components/SmoothScrollProvider";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-8 right-6 z-[9997] w-10 h-10 rounded bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#152d47] transition-colors duration-200"
      style={{ fontFamily: "var(--font-jakarta)", fontSize: "1rem" }}
    >
      ↑
    </button>
  );
}

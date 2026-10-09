"use client";

import { useEffect, useRef } from "react";
import { animate, onScroll, stagger } from "animejs";

interface ScrollWordsProps {
  text: string;
  className?: string;
}

/** Words fill in one by one as the passage scrolls through the viewport. */
export default function ScrollWords({ text, className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const words = root.querySelectorAll<HTMLElement>("[data-w]");

    const anim = animate(words, {
      opacity: [0.16, 1],
      duration: 120,
      delay: stagger(60),
      ease: "linear",
      autoplay: onScroll({
        target: root,
        enter: { target: "top", container: "bottom-=12%" },
        leave: { target: "bottom", container: "center" },
        sync: true,
      }),
    });
    return () => {
      anim.revert();
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} data-w className="scroll-word">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

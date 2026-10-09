"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { animate, stagger } from "animejs";

// Deterministic pseudo-random in [-1, 1] so server and client render the same offsets.
const noise = (i: number, seed: number) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
};

interface KineticTextProps {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  style?: CSSProperties;
  /** How far letters start out of line, in px. */
  spread?: number;
  /** "load" plays on mount (above the fold); "view" waits until the text is on screen. */
  play?: "load" | "view";
  seed?: number;
}

/**
 * Dissonance → consonance: letters start off the baseline and tilted, then settle into line.
 * After that, the pointer knocks nearby letters out of tune and they spring back.
 * The text is fully readable in every state; under reduced motion the letters sit in line (CSS).
 */
export default function KineticText({
  text,
  as = "h2",
  className,
  style,
  spread = 48,
  play = "load",
  seed = 1,
}: KineticTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");
  let n = 0;

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const chars = Array.from(root.querySelectorAll<HTMLElement>("[data-k]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      chars.forEach((c) => (c.style.transform = "none"));
      return;
    }

    const offsets = chars.map((c) => ({ y: Number(c.dataset.y), r: Number(c.dataset.r) }));
    let settled = false;
    const settle = () =>
      animate(chars, {
        y: (_t?: unknown, i = 0) => [offsets[i].y, 0],
        rotate: (_t?: unknown, i = 0) => [offsets[i].r, 0],
        delay: stagger(26, { from: "center" }),
        duration: 1500,
        ease: "outElastic(1, .55)",
        onComplete: () => (settled = true),
      });

    let io: IntersectionObserver | undefined;
    if (play === "load") settle();
    else {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          settle();
          io?.disconnect();
        },
        { rootMargin: "0px 0px -15% 0px" }
      );
      io.observe(root);
    }

    const onMove = (e: PointerEvent) => {
      if (!settled || e.pointerType !== "mouse") return;
      for (const el of chars) {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        if (d > 110) continue;
        const push = (1 - d / 110) * 16;
        animate(el, {
          y: [(-dy / d) * push, 0],
          rotate: [(dx / d) * push * 0.45, 0],
          duration: 1000,
          ease: "outElastic(1, .4)",
        });
      }
    };
    root.addEventListener("pointermove", onMove);

    return () => {
      io?.disconnect();
      root.removeEventListener("pointermove", onMove);
    };
  }, [play]);

  const Tag = as;
  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} aria-label={text} className={className} style={style}>
        {words.map((w, wi) => (
        <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(w).map((c, ci) => {
            const i = n++;
            const y = Math.round(noise(i, seed) * spread);
            const r = Math.round(noise(i, seed + 7) * 12);
            return (
              <span
                key={ci}
                data-k
                data-y={y}
                data-r={r}
                className="kinetic-char inline-block"
                style={{ transform: `translateY(${y}px) rotate(${r}deg)` }}
              >
                {c}
              </span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
    ))}
    </Tag>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { createTimeline, onScroll } from "animejs";

// Deterministic pseudo-random in [-1, 1].
const noise = (i: number, seed: number) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
};

const clamp = (v: number) => Math.min(1, Math.max(0, v));

/** Two sine lines: out of tune (different frequency and phase) → in tune (parallel). */
function wavePath(width: number, mid: number, amp: number, freq: number, phase: number) {
  let d = "";
  for (let x = 0; x <= width; x += 8) {
    const y = mid + amp * Math.sin(x * freq + phase);
    d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)} `;
  }
  return d;
}

interface DissonanceStageProps {
  problemLabel: string;
  problem: string;
  proposalLabel: string;
  proposal: string;
}

/**
 * Pinned scroll scene. The problem statement pulls apart word by word (polarization),
 * then the proposal assembles into a single line (deliberation). Two lines underneath go
 * from dissonant to consonant. Under reduced motion both statements simply stack.
 */
export default function DissonanceStage({ problemLabel, problem, proposalLabel, proposal }: DissonanceStageProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const redRef = useRef<SVGPathElement>(null);
  const navyRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const q = <T extends Element>(s: string) => Array.from(section.querySelectorAll<T>(s));
    const a = q<HTMLElement>("[data-a]");
    const b = q<HTMLElement>("[data-b]");
    const [layerA] = q<HTMLElement>("[data-layer-a]");
    const [layerB] = q<HTMLElement>("[data-layer-b]");

    const drawWaves = (p: number) => {
      const tension = clamp(p / 0.45); // grows while the problem pulls apart
      const tune = clamp((p - 0.5) / 0.4); // 0 → 1 while the proposal assembles
      const amp = 8 + 34 * tension * (1 - tune) + 4 * tune;
      const detune = 0.55 * (1 - tune) * (0.3 + tension);
      redRef.current?.setAttribute("d", wavePath(1200, 56, amp, 0.018, 0));
      navyRef.current?.setAttribute(
        "d",
        wavePath(1200, 56 + 10 * tune, amp, 0.018 * (1 + detune), Math.PI * (1 - tune))
      );
    };
    drawWaves(0);

    const tl = createTimeline({
      defaults: { ease: "linear" },
      autoplay: onScroll({
        target: section,
        enter: { target: "top", container: "top" },
        leave: { target: "bottom", container: "bottom" },
        sync: true,
        onUpdate: (self) => drawWaves(self.progress),
      }),
    })
      .add(
        a,
        {
          // The two voices split vertically: one rises, the other sinks.
          // In em, so the split scales with the type on every screen size.
          x: (_t?: unknown, i = 0) => ["0em", `${(noise(i, 3) * 0.12).toFixed(3)}em`],
          y: (_t?: unknown, i = 0) => ["0em", `${((i % 2 ? 1 : -1) * (0.12 + Math.abs(noise(i, 5)) * 0.14)).toFixed(3)}em`],
          rotate: (_t?: unknown, i = 0) => [0, noise(i, 9) * 7],
          duration: 420,
        },
        0
      )
      // Every other word changes voice quickly, so no muddy in-between colour lingers.
      .add(a.filter((_, i) => i % 2), { color: ["#1B3A5C", "#C0442C"], duration: 40 }, 90)
      .add(layerA, { opacity: [1, 0], duration: 90 }, 400)
      .add(layerB, { opacity: [0, 1], duration: 90 }, 470)
      .add(
        b,
        {
          x: (_t?: unknown, i = 0) => [`${(noise(i, 11) * 0.25).toFixed(3)}em`, "0em"],
          y: (_t?: unknown, i = 0) => [`${(noise(i, 13) * 0.3).toFixed(3)}em`, "0em"],
          rotate: (_t?: unknown, i = 0) => [noise(i, 17) * 7, 0],
          duration: 380,
        },
        470
      )
      .add({ duration: 150 }, 850);

    return () => {
      tl.revert();
    };
  }, []);

  const words = (text: string, attr: "data-a" | "data-b") =>
    text.split(" ").map((w, i) => (
      <span key={i} {...{ [attr]: "" }} className="inline-block will-change-transform">
        {w}&nbsp;
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative bg-cream h-[300vh] motion-reduce:h-auto"
      aria-label={`${problemLabel}. ${proposalLabel}`}
    >
      <div className="sticky top-0 h-svh overflow-hidden flex flex-col justify-center px-6 motion-reduce:static motion-reduce:h-auto motion-reduce:py-24">
        <div className="relative max-w-[72rem] w-full mx-auto grid motion-reduce:gap-16">
          <div data-layer-a className="[grid-area:1/1] flex flex-col gap-6">
            <p className="font-ui text-sm font-semibold text-rust">{problemLabel}</p>
            <h2 className="stage-title">{words(problem, "data-a")}</h2>
          </div>
          <div data-layer-b className="[grid-area:1/1] flex flex-col gap-6 opacity-0 motion-reduce:opacity-100 motion-reduce:[grid-area:2/1]">
            <p className="font-ui text-sm font-semibold text-rust">{proposalLabel}</p>
            <h2 className="stage-title">{words(proposal, "data-b")}</h2>
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 bottom-[10vh] w-full h-24 motion-reduce:hidden"
        >
          <path ref={redRef} fill="none" stroke="var(--pd-terracotta)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path ref={navyRef} fill="none" stroke="var(--pd-navy)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </section>
  );
}

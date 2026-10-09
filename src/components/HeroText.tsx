"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { animate, stagger, utils } from "animejs";

const copy = {
  es: {
    label: "Deliberación · Evidencia · Pluralismo",
    h1: "Escuchar lo que nos cuesta oír",
    p: "Proyecto Disonante es una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.",
  },
  en: {
    label: "Deliberation · Evidence · Pluralism",
    h1: "Listen to what is hard for us to hear",
    p: "Proyecto Disonante is a contribution to strengthen civic space through public deliberation, the use of evidence and pluralism.",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: "easeOut" as const } },
};

export default function HeroText({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  const h1Ref = useRef<HTMLHeadingElement>(null);

  // Dissonance → consonance: letters start out of tune (offset, tilted, some in red)
  // and settle onto the baseline. The pointer knocks nearby letters out of tune again.
  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(h1.querySelectorAll<HTMLElement>("[data-char]"));

    const intro = animate(chars, {
      y: { from: () => utils.random(-60, 60) },
      rotate: { from: () => utils.random(-14, 14) },
      delay: stagger(28, { from: "center" }),
      duration: 1400,
      ease: "outElastic(1, .55)",
    });

    let settled = false;
    const settleTimer = window.setTimeout(() => (settled = true), 1500);

    const onMove = (e: PointerEvent) => {
      if (!settled) return;
      for (const el of chars) {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy);
        if (d > 120) continue;
        const push = (1 - d / 120) * 18;
        animate(el, {
          y: [-(dy / (d || 1)) * push, 0],
          rotate: [(dx / (d || 1)) * push * 0.4, 0],
          duration: 900,
          ease: "outElastic(1, .4)",
        });
      }
    };
    h1.addEventListener("pointermove", onMove);

    return () => {
      intro.revert();
      window.clearTimeout(settleTimer);
      h1.removeEventListener("pointermove", onMove);
    };
  }, []);

  const words = t.h1.split(" ");

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="label text-rust">{t.label}</span>
      {/* Letters render in place on first paint (LCP); the motion is layered on after mount. */}
      <h1
        ref={h1Ref}
        aria-label={t.h1}
        className="text-center max-w-5xl select-none"
        style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)", lineHeight: 0.9 }}
      >
        {words.map((w, wi) => (
          <span key={wi} aria-hidden className="inline-block whitespace-nowrap">
            {Array.from(w).map((c, ci) => (
              <span key={ci} data-char className="inline-block will-change-transform">
                {c}
              </span>
            ))}
            {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-xl max-w-2xl text-center text-pretty"
        style={{ lineHeight: 1.7 }}
      >
        {t.p}
      </motion.p>
    </div>
  );
}

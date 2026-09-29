"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 10, suffix: "+", label: "Años de trayectoria" },
  { value: 4,  suffix: "",  label: "Continentes alcanzados" },
  { value: 20, suffix: "+", label: "Instituciones y organizaciones" },
  { value: 1000, suffix: "+", label: "Participantes en procesos" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const timer = setInterval(() => {
      step++;
      const progress = ease(step / steps);
      current = Math.round(progress * target);
      setCount(current);
      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#1B3A5C] py-20 px-6 overflow-hidden relative">
      {/* Faint motif */}
      <div className="absolute -right-16 -top-16 opacity-[0.04] pointer-events-none">
        <svg width="320" height="280" viewBox="0 0 120 102" fill="none" aria-hidden="true">
          <rect x="0" y="0" width="80" height="60" rx="12" fill="white" />
          <path d="M14 60 L6 76 L28 64" fill="white" />
          <rect x="38" y="30" width="82" height="56" rx="12" fill="white" />
          <path d="M104 86 L116 100 L98 88" fill="white" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <p
              className="text-5xl md:text-6xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "-0.03em" }}
            >
              <CountUp target={s.value} suffix={s.suffix} active={inView} />
            </p>
            <p
              className="text-sm text-blue-300 leading-snug"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

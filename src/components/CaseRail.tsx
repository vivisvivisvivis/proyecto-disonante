"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cases } from "@/lib/cases";

const copy = {
  es: { prev: "Caso anterior", next: "Caso siguiente", read: "Leer el caso", region: "Casos recientes" },
  en: { prev: "Previous case", next: "Next case", read: "Read the case", region: "Recent cases" },
};

/** Horizontal, snap-scrolling row of cases. Touch and trackpad scroll natively; a mouse can drag it. */
export default function CaseRail({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  const base = lang === "en" ? "/en/blog" : "/blog";
  const trackRef = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdges({
        start: track.scrollLeft < 8,
        end: track.scrollLeft + track.clientWidth > track.scrollWidth - 8,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Mouse drag. Snapping is switched off while dragging so the row follows the hand.
    let startX = 0;
    let startLeft = 0;
    let dragged = false;
    let down = false;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      dragged = false;
      startX = e.clientX;
      startLeft = track.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragged && Math.abs(dx) > 6) {
        dragged = true;
        track.dataset.dragging = "";
      }
      if (dragged) track.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      delete track.dataset.dragging;
    };
    // A drag must not also open the card it started on.
    const onClick = (e: MouseEvent) => {
      if (dragged) {
        e.preventDefault();
        dragged = false;
      }
    };
    track.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    track.addEventListener("click", onClick, true);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      track.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      track.removeEventListener("click", onClick, true);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    track.scrollBy({ left: dir * ((card?.clientWidth ?? 400) + 24), behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-6">
      <ul ref={trackRef} aria-label={t.region} className="case-rail" data-lenis-prevent-wheel>
        {cases.map((c) => {
          const d = c[lang];
          return (
            <li key={c.slug} className="case-rail-item">
              <Link
                href={`${base}/${c.slug}`}
                draggable={false}
                className="group h-full flex flex-col gap-5 p-8 md:p-10 bg-sand border border-line rounded hover:border-navy transition-colors duration-300"
              >
                <div className="flex items-baseline justify-between gap-4 flex-wrap font-ui text-xs">
                  <span className="font-semibold text-rust">{d.format}</span>
                  <span className="text-muted">{d.when}</span>
                </div>
                <h3 className="case-rail-title">{c.client}</h3>
                {d.highlight && <p className="font-ui text-sm font-semibold text-navy">{d.highlight}</p>}
                <p className="text-[0.9375rem] leading-relaxed">{d.summary}</p>
                <span className="mt-auto pt-2 font-ui text-sm font-semibold text-rust link-underline self-start">
                  {t.read}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-3 justify-end">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => step(dir)}
            disabled={dir === -1 ? edges.start : edges.end}
            aria-label={dir === -1 ? t.prev : t.next}
            className="w-12 h-12 rounded-full border-2 border-navy text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg aria-hidden width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={dir === -1 ? "M11 3 5 9l6 6" : "M7 3l6 6-6 6"} />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";

interface Service {
  id: string;
  title: string;
  desc: string;
}

const tones = [
  "bg-sand text-navy",
  "bg-cream text-navy border border-line",
  "bg-navy text-white",
  "bg-navy-deep text-white",
];

/** Service panels that stack on top of each other while scrolling; the covered panel recedes. */
export default function ServiceStack({ services, href, more }: { services: Service[]; href: string; more: string }) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const panels = Array.from(list.querySelectorAll<HTMLElement>("[data-panel]"));
    const anims = panels.slice(0, -1).map((panel, i) =>
      animate(panel, {
        scale: [1, 0.94],
        filter: ["brightness(1)", "brightness(0.9)"],
        ease: "linear",
        autoplay: onScroll({
          target: panels[i + 1],
          enter: { target: "top", container: "bottom" },
          leave: { target: "top", container: "top+=120" },
          sync: true,
        }),
      })
    );
    return () => anims.forEach((a) => a.revert());
  }, []);

  return (
    <ul ref={listRef} className="flex flex-col gap-6 md:gap-10">
      {services.map((s, i) => {
        const dark = i >= 2;
        return (
          <li key={s.id} className="sticky motion-reduce:static" style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}>
            <div data-panel className={`origin-top rounded p-8 md:p-14 min-h-[18rem] md:min-h-[22rem] flex flex-col justify-between gap-10 ${tones[i]}`}>
              <h3 className={`service-title ${dark ? "text-white" : ""}`}>{s.title}</h3>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <p className={`max-w-xl text-lg leading-relaxed ${dark ? "text-blue-100" : ""}`}>{s.desc}</p>
                <Link
                  href={`${href}#${s.id}`}
                  className={`font-ui text-sm font-semibold link-underline self-start md:self-end shrink-0 ${dark ? "text-white" : "text-rust"}`}
                >
                  {more}
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

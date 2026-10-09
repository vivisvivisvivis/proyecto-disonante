"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navLinks, localHref } from "@/lib/nav";
import { useLenis } from "@/components/SmoothScrollProvider";

// `altHref` overrides the language-switch target for pages that exist in one language only.
export default function Navbar({ lang = "es", altHref }: { lang?: "es" | "en"; altHref?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  const otherLangHref =
    altHref ??
    (lang === "en"
      ? pathname.replace(/^\/en/, "") || "/"
      : pathname === "/"
      ? "/en"
      : `/en${pathname}`);

  const isCurrent = (href: string) => {
    const full = localHref(lang, href);
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // The full-screen menu freezes the page behind it.
  useEffect(() => {
    if (open) lenis?.current?.stop();
    else lenis?.current?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-300 ${
        open ? "bg-navy-deep border-b border-transparent" : scrolled ? "bg-cream/95 border-b border-line" : "bg-cream border-b border-transparent"
      }`}
    >
      <nav
        aria-label={lang === "en" ? "Main" : "Principal"}
        className="relative z-10 max-w-[75rem] mx-auto px-6 py-4 flex items-center justify-between"
      >
        <Link href={localHref(lang, "/")} className="flex-shrink-0">
          <Image src="/logo.png" alt="Proyecto Disonante" width={160} height={50} priority className={open ? "brightness-0 invert" : ""} />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const current = isCurrent(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={localHref(lang, link.href)}
                  aria-current={current ? "page" : undefined}
                  className={`link-underline transition-colors duration-150 hover:text-rust ${
                    current ? "text-rust [background-size:100%_1.5px]" : "text-ink"
                  }`}
                  style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8125rem", fontWeight: current ? 600 : 500 }}
                >
                  {link[lang]}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={otherLangHref}
              hrefLang={lang === "en" ? "es" : "en"}
              aria-label={lang === "en" ? "Ver en español" : "View in English"}
              className="text-xs font-bold text-navy border-2 border-navy px-3.5 py-1 rounded hover:bg-navy hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "0.05em" }}
            >
              {lang === "en" ? "ES" : "EN"}
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 -mr-3"
          onClick={() => setOpen(!open)}
          aria-label={open ? (lang === "en" ? "Close menu" : "Cerrar menú") : lang === "en" ? "Open menu" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span aria-hidden className={`block w-5 h-0.5 ${open ? "bg-cream" : "bg-navy"} transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span aria-hidden className={`block w-5 h-0.5 bg-navy transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span aria-hidden className={`block w-5 h-0.5 ${open ? "bg-cream" : "bg-navy"} transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu: full screen. `inert` keeps closed links out of the tab order. */}
      <div
        id="mobile-menu"
        inert={!open}
        data-open={open || undefined}
        className="mobile-menu md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const current = isCurrent(link.href);
            return (
              <li key={link.href} style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }} className="mobile-menu-item">
                <Link
                  href={localHref(lang, link.href)}
                  aria-current={current ? "page" : undefined}
                  className={`mobile-menu-link ${current ? "text-terracotta" : "text-cream"}`}
                  onClick={() => setOpen(false)}
                >
                  {link[lang]}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          href={otherLangHref}
          hrefLang={lang === "en" ? "es" : "en"}
          className="font-ui text-sm font-bold text-cream link-underline self-start"
          onClick={() => setOpen(false)}
        >
          {lang === "en" ? "Ver en español" : "View in English"}
        </Link>
      </div>
    </header>
  );
}

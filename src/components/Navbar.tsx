"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/actividades",   label: "Actividades",     labelEn: "Activities" },
  { href: "/que-ofrecemos", label: "¿Qué ofrecemos?", labelEn: "What we offer" },
  { href: "/blog",          label: "Blog",             labelEn: "Blog" },
  { href: "/quienes-somos", label: "Quiénes somos",   labelEn: "About us" },
  { href: "/contacto",      label: "Contacto",         labelEn: "Contact" },
];

export default function Navbar({ lang = "es" }: { lang?: "es" | "en" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D9]"
          : "bg-[#FAF7F2] border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={lang === "en" ? "/en" : "/"} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Proyecto Disonante"
            width={160}
            height={50}
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={lang === "en" ? `/en${link.href}` : link.href}
                className="text-[#2D2D2D] hover:text-[#C0442C] transition-colors duration-150"
                style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.8125rem", fontWeight: 500 }}
              >
                {lang === "en" ? link.labelEn : link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={lang === "en" ? "/" : "/en"}
              className="text-xs font-bold text-[#1B3A5C] border-2 border-[#1B3A5C] px-3.5 py-1 rounded-full hover:bg-[#1B3A5C] hover:text-white transition-all duration-200"
              style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "0.05em" }}
            >
              {lang === "en" ? "ES" : "EN"}
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-5 h-0.5 bg-[#1B3A5C] transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1B3A5C] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#1B3A5C] transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-white border-t border-[#E8E2D9] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={lang === "en" ? `/en${link.href}` : link.href}
              className="text-[#2D2D2D] hover:text-[#C0442C] font-medium transition-colors"
              style={{ fontFamily: "var(--font-jakarta)", fontSize: "0.9375rem" }}
              onClick={() => setOpen(false)}
            >
              {lang === "en" ? link.labelEn : link.label}
            </Link>
          ))}
          <div className="h-px bg-[#E8E2D9]" />
          <Link
            href={lang === "en" ? "/" : "/en"}
            className="text-sm font-bold text-[#1B3A5C]"
            style={{ fontFamily: "var(--font-jakarta)" }}
            onClick={() => setOpen(false)}
          >
            {lang === "en" ? "Ver en Español" : "View in English"}
          </Link>
        </div>
      </div>
    </header>
  );
}

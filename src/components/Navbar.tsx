"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/actividades", label: "Actividades", labelEn: "Activities" },
  { href: "/que-ofrecemos", label: "¿Qué ofrecemos?", labelEn: "What we offer" },
  { href: "/blog", label: "Blog", labelEn: "Blog" },
  { href: "/quienes-somos", label: "Quiénes somos", labelEn: "About us" },
  { href: "/contacto", label: "Contacto", labelEn: "Contact" },
];

export default function Navbar({ lang = "es" }: { lang?: "es" | "en" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF7F2] border-b border-[#E8E2D9] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={lang === "en" ? "/en" : "/"} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Proyecto Disonante"
            width={177}
            height={55}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={lang === "en" ? `/en${link.href}` : link.href}
                className="text-[#2D2D2D] hover:text-[#C0442C] text-sm font-medium transition-colors"
              >
                {lang === "en" ? link.labelEn : link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={lang === "en" ? "/" : "/en"}
              className="text-xs font-semibold text-[#1B3A5C] border border-[#1B3A5C] px-3 py-1 rounded-full hover:bg-[#1B3A5C] hover:text-white transition-colors"
            >
              {lang === "en" ? "ES" : "EN"}
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-[#1B3A5C] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1B3A5C] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1B3A5C] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8E2D9] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={lang === "en" ? `/en${link.href}` : link.href}
              className="text-[#2D2D2D] hover:text-[#C0442C] font-medium"
              onClick={() => setOpen(false)}
            >
              {lang === "en" ? link.labelEn : link.label}
            </Link>
          ))}
          <Link
            href={lang === "en" ? "/" : "/en"}
            className="text-sm font-semibold text-[#1B3A5C]"
            onClick={() => setOpen(false)}
          >
            {lang === "en" ? "Ver en Español" : "View in English"}
          </Link>
        </div>
      )}
    </header>
  );
}

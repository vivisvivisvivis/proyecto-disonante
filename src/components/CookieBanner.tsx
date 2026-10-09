"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  const t =
    lang === "en"
      ? {
          text: "We use cookies to improve your experience on this site.",
          accept: "Accept",
          decline: "Decline",
        }
      : {
          text: "Usamos cookies para mejorar tu experiencia en este sitio.",
          accept: "Aceptar",
          decline: "Rechazar",
        };

  return (
    <div
      role="dialog"
      aria-label={lang === "en" ? "Cookie consent" : "Consentimiento de cookies"}
      className="fixed bottom-0 inset-x-0 z-[99999] bg-[#EBD7BE] border-t border-[#D8C9B3]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <p
          className="text-sm text-[#4A4A4A] text-center sm:text-left"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {t.text}
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => dismiss("declined")}
            className="text-sm text-[#6B7280] hover:text-[#1B3A5C] font-medium transition-colors px-4 py-2 rounded border border-[#D8C9B3] hover:border-[#1B3A5C]"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {t.decline}
          </button>
          <button
            onClick={() => dismiss("accepted")}
            className="text-sm text-white bg-[#C0442C] hover:bg-[#a03824] font-semibold transition-colors px-6 py-2 rounded"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

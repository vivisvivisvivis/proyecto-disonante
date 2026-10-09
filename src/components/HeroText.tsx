"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" as const } },
};

const copy = {
  es: {
    watermark: "DISONANTE",
    label: "Deliberación · Evidencia · Pluralismo",
    h1: "Proyecto Disonante",
    subtitle: "Escuchar lo que nos cuesta oír",
    p: "Una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.",
  },
  en: {
    watermark: "DISONANTE",
    label: "Deliberation · Evidence · Pluralism",
    h1: "Proyecto Disonante",
    subtitle: "Listen to what is hard for us to hear",
    p: "A contribution to strengthen civic space through public deliberation, the use of evidence and pluralism.",
  },
};

export default function HeroText({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Watermark background word */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        aria-hidden
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center select-none pointer-events-none font-extrabold text-[#1B3A5C] leading-none"
        style={{
          fontSize: "clamp(4rem, 14vw, 11rem)",
          letterSpacing: "-0.05em",
          fontFamily: "var(--font-jakarta)",
          zIndex: 0,
        }}
      >
        {t.watermark}
      </motion.span>

      <motion.div
        className="flex flex-col items-center gap-7 relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={item} className="label text-[#C0442C]">
          {t.label}
        </motion.span>

        <motion.h1
          variants={item}
          className="text-center max-w-3xl"
        >
          {t.h1}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-2xl md:text-3xl font-light text-center max-w-2xl"
          style={{ fontFamily: "var(--font-source)", color: "#2D2D2D", letterSpacing: "-0.01em" }}
        >
          {t.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg md:text-xl max-w-2xl text-center"
          style={{ fontFamily: "var(--font-source)", color: "#5A6A7A", lineHeight: 1.75 }}
        >
          {t.p}
        </motion.p>
      </motion.div>
    </div>
  );
}

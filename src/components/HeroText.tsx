"use client";

import { motion } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroText({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  return (
    <div className="flex flex-col items-center gap-6">
      <span className="label text-rust">{t.label}</span>
      {/* The headline is not animated: it is the largest element on first paint (LCP). */}
      <h1 className="text-center max-w-4xl" style={{ fontSize: "clamp(3rem, 7.5vw, 6rem)", lineHeight: 0.95 }}>
        {t.h1}
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

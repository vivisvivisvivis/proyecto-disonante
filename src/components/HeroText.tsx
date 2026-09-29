"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function HeroText() {
  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        variants={item}
        className="text-[#C0442C] text-sm font-semibold uppercase tracking-widest"
      >
        Deliberación · Evidencia · Pluralismo
      </motion.span>

      <motion.h1
        variants={item}
        className="text-4xl md:text-6xl font-bold text-[#1B3A5C] leading-tight"
      >
        Escuchar lo que<br />nos cuesta oír
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg md:text-xl text-[#6B7280] max-w-2xl leading-relaxed"
      >
        Una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.
      </motion.p>
    </motion.div>
  );
}

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

export default function HeroText() {
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
        ESCUCHAR
      </motion.span>

      <motion.div
        className="flex flex-col items-center gap-7 relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={item} className="label text-[#C0442C]">
          Deliberación · Evidencia · Pluralismo
        </motion.span>

        <motion.h1
          variants={item}
          className="text-center max-w-3xl"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          Escuchar lo que<br />nos cuesta oír
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl max-w-2xl text-center"
          style={{ fontFamily: "var(--font-lora)", color: "#5A6A7A", lineHeight: 1.75 }}
        >
          Una contribución para fortalecer el espacio cívico a través de la deliberación
          pública, el uso de evidencia y el pluralismo.
        </motion.p>
      </motion.div>
    </div>
  );
}

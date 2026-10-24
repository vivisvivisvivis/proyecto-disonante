const copy = {
  es: {
    watermark: "ESCUCHAR",
    label: "Deliberación · Evidencia · Pluralismo",
    subtitle: "Escuchar lo que nos cuesta oír",
    p: "Proyecto Disonante es una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.",
  },
  en: {
    watermark: "LISTEN",
    label: "Deliberation · Evidence · Pluralism",
    subtitle: "Listen to what is hard for us to hear",
    p: "Proyecto Disonante is a contribution to strengthen civic space through public deliberation, the use of evidence and pluralism.",
  },
};

export default function HeroText({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="label text-rust">{t.label}</span>
      {/* The background word sits behind the title only, never behind the motto below it */}
      <div className="relative w-full flex justify-center">
        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap text-navy leading-none"
          style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(4.5rem, 19vw, 15rem)", opacity: 0.045 }}
        >
          {t.watermark}
        </span>
        <h1 className="relative text-center" style={{ fontSize: "clamp(2.5rem, 11vw, 8.5rem)", lineHeight: 0.9 }}>
          Proyecto Disonante
        </h1>
      </div>
      <p
        className="text-center text-navy font-semibold text-balance"
        style={{ fontFamily: "var(--font-jakarta)", fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)", lineHeight: 1.3 }}
      >
        {t.subtitle}
      </p>
      <p className="mt-2 text-lg max-w-2xl text-center text-pretty" style={{ lineHeight: 1.7 }}>
        {t.p}
      </p>
    </div>
  );
}

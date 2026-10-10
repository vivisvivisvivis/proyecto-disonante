const copy = {
  es: {
    label: "Deliberación · Evidencia · Pluralismo",
    subtitle: "Escuchar lo que nos cuesta oír",
    p: "Proyecto Disonante es una contribución para fortalecer el espacio cívico a través de la deliberación pública, el uso de evidencia y el pluralismo.",
  },
  en: {
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
      <h1 className="text-center" style={{ fontSize: "clamp(2.5rem, 11vw, 8.5rem)", lineHeight: 0.9 }}>
        Proyecto Disonante
      </h1>
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

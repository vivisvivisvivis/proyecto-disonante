const clients = [
  "National Democratic Institute",
  "Minerva University",
  "Alianza Regional por la Libre Expresión e Información",
  "CEPAL / Uruguay",
  "National Democratic Institute",
  "Minerva University",
  "Alianza Regional por la Libre Expresión e Información",
  "CEPAL / Uruguay",
];

export default function ClientMarquee() {
  return (
    <section className="bg-white border-y border-[#E8E2D9] py-8 overflow-hidden">
      <div className="mb-5 text-center">
        <p className="label text-[#6B7280]">Trabajamos con</p>
      </div>
      <div className="flex overflow-hidden">
        <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
          {clients.map((c, i) => (
            <span
              key={i}
              className="text-[#1B3A5C] font-semibold text-sm flex-shrink-0 flex items-center gap-16"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              {c}
              <span className="w-1.5 h-1.5 rounded-full bg-[#C0442C] inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

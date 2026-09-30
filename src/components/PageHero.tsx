import Reveal from "@/components/Reveal";
import GeometricAccent from "@/components/GeometricAccent";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-[#FAF7F2] pt-24 pb-20 px-6 overflow-hidden border-b border-[#E8E2D9]">
      <div className="absolute -top-10 -right-16 pointer-events-none">
        <GeometricAccent size={400} opacity={0.05} color="#1B3A5C" />
      </div>
      <div className="absolute -bottom-16 -left-16 pointer-events-none rotate-180">
        <GeometricAccent size={260} opacity={0.04} color="#C0442C" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <span className="label text-[#C0442C]">{label}</span>
          <h1 className="mt-4 max-w-3xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "#5A6A7A", fontFamily: "var(--font-lora)" }}>
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

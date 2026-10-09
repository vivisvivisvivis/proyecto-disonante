import KineticText from "@/components/motion/KineticText";
import ButtonLink from "@/components/ButtonLink";
import { localHref } from "@/lib/nav";

const copy = {
  es: {
    word: "Hablemos",
    p: "Nos interesa conocer tus inquietudes y propuestas.",
    primary: "Escribir al equipo",
    secondary: "Conocer al equipo",
  },
  en: {
    word: "Let's talk",
    p: "We are interested in hearing your concerns and proposals.",
    primary: "Write to the team",
    secondary: "Meet the team",
  },
};

/** Closing call to action shared by every page. */
export default function CtaBand({ lang = "es", secondary = true }: { lang?: "es" | "en"; secondary?: boolean }) {
  const t = copy[lang];
  return (
    <section className="bg-navy-deep px-6 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[72rem] mx-auto flex flex-col gap-10">
        <KineticText text={t.word} as="h2" play="view" seed={4} spread={70} className="cta-word text-cream" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-lg text-xl leading-relaxed text-blue-100">{t.p}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href={localHref(lang, "/contacto")}>{t.primary}</ButtonLink>
            {secondary && (
              <ButtonLink href={localHref(lang, "/quienes-somos")} variant="light">
                {t.secondary}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

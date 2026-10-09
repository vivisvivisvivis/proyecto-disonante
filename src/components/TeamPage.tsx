import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import KineticText from "@/components/motion/KineticText";

interface Person {
  name: string;
  initials: string;
  role: string;
  place: string;
  bio: string; // HTML allowed for <em>
  more: string[];
  listTitle: string;
  list: { text: string; detail?: string }[];
  tagsTitle: string;
  tags: string[];
}

const copy: Record<"es" | "en", {
  label: string; title: string; description: string; readMore: string; hide: string;
  people: Person[]; networkLabel: string; networkTitle: string; networkP1: string; networkP2: string;
}> = {
  es: {
    label: "Nosotros",
    title: "Quiénes somos",
    description: "Proyecto Disonante está liderado por Carolina Fernández Blanco y Hernán Charosky.",
    readMore: "Leer biografía completa",
    hide: "Ocultar",
    people: [
      {
        name: "Carolina Fernández Blanco",
        initials: "CF",
        role: "Doctora en Derecho · Abogada",
        place: "España",
        bio: "Carolina es Doctora en Derecho por la Universitat de Girona, abogada por la Universidad de Buenos Aires y magíster en Derecho (LL. M.) por Columbia University (Nueva York). Su trabajo se centra en la calidad legislativa, la deliberación y el Estado de derecho. Ha dictado cursos y formaciones sobre legislación racional, deliberación parlamentaria y políticas públicas basadas en evidencia para legisladores y funcionarios de distintos países de América Latina. Actualmente integra los proyectos de investigación <em>Sesgos en la producción y aplicación del derecho</em> y <em>Epistemología social y Derecho</em>.",
        more: [
          "Es investigadora de la Cátedra de Cultura Jurídica de la Universitat de Girona, donde fue investigadora postdoctoral y coordinó el Máster oficial en Derecho de Daños entre 2021 y 2026. Tiene una amplia experiencia docente en la Universidad de Buenos Aires y en la Universitat de Girona, y actualmente enseña en el Máster en Derecho de Daños, en el Máster en Fundamentos de la Responsabilidad Civil y en el Master in Global Rule of Law & Constitutional Democracy (Génova y Girona).",
          "Ejerció la abogacía en Buenos Aires y trabajó en organizaciones de derechos humanos. Actúa también como consultora jurídica y litigante ante el Sistema Interamericano y el Tribunal Europeo de Derechos Humanos.",
        ],
        listTitle: "Libros",
        list: [
          { text: "Eficacia, efectividad y entramado normativo", detail: "Marcial Pons, 2026" },
          { text: "Derecho y Desarrollo. Una visión desde América Latina y el Caribe" },
          { text: "La Seguridad Jurídica para el Desarrollo Humano: desafíos en Iberoamérica", detail: "coautora · Marcial Pons, 2025" },
          { text: "Errores en la creación y aplicación del derecho", detail: "coeditora con F. Carbonell · Marcial Pons, 2026" },
          { text: "Derecho y Pobreza", detail: "coeditora con E. Pereira Fredes · 2021" },
          { text: "Seguridad jurídica, pobreza y corrupción", detail: "coeditora con J. Ferrer · 2018" },
          { text: "Seguridad jurídica y democracia en Iberoamérica", detail: "coeditora con J. Ferrer y C. Cruz · 2015" },
        ],
        tagsTitle: "Revistas",
        tags: [
          "European Law Journal",
          "International Journal for the Semiotics of Law",
          "Doxa",
          "Isonomía",
          "Analisi e Diritto",
          "Diritto & Questioni Pubbliche",
          "Revista Catalana de Derecho Público",
        ],
      },
      {
        name: "Hernán Charosky",
        initials: "HC",
        role: "Abogado y sociólogo",
        place: "Argentina",
        bio: "Hernán es sociólogo y abogado por la Universidad de Buenos Aires y máster en Políticas Públicas por George Washington University, donde fue Fulbright Fellow y Global Leaders Fellow. Desde el inicio de su carrera promueve la participación y la deliberación como prácticas clave para la consolidación democrática, y en cada una de las posiciones que ocupó impulsó procesos de diálogo pluralista y participativo. Actualmente coordina el programa Dialogando Buenos Aires.",
        more: [
          "Fue director ejecutivo de Poder Ciudadano, capítulo local de Transparencia Internacional, consejero de la Oficina de Integridad del Banco Interamericano de Desarrollo y líder de la iniciativa Argentina Debate. Entre sus experiencias más relevantes, impulsó la discusión plural en la elaboración de la ley de Acceso a la Información Pública y del Código Electoral de la Ciudad de Buenos Aires, lideró la coalición de la sociedad civil que logró los primeros debates presidenciales de la Argentina en 2015 y promovió el uso del acceso a la información pública para el control del gasto en protección social por parte de sus propios beneficiarios.",
          "Es docente de la Universidad de Palermo y lo fue anteriormente de la Universidad Austral, la Universidad de San Andrés y la Universidad de Buenos Aires. Ha sido consultor en Centroamérica, Sudamérica y África en temas de transparencia, anticorrupción, cooperación multipartidaria y participación ciudadana para el Banco Interamericano de Desarrollo, el Banco Mundial, el Programa de las Naciones Unidas para el Desarrollo, el National Endowment for Democracy y el National Democratic Institute, entre otros.",
        ],
        listTitle: "",
        list: [],
        tagsTitle: "Organizaciones",
        tags: [
          "National Democratic Institute",
          "Banco Interamericano de Desarrollo",
          "Banco Mundial",
          "PNUD",
          "National Endowment for Democracy",
          "Poder Ciudadano",
          "Argentina Debate",
          "Dialogando Buenos Aires",
        ],
      },
    ],
    networkLabel: "Nuestra red",
    networkTitle: "Una red de profesionales para las más diversas realidades",
    networkP1:
      "A lo largo de nuestra experiencia hemos trabajado con profesionales de diversas áreas tales como abogados, comunicadores, sociólogos y politólogos, entre otros, en toda la región latinoamericana, Estados Unidos, África y Europa. Nuestra red cuenta con especialistas que han participado de todo tipo de escenarios políticos y sociales, facilitando talleres, diseñando y evaluando políticas e investigando en el ámbito académico.",
    networkP2:
      "Para cada proyecto y para cada intervención en el terreno, Proyecto Disonante cuenta con una red de profesionales preparados para las más diversas realidades.",
  },
  en: {
    label: "About us",
    title: "Who we are",
    description: "Proyecto Disonante is led by Carolina Fernández Blanco and Hernán Charosky.",
    readMore: "Read full biography",
    hide: "Hide",
    people: [
      {
        name: "Carolina Fernández Blanco",
        initials: "CF",
        role: "Doctor in Law · Lawyer",
        place: "Spain",
        bio: "Carolina holds a PhD from the Universitat de Girona, a law degree from the University of Buenos Aires, and an LL.M. from Columbia University (New York). Her work focuses on legislative quality, deliberation and the rule of law. She has taught courses and conducted training on rational legislation, parliamentary deliberation and evidence-based public policy for legislators and officials from various Latin American countries. She is currently a researcher at the Chair of Legal Culture at the Universitat de Girona and a member of the research projects <em>Biases in the production and application of law</em> and <em>Social Epistemology and Law</em>.",
        more: [
          "She was a postdoctoral researcher at the same institution and coordinated the official Master’s program in Tort Law between 2021 and 2026. She has extensive teaching experience at the University of Buenos Aires and the Universitat de Girona, and currently teaches in the Master’s in Tort Law, the Master’s in Foundations of Civil Liability, and the Master in Global Rule of Law & Constitutional Democracy (Genova and Girona).",
          "She practiced law in Buenos Aires and worked at human rights organizations. She also acts as a legal consultant and litigator before the Inter-American System and the European Court of Human Rights.",
        ],
        listTitle: "Books",
        list: [
          { text: "Eficacia, efectividad y entramado normativo", detail: "Marcial Pons, 2026" },
          { text: "Derecho y Desarrollo. Una visión desde América Latina y el Caribe" },
          { text: "La Seguridad Jurídica para el Desarrollo Humano: desafíos en Iberoamérica", detail: "co-author · Marcial Pons, 2025" },
          { text: "Errores en la creación y aplicación del derecho", detail: "co-editor with F. Carbonell · Marcial Pons, 2026" },
          { text: "Derecho y Pobreza", detail: "co-editor with E. Pereira Fredes · 2021" },
          { text: "Seguridad jurídica, pobreza y corrupción", detail: "co-editor with J. Ferrer · 2018" },
          { text: "Seguridad jurídica y democracia en Iberoamérica", detail: "co-editor with J. Ferrer and C. Cruz · 2015" },
        ],
        tagsTitle: "Journals",
        tags: [
          "European Law Journal",
          "International Journal for the Semiotics of Law",
          "Doxa",
          "Isonomía",
          "Analisi e Diritto",
          "Diritto & Questioni Pubbliche",
          "Revista Catalana de Derecho Público",
        ],
      },
      {
        name: "Hernán Charosky",
        initials: "HC",
        role: "Lawyer and sociologist",
        place: "Argentina",
        bio: "Hernán is a sociologist and lawyer (UBA), and holds a Master’s in Public Policy (George Washington University / Fulbright Fellow, Global Leaders Fellow). From the start of his career he has promoted participation and deliberation as key practices for democratic consolidation, and in each of the positions he held he led pluralist and participatory dialogue processes. He currently coordinates the Dialogando Buenos Aires program.",
        more: [
          "He was executive director of Poder Ciudadano (local chapter of Transparency International), advisor to the Integrity Office of the Inter-American Development Bank, and leader of the Argentina Debate initiative. Among his most relevant experiences, he promoted pluralist discussion in the drafting of the Freedom of Information Law and the Electoral Code of the City of Buenos Aires, led the civil society coalition that achieved Argentina’s first presidential debates in 2015, and promoted the use of public information access for the control of social protection spending by its own beneficiaries.",
          "He is a professor at the Universidad de Palermo and previously at Universidad Austral, Universidad de San Andrés and the University of Buenos Aires. He has been a consultant in Central and South America and Africa on transparency, anti-corruption, multiparty cooperation and citizen participation, for the Inter-American Development Bank, the World Bank, the United Nations Development Programme, the National Endowment for Democracy and the National Democratic Institute, among others.",
        ],
        listTitle: "",
        list: [],
        tagsTitle: "Organizations",
        tags: [
          "National Democratic Institute",
          "Inter-American Development Bank",
          "World Bank",
          "UNDP",
          "National Endowment for Democracy",
          "Poder Ciudadano",
          "Argentina Debate",
          "Dialogando Buenos Aires",
        ],
      },
    ],
    networkLabel: "Our network",
    networkTitle: "A network of professionals for the most diverse realities",
    networkP1:
      "Throughout our experience we have worked with professionals from various fields such as lawyers, communications specialists, sociologists and political scientists, among others, throughout the Latin American region, the United States, Africa and Europe. Our network includes specialists who have participated in all kinds of political and social scenarios, facilitating workshops, designing and evaluating policies and conducting academic research.",
    networkP2:
      "For each project and for each field intervention, Proyecto Disonante has a network of professionals prepared for the most diverse realities.",
  },
};

export default function TeamPage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];
  return (
    <>
      <Navbar lang={lang} />
      <main id="main">
        <PageHero label={t.label} title={t.title} description={t.description} />

        {t.people.map((p, i) => (
          <section key={p.name} className={`px-6 py-20 md:py-28 ${i % 2 ? "bg-cream" : "bg-sand"} border-b border-line`}>
            <div className="max-w-[72rem] mx-auto flex flex-col gap-12 md:gap-16">
              {/* The name is the portrait until real photos arrive. */}
              <div className="flex items-end gap-6 md:gap-10">
                <span
                  aria-hidden
                  className={`hidden sm:flex shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full items-center justify-center font-display text-4xl md:text-5xl ${
                    i % 2 ? "bg-navy text-cream" : "bg-terracotta text-white"
                  }`}
                >
                  {p.initials}
                </span>
                <div className="flex flex-col gap-3 min-w-0">
                  <p className="font-ui text-sm font-semibold text-rust">
                    {p.role} · {p.place}
                  </p>
                  <KineticText text={p.name} as="h2" play="view" seed={i + 2} spread={30} className="person-name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
                <div className="md:col-span-7 flex flex-col gap-5">
                  <p className="text-lg" style={{ lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: p.bio }} />
                  <details className="group">
                    <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden font-ui text-sm font-semibold text-rust link-underline w-fit">
                      <span className="group-open:hidden">{t.readMore}</span>
                      <span className="hidden group-open:inline">{t.hide}</span>
                    </summary>
                    <div className="mt-5 flex flex-col gap-5">
                      {p.more.map((m) => (
                        <p key={m.slice(0, 24)}>{m}</p>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="md:col-span-5 flex flex-col gap-10">
                  {p.list.length > 0 && (
                    <div className="flex flex-col gap-4">
                      <h3 className="text-base">{p.listTitle}</h3>
                      <ul className="border-t border-navy/20">
                        {p.list.map((b) => (
                          <li key={b.text} className="border-b border-navy/20 py-3 flex flex-col gap-0.5">
                            <em className="text-[0.9375rem] text-ink">{b.text}</em>
                            {b.detail && <span className="font-ui text-xs text-muted">{b.detail}</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-base">{p.tagsTitle}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <li key={tag} className="font-ui text-xs text-navy border border-navy/30 rounded px-3 py-1.5">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Network */}
        <section className="bg-navy px-6 py-24 md:py-32">
          <div className="max-w-[72rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5 flex flex-col gap-4">
              <p className="font-ui text-sm font-semibold text-blue-200">{t.networkLabel}</p>
              <h2 className="section-title text-cream">{t.networkTitle}</h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex flex-col gap-5 md:pt-10">
              <p className="text-lg text-blue-100" style={{ lineHeight: 1.75 }}>{t.networkP1}</p>
              <p className="text-lg text-blue-100" style={{ lineHeight: 1.75 }}>{t.networkP2}</p>
            </div>
          </div>
        </section>

        <CtaBand lang={lang} secondary={false} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

import { site } from "@/lib/site";

const ui = { fontFamily: "var(--font-jakarta)" };

// Replaces the contact form: a visible address people can write to.
// The email renders once it is set in lib/site.ts.
export default function ContactDetails({ lang = "es" }: { lang?: "es" | "en" }) {
  const en = lang === "en";
  return (
    <div className="bg-cream border border-line rounded-lg p-8 md:p-10 flex flex-col gap-6">
      <h2 className="text-3xl md:text-4xl">{en ? "Write to us" : "Escríbenos"}</h2>
      {site.email && (
        <div className="flex flex-col gap-2">
          <p className="label text-muted">{en ? "Email" : "Correo"}</p>
          <a
            href={`mailto:${site.email}`}
            className="text-lg md:text-xl font-semibold text-rust underline underline-offset-4 hover:no-underline break-all"
            style={ui}
          >
            {site.email}
          </a>
        </div>
      )}
      {site.social.linkedin && (
        <div className="flex flex-col gap-2">
          <p className="label text-muted">LinkedIn</p>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy underline underline-offset-4 hover:no-underline self-start"
            style={ui}
          >
            Proyecto Disonante {en ? "on LinkedIn" : "en LinkedIn"} <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </div>
  );
}

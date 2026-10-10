"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { site } from "@/lib/site";

const copy = {
  es: {
    name: "Nombre", namePlaceholder: "Ana Pérez",
    email: "Correo electrónico", emailPlaceholder: "ana@organizacion.org",
    organization: "Organización", organizationPlaceholder: "Institución, ONG, universidad…",
    message: "Mensaje", messagePlaceholder: "Cuéntanos qué situación quieres abordar…",
    required: "obligatorio",
    submit: "Enviar mensaje", sending: "Enviando…",
    successTitle: "Mensaje enviado",
    successBody: "Gracias por escribirnos. Te responderemos por correo.",
    invalid: "Revisa tu correo electrónico y escribe un mensaje antes de enviar.",
    failed: "No pudimos enviar el mensaje. Inténtalo de nuevo en unos minutos",
    failedEmail: " o escríbenos a",
  },
  en: {
    name: "Name", namePlaceholder: "Jane Smith",
    email: "Email", emailPlaceholder: "jane@organization.org",
    organization: "Organization", organizationPlaceholder: "Institution, NGO, university…",
    message: "Message", messagePlaceholder: "Tell us what situation you want to address…",
    required: "required",
    submit: "Send message", sending: "Sending…",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out. We'll reply by email.",
    invalid: "Check your email address and write a message before sending.",
    failed: "We couldn't send your message. Please try again in a few minutes",
    failedEmail: " or write to us at",
  },
};

const inputClass =
  "w-full px-5 py-3 rounded border-2 border-line bg-cream text-ink placeholder-muted focus:border-navy transition-colors text-base";

export default function ContactForm({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  const [state, action, pending] = useActionState<FormState, FormData>(submitContact, { status: "idle" });

  if (state.status === "success") {
    return (
      <div role="status" className="bg-cream border border-line rounded-lg p-10 text-center">
        <p className="text-navy font-semibold text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>
          {t.successTitle}
        </p>
        <p className="mt-2">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate={false}>
      <input type="hidden" name="lang" value={lang} />
      {/* Honeypot for bots: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="label text-muted block mb-2">{t.name}</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-org" className="label text-muted block mb-2">{t.organization}</label>
          <input id="cf-org" name="organization" type="text" autoComplete="organization" placeholder={t.organizationPlaceholder} className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-email" className="label text-muted block mb-2">
          {t.email} <span className="normal-case tracking-normal font-normal">({t.required})</span>
        </label>
        <input
          id="cf-email" name="email" type="email" required autoComplete="email" spellCheck={false}
          placeholder={t.emailPlaceholder} className={inputClass}
          aria-describedby={state.status === "error" ? "cf-error" : undefined}
        />
      </div>
      <div>
        <label htmlFor="cf-message" className="label text-muted block mb-2">
          {t.message} <span className="normal-case tracking-normal font-normal">({t.required})</span>
        </label>
        <textarea id="cf-message" name="message" required rows={6} placeholder={t.messagePlaceholder} className={`${inputClass} resize-y`} />
      </div>

      <p id="cf-error" aria-live="polite" className="text-sm text-rust font-semibold min-h-[1.25rem]" style={{ fontFamily: "var(--font-jakarta)" }}>
        {state.status === "error" &&
          (state.error === "invalid" ? (
            t.invalid
          ) : (
            <>
              {t.failed}
              {site.email ? (
                <>
                  {t.failedEmail} <a href={`mailto:${site.email}`} className="underline">{site.email}</a>
                </>
              ) : null}
              .
            </>
          ))}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-terracotta text-white px-9 py-3.5 rounded font-semibold text-sm hover:bg-terracotta-dark transition-colors disabled:opacity-60"
      >
        {pending ? t.sending : t.submit}
      </button>
    </form>
  );
}

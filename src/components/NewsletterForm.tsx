"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type FormState } from "@/app/actions";

const copy = {
  es: {
    label: "Correo electrónico", placeholder: "tu@correo.com", submit: "Suscribirme", sending: "Enviando…",
    success: "Listo. Te escribiremos cuando publiquemos novedades.",
    invalid: "Escribe un correo electrónico válido.",
    failed: "No pudimos registrar tu correo. Inténtalo de nuevo en unos minutos.",
  },
  en: {
    label: "Email", placeholder: "you@email.com", submit: "Subscribe", sending: "Sending…",
    success: "Done. We'll write when we publish news.",
    invalid: "Enter a valid email address.",
    failed: "We couldn't save your email. Please try again in a few minutes.",
  },
};

export default function NewsletterForm({ lang = "es", source = "web" }: { lang?: "es" | "en"; source?: string }) {
  const t = copy[lang];
  const [state, action, pending] = useActionState<FormState, FormData>(subscribeNewsletter, { status: "idle" });
  const id = `nl-email-${source}`;

  if (state.status === "success") {
    return (
      <p role="status" className="text-navy font-semibold" style={{ fontFamily: "var(--font-jakarta)" }}>
        {t.success}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-2 w-full">
      <input type="hidden" name="source" value={source} />
      <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor={id} className="sr-only">{t.label}</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id={id} name="email" type="email" required autoComplete="email" spellCheck={false}
          placeholder={t.placeholder}
          aria-describedby={`${id}-msg`}
          className="flex-1 min-w-0 px-5 py-3 rounded border-2 border-line bg-cream text-ink placeholder-muted focus:border-navy transition-colors text-base"
        />
        <button
          type="submit"
          disabled={pending}
          className="bg-terracotta text-white px-7 py-3 rounded font-semibold text-sm hover:bg-terracotta-dark transition-colors flex-shrink-0 disabled:opacity-60"
        >
          {pending ? t.sending : t.submit}
        </button>
      </div>
      <p id={`${id}-msg`} aria-live="polite" className="text-sm text-rust font-semibold min-h-[1.25rem]">
        {state.status === "error" && (state.error === "invalid" ? t.invalid : t.failed)}
      </p>
    </form>
  );
}

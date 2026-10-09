"use client";

import { useState } from "react";

// TODO: replace with the real Formspree form ID once Carolina confirms the destination email
const FORMSPREE_ID = "TODO_REPLACE_WITH_FORM_ID";

const copy = {
  es: {
    name: "Nombre", namePlaceholder: "Tu nombre",
    email: "Correo electrónico *", emailPlaceholder: "tu@correo.com",
    message: "Mensaje *", messagePlaceholder: "¿En qué podemos ayudarte?",
    submit: "Enviar mensaje", sending: "Enviando...",
    successTitle: "¡Gracias por escribirnos!",
    successBody: "Te responderemos a la brevedad.",
    error: "Hubo un error al enviar. Por favor, inténtalo de nuevo.",
  },
  en: {
    name: "Name", namePlaceholder: "Your name",
    email: "Email *", emailPlaceholder: "you@email.com",
    message: "Message *", messagePlaceholder: "How can we help you?",
    submit: "Send message", sending: "Sending...",
    successTitle: "Thanks for reaching out!",
    successBody: "We'll get back to you shortly.",
    error: "Something went wrong. Please try again.",
  },
};

export default function ContactForm({ lang = "es" }: { lang?: "es" | "en" }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t = copy[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#EBD7BE] border border-[#D8C9B3] rounded-lg p-10 text-center">
        <p className="text-[#1B3A5C] font-semibold text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>
          {t.successTitle}
        </p>
        <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-jakarta)" }}>
          {t.successBody}
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-5 py-3 rounded border-2 border-[#D8C9B3] bg-[#EBD7BE] text-[#2D2D2D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="label text-[#6B7280] block mb-2">{t.name}</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={t.namePlaceholder}
          className={inputClass}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      <div>
        <label className="label text-[#6B7280] block mb-2">{t.email}</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={t.emailPlaceholder}
          required
          className={inputClass}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      <div>
        <label className="label text-[#6B7280] block mb-2">{t.message}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={t.messagePlaceholder}
          required
          rows={6}
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600" style={{ fontFamily: "var(--font-jakarta)" }}>
          {t.error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start bg-[#1B3A5C] text-white px-9 py-3.5 rounded font-semibold text-sm hover:bg-[#152d47] transition-colors disabled:opacity-60"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}

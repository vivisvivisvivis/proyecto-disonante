"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="bg-[#FAF7F2] border border-[#E8E2D9] rounded-3xl p-10 text-center">
        <p className="text-[#1B3A5C] font-semibold text-lg" style={{ fontFamily: "var(--font-jakarta)" }}>
          ¡Gracias por escribirnos!
        </p>
        <p className="mt-2 text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-jakarta)" }}>
          Te responderemos a la brevedad.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-5 py-3 rounded-2xl border-2 border-[#E8E2D9] bg-white text-[#2D2D2D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="label text-[#6B7280] block mb-2">Nombre</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Tu nombre"
          className={inputClass}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      <div>
        <label className="label text-[#6B7280] block mb-2">Correo electrónico *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="tu@correo.com"
          required
          className={inputClass}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      <div>
        <label className="label text-[#6B7280] block mb-2">Mensaje *</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="¿En qué podemos ayudarte?"
          required
          rows={6}
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>
      <button
        type="submit"
        className="self-start bg-[#1B3A5C] text-white px-9 py-3.5 rounded-full font-semibold text-sm hover:bg-[#152d47] transition-colors"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        Enviar mensaje
      </button>
    </form>
  );
}

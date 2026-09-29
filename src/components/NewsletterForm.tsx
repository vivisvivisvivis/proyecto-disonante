"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Placeholder — wire to Mailchimp/Resend when ready
    setStatus("success");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@correo.com"
        required
        className="flex-1 px-5 py-3 rounded-full border-2 border-[#E8E2D9] bg-white text-[#2D2D2D] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1B3A5C] transition-colors text-sm"
        style={{ fontFamily: "var(--font-jakarta)" }}
      />
      <button
        type="submit"
        className="bg-[#1B3A5C] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#152d47] transition-colors flex-shrink-0"
        style={{ fontFamily: "var(--font-jakarta)" }}
      >
        {status === "success" ? "¡Listo!" : "Suscribirme"}
      </button>
    </form>
  );
}

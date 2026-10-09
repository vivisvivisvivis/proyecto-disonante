"use server";

// Form handlers for the contact and newsletter forms.
// Configure on Vercel: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL,
// and optionally RESEND_AUDIENCE_ID to also store newsletter subscribers in Resend.

export type FormState = { status: "idle" | "success" | "error"; error?: "invalid" | "config" | "send" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, max: number) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

async function sendEmail(subject: string, html: string, replyTo?: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return "config" as const;
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Proyecto Disonante <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return "send" as const;
  }
  return null;
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real people never fill the hidden "website" field.
  if (field(formData, "website", 200)) return { status: "success" };

  const name = field(formData, "name", 200);
  const email = field(formData, "email", 320);
  const organization = field(formData, "organization", 200);
  const message = field(formData, "message", 5000);
  const lang = field(formData, "lang", 2) === "en" ? "en" : "es";

  if (!EMAIL_RE.test(email) || message.length < 2) return { status: "error", error: "invalid" };

  const error = await sendEmail(
    `Nuevo mensaje web: ${name || email}${organization ? ` (${organization})` : ""}`,
    `<p><strong>Nombre:</strong> ${escapeHtml(name) || "(sin nombre)"}<br>
<strong>Correo:</strong> ${escapeHtml(email)}<br>
<strong>Organización:</strong> ${escapeHtml(organization) || "(no indicada)"}<br>
<strong>Idioma del sitio:</strong> ${lang}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    email,
  );
  return error ? { status: "error", error } : { status: "success" };
}

export async function subscribeNewsletter(_prev: FormState, formData: FormData): Promise<FormState> {
  if (field(formData, "website", 200)) return { status: "success" };

  const email = field(formData, "email", 320);
  const source = field(formData, "source", 60) || "web";
  if (!EMAIL_RE.test(email)) return { status: "error", error: "invalid" };

  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (key && audience) {
    const res = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
    if (!res.ok) console.error("Resend audience error", res.status, await res.text());
  }

  // The team is always notified, so no signup is lost even without an audience configured.
  const error = await sendEmail(
    `Nueva suscripción al newsletter: ${email}`,
    `<p>${escapeHtml(email)} se suscribió al newsletter desde: ${escapeHtml(source)}.</p>`,
  );
  return error ? { status: "error", error } : { status: "success" };
}

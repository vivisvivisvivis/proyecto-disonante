# Next steps: Proyecto Disonante
Updated: 2026-11-03. Production = `main` @ 6c440b5 on proyecto-disonante.vercel.app.
Working branch for the next round: `carolina-final` (branched from main).

## Done
- 2026-11-03: Carolina's Oct 23 list (33 points) + pre-launch fixes merged to `main` and deployed to production.
  - Privacy policy rewritten (no forms, no newsletter, no Resend). Legal pages use `LegalContact` (shows `site.email`, or links to /contacto while it's empty).
  - Services page named «¿Qué hacemos?» / "What we do" everywhere.
  - Carolina approved the proposal title (point 10) and the Girona description (point 26).

## Next up (in this order)
1. **Carolina's final changes**: she's sending them soon. Do them on `carolina-final`, deploy a PREVIEW, send her the link, merge + `vercel --prod` only with Dante's OK.
2. **Then the domain switch**: proyectodisonante.org still serves the OLD WordPress site. Add the domain in Vercel, give Dante the GoDaddy DNS records step by step (don't log into GoDaddy ourselves). Afterwards check the WordPress redirects (ES + english. subdomain).

## Blocked / needs Carolina
- Aviso legal (point 5): needs name / NIF / address. Skipped for launch on Dante's call.
- Public email: none for now (Dante's call). Setting it = one line in `src/lib/site.ts`; footer, contact page and legal pages pick it up.
- Hernán's links (point 22), 2025 newsletter (point 28), MYSU in partners (in her Oct 9 doc, not her Oct 23 list).
- English text missing for several activities (they show a "Spanish only" notice).
- Her Oct 9 Word doc has GoDaddy/webmail/Gmail passwords in plain text: never copy them; suggest she changes them.

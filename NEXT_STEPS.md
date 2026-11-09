# Next steps: Proyecto Disonante
Updated: 2026-11-09. Production = `main` @ 6c440b5 on proyecto-disonante.vercel.app.
Working branch for the next round: `carolina-final` (branched from main).

## Done
- 2026-11-09: Carolina's round 3 (`instrucciones-claude-web-disonante-ronda-3.md`, via WhatsApp) done on `carolina-final`, preview deployed, NOT merged/production:
  public email on, privacy names Hernán Charosky as data controller, Hernán label + 3 org links, books linked + reordered, journals reordered,
  MYSU in partners, report paragraph in «Financiamiento de la política» (EN: paragraph under the Spanish-only notice, links to the English report),
  services 4 → 3 lines (home, ¿Qué hacemos?, Contacto). Article links now styled (red, underlined).
- 2026-11-03: Carolina's Oct 23 list (33 points) + pre-launch fixes merged to `main` and deployed to production.
  - Privacy policy rewritten (no forms, no newsletter, no Resend). Legal pages use `LegalContact` (shows `site.email`, or links to /contacto while it's empty).
  - Services page named «¿Qué hacemos?» / "What we do" everywhere.
  - Carolina approved the proposal title (point 10) and the Girona description (point 26).

## Next up (in this order)
1. **Carolina reviews the round-3 preview.** Open questions for her: book 5 full title «…en Iberoamérica» (Marcial Pons confirms it, and lists the year as 2019, not 2018); bio sentences of Carolina and Hernán still PENDING. Then merge + `vercel --prod` only with Vivis's OK.
2. **Then the domain switch**: proyectodisonante.org still serves the OLD WordPress site. Add the domain in Vercel, give Dante the GoDaddy DNS records step by step (don't log into GoDaddy ourselves). Afterwards check the WordPress redirects (ES + english. subdomain).

## Blocked / needs Carolina
- Aviso legal (point 5): needs name / NIF / address. Skipped for launch on Dante's call.
- 2025 newsletter (point 28). Domain switch info: round-3 file had none, ask Vivis/Carolina.
- English text missing for several activities (they show a "Spanish only" notice).
- Her Oct 9 Word doc has GoDaddy/webmail/Gmail passwords in plain text: never copy them; suggest she changes them.

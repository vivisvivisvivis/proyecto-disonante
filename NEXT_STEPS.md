# Next steps: Proyecto Disonante
Updated: 2026-11-09. Production = `main` @ 6c440b5 on proyecto-disonante.vercel.app.
Working branch for the next round: `carolina-final` (branched from main).

## Done
- 2026-11-09: **DOMAIN LIVE.** proyectodisonante.org, www and english. point to Vercel (GoDaddy DNS edited by Vivis: A @ 216.198.79.1 + 64.29.17.1, CNAME www/english → cfcf135841d919f8.vercel-dns-017.com). Let's Encrypt cert issued (~55 min after the change). Old WP links (ES + english.) redirect correctly. Email records (MX/TXT, Microsoft 365 via GoDaddy) untouched and working.
- 2026-11-09: round 3 merged to `main` (85b2ee8) and deployed to production.
- 2026-11-09: Carolina's round 3 (`instrucciones-claude-web-disonante-ronda-3.md`, via WhatsApp) done on `carolina-final`, preview deployed, NOT merged/production:
  public email on, privacy names Hernán Charosky as data controller, Hernán label + 3 org links, books linked + reordered, journals reordered,
  MYSU in partners, report paragraph in «Financiamiento de la política» (EN: paragraph under the Spanish-only notice, links to the English report),
  services 4 → 3 lines (home, ¿Qué hacemos?, Contacto). Article links now styled (red, underlined).
- 2026-11-03: Carolina's Oct 23 list (33 points) + pre-launch fixes merged to `main` and deployed to production.
  - Privacy policy rewritten (no forms, no newsletter, no Resend). Legal pages use `LegalContact` (shows `site.email`, or links to /contacto while it's empty).
  - Services page named «¿Qué hacemos?» / "What we do" everywhere.
  - Carolina approved the proposal title (point 10) and the Girona description (point 26).

## Next up
1. Optional: make www redirect to proyectodisonante.org (today both serve the site; canonical tags already point to the main domain). Vercel → Settings → Domains → www → Redirect.
2. Optional: `www.english` CNAME in GoDaddy now points to english. → Vercel without a certificate. Delete it or add it to the Vercel project.
3. Old `_acme-challenge` CNAMEs (Cloudflare, from the WordPress hosting) are unused now; safe to delete later, not urgent.
4. Carolina: change GoDaddy, webmail and Gmail passwords (they're in plain text in her Word doc, and the GoDaddy one appeared in a Claude session). Cancel the old WordPress hosting only after a few days of checks.
5. Carolina still to confirm: book 5 full title «…en Iberoamérica» + year (Marcial Pons says 2019); PENDING bio sentences.

## Blocked / needs Carolina
- Aviso legal (point 5): needs name / NIF / address. Skipped for launch on Dante's call.
- 2025 newsletter (point 28). Domain switch info: round-3 file had none, ask Vivis/Carolina.
- English text missing for several activities (they show a "Spanish only" notice).
- Her Oct 9 Word doc has GoDaddy/webmail/Gmail passwords in plain text: never copy them; suggest she changes them.

@AGENTS.md

# Proyecto Disonante: website
Site for Proyecto Disonante, Carolina's civic-deliberation organisation (workshops, training, papers, talks against polarisation). Client: Carolina (Dante's mother; treat as a real client). Her law-practice site is a separate project.

**Read first:** `NEXT_STEPS.md`. Brief and strategy: `../../00_brief.md`, `../../02_strategy/`.

## Stack
- Next.js 16 (read `AGENTS.md`: breaking changes, check `node_modules/next/dist/docs/`), Tailwind v4, framer-motion, lenis. Sanity studio in `studio/` (not in use yet). Vercel.
- Content: articles in `lib/articles.ts` (`section` = activity or blog). Activities `/actividades/[slug]`, blog `/blog/[slug]`, shared `ArticleView.tsx`. Old WordPress URLs redirect in `next.config.ts`.
- Spanish + English (`/en/...`), hreflang on every page.

## Design (Carolina approved, don't drift)
- Sober. Accent = logo red #C54130. Headings Bebas Neue (uppercase, matches the logo), body Source Sans 3. No fade-in reveals (she rejected them).
- Menu: ¿Qué hacemos? / Quiénes somos / Actividades realizadas / Blog / Contáctanos. Services page = «¿Qué hacemos?» / "What we do".
- No contact forms or newsletter (removed on her request). Public email: proyectodisonante@gmail.com (`lib/site.ts`). Data controller in the privacy policy: Hernán Charosky.

## Git and deploy
- `main` = production (proyecto-disonante.vercel.app). Work on a branch, send Carolina the **preview** link, merge + `vercel --prod` only with Dante's OK.
- Her docs sometimes contain passwords: never copy them into files.

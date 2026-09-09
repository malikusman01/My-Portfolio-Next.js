# Usman Ali Awan — Portfolio

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> **Security note:** this project was originally scaffolded on Next.js 14.2.5, which had a critical RCE (CVE-2025-66478) and several other high-severity issues patched only in later releases. Next 14 is now fully end-of-life, so the project has been upgraded to Next.js 16.3.4 / React 19 — the current maintained line — rather than a dead branch. If `npm audit` still shows anything after `npm install`, run `npm audit fix` first; most remaining flags are low-severity devDependencies.
>
> First time running `npm run lint` on Next 16 / ESLint 9 may prompt you to generate an ESLint config interactively — accept the defaults (flat config) if asked.

## Phase 1 — what's built

- Design system: colors, type scale (Space Grotesk + Inter), spacing, in `tailwind.config.ts` / `app/globals.css`
- Navigation (desktop + accessible mobile menu, active states, resume CTA)
- Footer
- Hero section with the architecture-flow visual (System: User → Interface → API → Business Logic → Database → Infrastructure)
- Credibility strip
- Information architecture scaffolded as real routes, each with a real empty state (not fake content):
  - `/work` — Selected Systems index + `/work/[slug]` case study template
  - `/lab` — Engineering Lab
  - `/writing` — Articles + a dedicated Research section for your planned paper
  - `/about` — real experience timeline pulled from your CV
  - `/contact` — email, LinkedIn, GitHub (placeholder — add your real GitHub URL in `components/navigation/Navigation.tsx`, `components/layout/Footer.tsx`, `components/hero/Hero.tsx`, and `app/contact/page.tsx`)

## Adding real content later

- **Projects**: add entries to `data/projects.ts`. Each project automatically gets a card on `/work` and a case-study page at `/work/[slug]`.
- **Writing**: add entries to `data/writing.ts`. Set `type: "article"` or `type: "research-paper"` — they render in separate sections on `/writing`.
- **Experience**: `data/experience.ts` already reflects your real CV.

## Still open

- Real GitHub profile URL (currently a placeholder `#` in a few components)
- Actual project case studies for Work
- Phase 2: Engineering Philosophy, Engineering Stack, full About narrative refinement
- Phase 3: real case studies, Engineering Lab entries
- Phase 4: responsive polish pass, accessibility audit, performance, SEO extras (sitemap, structured data)

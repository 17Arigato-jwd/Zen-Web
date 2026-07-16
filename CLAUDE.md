# Project Overview

This repository contains the public marketing website for **Zen Enterprises**, a social enterprise promoting inclusive, low-investment entrepreneurship for women and rural households.

- **Purpose:** Communicate Zen's mission, vision, "Identify → Train → Launch → Market → Scale" model, and six business-opportunity categories — and convert visitors (aspiring entrepreneurs, mentors, investors, CSR partners, institutions) into contact-form inquiries.
- **Architecture:** Single Next.js application, statically exported and hosted on **GitHub Pages** (already enabled in repo settings). No monorepo, no user accounts, no database, no server — GitHub Pages only serves static files, so nothing in this app may depend on a Node server or API route at runtime.
- **Design system:** See `app/CLAUDE.md` for the visual/aesthetic rules ("Organic Glass" — earthy tones + glassmorphism). Read it before building any UI.

# Technology Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for theming (defined in `app/CLAUDE.md`)
- **Fonts:** `next/font/google` — self-hosted, no external font-loading flash
- **Forms:** Contact form submits client-side directly to **Formspree** (`https://formspree.io/f/{form_id}`) via `fetch`. No API route, no backend — this must work as a static site with zero server. Formspree ID is stored in `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` (never committed) and read via `process.env`.
- **Deployment:** GitHub Actions → GitHub Pages (static export). See "Deployment & Static Export" below and `.github/workflows/deploy.yml`.
- **Explicitly out of scope:** authentication, database, CMS, any server-rendered route. Do not add these unless asked.

# Site Structure

```
app/
  page.tsx               → Home (About, Vision, Mission, Zen Model, 2030 goals)
  products/page.tsx      → Product Showcase (6 categories + Zen Solutions)
  contact/page.tsx       → Contact + inquiry form (client-side Formspree submit)
  CLAUDE.md               → design system rules (read before touching any UI)
components/
  Nav.tsx, Footer.tsx, GlassCard.tsx, SectionHeading.tsx,
  CategoryCard.tsx, StatCounter.tsx
content/
  zen-content.ts          → single source of truth for all copy (sourced from CONTENT.md)
public/
  images/                 → logo + real photography, once supplied (see "Image & Asset Handling")
CONTENT.md                 → raw copy inventory — read this before writing zen-content.ts
.github/workflows/
  deploy.yml              → builds, deploys to Pages, and cuts a downloadable release
```

**Content lives in `content/zen-content.ts`, never hardcoded inline in JSX.** This keeps copy editable without touching layout/design code, and keeps the AI from paraphrasing or inventing claims when it builds pages. `zen-content.ts` should be a direct, typed transcription of `CONTENT.md` — not a rewrite.

# System Commands & Workflow

- `pnpm install` — install dependencies
- `pnpm dev` — start local dev server
- `pnpm lint` — check style/formatting before any commit
- `pnpm build` — production build

# Deployment & Static Export (GitHub Pages)

GitHub Pages serves static files only — no Node server, no API routes, no image optimization server. `next.config.ts` must be configured for static export:

```ts
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isCI = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },        // no Image Optimization API on static hosting
  basePath: isCI ? `/${repo}` : '',      // project pages are served at /<repo-name>/
  assetPrefix: isCI ? `/${repo}/` : '',
  trailingSlash: true,
};

export default nextConfig;
```

The `.github/workflows/deploy.yml` workflow (already included in this repo) does three things on every push to `main`:

1. **Build** — installs deps, runs `pnpm build` (static export to `out/`), adds a `.nojekyll` file so GitHub Pages doesn't mangle Next's `_next/` asset folder.
2. **Deploy** — publishes `out/` to GitHub Pages using the official `actions/deploy-pages` action.
3. **Release** — zips the contents of `out/` and publishes it as a GitHub Release asset (tagged by run number), so anyone can download the zip, unzip it, and open `index.html` (or run `npx serve .` inside the folder) to view the finished site locally — no Node, no build step, no cloning the repo required.

Do not introduce anything that breaks static export: no `getServerSideProps`-equivalent behavior, no API routes, no middleware that requires a server.

# Global Engineering Constraints

- **Strict typing:** no `any`. Every prop and content shape gets an interface.
- **Components:** functional + hooks only, no class components.
- **SEO:** every page ships a tailored `<title>` and meta description — this is an awareness/lead-gen site, SEO matters more than on a typical app.
- **Images:** `next/image` only, always with descriptive alt text.
- **Accessibility:** WCAG AA minimum. Audience includes non-technical, rural users, often on low-end devices — accessibility and performance are not optional polish here.
- **Performance:** target Lighthouse 90+ on mobile. Avoid heavy animation/JS libraries.
- **Security:** never commit secrets or API keys. The contact-form email key lives only in Vercel environment variables.
- Do not create premature abstractions for hypothetical future features (e.g. no auth scaffolding "just in case").

# Image & Asset Handling

Two categories of images, handled differently:

1. **Decided brand assets (logo, and any specific photos already chosen).** These get dropped into `public/images/` by the client with a fixed, predictable filename (e.g. `public/images/logo.svg`, `public/images/hero-founder.jpg`) and referenced directly with `next/image`. Never invent, resize, or regenerate these — if a file isn't in `public/images/` yet, treat its slot as a placeholder (below) rather than skipping it or improvising a substitute.

2. **Everything else (category photography, decorative/lifestyle shots not yet sourced).** Use real placeholder **images**, not colored `<div>` blocks or icon substitutes, so the layout, aspect ratios, and `next/image` usage are already correct when real photos are swapped in later. Use on-brand placeholder URLs from placehold.co, sized and labeled per slot:

   ```
   https://placehold.co/800x600/5F7A52/F6F1E4?text=Millet+Foods
   https://placehold.co/1200x800/C1682F/F6F1E4?text=Hero+Image
   ```

   - Colors drawn from the design-system tokens (`5F7A52` sage, `C1682F` terracotta, `D9A441` gold) so placeholders don't clash with the palette while building.
   - Text label describes *what real photo belongs there* (e.g. "Millet Foods", "Herbal Soaps", "Founder Portrait") so a non-technical reviewer can see exactly what to shoot/source.
   - Every placeholder still goes through `next/image` with real `width`/`height`/`alt`, exactly as a final photo would — swapping later is a one-line `src` change, not a rebuild.
   - Keep a running list of placeholder slots (what they are, where they live) in `CONTENT.md` under "Images Needed" so nothing gets lost before launch.

# Content Source of Truth

All copy must stay faithful to the original Zen Enterprises content — see **`CONTENT.md`** at the repo root for the full, structured copy inventory (About, Vision, Mission, Zen Model, 2030 goals, the six product/business categories, Zen Solutions, "Why Choose Zen," "Join the Journey," and contact details). `content/zen-content.ts` should be a direct typed transcription of `CONTENT.md`. Do not invent new statistics, claims, or categories — ask before adding anything not already there.

# Project Overview

This repository contains the public marketing website for **Zen Enterprises**, a social enterprise promoting inclusive, low-investment entrepreneurship for women and rural households.

- **Purpose:** Communicate Zen's mission, vision, "Identify → Train → Launch → Market → Scale" model, and six business-opportunity categories — and convert visitors (aspiring entrepreneurs, mentors, investors, CSR partners, institutions) into contact-form inquiries.
- **Architecture:** Single Next.js application. No monorepo, no user accounts, no database. Content-driven marketing site with one lightweight serverless function for the contact form.
- **Design system:** See `app/CLAUDE.md` for the visual/aesthetic rules ("Organic Glass" — earthy tones + glassmorphism). Read it before building any UI.

# Technology Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables for theming (defined in `app/CLAUDE.md`)
- **Fonts:** `next/font/google` — self-hosted, no external font-loading flash
- **Forms:** Contact form posts to a Route Handler (`app/api/contact/route.ts`) that sends email via Resend. No database — form submissions are emailed, not stored.
- **Deployment:** Vercel via GitHub CI
- **Explicitly out of scope:** authentication, database, CMS. Do not add these unless asked.

# Site Structure

```
app/
  page.tsx               → Home (About, Vision, Mission, Zen Model, 2030 goals)
  products/page.tsx      → Product Showcase (6 categories + Zen Solutions)
  contact/page.tsx       → Contact + inquiry form
  api/contact/route.ts   → form submission handler
  CLAUDE.md               → design system rules (read before touching any UI)
components/
  Nav.tsx, Footer.tsx, GlassCard.tsx, SectionHeading.tsx,
  CategoryCard.tsx, StatCounter.tsx
content/
  zen-content.ts          → single source of truth for all copy
```

**Content lives in `content/zen-content.ts`, never hardcoded inline in JSX.** This keeps copy editable without touching layout/design code, and keeps the AI from paraphrasing or inventing claims when it builds pages.

# System Commands & Workflow

- `pnpm install` — install dependencies
- `pnpm dev` — start local dev server
- `pnpm lint` — check style/formatting before any commit
- `pnpm build` — production build

# Global Engineering Constraints

- **Strict typing:** no `any`. Every prop and content shape gets an interface.
- **Components:** functional + hooks only, no class components.
- **SEO:** every page ships a tailored `<title>` and meta description — this is an awareness/lead-gen site, SEO matters more than on a typical app.
- **Images:** `next/image` only, always with descriptive alt text.
- **Accessibility:** WCAG AA minimum. Audience includes non-technical, rural users, often on low-end devices — accessibility and performance are not optional polish here.
- **Performance:** target Lighthouse 90+ on mobile. Avoid heavy animation/JS libraries.
- **Security:** never commit secrets or API keys. The contact-form email key lives only in Vercel environment variables.
- Do not create premature abstractions for hypothetical future features (e.g. no auth scaffolding "just in case").

# Content Source of Truth

All copy must stay faithful to the original Zen Enterprises content (About, Vision, Mission, Zen Model, 2030 goals, the six product/business categories, Zen Solutions, "Why Choose Zen," "Join the Journey," and contact details). Do not invent new statistics, claims, or categories — ask before adding anything not already in `content/zen-content.ts`.

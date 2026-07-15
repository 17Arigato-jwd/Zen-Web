# Frontend Design System — "Organic Glass"

Place this file at `app/CLAUDE.md` so Claude Code auto-loads it whenever it's editing UI.

**The concept:** a hybrid aesthetic. Earthy, warm, natural color and material language — rooted in Zen's agri/green/handmade identity — expressed through soft glassmorphic surfaces: frosted panels floating over a living, organic gradient background. Not heavy neubrutalist hard shadows. Not sterile corporate glass-on-white.

## 1. Typography

- **Headings:** `Fraunces` — a warm, slightly organic variable serif. Use its optical-size and weight range for character, not just one static weight.
- **Body:** `Manrope` — humanist sans, a distinctive alternative to Inter/Roboto.
- Load both via `next/font/google`.
- **Scale:** aggressive contrast. h1 at least 3x the body size, weight 600–700. Body weight 400–500. Avoid timid 1.2–1.5x scale jumps between heading levels.

## 2. Color Tokens (CSS variables — always use these, never Tailwind's default palette for brand elements)

```css
--bg-base: #F6F1E4;              /* warm cream, never pure white */
--text-main: #241C12;            /* deep espresso brown, not pure black */
--accent-sage: #5F7A52;          /* moss green — primary accent */
--accent-terracotta: #C1682F;    /* clay orange — secondary accent */
--accent-gold: #D9A441;          /* turmeric gold — sparing highlight only */
--glass-surface: rgba(255,255,255,0.14);
--glass-surface-strong: rgba(255,255,255,0.22);
--glass-border: rgba(255,255,255,0.35);
```

## 3. Backgrounds — "the living layer"

Every section sits on a soft organic gradient (moss green → cream → terracotta) plus 1–2 large, heavily blurred blob shapes at low opacity, suggesting leaves, soil, or sunlight. **This layer is required** — without it, the glass panels on top have nothing to refract and the effect disappears.

```
bg-gradient-to-br from-[#5F7A52]/20 via-[#F6F1E4] to-[#C1682F]/15
```

## 4. Glass Surfaces (cards, nav bar, form panels)

```
bg-[var(--glass-surface)] backdrop-blur-lg border border-[var(--glass-border)]
rounded-3xl shadow-[0_8px_32px_rgba(95,122,82,0.15)]
```

- Hover/focus: shift to `bg-[var(--glass-surface-strong)]`, transition.
- Corners: generous — `rounded-2xl` to `rounded-3xl`. Soft and organic, not sharp, not fully pill-shaped.

## 5. Spacing & Layout

- 8px baseline grid (`p-2`, `p-4`, `p-8`, `p-16`).
- The six product categories should NOT be a predictable symmetrical 3-column grid — vary card sizes and offsets for an asymmetric, hand-arranged feel.
- Generous whitespace between sections (`py-24`+ on desktop).

## 6. Motion

- CSS-only. One well-orchestrated staggered reveal per page load (`animation-delay` on section children) rather than scattered micro-interactions.
- Subtle hover lift on glass cards: `hover:-translate-y-1 transition-transform`.

## 7. Components & Accessibility

- Buttons: minimum 44px height, visible `:focus-visible` ring in `--accent-sage`.
- Use semantic HTML (`<article>`, `<section>`, `<nav>`, `<aside>`) over generic `<div>`.
- Check WCAG AA contrast for any text placed over the gradient/blob layer directly — prefer `--text-main` on `--bg-base` zones for body copy, reserve gradient zones for hero/section headers with tested contrast.

## 8. Negative Constraints — Do NOT

- Do NOT use Inter, Roboto, Arial, or system default fonts.
- Do NOT use purple/indigo gradients — this is a green/terracotta/gold palette.
- Do NOT use pure white (`#FFFFFF`) backgrounds or pure black (`#000000`) text.
- Do NOT use hard, zero-blur offset shadows — that's neubrutalism, a different system.
- Do NOT default to a generic "three icon boxes in a row" feature grid.
- Do NOT place glass panels on a flat solid-color background — the organic gradient/blob layer underneath is required.

## 9. Aesthetic Directive (append to prompts if output starts drifting generic)

```xml
<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. Avoid this for
Zen Enterprises — the site should feel warm, hand-crafted, and rooted in soil
and sunlight, not corporate SaaS. Commit fully to the Organic Glass palette
and Fraunces/Manrope typography above. Vary card shapes and section rhythm
page to page rather than repeating one card template everywhere. Prioritize
one well-orchestrated staggered reveal on load over scattered micro-animations.
</frontend_aesthetics>
```

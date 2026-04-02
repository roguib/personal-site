# Cupertino Redesign — Implementation Plan

## Source Designs (Stitch — "Personal site redesign" project)
- **Careers section** → "Cupertino Portfolio - Premium Linear Layout"
- **Projects section** → "Cupertino Portfolio - Typography Minimalist v5"
- Both designs share the same design system (tokens, fonts, effects)

## Design System Reference

**Colors (light mode):**
- Background: `#F5F5F7`
- Surface (glass): `rgba(255,255,255,0.65)`
- Text: `#1D1D1F`
- Subtext: `#86868B`
- Accent: `#0071E3`

**Colors (dark mode overrides):**
- Background: `#1C1C1E`
- Surface (glass): `rgba(44,44,46,0.65)`
- Text: `#F5F5F7`
- Subtext: `#8E8E93`

**Typography:** Inter (Google Fonts), `font-weight: 800`, `letter-spacing: -0.03em` for headings

**Radius:** `--apple-radius: 20px`, `--apple-radius-full: 9999px`

**Dark mode note:** Preserve dark mode support and apply the above dark tokens. Primary focus is light mode — don't over-engineer dark mode compatibility for every micro-detail.

---

## Prerequisites
- Load **Inter** from Google Fonts (add `<link>` in `Layout.astro`)
- No new npm dependencies required

---

## Phase 1 — Design Tokens & Global Styles
**Files:** `src/styles/global.css`, `src/layouts/Layout.astro`

### CSS custom properties
Add to `:root` (light mode defaults):
```css
--apple-bg: #F5F5F7;
--apple-surface: rgba(255, 255, 255, 0.65);
--apple-text: #1D1D1F;
--apple-subtext: #86868B;
--apple-accent: #0071E3;
--apple-radius: 20px;
--apple-radius-full: 9999px;
```

Add dark mode overrides via `[data-theme="dark"]` (or the existing theme mechanism):
```css
--apple-bg: #1C1C1E;
--apple-surface: rgba(44, 44, 46, 0.65);
--apple-text: #F5F5F7;
--apple-subtext: #8E8E93;
```

Replace the global font stack with `Inter, -apple-system, sans-serif`.

### Reveal animation utility
Add `.reveal` / `.reveal.visible` classes to `global.css`:
- Initial state: `opacity: 0; transform: translateY(10px) scale(0.98)`
- Visible state: `opacity: 1; transform: none`
- Transition: `0.8s cubic-bezier(0.16, 1, 0.3, 1)`

### Layout.astro changes
1. Add Google Fonts `<link>` for Inter (weights 400, 600, 800)
2. Add two fixed mesh gradient `<div>` layers behind `<slot />`:
   - Top-left: `radial-gradient(ellipse at 0% 0%, rgba(0,113,227,0.05), transparent 60%)` + `filter: blur(100px)`
   - Bottom-right: `radial-gradient(ellipse at 100% 100%, rgba(255,45,85,0.05), transparent 60%)` + `filter: blur(100px)`
3. Add inline `<script>` wiring `IntersectionObserver` to toggle `.visible` on all `.reveal` elements

---

## Phase 2 — Navigation (Centered Floating Pill)
**Files:** `src/components/Header/Header.jsx`, `src/components/Header/Header.css`

**Recommendation adopted:** Replace the current right-aligned flat nav with a **centered floating glassmorphic pill at the top**. A bottom dock looks great in mockups but feels disorienting on a portfolio — users expect top navigation. The centered pill delivers the premium Cupertino aesthetic while keeping the familiar position and preserving the existing scroll-tracking logic untouched.

### Visual spec
- `position: fixed; top: 24px; left: 50%; transform: translateX(-50%); z-index: 100`
- `backdrop-filter: blur(20px)`
- `background: rgba(255,255,255,0.7)` (light) / `rgba(44,44,46,0.7)` (dark)
- `border-radius: 9999px`
- Ghost border: `1px solid rgba(172,179,184,0.15)`
- Ambient shadow: `0 4px 6px rgba(0,0,0,0.02), 0 12px 30px rgba(0,0,0,0.04)`

### Nav items
- `padding: 8px 20px`, `font-size: 0.875rem`, no underline
- **Active state:** filled pill background `rgba(0,113,227,0.1)` + `color: #0071E3` (replaces current gold underline)
- **Hover:** `scale(1.05)`, `transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` (spring)
- ThemeButton stays inside the pill on the right side

### Logic
No changes to the `IntersectionObserver` / `scrollIntoView` scroll-tracking logic.

---

## Phase 3 — Hero Section
**Files:** `src/pages/index.astro`, `src/components/Profile/Profile.jsx`, `src/components/Profile/Profile.css`, `src/components/PersonalDescription/PersonalDescription.jsx`, `src/components/PersonalDescription/PersonalDescription.css`

### Layout
The existing two-column flex layout is kept. Both columns get `.reveal` for scroll-in animation.

### Profile card (`Profile.jsx`)
- Avatar: `width: 80px`, `border-radius: 50%`, ring: `box-shadow: 0 0 0 3px rgba(0,113,227,0.15)`
- Name: `font-size: 2rem`, `font-weight: 800`, `letter-spacing: -0.03em`, `color: var(--apple-text)`
- Role: "apple-label" pill — `background: rgba(0,0,0,0.05)`, `border-radius: 9999px`, `padding: 4px 12px`, `font-size: 0.7rem`, `text-transform: uppercase`, `font-weight: 600`
- Card wrapper: `background: var(--apple-surface)`, `backdrop-filter: blur(25px)`, `border-radius: var(--apple-radius)`, ambient shadow

### Bio (`PersonalDescription.jsx`)
- Body: `font-size: 1rem`, `line-height: 1.6`, `color: var(--apple-subtext)`
- Add a small uppercase apple-label above the paragraphs (e.g. "About")

### Editor (`editor.jsx` / `editor.css`)
- **No logic changes** — keep all interactive functionality
- Wrap in a glassmorphic card: `background: var(--apple-surface)`, `backdrop-filter: blur(25px)`, `border-radius: var(--apple-radius)`, ambient shadow

### index.astro
- Add `id="about"` to the hero container div (currently missing, needed for nav scroll-tracking)
- Add top padding to `web-content` to clear the fixed floating nav (`padding-top: 90px`)

---

## Phase 4 — Career Section (from "Premium Linear Layout")
**Files:** `src/components/JobHistory/JobHistory.jsx`, `src/components/JobHistory/JobHistory.css`

### Section title
`font-size: 2rem`, `font-weight: 800`, `letter-spacing: -0.03em`

### Layout change
Replace the current logo + `RowSeparator` pattern with a **vertical list of glassmorphic cards**:
- Container: `display: flex; flex-direction: column; gap: 1rem`
- Each card: `background: var(--apple-surface)`, `backdrop-filter: blur(25px)`, `border-radius: var(--apple-radius)`, `padding: 1.5rem 2rem`
- **No divider lines** between cards

### Card internals
- **Top row:** company logo (`40px`, rounded) + role title (`font-weight: 700`, `font-size: 1.1rem`) + date badge (apple-label pill, right-aligned)
- **Second row:** project name in `var(--apple-subtext)`, `font-size: 0.875rem`
- **Body:** description text, `font-size: 0.9rem`, `line-height: 1.6`, `color: var(--apple-subtext)`

### Animations
Each card gets `.reveal` with staggered `transition-delay: calc(index * 0.1s)`.

### Cleanup
Delete `RowSeparator/RowSeparator.jsx` and `RowSeparator/RowSeparator.css` — no longer needed.

---

## Phase 5 — Projects Section (from "Typography Minimalist v5")
**Files:** `src/components/Projects/Projects.jsx`, `src/components/Projects/Projects.css`, `src/components/ProjectCard/ProjectCard.jsx`, `src/components/ProjectCard/ProjectCard.css`

### Section title
Same typography as Career (`800` weight, `-0.03em` letter-spacing).

### ProjectCard redesign
- Card: `background: var(--apple-surface)`, `backdrop-filter: blur(25px)`, `border-radius: var(--apple-radius)`
- **Image:** full-width at top, `border-radius: var(--apple-radius) var(--apple-radius) 0 0`, `object-fit: cover`, `height: 180px`
- **Title:** `font-size: 1.5rem`, `font-weight: 800`, `letter-spacing: -0.02em`, `color: var(--apple-text)`
- **Description:** `font-size: 0.9rem`, `line-height: 1.6`, `color: var(--apple-subtext)`
- **Links:** ghost style — no background, `color: var(--apple-accent)`, arrow `→` that `translateX(4px)` on hover, `transition: 0.2s ease`
- No dividers inside the card; use `gap` for spacing

### Animations
Cards get `.reveal` with staggered `transition-delay`.

---

## Phase 6 — Lume Cursor Effect
**File:** `src/layouts/Layout.astro`

Add a single `<div id="lume">` — `position: fixed`, `pointer-events: none`, full viewport, `z-index: 0`:
```css
background: radial-gradient(
  600px circle at var(--lume-x, 50%) var(--lume-y, 50%),
  rgba(0, 113, 227, 0.05),
  transparent 40%
);
```

Inline `<script>` (5 lines) tracking `mousemove` and updating `--lume-x` / `--lume-y` on `document.documentElement`.

---

## Files Changed Summary

| File | Type of change |
|---|---|
| `src/styles/global.css` | New design tokens, Inter font, reveal animation |
| `src/layouts/Layout.astro` | Inter link, mesh gradient, Lume effect, reveal observer |
| `src/components/Header/Header.jsx` | Centered floating pill nav |
| `src/components/Header/Header.css` | Full restyle |
| `src/components/Profile/Profile.jsx` | Glassmorphic card, new typography |
| `src/components/Profile/Profile.css` | Full restyle |
| `src/components/PersonalDescription/PersonalDescription.jsx` | Apple-label, subtext style |
| `src/components/PersonalDescription/PersonalDescription.css` | Full restyle |
| `src/components/editor.css` | Glassmorphic wrapper (no logic change) |
| `src/components/JobHistory/JobHistory.jsx` | Card-per-job layout |
| `src/components/JobHistory/JobHistory.css` | Full restyle |
| `src/components/Projects/Projects.jsx` | Section title style |
| `src/components/Projects/Projects.css` | Minor update |
| `src/components/ProjectCard/ProjectCard.jsx` | Typography Minimalist card style |
| `src/components/ProjectCard/ProjectCard.css` | Full restyle |
| `src/components/Footer/Footer.jsx` | **New** — icon footer |
| `src/components/Footer/Footer.css` | **New** |
| `src/pages/index.astro` | Add `id="about"`, wire Footer, padding-top fix |
| `src/components/JobHistory/RowSeparator/` | **Delete** — no longer needed |

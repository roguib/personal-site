# Responsive Design Plan

## Overview

The site has two existing breakpoints: a mobile margin at `16px` (default) and a desktop margin at `5rem` (≥ 1025px). All major section layouts are two-column flex rows with no stacking behavior below 1025px, and the code editor uses fixed pixel widths down to a minimum of `450px` at ≤ 600px — wider than most phones.

This plan is organized into **phases**. Each phase must be reviewed and authorized before the next one begins.

---

## Breakpoints

| Name    | Range              |
|---------|--------------------|
| Mobile  | ≤ 640px            |
| Tablet  | 641px – 1024px     |
| Desktop | ≥ 1025px (existing)|

---

## Phase 1 — Global Spacing & Section Gaps

**Files:** `global.css`

### Problem
- `.section { margin-top: 6rem }` — 96px gap between sections is too large for short mobile viewports.
- `.web-content { padding-bottom: 80px }` — can be reduced on mobile.
- `.web-content { padding-top: 90px }` — can be slightly reduced on mobile since the mobile header trigger is smaller than the desktop pill.
- `.section-title { font-size: 2rem }` — too large on narrow screens.
- No intermediate horizontal margin between `16px` (mobile) and `5rem` (desktop).

### Changes

**Tablet (641px – 1024px)**
- `.page-root`: set horizontal margin to `2.5rem`.
- `.section`: reduce `margin-top` to `4rem`.

**Mobile (≤ 640px)**
- `.section`: reduce `margin-top` to `2.5rem`.
- `.web-content`: reduce `padding-top` to `72px`, reduce `padding-bottom` to `48px`.
- `.section-title`: scale `font-size` down to `1.5rem`.

---

> **Authorization checkpoint:** Review and approve Phase 1 before proceeding to Phase 2.

---

## Phase 2 — Header: Drawer Navigation on Mobile

**Files:** `Header.jsx`, `Header.css`

### Problem
The floating pill nav (`white-space: nowrap`, `position: fixed`) renders all four nav links, a divider, and the theme toggle in a single horizontal row. On most mobile viewports (320px–430px) the total rendered width of this pill exceeds the screen width, causing overflow. There is no breakpoint that adapts it.

A minimum fixed width approach is not viable: it would still break on very small screens and provide a poor experience.

### Solution: Drawer Navigation on Mobile

On mobile (≤ 640px), the pill is replaced by:
1. A **hamburger trigger button** — always visible, fixed to the viewport.
2. A **slide-in drawer** — opens from the left edge when the trigger is tapped.

All nav content moves into the drawer; nothing is removed.

#### Hamburger Trigger Button

- `position: fixed; top: 16px; left: 16px; z-index: 100`.
- Renders a hamburger icon (three horizontal lines).
- Glass-morphism style matching the existing pill: `background: rgba(255,255,255,0.72)`, `backdrop-filter: blur(20px)`, `border-radius: var(--apple-radius)`, `border: 1px solid var(--apple-border)`, same box-shadow.
- Tapping opens the drawer.

#### Drawer Panel

- `position: fixed; top: 0; left: 0; height: 100%; width: min(72vw, 280px); z-index: 200`.
- Glass-morphism surface: `background: var(--apple-surface)`, `backdrop-filter: blur(25px)`, `border-right: 1px solid var(--apple-border)`.
- Slides in from the left using a CSS transform: `translateX(-100%)` (closed) → `translateX(0)` (open), animated with `transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)`.

#### Drawer Contents (top to bottom)

1. **Header row**: a `<` back arrow button (left) and a "Menu" label beside it. Tapping the arrow closes the drawer.
2. **Nav items**: one row per section — "Home", "About", "Career", "Projects". Each row has a small icon on the left and the label text. The active section receives the same `.item-selected` highlight (accent background tint) as the desktop pill. Tapping an item scrolls to that section and closes the drawer.
3. **Divider**: a horizontal rule separating nav items from the theme toggle.
4. **Theme toggle**: the existing `ThemeButton` component placed at the bottom of the drawer, so the user can still switch themes on mobile.

#### Backdrop

- A semi-transparent overlay (`position: fixed; inset: 0; background: rgba(0,0,0,0.3); z-index: 199`) rendered when the drawer is open.
- Tapping the backdrop closes the drawer.

#### Active Section Tracking

The same `scrollend`-based intersection observer that powers the desktop pill drives the active state in the drawer. Drawer nav items receive the `.item-selected` class when their section is in view — same logic, different container.

#### Visibility Control (CSS)

- **Desktop (≥ 641px)**: show `.header-wrapper` (the pill); hide the trigger button and drawer.
- **Mobile (≤ 640px)**: hide `.header-wrapper`; show the trigger button; the drawer is controlled by JS state.

---

> **Authorization checkpoint:** Review and approve Phase 2 before proceeding to Phase 3.

---

## Phase 3 — Hero Section & Editor

**Files:** `editor.css`, `index.astro` (scoped styles)

### Problem

1. **Editor overflow**: The smallest existing breakpoint sets the editor to `width: 450px; height: 300px` at ≤ 600px. On a 375px phone with 32px of horizontal margin the available content width is 343px — the editor overflows by ~107px.
2. **Editor wrapper**: `.editor-glass-wrapper` in `index.astro` has `overflow: hidden`, which clips the overflowing editor silently.

The Profile column stacks correctly below 1025px (`.xl-flex` becomes a block context, so `.hero-col:first-child` flex sizing has no effect). No change is needed for the Profile.

### Changes

**`editor.css` — Mobile (≤ 480px)**
- Set the editor container to `width: 90%` of its parent (or `width: calc(100% - 2rem)` so it respects the container with some inset).
- Keep `height: 260px`.
- The code content area (`.code`) should have `overflow-x: auto` so long lines scroll horizontally inside the editor — mimicking a real code editor. The outer editor boundary stays fixed; only the code scrolls.
- Carry the existing `.tabs` offset adjustment (`left: 34px; width: calc(100% - 34px)`) into this breakpoint.

**`index.astro` styles — Mobile (≤ 640px)**
- `.editor-glass-wrapper`: add `width: 100%` so the wrapper fills the stacked column width and the editor inside is constrained to 90% of that.

---

> **Authorization checkpoint:** Review and approve Phase 3 before proceeding to Phase 4.

---

## Phase 4 — Two-Column Sections: About, Career, Projects

**Files:** `PersonalDescription.css`, `JobHistory.css`, `Projects.css`, `ProjectCard.css`

### Problem

All three content sections use the same two-column flex layout:
- Left column: `flex: 0 0 240px` — contains the section title and a subtitle.
- Right column: `flex: 1` — contains the actual content (prose, timeline, project cards).
- Gap: `4rem` between columns.

There is no responsive behavior. At ≤ 640px, 240px + 64px gap + remaining content is too cramped to read comfortably.

### Solution: Single-Column Stacking on Mobile

On mobile, the title and subtitle move **above** the content (not into a separate left column). The section title and the content appear in the same vertical column — as if there were never a sidebar. This preserves reading order: title → subtitle → content.

### Changes

**All three layout files — Tablet (641px – 1024px)**
- Reduce `gap` from `4rem` to `2rem`.
- Reduce the left column fixed width from `240px` to `180px`.

**All three layout files — Mobile (≤ 640px)**
- Change `flex-direction` to `column`.
- Set the left column to `flex: none; width: 100%` (removes the fixed 240px constraint).
- Reduce `gap` from `4rem` to `1.25rem`.
- The left column (title + subtitle) will render above the right column (content) — correct reading order without any DOM reordering.

**`JobHistory.css` — additional notes**
- `.job-description { padding-left: 77px }` does not need to change. This indent aligns the description beneath the job title text (past the 52px logo + 20px gap + 5px). It is relative to `.job-list` in all contexts and is unaffected by the section-level stacking.
- `.job-list::before` (the vertical connecting line at `left: 26px`) is relative to `.job-list` and remains correct on mobile.

**`ProjectCard.css` — Mobile (≤ 640px)**
- Scale `.project-title` from `1.75rem` to `1.35rem` to avoid awkward multi-line wrapping on narrow screens.
- Reduce `.project-item` vertical padding from `2rem 0` to `1.5rem 0`.

---

> **Authorization checkpoint:** Review and approve Phase 4. At this point all phases are complete.

---

## Summary Table

| File | Phase | Tablet Changes | Mobile Changes |
|------|-------|---------------|----------------|
| `global.css` | 1 | Margin → 2.5rem; section gap → 4rem | Section gap → 2.5rem; section-title → 1.5rem; reduce padding |
| `Header.css` | 2 | Show pill; hide drawer trigger | Hide pill; show hamburger trigger |
| `Header.jsx` | 2 | No change | Add drawer state, trigger, backdrop, active tracking |
| `editor.css` | 3 | None | Width → 90% of parent; code area overflow-x: auto |
| `index.astro` | 3 | None | editor-glass-wrapper → width: 100% |
| `PersonalDescription.css` | 4 | gap → 2rem; left → 180px | Column stack; left → 100%; gap → 1.25rem |
| `JobHistory.css` | 4 | gap → 2rem; left → 180px | Column stack; left → 100%; gap → 1.25rem |
| `Projects.css` | 4 | gap → 2rem; left → 180px | Column stack; left → 100%; gap → 1.25rem |
| `ProjectCard.css` | 4 | None | project-title → 1.35rem; padding → 1.5rem 0 |
| `Profile.css` | — | None | None (already responsive) |
| `ThemeButton.css` | — | None | None (moves into drawer on mobile) |

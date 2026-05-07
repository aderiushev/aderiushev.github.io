# Deriushev Design System

Design system extracted from **[aderiushev.github.io](https://aderiushev.github.io)** — the personal portfolio of **Aleksei Deriushev**, a senior front-end engineer based in Barcelona. The repo bundles two distinct visual surfaces under one umbrella:

1. **Portfolio Surface (Neubrutalism)** — the aderiushev.github.io root. Thick black borders, hard-offset drop shadows, cream dot-grid background, chunky display type, six saturated accent colors, playful card rotations.
2. **Product Surface (Dark)** — the 8 product landing pages under `/cm/`, `/palabrino/`, `/adchange/`, `/n3ws/`, `/vispana/`, `/pirate/`, `/ninja-tch/`, `/laska/`. Black/near-black backgrounds, subtle 1px borders, rounded corners (8–24px), soft shadows, system fonts, one accent color per product.

The two surfaces share **no visual vocabulary** — they're deliberately opposite. Portfolio is loud-handmade-playful; Product is quiet-app-professional. This system documents both and lets designers target either.

---

## Source of Truth

- **Repo:** `aderiushev/aderiushev.github.io` @ `main` — imported under `source/`
- **Deployed site:** https://aderiushev.github.io
- **CV source:** `source/cv.md` + `source/templates/cv-render.html`
- **Main portfolio:** `source/index.html` + `source/styles.css`
- **Product landings:** `source/<product>/index.html` + `styles.css` (8 products, near-identical structure, swappable accent)

The repo is plain static HTML/CSS/JS — no framework, no build step. That means every token in this design system is a direct port of a CSS custom property or class that's live in production today.

---

## Index

- `README.md` — this file. Context, content fundamentals, visual foundations, iconography.
- `SKILL.md` — agent-invocable skill manifest.
- `colors_and_type.css` — all color + type + spacing tokens as CSS variables, plus semantic aliases (`.h1`, `.body`, `.stroke`, `.surface-dark`, etc.).
- `fonts/` — (empty; all fonts loaded from Google Fonts CDN — see colors_and_type.css).
- `assets/` — logos, icons, imagery. The original repo ships almost no raster art (the hero portrait `/assets/me.jpg` is referenced but not committed). Only real committed asset: `palabrino-logo.svg`.
- `preview/` — Design System tab cards (small HTML snippets).
- `ui_kits/portfolio/` — Neubrutalism UI kit (hero, nav, buttons, cards, project grid, timeline, etc.).
- `ui_kits/product/` — Dark product-landing UI kit (header, hero, feature grid, screenshots gallery, legal pages).
- `source/` — raw imported repo for reference.

---

## Content Fundamentals

### Voice
**Direct, confident, working-class-proud, lightly ironic.** The author writes like an engineer who's seen too many decks and wants to talk shop. Receipts over adjectives. Numbers over claims.

- **First person is default.** "I'm the guy who…", "I pick things up quickly, troubleshoot honestly…", "I'm Aleksei Deriushev…". No royal-we, no brand-voice abstraction.
- **Second person for the reader is reserved for CTAs.** "Let's make noise." "Say hi. I answer." "New opportunities, weird projects, coffee in Barcelona — all welcome."
- **Confident but never grandiose.** "14 years. Receipts." — not "14 years of transformational leadership".
- **Self-aware one-liners** land section titles: _"Who the heck is AD?"_, _"The toolbox."_, _"Side quests."_, _"Let's make noise."_ Each one is 2–4 words; the final noun is wrapped in a colored chip.

### Casing
- **Section titles: SENTENCE case** in the written source (`Who the heck is AD?`), but visually **UPPERCASE** because Archivo Black is tracked-out uppercase.
- **Section numbers: UPPERCASE mono** — `01 / TL;DR`, `04 / EXPERIENCE`.
- **Buttons: UPPERCASE with 0.02em tracking** — `⬇ DOWNLOAD CV`, `★ GITHUB`.
- **Body copy: normal sentence case.** Bold for names/numbers, not for emphasis padding.
- **Monospace tags: UPPERCASE when labelish** — `LOCATION`, `AVAILABILITY`, `TIMEZONE`. Sentence case when value-ish — `Barcelona, ES`, `Sr. Front-end`.

### Punctuation & symbols
- **`//` monospace comments** open eyebrows and captions: `// Senior Front-end Engineer · Barcelona, ES`, `// 5.7M+ downloads`, `// HAND-MADE IN BARCELONA`. This is the single most recurring text motif.
- **`★` as a marquee separator** in tech-stack ticker: `React ★ React Native ★ TypeScript`.
- **`→` and `⬇ ★ in ☏ @ ⟁ ▶ 📍`** — chunky unicode glyphs used inline in buttons, list bullets, and contact icons instead of icon fonts.
- **Em dash for drama**, `·` middle-dot for meta separation: `Barcelona, ES · CET / UTC+1 · EN · ES · RU`.
- **Ampersand `&`** preferred over "and" in short phrases: `web & mobile`, `coffee & conversation`.

### Emoji
**Yes — used on the Portfolio surface, heavily, as meta-tag decoration.** Not as card headers (that's a slop trope the design actively avoids).
- Meta-tags: `📍 Barcelona, ES`, `✉ derushev.aleksei@gmail.com`, `🌐 EN · ES · RU`.
- Experience domain labels: `📺 Streaming platform`, `💰 Blockchain fintech`, `🧳 Corporate travel`, `🎮 Software distribution`.
- TLDR highlight glyphs use **symbolic glyphs, not emoji**: `⟁`, `▶`, `📍` (one emoji slips in).
- **Product surface is emoji-heavy in feature cards** (`🖼️ Visual Learning`, `🔥 Streak Tracking`) — a deliberate choice on those pages that contrasts with the portfolio. Flag for review if modernizing: consider replacing with inline SVGs.

### Examples (verbatim from live site)
- Hero eyebrow: `// Senior Front-end Engineer · Barcelona, ES`
- Hero headline (line-broken): `Building high-performance web & mobile apps since 2012.`
- Hero tagline: `I'm Aleksei Deriushev — 14+ years shipping React, React Native, TypeScript & Node.js across streaming, fintech, blockchain, GIS & e-commerce.`
- About quote: `Proactive, business-first, and not scared of the scary code.`
- Availability row value: `Selective`, `< 24h`, `CET / UTC+1`.
- Footer: `© 2026 DERIUSHEV. · HAND-MADE IN BARCELONA`.

---

## Visual Foundations

### Colors
**Two discrete palettes, never mixed in one view.**

**Portfolio:**
- Background: `#f4efe6` cream
- Ink: `#0a0a0a` near-black (for all text + borders + shadows)
- Paper: `#ffffff`
- Accents (six): orange `#ff5a1f`, yellow `#ffd84d`, cyan `#4ad6ff`, lime `#b6ff4a`, pink `#ff7ac6`, violet `#a78bfa`.
- Every card pulls a different accent from this set; rotation through the palette is by index (`nth-child(1)` → yellow, `nth-child(2)` → cyan, etc.) — **not** by meaning. Color signals _variety_, not _status_.
- No gradients anywhere. No opacity tricks. Flat fills only.

**Product:**
- Background: `#000000` outer, `#121212` section, `#1a1a1a` card, `#252525` hover.
- Text: `#ffffff` primary, `#b0b0b0` secondary.
- Border: `#2a2a2a` (1px hairline only).
- Semantic: `#4ade80` success, `#ef4444` error.
- One accent per product, fully swappable: `cm` / `palabrino` / `n3ws` blue `#4a9eff`; `vispana` green `#10b981`; `pirate` amber `#f59e0b`; `ninja-tch` yellow `#FBD438`; `laska` coral `#C95D4A`; `adchange` soft blue `#60a5fa`.
- Only gradient in the system: `linear-gradient(135deg, #3B82F6, #60A5FA)` on the active screenshot-gallery dot. Reserve for tiny active-state indicators.

### Type
**Portfolio — three fonts, heavy contrast.**
- **Archivo Black** (display) — uppercase, tracking `-0.02em`, used for every H1/H2/H3, logo text, big stat numbers, and chunky callouts.
- **Space Grotesk** (body, 400/500/600/700) — all paragraph text, buttons, feature descriptions.
- **JetBrains Mono** (500/700) — every label, tag, status row, eyebrow, section number, marquee separators.

**Product — one family, system stack.**
- `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif`
- Weights: 400, 500, 600, 700, 800. H1 = 3rem/800; H2 = 2.5rem/700; body = 1rem/400 @ 1.6 line-height; description = 1.125rem/400.

All fonts are **Google Fonts CDN-loaded** — no self-hosted files. Font substitutions are non-destructive (system stack covers product surface cleanly).

### Spacing
4-pt base grid, commonly expressed in `px` (not rem) on the portfolio and in `rem` on the product pages.
- Tight: `4, 8, 12px` (gaps inside chips, skill lists).
- Card padding: `20–40px` (most cards live at `24–28px`).
- Section padding: `80px` vertical, `28px` horizontal container.
- Container max-width: `1240px` (portfolio), `1200px` (product).

### Backgrounds
- **Portfolio:** Single signature — a 24px radial dot grid (`radial-gradient(var(--ink) 1px, transparent 1px)` at 24×24). Applied to `<body>`. Section backgrounds swap to accent colors (`--accent-2` yellow for About, `--accent-3` cyan for Experience) with 4px ink borders top + bottom to form hard bands.
- **Product:** Flat solid fills. `#000` page, `#121212` alternating section (`.screenshots`, `.how-it-works`), `#1a1a1a` cards. No imagery; no textures; no gradients (except the active dot).
- **No full-bleed hero images.** The portfolio uses a framed portrait inside a cyan card; product heroes are text-only with a rounded app-icon image at the top.

### Borders & Shadows
- **Portfolio:** `4px solid #0a0a0a` is the dominant border. Secondary weights: `3px` (nav pills, inner cells), `2px` (skill chips). Every elevated card has a **hard-offset drop shadow** `8px 8px 0 0 var(--ink)` — no blur, no opacity. Large cards (hero, contact) go to `10px/12px`. Skill chips, tags, logo mark get a `3–4px` mini version.
- **No inner shadows anywhere.** No soft blurs. No `rgba` drop shadows.
- **Product:** `1px solid #2a2a2a` hairline around every card. Shadow only appears on **hover** (`0 4px 12px rgba(74,158,255,0.4)` — accent-colored glow) or on **hero icon** (`0 10px 40px rgba(74,158,255,0.3)`) and **screenshots** (`0 10px 40px rgba(0,0,0,0.5)`). Default state: borderless-looking flat cards.

### Corner radii
- **Portfolio:** `0` — everything is sharp. Exceptions: status-pill dot (circle), marquee (no radius, but it's a band).
- **Product:** Consistent rounded scale — `8` (logo icon), `12` (cards, inputs), `16` (feature cards, gallery images), `24` (hero app icon). Buttons use `12`.

### Rotations (portfolio only)
CSS variable `--rot: 1` controls a global rotation multiplier applied via `transform: rotate(calc(<n>deg * var(--rot)))`.
- `.tilt-l` = -1.5°, `.tilt-r` = +1.8°, `.tilt-s` = -0.6° (subtle).
- Photo frame: `+2°`. Fact card: `-1.5°`. Logo mark: `-6°`. Section-title chip: `-1.5°`. Highlighted hero word: `-1.2°`. TLDR cards: `-0.8°, +0.6°, -0.4°` alternating. XP cards: `odd=-0.4°, even=+0.4°`.
- Setting `--rot: 0` flattens the entire site — a built-in escape hatch.

### Motion
**Portfolio — punchy, short, one-axis.**
- Buttons: `transform: translate(-2px,-2px); box-shadow: grows by 2px` on hover; on active, `translate(8px, 8px)` with `box-shadow: 0` — i.e. the button "presses into" its own shadow. Duration: `80ms ease`.
- Cards: `120ms ease` on `transform` + `box-shadow`.
- Marquee: 28s linear infinite horizontal scroll.
- Status pill dot: `1.4s` opacity blink keyframe.
- **No fades. No bounces. No springs. No scroll-triggered reveals.** Everything is hover-driven and instant.

**Product — softer, longer.**
- Cards: `transform: translateY(-4px); border-color → accent` on hover, `0.2s`.
- Buttons: `translateY(-2px); accent glow` on hover, `0.2s`.
- Screenshot gallery: `0.4s cubic-bezier(0.4, 0, 0.2, 1)` for smooth snap.
- Active dot: scale 1.3x + blue glow.

### Layout rules
- **Portfolio** lives inside a 1240px container with 28px gutters. Grid uses fractional units (`1.3fr 1fr` hero, `2fr 1fr` about, `repeat(3,1fr)` TLDR, `repeat(4,1fr)` projects, `repeat(2,1fr)` skills). Breakpoints at `980px` (most 1fr) and `560px` (projects 1fr, reduced padding).
- **Product** uses `max-width: 1200px` + 20px padding. Feature grids are `auto-fit minmax(280px,1fr)` — fluid, no fixed column count.

### Transparency & blur
- **Portfolio:** None. Zero uses of `opacity` for color effects, zero `backdrop-filter`. Only opacity use: the blinking status-dot keyframe.
- **Product:** Only `rgba(...)` for shadow glows, never for base fills.

### Protection gradients / capsules
- **Portfolio:** No overlay gradients (no imagery to protect over). Capsules are common: status-pill (`green lime + border white + shadow white` on dark header), eyebrow, section-num pill.
- **Product:** No protection needed; everything is text-on-solid-dark.

### Imagery vibe
- **Portfolio:** Only one image — the portrait `me.jpg` — framed in a cyan-inked card with a 4:5 aspect, an `object-fit: cover` inset against `var(--ink)` black.
- **Product:** App icons (120×120 rounded 24px with an accent glow) + phone screenshots (230px wide, rounded 16px, dark drop shadow).
- No stock photography. No illustration. No "3D" gradient blobs.

### Cards at a glance
| Card type | Bg | Border | Shadow | Radius |
|---|---|---|---|---|
| Portfolio generic | `#ffffff` | `4px ink` | `8px 8px 0 ink` | `0` |
| Portfolio accent | `accent-N` | `4px ink` | `8px 8px 0 ink` | `0` |
| Portfolio dark | `#0a0a0a` | `4px ink` | `12px 12px 0 ink` | `0` |
| Product | `#1a1a1a` | `1px #2a2a2a` | none (hover: glow) | `16px` |
| Product CTA | `accent-primary` | none | `0 4px 12px accent-40%` | `12px` |

---

## Iconography

The portfolio and product surfaces use iconography **differently**.

### Portfolio
**No icon font. No icon library. Unicode glyphs used inline, intentionally.**
- Section-number mono pills: plain digits + slash.
- Button leading glyphs: `⬇ ★ in ☏ @` — single character prefix in the button's font, same weight as the label.
- Contact icons: 36×36 square with a **2–3 letter monogram in Archivo Black** (`@`, `☏`, `GH`, `in`) — each sits in a yellow accent box with a 3px ink border.
- Logo mark `AD`: 40×40 yellow square with a 3px white border, `-6°` rotation, Archivo Black letters.
- Project glyphs `CM / N3 / PA / FX / VP / PR / NT / LP`: 48×48 white square with 3px ink border, Archivo Black 22px letters — a **two-letter monogram per project**.
- TLDR card icons: 56×56 black squares with a single Archivo Black glyph (`📍 ⟁ ▶`) — emoji + symbolic, the only emoji rendered as icons.
- Interest list: `→ ` as a `::before` pseudo, no bullet.

**Rule:** prefer chunky monograms and unicode glyphs to icon libraries. If you must reach for an icon set, use stroke-only **2px round** icons (closest: **Lucide**, 2px default stroke) and render them at the size of a capital letter in Archivo Black so they feel like type.

### Product
- **App icons** are PNGs (`assets/icon.png`) sized 120×120 with 24px radius + accent-tinted drop shadow. Each product ships its own.
- **Feature icons are emoji** — rendered large (2.5rem) in feature cards. `🖼️ 🔥 🌍 💡 🎮 📊` for Palabrino; similar sets for other products. Emoji-as-icon is a **deliberate stylistic choice**, not a placeholder. If modernizing, swap for duotone SVG at same weight.
- **Screenshots** are PNGs at 230px wide, rounded 16px, soft black drop shadow.
- **No icon font; no Lucide/Heroicons wired in.** Substitution for missing icons: **Lucide CDN** (closest match to portfolio's 2–3px stroke feel). Flagged — the original codebase ships none.

### Logos
- **`AD` monogram** (portfolio) — rendered in CSS as a 40×40 yellow square with `Archivo Black`. No SVG file. See `preview/brand-logo.html` for the reference render.
- **Palabrino logo** — dedicated SVG, included at `assets/palabrino-logo.svg` and `assets/palabrino-icon-ios.svg`. Uses `#C62828` red + `#FBC02D` yellow on `#121212`.
- All other product icons (`cm`, `n3ws`, etc.) reference `assets/icon.png` files that **are not committed to the repo** — flagged.

---

## ⚠️ Flags & Substitutions

- **Hero portrait `/assets/me.jpg` is referenced but not in the repo.** Placeholder used in UI kit. Please provide.
- **Per-product app icons (`/<product>/assets/icon.png`) are not committed.** Only Palabrino SVG is available. UI kit uses CSS monogram fallbacks.
- **Screenshots (`/palabrino/assets/screenshot1.png` etc.)** — also not committed. UI kit uses placeholder phone screens.
- **Fonts are Google Fonts CDN, not self-hosted.** `fonts/` folder is empty by design. If you need offline use, I'll need to import the webfont files.
- **Icon strategy is bespoke (monograms + unicode + emoji).** No icon library is wired in. If you ask for a real icon set, I'll flag that substitution.

# Deriushev Design System — Skill

Use this design system when the user wants to design anything in the style of **aderiushev.github.io** (Aleksei Deriushev's personal portfolio) or any of its product landing pages.

## When to invoke
- "Design a new section for my portfolio"
- "Make a landing page like Palabrino/Control Manager/N3WS"
- "Recreate the neubrutalism look"
- "Design a CV page that matches my portfolio"
- "Add a project card to the grid"

## Two surfaces — pick one, never mix
1. **Portfolio (Neubrutalism)** — cream `#f4efe6` dot-grid bg, `#0a0a0a` ink, 4px black borders, 8/8 hard-offset shadows, 6 saturated accents rotated by index, Archivo Black + Space Grotesk + JetBrains Mono, `//` mono eyebrows, 2-letter monograms, subtle tilts (`--rot` var), no radii.
2. **Product (Dark)** — `#000` bg, `#1a1a1a` cards, `#2a2a2a` 1px hairlines, system-stack font, 8/12/16/24 radii, one swappable accent per product (blue / green / amber / yellow / coral), hover glows, no borders.

## First steps every time
1. Read `README.md` for full content + visual foundations.
2. Read `colors_and_type.css` for tokens (both surfaces side-by-side).
3. Pick the surface. Tell the user which one and why.
4. Copy the matching kit from `ui_kits/portfolio/` or `ui_kits/product/` as a starting point — don't rebuild from scratch.
5. If imagery is needed (portrait, screenshots, product icons), warn the user they're not in the repo and use a CSS monogram placeholder.

## Voice cheat-sheet
- First-person, direct, confident-not-grandiose. Numbers > claims.
- Section titles: 2–4 words, final noun in a colored chip. "The toolbox." "Side quests." "Let's make noise."
- `//` mono comments for eyebrows: `// Senior Front-end Engineer · Barcelona, ES`
- Emoji OK on portfolio as meta-tag decoration; product uses emoji as feature-card icons.

## Don'ts
- Don't introduce gradients on the portfolio.
- Don't introduce rounded corners on the portfolio.
- Don't introduce borders on the product surface default state (hover only, via accent).
- Don't mix the two palettes in one view.
- Don't invent a 7th accent color.
- Don't use icon libraries unless asked — reach for 2-letter monograms or unicode glyphs first.

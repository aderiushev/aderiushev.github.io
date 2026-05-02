# Portfolio UI Kit (Neubrutalism)

Recreation of the `aderiushev.github.io` portfolio surface. Uses the original `source/styles.css` directly — this kit is componentization over the live stylesheet, not a reinterpretation.

## Components (`components.jsx`)
- `Nav` — sticky black header, AD logo mark, nav links, "Open to work" status pill
- `Hero` — hero-grid with headline, tagline, meta tags, CTA row, cyan photo frame, yellow fact card
- `Marquee` — tech-stack ticker (28s linear scroll, ★ separators)
- `SectionHead` — eyebrow pill + title with colored chip
- `TldrGrid` — three tilted accent cards
- `SkillsGrid` — 4 accent-colored skill clusters
- `Projects` — 8-project grid with 2-letter monograms, accent rotation
- `Contact` — orange CTA card + black status panel side-by-side
- `Footer` — black band with link list

## Using
Include `source/styles.css` + `components.jsx` in your prototype, then compose: `<Hero/><Marquee/><TldrGrid/>` etc.

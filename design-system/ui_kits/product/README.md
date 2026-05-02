# Product UI Kit (Dark)

Recreation of the 8 product-landing surfaces in `source/<product>/`. All 8 share the same CSS skeleton — only `--accent-primary` changes. This kit gives you the skeleton + theme classes for each product.

## Components (`components.jsx`)
- `ProductHeader` — sticky dark header, accent logo-icon, plain nav
- `ProductHero` — centered hero with 120×120 app icon, H1/tagline/description, two-button CTA
- `FeatureGrid` — auto-fit grid of emoji-icon feature cards
- `Screenshots` — 4-slot screenshot row with gallery dots
- `FAQ` — stacked question/answer cards + contact box
- `ProductFooter` — three-column dark footer

## Themes (`product.css`)
Wrap a surface with one of these classes to change the single accent color:
- default (blue `#4a9eff`) — cm, palabrino, n3ws
- `.theme-vispana` (green `#10b981`)
- `.theme-pirate` (amber `#f59e0b`)
- `.theme-ninja` (yellow `#FBD438`)
- `.theme-lovepoints` (coral `#C95D4A`)
- `.theme-adchange` (soft blue `#60a5fa`)

## Reskinning
```html
<body class="theme-pirate">
  <ProductHeader name="Pirate" mono="⚔"/>
  <ProductHero mono="⚔" h1="2D auto-runner" tagline="Built in Godot 4.6"/>
  …
</body>
```

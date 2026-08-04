# Industries Section Redesign — Task Tracker

## Scope

Redesign ONLY the homepage "Industries We Serve" section (src/components/Industries.jsx + §3.9/§4.7 in globals.css + industriesData.js image wiring). Keep the existing premium white / blue-grey / teal theme. Do not touch other sections.

## Refinements (from feedback)

- Panel is soft off-white (gradient #ffffff → #fbfdff), NOT stark white
- Restrained shadow `0 12px 32px rgba(30,60,90,.06)` — no heavy drop shadows
- Uniform 3×2 grid, equal card dimensions, distinct image focal points per industry
- Natural image→text fade: `transparent 55% → rgba(255,255,255,.45) 72% → #fff 100%`
- Premium title gradient that shifts/shrinks on hover (background-size 100% → 180%, position right)
- Learn More: underline grows + arrow slides (not just the arrow)
- Image band ~62–65% of card height
- Border radius 0 everywhere (panel, card, image) — soft mask via gradient fade
- Hover: `translateY(-8px) scale(1.015)` + `0 24px 60px rgba(20,215,210,.12)`
- Subtle teal divider between image and text
- Tone: editorial/premium (Microsoft/IBM/Salesforce-style), not a generic Bootstrap card grid

## Steps

- [x] 1. `src/data/industriesData.js` — import the six images, add `image` + `position` (focal point) fields
- [x] 2. `src/components/Industries.jsx` — rewrite section: white panel container, uniform 3×2 grid, image-led cards, gradient title, Learn More link
- [x] 3. `src/styles/globals.css` §3.9 — replace dark featured-card styles with premium light panel + card styles
- [x] 4. `src/styles/globals.css` §4.7 — responsive: 3→2 cols (≤1180px), 2→1 col (≤639px), container padding, reduced-motion
- [x] 5. Run `npm run lint` (0 errors; 2 pre-existing Hero.jsx fast-refresh warnings)
- [x] 6. Run `npm run build` (built successfully, 450 modules, all 6 images bundled)
- [x] 7. Verify no stale references to removed `.industry-card__visual` / `__overlay` / `--featured`

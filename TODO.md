# coserve-redesign — Fix Broken Links & Routing

## Root Cause
Almost every nav/footer/CTA link pointed to a route that did not exist, and
`BrowserRouter` rendered a **blank page** for unmatched paths (no catch-all 404).

## Tasks

- [x] 1. `src/data/industriesData.js` — all 6 industries route to manufacturing
- [x] 2. `src/components/Navbar.jsx` — missing-route links set to `#`
- [x] 3. `src/components/Footer.jsx` — missing-route + legal links set to `#`
- [x] 4. `src/components/CtaSection.jsx` — `/contact` → `#`
- [x] 5. `src/components/Hero.jsx` — `/contact/` → `#`, product hrefs → `/ai-products`
- [x] 6. `src/pages/AIProducts.jsx` — product hrefs → `/ai-products`
- [x] 7. `src/pages/IndustryPage.jsx` — `/products` → `/ai-products`, `/contact` → `#`
- [x] 8. `src/pages/Partnersdetails.jsx` — `/contact` → `#`
- [x] 9. `src/pages/NotFound.jsx` — created 404 page
- [x] 10. `src/App.jsx` — added `*` catch-all 404 route
- [x] 11. Build & verify (`npm run build`) — passes

## Vercel / Git note
Repo is up to date with `origin/main`. If production isn't updating, confirm in
Vercel that the **Production Branch** is set to `main` (not `agents/...`).
</content>

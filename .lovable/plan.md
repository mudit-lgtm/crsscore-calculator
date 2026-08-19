# Rebuild crscalculator.site (crsscorecalc) in Lovable

Recreate the static site from `mudit-lgtm/crsscorecalc` as a TanStack Start app: same URL structure, same page content (verbatim), and the same pixel-for-pixel look (original CSS and inline styles ported as-is).

## URL structure (all 40 pages)

Calculators
- `/` (main CRS calculator, from `index.html`)
- `/express-entry-crs-calculator`, `/cec-crs-calculator`, `/fsw-crs-calculator`, `/fst-crs-calculator`, `/pnp-crs-calculator`, `/ielts-crs-calculator`, `/stem-crs-calculator`, `/healthcare-crs-calculator`
- Provincial: `/ontario-crs-calculator`, `/alberta-crs-calculator`, `/bc-crs-calculator`, `/manitoba-crs-calculator`, `/saskatchewan-crs-calculator`, `/nova-scotia-crs-calculator`

Guides / data
- `/crs-cutoff-scores`, `/express-entry-draw-results`, `/how-crs-is-calculated`, `/how-to-improve-crs-score`, `/what-is-crs-score`, `/crs-score-for-canada-pr`, `/canada-express-entry-eligibility`

Blog
- `/blog` plus `/blog/crs-draw-predictions`, `/blog/crs-score-by-age`, `/blog/crs-score-education`, `/blog/crs-score-language-test`, `/blog/crs-score-with-spouse`, `/blog/express-entry-cutoff-history`, `/blog/improve-crs-score-tips`, `/blog/minimum-crs-score`

Site pages
- `/about`, `/contact`, `/privacy-policy`, `/terms-and-conditions`

Static files: `robots.txt`, `sitemap.xml`, `ads.txt`, favicon, logo, og-image copied into `public/`.

## Phases

1. **Foundation** — port `css/style.css` verbatim, header/footer components from the universal header/footer snippets (with internal links rewritten to relative in-app routes and mobile menu working in React), shared layout, static assets, `js/main.js` behaviour.
2. **Main calculator** — `/` with the full scoring engine from `js/calculator.js` (age, education, language, work experience, spouse, transferability, additional points), same form layout, same result display.
3. **Remaining calculators** — the 13 other calculator pages, each with its page-specific variant of the calculator and its full body copy.
4. **Guides + data pages** — 7 pages, verbatim content including tables and FAQ blocks.
5. **Blog** — index plus 8 articles, verbatim.
6. **Site pages** — about, contact, privacy, terms; then sitemap/robots and a final link-and-metadata pass.

Each phase ends with a browser check of the rendered pages.

## Technical notes

- Every page becomes a route file under `src/routes/` matching the URL above; blog posts live under `src/routes/blog.*`.
- Original CSS is imported globally so class names and cascade match; inline styles from the source HTML are preserved as React `style` props. No Tailwind restyling.
- Per-page `head()` carries over each page's exact `<title>`, meta description, canonical, Open Graph tags and JSON-LD from the source HTML.
- Calculator logic is ported from `js/calculator.js` into typed React state/handlers (no `document.getElementById` DOM scripting) so scores match the original exactly.
- Inline `onmouseover`/`onclick` handlers in the header/footer become React event handlers with identical visual results.
- Absolute `https://crscalculator.site/...` links are converted to router `<Link>` routes; external links stay as-is.
- No backend needed — the site is fully static/client-side.

## Not included

- The repo's Python generators and GitHub Actions workflows (build tooling for the static site, not app content).
- `.bak` files.

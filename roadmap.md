# Verification and repair roadmap
- [ ] Crawl all sitemap pages at 375px and identify every visual overflow/layout defect
- [ ] Fix shared and page-specific mobile layout defects
- [ ] Re-crawl every page visually at 375px and verify desktop spot checks
- [ ] Audit and correct internal links
- [ ] Audit and correct canonical/meta tags
- [ ] Audit and correct JSON-LD structured data
- [ ] Re-verify redirects, sitemap, robots, runtime errors, and calculator interactions

# CRS rules update (IRCC 3 Nov 2026)
- [x] Survey job-offer points across calculators and guide pages
- [ ] Shared scoring module src/lib/crsScoring.ts with RULESETS (pre_2026_11_03 / from_2026_11_03)
- [ ] Unit tests for the scoring function (vitest)
- [ ] Homepage calculator: ruleset toggle, high-wage fields, job-offer replacement, breakdown, banner, notices
- [ ] Remove +200/+50 job-offer points and LMIA mentions from all other calculator pages
- [ ] Remove job-offer points copy from guide/FAQ pages and route-head JSON-LD
- [ ] Verify: tests, build, Playwright check of homepage calculator + smoke of other calculators

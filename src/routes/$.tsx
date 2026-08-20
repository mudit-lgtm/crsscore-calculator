import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const SITE = "https://crscalculator.site";

/**
 * Legacy paths that no longer exist as routes, mapped directly to their final
 * destination (never through an intermediate hop).
 */
const LEGACY_MAP: Record<string, string> = {
  "/index": "/",
  "/home": "/",
  "/express-entry-draws": "/express-entry-draw-results",
  "/express-entry-draw-history": "/blog/express-entry-cutoff-history",
  "/express-entry-draw-results-history": "/express-entry-draw-results",
  "/fsw-points-calculator": "/fsw-crs-calculator",
  "/ielts-to-clb-converter": "/ielts-crs-calculator",
  "/celpip-to-clb-converter": "/ielts-crs-calculator",
  "/noc-code-finder": "/canada-express-entry-eligibility",
  "/crs-calculator": "/express-entry-crs-calculator",
  "/calculator": "/express-entry-crs-calculator",
  "/crs-score-calculator": "/",
  "/improve-crs-score-tips": "/blog/improve-crs-score-tips",
  "/minimum-crs-score": "/blog/minimum-crs-score",
  "/crs-score-by-age": "/blog/crs-score-by-age",
  "/crs-score-education": "/blog/crs-score-education",
  "/crs-score-language-test": "/blog/crs-score-language-test",
  "/crs-score-with-spouse": "/blog/crs-score-with-spouse",
  "/express-entry-cutoff-history": "/blog/express-entry-cutoff-history",
  "/crs-draw-predictions": "/blog/crs-draw-predictions",
  "/privacy": "/privacy-policy",
  "/terms": "/terms-and-conditions",
  "/terms-of-service": "/terms-and-conditions",
};

/** Resolve a requested path to its final destination, or null when none. */
export function resolveLegacyPath(rawPath: string): string | null {
  let path = rawPath;

  // Normalise trailing slash (never for the root).
  if (path.length > 1 && path.endsWith("/")) path = path.replace(/\/+$/, "") || "/";

  // Strip a legacy .html / .htm extension: /any-page.html -> /any-page
  if (/\.html?$/i.test(path)) {
    path = path.replace(/\.html?$/i, "");
    if (path === "/index" || path === "") path = "/";
  }

  // Apply legacy slug mapping (single hop, resolved here to the final target).
  if (LEGACY_MAP[path]) path = LEGACY_MAP[path];

  return path === rawPath ? null : path;
}

const NOT_FOUND_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow"><title>Page not found &ndash; CRS Calculator</title>
<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:#f7f7f8;color:#16181d;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:24px}
.card{max-width:520px;text-align:center}h1{font-size:3rem;margin:0 0 8px}a{display:inline-block;margin-top:20px;background:#c40000;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600}</style>
</head><body><div class="card"><h1>404</h1><p>That page doesn't exist. Try the free CRS calculator instead.</p>
<a href="/">Go to the CRS Calculator</a></div></body></html>`;

export const Route = createFileRoute("/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const target = resolveLegacyPath(url.pathname);

        if (target) {
          // True HTTP 301, issued by the server, straight to the final URL.
          return new Response(null, {
            status: 301,
            headers: {
              Location: `${SITE}${target}`,
              "Cache-Control": "public, max-age=3600",
            },
          });
        }

        return new Response(NOT_FOUND_HTML, {
          status: 404,
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      },
    },
  },
});

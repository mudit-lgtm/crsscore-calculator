import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/terms_and_conditions.html?raw";
import pageJs from "@/content/terms_and_conditions.pagejs.txt?raw";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
            "title": "Terms & Conditions - CRS Calculator"
      },
      {
            "name": "description",
            "content": "Terms of use for CRS Calculator, including accuracy disclaimers and limits of liability. Results are estimates, not official immigration advice."
      },
      { "property": "og:title", "content": "Terms & Conditions - CRS Calculator" },
      { "property": "og:description", "content": "Terms of use for CRS Calculator, including accuracy disclaimers and limits of liability. Results are estimates, not official immigration advice." },
      { "name": "twitter:title", "content": "Terms & Conditions - CRS Calculator" },
      { "name": "twitter:description", "content": "Terms of use for CRS Calculator, including accuracy disclaimers and limits of liability. Results are estimates, not official immigration advice." },
      { "property": "og:url", "content": "https://crscalculator.site/terms-and-conditions" },
      { "property": "og:type", "content": "website" },
      { "name": "twitter:card", "content": "summary_large_image" }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/terms-and-conditions"
      },
      {
            "rel": "preconnect",
            "href": "https://fonts.googleapis.com"
      },
      {
            "rel": "stylesheet",
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
],
    scripts: [
      
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

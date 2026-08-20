import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/contact.html?raw";
import pageJs from "@/content/contact.pagejs.txt?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
            "title": "Contact CRS Calculator - Questions and Feedback"
      },
      {
            "name": "description",
            "content": "Contact the CRS Calculator team with corrections, feature requests or partnership enquiries. We reply to every message about the tool."
      },
      { "property": "og:title", "content": "Contact CRS Calculator - Questions and Feedback" },
      { "property": "og:description", "content": "Contact the CRS Calculator team with corrections, feature requests or partnership enquiries. We reply to every message about the tool." },
      { "name": "twitter:title", "content": "Contact CRS Calculator - Questions and Feedback" },
      { "name": "twitter:description", "content": "Contact the CRS Calculator team with corrections, feature requests or partnership enquiries. We reply to every message about the tool." },
      { "property": "og:url", "content": "https://crscalculator.site/contact" },
      { "property": "og:type", "content": "website" },
      { "name": "twitter:card", "content": "summary_large_image" }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/contact"
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

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/privacy_policy.html?raw";
import pageJs from "@/content/privacy_policy.pagejs.txt?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
            "title": "Privacy Policy - CRS Calculator"
      },
      {
            "name": "description",
            "content": "How CRS Calculator handles your data: nothing you enter is stored on our servers. Read our cookie, analytics and advertising disclosures in full."
      },
      { "property": "og:title", "content": "Privacy Policy - CRS Calculator" },
      { "property": "og:description", "content": "How CRS Calculator handles your data: nothing you enter is stored on our servers. Read our cookie, analytics and advertising disclosures in full." },
      { "name": "twitter:title", "content": "Privacy Policy - CRS Calculator" },
      { "name": "twitter:description", "content": "How CRS Calculator handles your data: nothing you enter is stored on our servers. Read our cookie, analytics and advertising disclosures in full." },
      { "property": "og:url", "content": "https://crscalculator.site/privacy-policy" },
      { "property": "og:type", "content": "website" },
      { "name": "twitter:card", "content": "summary_large_image" }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/privacy-policy"
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

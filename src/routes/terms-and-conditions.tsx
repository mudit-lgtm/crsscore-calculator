import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/terms_and_conditions.html?raw";
import pageJs from "@/content/terms_and_conditions.pagejs.txt?raw";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
            "title": "Terms and Conditions \u2013 CRS Score Calculator"
      },
      {
            "name": "description",
            "content": "Terms and Conditions for using CRS Score Calculator. Read our terms of use, disclaimers, and limitations of liability for our Canada Express Entry CRS tools."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/terms-and-conditions"
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

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/about.html?raw";
import pageJs from "@/content/about.pagejs.txt?raw";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
            "title": "About Us \u2013 CRS Score Calculator"
      },
      {
            "name": "description",
            "content": "Learn about CRS Score Calculator \u2013 a free, accurate Canada Express Entry CRS score tool trusted by thousands of applicants worldwide."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/about"
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

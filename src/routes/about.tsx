import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/about.html?raw";
import pageJs from "@/content/about.pagejs.txt?raw";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
            "title": "About CRS Calculator - Who Builds This Free Tool"
      },
      {
            "name": "description",
            "content": "Who we are, how our CRS calculator is built on the official IRCC grid, and how we keep the scoring rules and Express Entry draw data current."
      },
      { "property": "og:title", "content": "About CRS Calculator - Who Builds This Free Tool" },
      { "property": "og:description", "content": "Who we are, how our CRS calculator is built on the official IRCC grid, and how we keep the scoring rules and Express Entry draw data current." },
      { "name": "twitter:title", "content": "About CRS Calculator - Who Builds This Free Tool" },
      { "name": "twitter:description", "content": "Who we are, how our CRS calculator is built on the official IRCC grid, and how we keep the scoring rules and Express Entry draw data current." },
      { "property": "og:url", "content": "https://crscalculator.site/about" },
      { "property": "og:type", "content": "website" },
      { "name": "twitter:card", "content": "summary_large_image" }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/about"
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

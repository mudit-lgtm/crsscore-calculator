import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import RelatedGuides from "@/components/RelatedGuides";
import pageHtml from "@/content/blog__improve_crs_score_tips.html?raw";
import pageJs from "@/content/blog__improve_crs_score_tips.pagejs.txt?raw";

export const Route = createFileRoute("/blog/improve-crs-score-tips")({
  head: () => ({
    meta: [
      {
            "title": "Improve CRS Score Tips - 10 Ways to Gain Points"
      },
      {
            "name": "description",
            "content": "Ten tested ways to improve your CRS score, with the points attached: IELTS retake +50, PNP +600, French +50. Includes an interactive booster tool."
      },
      {
            "name": "robots",
            "content": "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
      },
      {
            "name": "theme-color",
            "content": "#c40000"
      },
      {
            "name": "author",
            "content": "CRS Calculator"
      },
      {
            "name": "format-detection",
            "content": "telephone=no"
      },
      {
            "property": "og:type",
            "content": "article"
      },
      {
            "property": "og:title",
            "content": "Improve CRS Score Tips - 10 Ways to Gain Points"
      },
      {
            "property": "og:description",
            "content": "Ten tested ways to improve your CRS score, with the points attached: IELTS retake +50, PNP +600, French +50. Includes an interactive booster tool."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/blog/improve-crs-score-tips"
      },
      {
            "property": "og:site_name",
            "content": "CRS Calculator"
      },
      {
            "property": "og:image",
            "content": "https://crscalculator.site/og-image.jpg"
      },
      {
            "property": "article:published_time",
            "content": "2026-01-01T00:00:00+00:00"
      },
      {
            "property": "article:modified_time",
            "content": "2026-04-19T00:00:00+00:00"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "Improve CRS Score Tips - 10 Ways to Gain Points"
      },
      {
            "name": "twitter:description",
            "content": "Ten tested ways to improve your CRS score, with the points attached: IELTS retake +50, PNP +600, French +50. Includes an interactive booster tool."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/blog/improve-crs-score-tips"
      },
      {
            "rel": "icon",
            "href": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23c40000'/%3E%3Cpath d='M18 20h28v6H18zm0 9h20v6H18zm0 9h28v6H18z' fill='white'/%3E%3C/svg%3E",
            "type": "image/svg+xml"
      },
      {
            "rel": "apple-touch-icon",
            "href": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' rx='32' fill='%23c40000'/%3E%3Cpath d='M42 52h96v18H42zm0 30h68v18H42zm0 30h96v18H42z' fill='white'/%3E%3C/svg%3E"
      }
],
    scripts: [
      
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />
      <RelatedGuides path="/blog/improve-crs-score-tips" />
    </>
  );
}

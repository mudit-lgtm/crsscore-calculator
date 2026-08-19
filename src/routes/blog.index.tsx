import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/blog__index.html?raw";
import pageJs from "@/content/blog__index.pagejs.txt?raw";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
            "title": "Blog \u2013 Canada Express Entry CRS Score Tips & Updates"
      },
      {
            "name": "description",
            "content": "Read the latest Canada Express Entry CRS score tips, draw updates, cutoff trends, and PR strategy guides. Explore CRS improvement tips, minimum CRS score guides, spouse, age, language, education, and Express Entry cutoff history."
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
            "content": "website"
      },
      {
            "property": "og:title",
            "content": "Blog \u2013 Canada Express Entry CRS Score Tips & Updates"
      },
      {
            "property": "og:description",
            "content": "Explore Canada PR, Express Entry, CRS score improvement, draw cutoffs, language points, spouse points, age points, education points, and PNP strategy guides."
      },
      {
            "property": "og:url",
            "content": "/blog"
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
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "Blog \u2013 Canada Express Entry CRS Score Tips & Updates"
      },
      {
            "name": "twitter:description",
            "content": "Latest CRS score tips, Express Entry draw updates, cutoff guides, and Canada PR strategy articles."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/blog"
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
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@graph\":[\n    {\n      \"@type\":\"CollectionPage\",\n      \"@id\":\"/blog#webpage\",\n      \"url\":\"/blog\",\n      \"name\":\"Blog \u2013 Canada Express Entry CRS Score Tips & Updates\",\n      \"description\":\"Archive page for CRS score guides, Express Entry tips, draw cutoffs, minimum CRS score articles, spouse points, age points, education guides, and language test scoring.\",\n      \"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"inLanguage\":\"en-CA\",\n      \"about\":[\n        {\"@type\":\"Thing\",\"name\":\"CRS Score\"},\n        {\"@type\":\"Thing\",\"name\":\"Express Entry\"},\n        {\"@type\":\"Thing\",\"name\":\"Canada PR\"},\n        {\"@type\":\"Thing\",\"name\":\"CRS Improvement Tips\"}\n      ]\n    },\n    {\n      \"@type\":\"BreadcrumbList\",\n      \"itemListElement\":[\n        {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n        {\"@type\":\"ListItem\",\"position\":2,\"name\":\"Blog\",\"item\":\"/blog\"}\n      ]\n    },\n    {\n      \"@type\":\"ItemList\",\n      \"name\":\"CRS Calculator Blog Articles\",\n      \"itemListOrder\":\"https://schema.org/ItemListOrderDescending\",\n      \"numberOfItems\":7,\n      \"itemListElement\":[\n        {\n          \"@type\":\"ListItem\",\n          \"position\":1,\n          \"url\":\"/blog/improve-crs-score-tips\",\n          \"name\":\"How to Improve CRS Score 2026 \u2013 10 Proven Ways to Boost Canada Express Entry Points\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":2,\n          \"url\":\"/blog/minimum-crs-score\",\n          \"name\":\"Minimum CRS Score for Canada PR \u2013 What You Need to Know\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":3,\n          \"url\":\"/blog/express-entry-cutoff-history\",\n          \"name\":\"Express Entry Cutoff History 2015\u20132026 \u2013 CRS Score Trends by Draw\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":4,\n          \"url\":\"/blog/crs-score-language-test\",\n          \"name\":\"CRS Score Language Test Guide \u2013 IELTS, CELPIP, TEF & TCF Points\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":5,\n          \"url\":\"/blog/crs-score-education\",\n          \"name\":\"CRS Score Education Points Guide \u2013 Degrees, Diplomas, ECA & Canada Study Bonus\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":6,\n          \"url\":\"/blog/crs-score-with-spouse\",\n          \"name\":\"CRS Score with Spouse \u2013 How Marriage Changes Canada Express Entry Points\"\n        },\n        {\n          \"@type\":\"ListItem\",\n          \"position\":7,\n          \"url\":\"/blog/crs-score-by-age\",\n          \"name\":\"CRS Score by Age \u2013 How Age Affects Your Express Entry Points\"\n        }\n      ]\n    },\n    {\n      \"@type\":\"FAQPage\",\n      \"mainEntity\":[\n        {\n          \"@type\":\"Question\",\n          \"name\":\"What can I learn from this CRS blog archive?\",\n          \"acceptedAnswer\":{\n            \"@type\":\"Answer\",\n            \"text\":\"You can explore Express Entry score guides, CRS improvement strategies, draw cutoff history, spouse factors, age points, education points, language scoring, and minimum CRS score guidance for Canada PR.\"\n          }\n        },\n        {\n          \"@type\":\"Question\",\n          \"name\":\"Which article should I read first if my CRS score is low?\",\n          \"acceptedAnswer\":{\n            \"@type\":\"Answer\",\n            \"text\":\"Start with the How to Improve CRS Score guide, then review the Minimum CRS Score article and the Provincial Nominee Program calculator for higher-point pathways.\"\n          }\n        },\n        {\n          \"@type\":\"Question\",\n          \"name\":\"Where can I see the latest draw cutoffs?\",\n          \"acceptedAnswer\":{\n            \"@type\":\"Answer\",\n            \"text\":\"Use the CRS cutoff scores page and Express Entry draws tracker for the most recent cutoff and invitation data.\"\n          }\n        }\n      ]\n    }\n  ]\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

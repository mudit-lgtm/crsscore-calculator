import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/crs_cutoff_scores.html?raw";
import pageJs from "@/content/crs_cutoff_scores.pagejs.txt?raw";

export const Route = createFileRoute("/crs-cutoff-scores")({
  head: () => ({
    meta: [
      {
            "title": "CRS Cutoff Scores 2026 - Latest Draw Cutoffs"
      },
      {
            "name": "description",
            "content": "Every 2026 Express Entry cutoff in one table: all-program, CEC, PNP, French and category draws. See instantly whether your CRS score clears the bar."
      },
      {
            "name": "keywords",
            "content": "crs cutoff scores, express entry draw results, crs score history, express entry cutoff 2026, crs cutoff scores 2026, express entry draw history, canada express entry draw results, minimum crs score for ita, express entry draw cutoff trend, crs score required for canada pr"
      },
      {
            "name": "robots",
            "content": "index, follow"
      },
      {
            "name": "author",
            "content": "CRS Score Calculator"
      },
      {
            "name": "geo.region",
            "content": "CA"
      },
      {
            "property": "og:title",
            "content": "CRS Cutoff Scores 2026 - Latest Draw Cutoffs"
      },
      {
            "property": "og:description",
            "content": "Every 2026 Express Entry cutoff in one table: all-program, CEC, PNP, French and category draws. See instantly whether your CRS score clears the bar."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/crs-cutoff-scores"
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:site_name",
            "content": "CRS Score Calculator"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "CRS Cutoff Scores 2026 - Latest Draw Cutoffs"
      },
      {
            "name": "twitter:description",
            "content": "Every 2026 Express Entry cutoff in one table: all-program, CEC, PNP, French and category draws. See instantly whether your CRS score clears the bar."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/crs-cutoff-scores"
      },
      {
            "rel": "preconnect",
            "href": "https://fonts.googleapis.com"
      },
      {
            "rel": "preconnect",
            "href": "https://fonts.gstatic.com",
            "crossOrigin": "anonymous"
      },
      {
            "rel": "stylesheet",
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Poppins:wght@600;700&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Dataset\",\n    \"name\": \"Express Entry CRS Cutoff Scores History 2015\u20132026\",\n    \"description\": \"Complete dataset of all Canada Express Entry draw results including draw number, date, type, minimum CRS cutoff score, and ITAs issued from 2015 to 2026.\",\n    \"url\": \"/crs-cutoff-scores\",\n    \"temporalCoverage\": \"2015-01-01/2026-04-18\",\n    \"spatialCoverage\": { \"@type\": \"Country\", \"name\": \"Canada\" },\n    \"creator\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" },\n    \"license\": \"https://creativecommons.org/licenses/by/4.0/\",\n    \"isBasedOn\": \"https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html\"\n  }" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": []}" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"CRS Cutoff Scores\", \"item\": \"/crs-cutoff-scores\" }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"CRS Cutoff Scores History \u2013 Express Entry Draw Results & Trends 2026\",\n    \"description\": \"Complete Express Entry CRS cutoff scores history 2015\u20132026. All draw results, category breakdowns, trends, and predictions.\",\n    \"url\": \"/crs-cutoff-scores\",\n    \"datePublished\": \"2025-01-01\",\n    \"dateModified\": \"2026-04-18\",\n    \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/logo.png\" }\n    }\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

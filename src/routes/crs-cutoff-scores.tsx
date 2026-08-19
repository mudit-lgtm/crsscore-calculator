import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/crs_cutoff_scores.html?raw";
import pageJs from "@/content/crs_cutoff_scores.pagejs.txt?raw";

export const Route = createFileRoute("/crs-cutoff-scores")({
  head: () => ({
    meta: [
      {
            "title": "CRS Cutoff Scores 2026 \u2013 Express Entry Draw Results History & Trends"
      },
      {
            "name": "description",
            "content": "Complete Express Entry CRS cutoff scores history 2015\u20132026. All draw results by type: All-program, CEC, FSW, PNP, French, STEM, Healthcare. Track CRS trends and predict your chances."
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
            "content": "CRS Cutoff Scores 2026 \u2013 Express Entry Draw Results History"
      },
      {
            "property": "og:description",
            "content": "All Express Entry CRS cutoff scores in one place. Latest draw results, trends, and category-based draw history for 2024\u20132026. Updated after every draw."
      },
      {
            "property": "og:url",
            "content": "/crs-cutoff-scores"
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
            "content": "CRS Cutoff Scores 2026 \u2013 Express Entry Draw Results History"
      },
      {
            "name": "twitter:description",
            "content": "Complete Express Entry CRS cutoff history 2015\u20132026. Latest draw results, trends, and category analysis."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/crs-cutoff-scores"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the latest Express Entry CRS cutoff score in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The latest Express Entry draw (#411) was held on April 15, 2026. It was a French-Language proficiency draw with a CRS cutoff of 419 and 4,000 ITAs issued. The most recent all-program draw cutoffs have ranged between 470\u2013527 in 2025\u20132026.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the lowest CRS cutoff score ever in Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The lowest ever Express Entry CRS cutoff score was 75 points, set during a CEC-specific draw in February 2021 when IRCC was clearing the Express Entry backlog. The lowest all-program cutoff was 413 in September 2021.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the highest CRS cutoff score ever in Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The highest all-program CRS cutoff was 886 points. However, PNP-specific draws regularly see cutoffs of 700\u2013800+ because provincial nominees already receive +600 CRS points. For non-PNP all-program draws, the historical high was around 557 points (July 2022).\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How often does IRCC hold Express Entry draws?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"IRCC typically holds Express Entry draws every 1\u20132 weeks. In 2025, IRCC significantly increased draw frequency, sometimes holding multiple draws per week across different categories. Draws can be all-program, program-specific (CEC, FSW, FST), category-based (French, STEM, healthcare, trades), or PNP-specific.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is a category-based Express Entry draw?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Since May 2023, IRCC has introduced category-based draws targeting specific groups: French-language proficiency, STEM occupations, healthcare and social services, trades, transport, and agriculture. These draws often have lower CRS cutoffs than all-program draws, giving candidates in priority categories a better chance at an ITA even with a lower overall CRS score.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What happens if two candidates have the same CRS score?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"IRCC uses a tie-breaking rule based on the date and time a candidate submitted or last updated their Express Entry profile. If two candidates have the same CRS score at the cutoff, the one who submitted their profile earlier (before the tie-break timestamp) receives the ITA. This is why updating your profile without a good reason can hurt your tie-break position.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"CRS Cutoff Scores\", \"item\": \"/crs-cutoff-scores\" }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"CRS Cutoff Scores History \u2013 Express Entry Draw Results & Trends 2026\",\n    \"description\": \"Complete Express Entry CRS cutoff scores history 2015\u20132026. All draw results, category breakdowns, trends, and predictions.\",\n    \"url\": \"/crs-cutoff-scores\",\n    \"datePublished\": \"2025-01-01\",\n    \"dateModified\": \"2026-04-18\",\n    \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/logo.png\" }\n    }\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

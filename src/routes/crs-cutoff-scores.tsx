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
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is the minimum CRS score for Canada PR?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"There is no fixed minimum CRS score for Canada PR — the cutoff is set by each draw and equals the score of the lowest-ranked candidate invited. In recent rounds, all-program cutoffs have sat between 470 and 525, category-based and French-language draws have gone as low as the high 300s, and PNP-only draws sit far higher because of the +600 nomination bonus. As a practical target, aim for 470+ for general draws; below that, a provincial nomination or a category-based draw is usually the realistic route. The latest confirmed cutoff is shown at the top of this page. Estimate your own number with the CRS calculator.\"}}, {\"@type\": \"Question\", \"name\": \"What is the latest Express Entry CRS cutoff in 2026?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The latest Express Entry draw (#411) was held on April 15, 2026. It was a French-Language proficiency draw with a CRS cutoff of 419 and 4,000 ITAs issued. The most recent all-program draw cutoffs ranged from 487–491. Verify on the official IRCC page →\"}}, {\"@type\": \"Question\", \"name\": \"What is the lowest CRS cutoff score in Express Entry history?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The lowest ever Express Entry CRS cutoff was 75 points during a CEC draw in February 2021, when IRCC was rapidly clearing the backlog of applications during COVID-19. For all-program draws, the lowest cutoff was 413 in September 2021. These extreme lows are unlikely to recur under normal circumstances.\"}}, {\"@type\": \"Question\", \"name\": \"How often does IRCC hold Express Entry draws?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"IRCC typically holds draws every 1–2 weeks. In 2025, the pace increased significantly — sometimes multiple draws per week in December 2025 when IRCC was meeting annual targets. Draw frequency depends on IRCC's admission targets, pool size, and processing capacity. There is no guaranteed schedule.\"}}, {\"@type\": \"Question\", \"name\": \"What is a category-based Express Entry draw?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Since May 2023, IRCC uses category-based draws targeting specific occupations and profiles: French-language proficiency, STEM occupations, healthcare and social services, trades, transport, and agriculture. These draws often have lower CRS cutoffs than all-program draws. You must meet both the program eligibility and the category criteria to be considered in a category draw.\"}}, {\"@type\": \"Question\", \"name\": \"Why do PNP draws have such high CRS cutoffs (700+)?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"PNP (Provincial Nominee Program) draws have very high cutoffs because provincial nominees receive an automatic +600 CRS points bonus. A candidate with a base score of 150 becomes 750 after a provincial nomination. The 700+ cutoff in PNP draws simply reflects this bonus. The actual base CRS scores of those invited are much lower. Use our PNP CRS Calculator to see your score with a nomination.\"}}, {\"@type\": \"Question\", \"name\": \"What happens if I miss the CRS cutoff by 1 point?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If your CRS score is 1 point below the draw cutoff, you simply remain in the pool and wait for the next draw. Your profile stays active for 12 months. Cutoffs fluctuate with every draw — a score that misses one draw's cutoff may qualify in the next. You can also actively improve your CRS score by retaking language tests, gaining more work experience, or pursuing a provincial nomination.\"}}]}" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"CRS Cutoff Scores\", \"item\": \"/crs-cutoff-scores\" }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"CRS Cutoff Scores History \u2013 Express Entry Draw Results & Trends 2026\",\n    \"description\": \"Complete Express Entry CRS cutoff scores history 2015\u20132026. All draw results, category breakdowns, trends, and predictions.\",\n    \"url\": \"/crs-cutoff-scores\",\n    \"datePublished\": \"2025-01-01\",\n    \"dateModified\": \"2026-04-18\",\n    \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/logo.png\" }\n    }\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

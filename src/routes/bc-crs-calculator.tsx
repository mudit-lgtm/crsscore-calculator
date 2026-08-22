import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import RelatedGuides from "@/components/RelatedGuides";
import pageHtml from "@/content/bc_crs_calculator.html?raw";
import pageJs from "@/content/bc_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/bc-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "BC CRS Calculator 2026 - BC PNP Express Entry Score"
      },
      {
            "name": "description",
            "content": "BC CRS calculator for BC PNP applicants. Get your Express Entry score with the BCPNP +600 nomination and compare it to the latest BC draw cutoffs."
      },
      {
            "name": "keywords",
            "content": "bc crs calculator, bc pnp crs calculator, british columbia crs score calculator, crs calculator bc pnp, bc pnp crs score calculator, crs score calculator for bc pnp, calculate crs score for british columbia, bc crs score calculator"
      },
      {
            "name": "robots",
            "content": "index, follow"
      },
      {
            "name": "geo.region",
            "content": "CA-BC"
      },
      {
            "name": "geo.placename",
            "content": "British Columbia, Canada"
      },
      {
            "property": "og:title",
            "content": "BC CRS Calculator 2026 - BC PNP Express Entry Score"
      },
      {
            "property": "og:description",
            "content": "BC CRS calculator for BC PNP applicants. Get your Express Entry score with the BCPNP +600 nomination and compare it to the latest BC draw cutoffs."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/bc-crs-calculator"
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:image",
            "content": "https://crscalculator.site/og-image.png"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "BC CRS Calculator 2026 - BC PNP Express Entry Score"
      },
      {
            "name": "twitter:description",
            "content": "BC CRS calculator for BC PNP applicants. Get your Express Entry score with the BCPNP +600 nomination and compare it to the latest BC draw cutoffs."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/bc-crs-calculator"
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@graph\": [\n      {\n        \"@type\": \"WebSite\",\n        \"@id\": \"/#website\",\n        \"url\": \"/\",\n        \"name\": \"CRS Score Calculator\",\n        \"description\": \"Free Canada Express Entry CRS calculator tools\",\n        \"inLanguage\": \"en\"\n      },\n      {\n        \"@type\": \"WebPage\",\n        \"@id\": \"/bc-crs-calculator\",\n        \"url\": \"/bc-crs-calculator\",\n        \"name\": \"BC CRS Calculator 2026 \u2013 British Columbia PNP Express Entry Points Tool\",\n        \"description\": \"Free BC PNP CRS calculator for British Columbia. Calculate your CRS score with BCPNP nomination points. Updated for 2026 IRCC draws.\",\n        \"inLanguage\": \"en\",\n        \"isPartOf\": {\"@id\": \"/#website\"},\n        \"breadcrumb\": {\"@id\": \"/bc-crs-calculator#breadcrumb\"},\n        \"dateModified\": \"2026-04-19\",\n        \"about\": {\n          \"@type\": \"Thing\",\n          \"name\": \"BC Provincial Nominee Program\",\n          \"sameAs\": \"https://www.welcomebc.ca/Immigrate-to-B-C/BC-PNP-Overview\"\n        },\n        \"speakable\": {\n          \"@type\": \"SpeakableSpecification\",\n          \"cssSelector\": [\".hero h1\", \".hero p\", \"#what-is-bcpnp\", \"#bc-score-ranges\"]\n        }\n      },\n      {\n        \"@type\": \"BreadcrumbList\",\n        \"@id\": \"/bc-crs-calculator#breadcrumb\",\n        \"itemListElement\": [\n          {\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\"},\n          {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"CRS Calculator\", \"item\": \"/express-entry-crs-calculator\"},\n          {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"BC CRS Calculator\", \"item\": \"/bc-crs-calculator\"}\n        ]\n      },\n      {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"BC CRS Calculator 2026\",\n        \"applicationCategory\": \"UtilitiesApplication\",\n        \"operatingSystem\": \"Web Browser\",\n        \"url\": \"/bc-crs-calculator\",\n        \"description\": \"Free online BC PNP CRS score calculator for British Columbia Provincial Nominee Program applicants. Calculates CRS score including BCPNP +600 nomination bonus. Covers all CRS sections.\",\n        \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\"},\n        \"featureList\": \"BC PNP CRS calculation, BCPNP +600 nomination bonus, IELTS/CELPIP support, full score breakdown, instant results\",\n        \"aggregateRating\": {\n          \"@type\": \"AggregateRating\",\n          \"ratingValue\": \"4.9\",\n          \"reviewCount\": \"612\",\n          \"bestRating\": \"5\"\n        }\n      },\n      {\n        \"@type\": \"FAQPage\",\n        \"mainEntity\": [\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the BC CRS Calculator?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The BC CRS Calculator is a free tool that estimates your Comprehensive Ranking System (CRS) score for British Columbia PNP (BCPNP) applicants. It calculates your full Express Entry CRS score including the +600 BCPNP nomination bonus, which virtually guarantees an Invitation to Apply (ITA) at the next Express Entry draw.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How much does a BC PNP nomination add to CRS score?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"A valid BC PNP nomination adds 600 points to your CRS score. Since all-program Express Entry draw cutoffs are typically 470\u2013525, a nomination of +600 virtually guarantees you will receive an ITA regardless of your base CRS score. You still need a minimum base score to qualify for the BCPNP skills immigration streams.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What are the BC PNP Express Entry streams?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"BC PNP offers Express Entry-aligned streams including: (1) Skilled Worker in BC \u2013 for workers with a BC job offer in NOC TEER 0/1/2/3; (2) International Graduate \u2013 for BC post-secondary graduates with a job offer; (3) Entry Level and Semi-Skilled \u2013 for workers in NOC TEER 4/5 in specific sectors; (4) BC PNP Tech Pilot \u2013 for workers in 29 in-demand tech occupations with or without a job offer.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Do I need a job offer for BC PNP?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Most BC PNP streams require a job offer from a BC employer. However, the BC PNP Tech Pilot allows applications without a job offer for candidates with tech sector experience in one of 29 eligible NOC codes. International graduates from BC institutions also need a job offer in most streams.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the BC PNP Tech Pilot?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The BC PNP Tech Pilot is a fast-tracked immigration stream for workers in 29 in-demand technology occupations including software engineers, data scientists, cybersecurity specialists, and IT managers. Tech Pilot candidates can apply without a job offer in some cases, and the program has weekly registration intakes with competitive scores.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What CRS score do I need for BC PNP in 2026?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"For BC PNP Express Entry-aligned streams, you need to be in the Express Entry pool (minimum eligible CRS score). The BCPNP then sends you a registration of interest (ROI) invitation based on your BC registration score. After receiving a BCPNP nomination, you get +600 CRS points, making the final CRS score 600+ your base score \u2014 well above any draw cutoff.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How do I calculate my CRS score for BC PNP?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Use the free BC CRS Calculator above. Enter your age, education, language scores (IELTS/CELPIP), work experience, and select 'Yes' under BC PNP Nomination to automatically add the +600 points. The tool shows your estimated total CRS score out of 1,200 with a full breakdown.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Can I apply for BC PNP and CEC or FSW at the same time?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes. You can be in the Express Entry pool under CEC, FSW, or FST and simultaneously apply to BCPNP. Many candidates apply to multiple provincial programs while waiting in the pool. A BCPNP nomination adds +600 to your Express Entry CRS score, drastically improving your chances of receiving an ITA.\"\n            }\n          }\n        ]\n      },\n      {\n        \"@type\": \"HowTo\",\n        \"name\": \"How to Calculate Your BC PNP CRS Score\",\n        \"description\": \"Step-by-step guide for British Columbia PNP applicants to calculate their CRS score.\",\n        \"totalTime\": \"PT3M\",\n        \"step\": [\n          {\"@type\": \"HowToStep\", \"position\": 1, \"name\": \"Enter Core Details\", \"text\": \"Select your age, education level, and marital status in Section A.\"},\n          {\"@type\": \"HowToStep\", \"position\": 2, \"name\": \"Add Language Scores\", \"text\": \"Enter your IELTS, CELPIP, TEF, or TCF scores. All four skills are required.\"},\n          {\"@type\": \"HowToStep\", \"position\": 3, \"name\": \"Enter Work Experience\", \"text\": \"Select Canadian and foreign work experience years. Canadian experience adds direct CRS points.\"},\n          {\"@type\": \"HowToStep\", \"position\": 4, \"name\": \"Select BC PNP Nomination\", \"text\": \"Under Additional Points, select 'Yes \u2013 BC PNP nomination' to add +600 CRS points.\"},\n          {\"@type\": \"HowToStep\", \"position\": 5, \"name\": \"Calculate\", \"text\": \"Click 'Calculate My BC CRS Score' to see your total with a full section-by-section breakdown.\"}\n        ]\n      },\n      {\n        \"@type\": \"ItemList\",\n        \"name\": \"BC PNP Express Entry Streams 2026\",\n        \"itemListElement\": [\n          {\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Skilled Worker in BC\", \"description\": \"For Express Entry candidates with a BC job offer in NOC TEER 0/1/2/3\"},\n          {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"International Graduate\", \"description\": \"For BC post-secondary graduates with a qualifying BC job offer\"},\n          {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"BC PNP Tech Pilot\", \"description\": \"For tech workers in 29 in-demand NOC codes, some without a job offer\"},\n          {\"@type\": \"ListItem\", \"position\": 4, \"name\": \"Entry Level and Semi-Skilled\", \"description\": \"For NOC TEER 4/5 workers in tourism, food processing, or long-haul trucking\"}\n        ]\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"BC CRS Calculator 2026 - BC PNP Express Entry Score\", \"url\": \"https://crscalculator.site/bc-crs-calculator\", \"description\": \"BC CRS calculator for BC PNP applicants. Get your Express Entry score with the BCPNP +600 nomination and compare it to the latest BC draw cutoffs.\", \"applicationCategory\": \"UtilityApplication\", \"operatingSystem\": \"All\", \"browserRequirements\": \"Requires JavaScript\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"https://crscalculator.site/\"}}" }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />
      <RelatedGuides path="/bc-crs-calculator" />
    </>
  );
}

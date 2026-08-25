import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/pnp_crs_calculator.html?raw";
import pageJs from "@/content/pnp_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/pnp-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Free PNP CRS Calculator 2026 — +600 Nomination Points"
      },
      {
            "name": "description",
            "content": "See what a provincial nomination does to your score. This PNP CRS calculator adds the +600 boost instantly and shows your ITA odds in 2026 draws."
      },
      {
            "name": "keywords",
            "content": "pnp crs calculator, pnp crs score calculator, provincial nominee program crs calculator, crs calculator for pnp, crs score calculator pnp, alberta pnp crs calculator, ontario pnp crs calculator, bc pnp crs calculator, saskatchewan pnp crs calculator, canada express entry pnp points 2026"
      },
      {
            "property": "og:title",
            "content": "Free PNP CRS Calculator 2026 — +600 Nomination Points"
      },
      {
            "property": "og:description",
            "content": "See what a provincial nomination does to your score. This PNP CRS calculator adds the +600 boost instantly and shows your ITA odds in 2026 draws."
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/pnp-crs-calculator"
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
            "content": "Free PNP CRS Calculator 2026 — +600 Nomination Points"
      },
      {
            "name": "twitter:description",
            "content": "See what a provincial nomination does to your score. This PNP CRS calculator adds the +600 boost instantly and shows your ITA odds in 2026 draws."
      },
      {
            "name": "geo.region",
            "content": "CA"
      },
      {
            "name": "geo.placename",
            "content": "Canada"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/pnp-crs-calculator"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebPage\",\n    \"name\": \"PNP CRS Calculator 2026 \u2013 Provincial Nominee Program +600 Points Tool\",\n    \"url\": \"/pnp-crs-calculator\",\n    \"description\": \"Free PNP CRS Calculator to compute your Express Entry CRS score with +600 provincial nomination points for all Canadian provinces including Ontario, BC, Alberta, Saskatchewan and Manitoba.\",\n    \"inLanguage\": \"en\",\n    \"isPartOf\": {\n      \"@type\": \"WebSite\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\"\n    },\n    \"breadcrumb\": {\n      \"@type\": \"BreadcrumbList\",\n      \"itemListElement\": [\n        {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n        {\"@type\":\"ListItem\",\"position\":2,\"name\":\"PNP CRS Calculator\",\"item\":\"/pnp-crs-calculator\"}\n      ]\n    },\n    \"dateModified\": \"2026-04-19\"\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"SoftwareApplication\",\n    \"name\": \"PNP CRS Calculator 2026\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"Any\",\n    \"url\": \"/pnp-crs-calculator\",\n    \"description\": \"Free online PNP CRS Calculator that adds +600 provincial nomination points to your Canada Express Entry Comprehensive Ranking System score.\",\n    \"offers\": {\n      \"@type\": \"Offer\",\n      \"price\": \"0\",\n      \"priceCurrency\": \"CAD\"\n    },\n    \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"4.8\",\n      \"reviewCount\": \"1240\",\n      \"bestRating\": \"5\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How many CRS points does a provincial nomination add?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"A valid provincial nomination (PNP) under Express Entry adds exactly 600 CRS points to your score, making your total almost certainly high enough to receive an Invitation to Apply (ITA) in the next Express Entry draw.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Which provinces offer PNP streams linked to Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"All provinces except Quebec and Nunavut operate Express Entry-aligned PNP streams: Ontario (OINP), British Columbia (BC PNP), Alberta (AINP), Saskatchewan (SINP), Manitoba (MPNP), Nova Scotia, New Brunswick, PEI, Newfoundland, and the Yukon.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum CRS score to get a provincial nomination?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Each province sets its own Expressions of Interest (EOI) cutoff. Typical provincial EOI scores range from 60\u201390 points on the provincial grid (not the federal CRS). Federal CRS requirements vary by stream \u2014 some streams require no minimum federal CRS, while others target candidates already in the Express Entry pool.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Can I apply for PNP without being in the Express Entry pool?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. There are two PNP pathways: Enhanced PNP (linked to Express Entry pool) where the +600 CRS bonus applies, and Base PNP (paper-based), which does not go through Express Entry and does not add CRS points.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is a good CRS score after PNP nomination?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"After adding +600 PNP points, most candidates will have a combined CRS score well above 700\u2013800, which virtually guarantees an ITA in the very next Express Entry draw. Even a base score of 350 becomes 950+ with the PNP bonus.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How long does the PNP Express Entry process take?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"After receiving a provincial nomination, you must update your Express Entry profile. IRCC typically issues an ITA within days to weeks. The full PR application processing time is about 6 months under Express Entry (IRCC target: 80% within 6 months).\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"HowTo\",\n    \"name\": \"How to Calculate Your PNP CRS Score\",\n    \"description\": \"Step-by-step guide to using the PNP CRS Calculator to estimate your Express Entry score with +600 provincial nomination bonus.\",\n    \"totalTime\": \"PT2M\",\n    \"step\": [\n      {\n        \"@type\": \"HowToStep\",\n        \"position\": 1,\n        \"name\": \"Enter your base profile details\",\n        \"text\": \"Fill in age, education level, marital status, Canadian and foreign work experience.\"\n      },\n      {\n        \"@type\": \"HowToStep\",\n        \"position\": 2,\n        \"name\": \"Add your language test scores\",\n        \"text\": \"Select IELTS, CELPIP, TEF or TCF and enter your Speaking, Listening, Reading and Writing scores.\"\n      },\n      {\n        \"@type\": \"HowToStep\",\n        \"position\": 3,\n        \"name\": \"Select your province\",\n        \"text\": \"Choose the province that has nominated you or that you are targeting for a PNP stream.\"\n      },\n      {\n        \"@type\": \"HowToStep\",\n        \"position\": 4,\n        \"name\": \"View your PNP-boosted CRS score\",\n        \"text\": \"Click Calculate to instantly see your base CRS score plus the +600 PNP bonus and your final total.\"\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Free PNP CRS Calculator 2026 — +600 Nomination Points\", \"url\": \"https://crscalculator.site/pnp-crs-calculator\", \"description\": \"See what a provincial nomination does to your score. This PNP CRS calculator adds the +600 boost instantly and shows your ITA odds in 2026 draws.\", \"applicationCategory\": \"UtilityApplication\", \"operatingSystem\": \"All\", \"browserRequirements\": \"Requires JavaScript\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"https://crscalculator.site/\"}}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

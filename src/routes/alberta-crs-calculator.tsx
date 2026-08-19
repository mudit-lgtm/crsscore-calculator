import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/alberta_crs_calculator.html?raw";
import pageJs from "@/content/alberta_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/alberta-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Alberta CRS Calculator 2026 \u2013 AAIP Express Entry Points Tool | Free Score Check"
      },
      {
            "name": "description",
            "content": "Use our free Alberta CRS Calculator 2026 to check your AAIP Express Entry score instantly. Calculate Alberta PNP CRS points, see latest draw cutoffs, and find out if you qualify for the Alberta Advantage Immigration Program."
      },
      {
            "name": "keywords",
            "content": "alberta crs calculator, alberta crs score calculator, aaip crs calculator, alberta express entry crs calculator, alberta pnp crs calculator, crs score calculator alberta, alberta crs points calculator 2026"
      },
      {
            "property": "og:title",
            "content": "Alberta CRS Calculator 2026 \u2013 Free AAIP Express Entry Points Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your Alberta CRS score free. See if you qualify for the Alberta Advantage Immigration Program (AAIP) Express Entry stream in 2026."
      },
      {
            "property": "og:url",
            "content": "/"
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:image",
            "content": "https://crscalculator.site/og-alberta.png"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"Alberta CRS Calculator 2026\",\n    \"url\": \"/alberta-crs-calculator\",\n    \"description\": \"Free Alberta CRS calculator to estimate your AAIP Express Entry score based on the Comprehensive Ranking System (CRS). Covers Alberta Advantage Immigration Program 2026 cutoffs.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum CRS score for Alberta Express Entry 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The minimum AAIP score for the Alberta Express Entry Stream in 2026 varies by pathway. Recent draws show scores of 59\u201363 for Accelerated Tech, 54\u201361 for Priority Sectors (Construction/Healthcare), and a minimum base CRS of 300 for the general Alberta Express Entry Stream.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How does the Alberta CRS score differ from the federal CRS?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Alberta's AAIP uses its own internal scoring (typically out of 100) separate from the federal CRS (out of 1,200). If AAIP nominates you, you receive +600 federal CRS points, virtually guaranteeing an ITA in the next Express Entry draw.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How do I use this Alberta CRS Calculator?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Enter your age, education level, language test scores (IELTS/CELPIP), Canadian work experience, and spousal factors. The calculator instantly shows your estimated federal CRS score and whether you likely meet Alberta's AAIP Express Entry stream minimum requirements.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What happens after getting an AAIP nomination?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"After receiving an Alberta provincial nomination, IRCC adds 600 points to your federal CRS score. This near-guarantees an Invitation to Apply (ITA) for Canada PR in the next federal Express Entry draw.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Which occupations does Alberta prioritize in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Alberta prioritizes healthcare workers, technology professionals, construction and skilled trades, manufacturing workers, aviation professionals, and agriculture workers under its 2026 AAIP allocation.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Alberta CRS Calculator\", \"item\": \"/alberta-crs-calculator\" }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

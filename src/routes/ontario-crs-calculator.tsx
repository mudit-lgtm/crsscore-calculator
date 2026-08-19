import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/ontario_crs_calculator.html?raw";
import pageJs from "@/content/ontario_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/ontario-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Ontario CRS Calculator 2026 \u2013 Free OINP Express Entry Points Tool | Score Check"
      },
      {
            "name": "description",
            "content": "Use our free Ontario CRS Calculator 2026 to check your OINP Express Entry score instantly. Calculate CRS points for Ontario Human Capital Priorities Stream, see latest draw cutoffs, and find if you qualify for Ontario PNP."
      },
      {
            "name": "keywords",
            "content": "ontario crs calculator, oinp crs calculator, ontario crs score calculator, crs score calculator ontario, ontario express entry crs calculator, ontario pnp crs calculator, oinp points calculator 2026"
      },
      {
            "property": "og:title",
            "content": "Ontario CRS Calculator 2026 \u2013 Free OINP Express Entry Points Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your Ontario CRS score free. Check if you qualify for OINP Human Capital Priorities Stream with updated 2026 draw results."
      },
      {
            "property": "og:url",
            "content": "/"
      },
      {
            "property": "og:type",
            "content": "website"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"Ontario CRS Calculator 2026\",\n    \"url\": \"/ontario-crs-calculator\",\n    \"description\": \"Free Ontario CRS calculator to estimate your OINP Express Entry score. Covers Ontario Human Capital Priorities Stream and In-Demand Skills Stream 2026 cutoffs.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum CRS score for Ontario Express Entry 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The minimum CRS score for Ontario's Human Capital Priorities Stream is 400 points. However, OINP typically sends Notifications of Interest (NOIs) to candidates with scores between 400\u2013540. The April 2026 OINP In-Demand Skills draw issued 1,334 invitations targeting 39 priority occupations.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How does an Ontario PNP nomination affect my federal CRS score?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"An Ontario provincial nomination (OINP) adds +600 federal CRS points to your Express Entry profile, virtually guaranteeing an ITA in the next federal draw. PNP-only draws in 2026 have had cutoffs around 786\u2013802.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What are the eligibility requirements for Ontario Human Capital Priorities Stream?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Requirements include: a valid Express Entry profile, minimum CRS of 400, a Bachelor's/Master's/PhD degree (or equivalent ECA), at least 1 year of skilled work experience in NOC TEER 0/1/2/3, and CLB 7 or higher in all four language skills.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How does Ontario CRS score differ from the federal CRS?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The federal CRS (out of 1,200) is used to rank all Express Entry candidates. Ontario's OINP uses your federal CRS score as an eligibility threshold (minimum 400) and then applies its own criteria to identify and invite candidates via Notifications of Interest (NOIs).\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Which occupations does Ontario prioritize for OINP in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Ontario's 2026 In-Demand Skills Stream targets 39 occupations including healthcare workers (nurses, personal support workers), tech professionals (software engineers, data analysts), skilled trades, construction workers, and manufacturing workers.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Ontario CRS Calculator\", \"item\": \"/ontario-crs-calculator\" }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

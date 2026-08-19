import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/stem_crs_calculator.html?raw";
import pageJs from "@/content/stem_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/stem-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "STEM CRS Calculator 2026 \u2013 Express Entry Science Technology Engineering Math"
      },
      {
            "name": "description",
            "content": "Free STEM CRS Calculator for Canada Express Entry 2026. Check if your NOC code qualifies for STEM category draws. See all 11 eligible STEM occupations, CRS cutoff history, and calculate your score."
      },
      {
            "name": "keywords",
            "content": "stem crs calculator, express entry stem calculator, stem category draw canada, stem express entry 2026, canada stem immigration calculator, express entry stem noc codes, stem category crs cutoff, science technology engineering math canada pr, stem express entry points calculator"
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
            "content": "STEM CRS Calculator 2026 \u2013 Express Entry Category Draw Tool"
      },
      {
            "property": "og:description",
            "content": "Check your STEM Express Entry eligibility and CRS score. See all 11 eligible STEM NOC codes and past STEM draw cutoffs. Free tool, no login."
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
            "property": "og:site_name",
            "content": "CRS Score Calculator"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "STEM CRS Calculator 2026 \u2013 Express Entry Category Draw Tool"
      },
      {
            "name": "twitter:description",
            "content": "Free STEM Express Entry CRS calculator. Check your NOC code eligibility and calculate your score instantly."
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Poppins:wght@600;700&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"STEM CRS Calculator \u2013 Canada Express Entry 2026\",\n    \"url\": \"/stem-crs-calculator\",\n    \"description\": \"Free STEM Express Entry CRS Calculator. Check STEM category eligibility and calculate CRS score for Science, Technology, Engineering and Math workers applying to Canada.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"4.8\", \"ratingCount\": \"2140\", \"bestRating\": \"5\" },\n    \"publisher\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the STEM category draw in Express Entry?\",\n        \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The STEM category draw is a type of Express Entry draw introduced by IRCC in 2023 targeting candidates with work experience in Science, Technology, Engineering and Math occupations. Candidates must have at least 1 year of STEM work experience in the past 3 years in one of the 11 eligible NOC codes. STEM draws typically have lower CRS cutoffs than all-program draws, giving STEM workers a better chance at an Invitation to Apply (ITA).\" }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Which NOC codes are eligible for STEM Express Entry draws?\",\n        \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The 11 NOC codes eligible for STEM Express Entry category draws are: Architecture and science managers (20011), Cybersecurity specialists (21220), Civil engineers (21300), Mechanical engineers (21301), Electrical and electronics engineers (21310), Industrial and manufacturing engineers (21321), Geological engineers (21331), Civil engineering technologists and technicians (22300), Mechanical engineering technologists and technicians (22301), Electrical and electronics engineering technologists and technicians (22310), and Insurance agents and brokers (63100).\" }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum CRS score for a STEM Express Entry draw?\",\n        \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"STEM category draw CRS cutoffs have ranged from 481 to 496 in recent draws. The most recent STEM draw (#315, January 2026) had a cutoff of 481. STEM draws generally have CRS cutoffs 10\u201330 points lower than all-program draws, making them very beneficial for eligible tech and engineering workers.\" }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Is software developer eligible for STEM Express Entry draw?\",\n        \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"No. Software developers and programmers (NOC 21232) are NOT currently on the official STEM Express Entry category list. The 11 eligible STEM NOC codes focus on engineering disciplines and cybersecurity. Software developers can still apply through all-program Express Entry draws. Always check the official IRCC category list for the most current eligible NOC codes.\" }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How do I qualify for a STEM category Express Entry draw?\",\n        \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"To qualify for a STEM Express Entry category draw you need: (1) An active Express Entry profile, (2) Eligibility under FSW, CEC, or FST program, (3) At least 1 year of work experience in the past 3 years in one of the 11 eligible STEM NOC codes, and (4) A CRS score at or above the draw cutoff when IRCC holds a STEM-specific draw.\" }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry CRS Calculator\", \"item\": \"/express-entry-crs-calculator\" },\n      { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"STEM CRS Calculator\", \"item\": \"/stem-crs-calculator\" }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Article\",\n    \"headline\": \"STEM CRS Calculator 2026 \u2013 Express Entry Science Technology Engineering Math Guide\",\n    \"description\": \"Complete guide to STEM Express Entry category draws. Check eligible NOC codes, calculate your CRS score, and see STEM draw cutoff history.\",\n    \"url\": \"/stem-crs-calculator\",\n    \"datePublished\": \"2025-01-01\",\n    \"dateModified\": \"2026-04-18\",\n    \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"/\" },\n    \"publisher\": { \"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/logo.png\" } }\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

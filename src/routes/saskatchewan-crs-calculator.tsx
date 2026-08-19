import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/saskatchewan_crs_calculator.html?raw";
import pageJs from "@/content/saskatchewan_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/saskatchewan-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Saskatchewan CRS Calculator 2026 \u2013 SINP Express Entry Points Tool"
      },
      {
            "name": "description",
            "content": "Free Saskatchewan CRS calculator 2026. Estimate your SINP Express Entry Stream CRS score with age, education, language CLB, and work experience points. Instant results, mobile-friendly."
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
            "content": "Saskatchewan CRS Calculator 2026 \u2013 SINP Express Entry Points Tool"
      },
      {
            "property": "og:description",
            "content": "Estimate your Saskatchewan SINP Express Entry Stream CRS score. Free, instant, mobile-friendly."
      },
      {
            "property": "og:url",
            "content": "/saskatchewan-crs-calculator"
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
            "content": "Saskatchewan CRS Calculator 2026 \u2013 SINP Express Entry Points Tool"
      },
      {
            "name": "twitter:description",
            "content": "Free SINP CRS calculator updated for Canada Express Entry 2026."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/saskatchewan-crs-calculator"
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"name\": \"CRS Calculator\",\n  \"url\": \"/\",\n  \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"/?q={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n  }\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n    { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"PNP Calculators\", \"item\": \"/pnp-crs-calculator\" },\n    { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Saskatchewan CRS Calculator\", \"item\": \"/saskatchewan-crs-calculator\" }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebPage\",\n  \"name\": \"Saskatchewan CRS Calculator 2026 \u2013 SINP Express Entry Points Tool\",\n  \"url\": \"/saskatchewan-crs-calculator\",\n  \"description\": \"Free Saskatchewan SINP CRS calculator. Estimate your Canada PR score with education, language CLB, work experience and age points for the SINP Express Entry stream.\",\n  \"isPartOf\": { \"@type\": \"WebSite\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"about\": [\n    { \"@type\": \"Thing\", \"name\": \"Saskatchewan CRS calculator\" },\n    { \"@type\": \"Thing\", \"name\": \"SINP Express Entry Sub-Category\" },\n    { \"@type\": \"Thing\", \"name\": \"Saskatchewan PNP CRS score\" },\n    { \"@type\": \"Thing\", \"name\": \"Canada Express Entry CRS points\" }\n  ],\n  \"speakable\": {\n    \"@type\": \"SpeakableSpecification\",\n    \"cssSelector\": [\"h1\", \".hero p\", \".faq summary\"]\n  }\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"SoftwareApplication\",\n  \"name\": \"Saskatchewan CRS Calculator 2026\",\n  \"applicationCategory\": \"CalculatorApplication\",\n  \"operatingSystem\": \"Web\",\n  \"url\": \"/saskatchewan-crs-calculator\",\n  \"description\": \"Free Saskatchewan SINP Express Entry CRS calculator. Estimate Canada PR CRS score instantly with age, education, language CLB and work experience.\",\n  \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\" },\n  \"publisher\": { \"@type\": \"Organization\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"featureList\": [\n    \"Saskatchewan SINP CRS score estimation\",\n    \"SINP Express Entry Sub-Category points\",\n    \"Language CLB to CRS conversion\",\n    \"600-point SINP nomination bonus\",\n    \"Saskatchewan connection bonus field\",\n    \"Three-level eligibility banner\",\n    \"Auto-calculates on dropdown change\"\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is the Saskatchewan CRS calculator?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"It estimates your CRS score for the SINP Express Entry Sub-Category to assess your chances of receiving a Saskatchewan provincial nomination for Canada PR.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is a good CRS score for Saskatchewan?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A score above 450 is competitive for the SINP pool. A SINP nomination adds 600 CRS bonus points, making almost any profile competitive for a federal Invitation to Apply.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Does Saskatchewan use the federal CRS?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. The SINP Express Entry Sub-Category uses the standard federal CRS. Saskatchewan adds 600 CRS points when it nominates a candidate.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What occupations does Saskatchewan target through SINP?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Saskatchewan prioritises healthcare, agriculture, trucking and transportation, skilled trades, and technology workers whose skills match provincial labour market needs.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Is this Saskatchewan CRS calculator accurate?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"This tool uses the official IRCC CRS points grid and SINP guidelines for a reliable estimate. Always verify with the IRCC official CRS tool before filing your Express Entry profile.\" }\n    }\n  ]\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

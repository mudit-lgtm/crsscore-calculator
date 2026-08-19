import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/manitoba_crs_calculator.html?raw";
import pageJs from "@/content/manitoba_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/manitoba-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Manitoba CRS Calculator 2026 \u2013 MPNP Express Entry Stream Points Tool"
      },
      {
            "name": "description",
            "content": "Free Manitoba CRS calculator 2026. Estimate your MPNP Express Entry Stream CRS score with education, language, work experience and age points. Mobile-friendly, instant results."
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
            "content": "Manitoba CRS Calculator 2026 \u2013 MPNP Express Entry Stream Points Tool"
      },
      {
            "property": "og:description",
            "content": "Estimate your Manitoba PNP Express Entry Stream CRS score. Free, instant and mobile-friendly."
      },
      {
            "property": "og:url",
            "content": "/"
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
            "content": "Manitoba CRS Calculator 2026 \u2013 MPNP Express Entry Stream Points Tool"
      },
      {
            "name": "twitter:description",
            "content": "Free MPNP CRS calculator updated for Canada Express Entry 2026."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/"
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n    { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"PNP Calculators\", \"item\": \"/pnp-crs-calculator\" },\n    { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Manitoba CRS Calculator\", \"item\": \"/manitoba-crs-calculator\" }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebPage\",\n  \"name\": \"Manitoba CRS Calculator 2026 \u2013 MPNP Express Entry Stream Points Tool\",\n  \"url\": \"/manitoba-crs-calculator\",\n  \"description\": \"Free Manitoba CRS calculator for MPNP Express Entry Stream. Estimate your CRS score with education, language, work experience and age points for Canada PR.\",\n  \"isPartOf\": { \"@type\": \"WebSite\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"about\": [\n    { \"@type\": \"Thing\", \"name\": \"Manitoba CRS calculator\" },\n    { \"@type\": \"Thing\", \"name\": \"MPNP Express Entry Stream\" },\n    { \"@type\": \"Thing\", \"name\": \"Manitoba PNP CRS score\" },\n    { \"@type\": \"Thing\", \"name\": \"Canada Express Entry CRS points\" }\n  ],\n  \"speakable\": {\n    \"@type\": \"SpeakableSpecification\",\n    \"cssSelector\": [\"h1\", \".hero p\", \".faq summary\"]\n  }\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"SoftwareApplication\",\n  \"name\": \"Manitoba CRS Calculator 2026\",\n  \"applicationCategory\": \"CalculatorApplication\",\n  \"operatingSystem\": \"Web\",\n  \"url\": \"/manitoba-crs-calculator\",\n  \"description\": \"Free Manitoba PNP Express Entry Stream CRS calculator. Estimate your Canada PR CRS score instantly with age, education, language and work experience.\",\n  \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\" },\n  \"publisher\": { \"@type\": \"Organization\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"featureList\": [\n    \"Manitoba MPNP CRS score estimation\",\n    \"MPNP Express Entry Stream points\",\n    \"Language CLB to CRS conversion\",\n    \"600-point PNP nomination bonus\",\n    \"Mobile-friendly instant calculation\"\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is the Manitoba CRS calculator?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"It estimates your Comprehensive Ranking System score for the MPNP Express Entry Stream to assess your chances of receiving a Manitoba provincial nomination for Canada PR.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is a good CRS score for Manitoba?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A score above 450 gives you a reasonable MPNP EOI pool chance. A Manitoba nomination adds 600 CRS points, making almost any profile competitive for a federal ITA.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Does Manitoba use the federal CRS?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. The MPNP Express Entry Stream uses the standard federal CRS framework. Manitoba adds 600 points when it nominates a candidate.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How can I improve my CRS score for Manitoba?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Improve IELTS score to CLB 9+, gain Canadian work experience, complete a Canadian study program, or obtain an LMIA-supported Manitoba job offer.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Is this Manitoba CRS calculator accurate?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"This tool is based on the official IRCC CRS points grid and MPNP guidelines. Always verify with the IRCC official tool before filing your Express Entry profile.\" }\n    }\n  ]\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

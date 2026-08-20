import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/ielts_crs_calculator.html?raw";
import pageJs from "@/content/ielts_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/ielts-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "IELTS CRS Calculator - IELTS to CLB Points Tool"
      },
      {
            "name": "description",
            "content": "Convert IELTS bands to CLB and see how many CRS points each score earns. Find out what a retake to CLB 9 is worth before you pay for another test."
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
            "content": "IELTS CRS Calculator - IELTS to CLB Points Tool"
      },
      {
            "property": "og:description",
            "content": "Convert IELTS bands to CLB and see how many CRS points each score earns. Find out what a retake to CLB 9 is worth before you pay for another test."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/ielts-crs-calculator"
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
            "content": "IELTS CRS Calculator - IELTS to CLB Points Tool"
      },
      {
            "name": "twitter:description",
            "content": "Convert IELTS bands to CLB and see how many CRS points each score earns. Find out what a retake to CLB 9 is worth before you pay for another test."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/ielts-crs-calculator"
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
      { type: "application/ld+json", children: "{\n    \"@context\":\"https://schema.org\",\n    \"@type\":\"WebSite\",\n    \"name\":\"CRS Calculator\",\n    \"url\":\"/\",\n    \"potentialAction\":{\n      \"@type\":\"SearchAction\",\n      \"target\":\"/?q={search_term_string}\",\n      \"query-input\":\"required name=search_term_string\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\":\"https://schema.org\",\n    \"@type\":\"BreadcrumbList\",\n    \"itemListElement\":[\n      {\n        \"@type\":\"ListItem\",\n        \"position\":1,\n        \"name\":\"Home\",\n        \"item\":\"/\"\n      },\n      {\n        \"@type\":\"ListItem\",\n        \"position\":2,\n        \"name\":\"Tools\",\n        \"item\":\"/tools\"\n      },\n      {\n        \"@type\":\"ListItem\",\n        \"position\":3,\n        \"name\":\"IELTS to CRS Points Calculator 2026\",\n        \"item\":\"/ielts-crs-calculator\"\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\":\"https://schema.org\",\n    \"@type\":\"WebPage\",\n    \"name\":\"IELTS to CRS Points Calculator 2026 \u2013 Express Entry Language Score Converter\",\n    \"url\":\"/ielts-crs-calculator\",\n    \"description\":\"Convert IELTS scores to CLB levels and estimate Express Entry CRS language points for Canada PR in 2026.\",\n    \"isPartOf\":{\n      \"@type\":\"WebSite\",\n      \"name\":\"CRS Calculator\",\n      \"url\":\"/\"\n    },\n    \"about\":[\n      {\"@type\":\"Thing\",\"name\":\"IELTS to CRS calculator\"},\n      {\"@type\":\"Thing\",\"name\":\"IELTS CRS score calculator\"},\n      {\"@type\":\"Thing\",\"name\":\"IELTS score to CRS points calculator\"},\n      {\"@type\":\"Thing\",\"name\":\"Canada Express Entry language points\"}\n    ],\n    \"primaryImageOfPage\":\"/og-image.jpg\",\n    \"speakable\":{\n      \"@type\":\"SpeakableSpecification\",\n      \"cssSelector\":[\"h1\",\".hero p\",\".faq summary\"]\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\":\"https://schema.org\",\n    \"@type\":\"SoftwareApplication\",\n    \"name\":\"IELTS to CRS Points Calculator 2026\",\n    \"applicationCategory\":\"CalculatorApplication\",\n    \"operatingSystem\":\"Web\",\n    \"url\":\"/ielts-crs-calculator\",\n    \"description\":\"Free online calculator to convert IELTS bands to CLB levels and estimate CRS language points for Canada Express Entry.\",\n    \"offers\":{\n      \"@type\":\"Offer\",\n      \"price\":\"0\",\n      \"priceCurrency\":\"USD\"\n    },\n    \"publisher\":{\n      \"@type\":\"Organization\",\n      \"name\":\"CRS Calculator\",\n      \"url\":\"/\"\n    },\n    \"featureList\":[\n      \"IELTS to CLB conversion\",\n      \"CRS language points estimate\",\n      \"Single and spouse modes\",\n      \"Mobile-friendly calculator\",\n      \"Internal links to CRS tools\"\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\":\"https://schema.org\",\n    \"@type\":\"FAQPage\",\n    \"mainEntity\":[\n      {\n        \"@type\":\"Question\",\n        \"name\":\"How do I convert IELTS to CRS points?\",\n        \"acceptedAnswer\":{\n          \"@type\":\"Answer\",\n          \"text\":\"Convert each IELTS band to a CLB level first, then apply CRS language points according to whether you have an accompanying spouse.\"\n        }\n      },\n      {\n        \"@type\":\"Question\",\n        \"name\":\"Is IELTS General or Academic used for Express Entry?\",\n        \"acceptedAnswer\":{\n          \"@type\":\"Answer\",\n          \"text\":\"Express Entry applicants generally use IELTS General Training for immigration language scoring.\"\n        }\n      },\n      {\n        \"@type\":\"Question\",\n        \"name\":\"What IELTS score equals CLB 9?\",\n        \"acceptedAnswer\":{\n          \"@type\":\"Answer\",\n          \"text\":\"CLB 9 usually means Listening 8.0, Reading 7.0, Writing 7.0 and Speaking 7.0 in IELTS General Training.\"\n        }\n      },\n      {\n        \"@type\":\"Question\",\n        \"name\":\"Does this page show my full CRS score?\",\n        \"acceptedAnswer\":{\n          \"@type\":\"Answer\",\n          \"text\":\"No. This page estimates first official language CRS points only. Use the full CRS calculator for total Express Entry score estimation.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"IELTS CRS Calculator - IELTS to CLB Points Tool\", \"url\": \"https://crscalculator.site/ielts-crs-calculator\", \"description\": \"Convert IELTS bands to CLB and see how many CRS points each score earns. Find out what a retake to CLB 9 is worth before you pay for another test.\", \"applicationCategory\": \"UtilityApplication\", \"operatingSystem\": \"All\", \"browserRequirements\": \"Requires JavaScript\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"https://crscalculator.site/\"}}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

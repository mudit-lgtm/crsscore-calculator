import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/canada_express_entry_eligibility.html?raw";
import pageJs from "@/content/canada_express_entry_eligibility.pagejs.txt?raw";

export const Route = createFileRoute("/canada-express-entry-eligibility")({
  head: () => ({
    meta: [
      {
            "title": "Canada Express Entry Eligibility 2026 \u2013 Requirements & CRS Criteria"
      },
      {
            "name": "description",
            "content": "Complete guide to Canada Express Entry eligibility 2026. Learn FSW, CEC and FST requirements, CRS criteria, language scores, work experience rules and how to check your score."
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
            "content": "article"
      },
      {
            "property": "og:title",
            "content": "Canada Express Entry Eligibility 2026 \u2013 Requirements & CRS Criteria"
      },
      {
            "property": "og:description",
            "content": "Learn who qualifies for Canada Express Entry 2026. FSW, CEC, FST requirements, CRS score criteria, language CLB, and work experience rules explained."
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
            "property": "article:published_time",
            "content": "2026-01-01T00:00:00+00:00"
      },
      {
            "property": "article:modified_time",
            "content": "2026-04-01T00:00:00+00:00"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "Canada Express Entry Eligibility 2026 \u2013 Requirements & CRS Criteria"
      },
      {
            "name": "twitter:description",
            "content": "Who qualifies for Canada Express Entry 2026? FSW, CEC, FST requirements and CRS criteria explained."
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"Canada Express Entry Eligibility 2026 \u2013 Requirements & CRS Criteria\",\n  \"description\": \"Complete guide to Canada Express Entry eligibility 2026. FSW, CEC and FST requirements, CRS criteria, language CLB, work experience rules and how to check your score.\",\n  \"url\": \"/canada-express-entry-eligibility\",\n  \"datePublished\": \"2026-01-01\",\n  \"dateModified\": \"2026-04-01\",\n  \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"CRS Calculator\",\n    \"url\": \"/\",\n    \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/og-image.jpg\" }\n  },\n  \"mainEntityOfPage\": { \"@type\": \"WebPage\", \"@id\": \"/canada-express-entry-eligibility\" },\n  \"about\": [\n    { \"@type\": \"Thing\", \"name\": \"Canada Express Entry eligibility\" },\n    { \"@type\": \"Thing\", \"name\": \"Express Entry requirements 2026\" },\n    { \"@type\": \"Thing\", \"name\": \"CRS score criteria\" },\n    { \"@type\": \"Thing\", \"name\": \"Federal Skilled Worker eligibility\" },\n    { \"@type\": \"Thing\", \"name\": \"Canadian Experience Class requirements\" }\n  ],\n  \"speakable\": {\n    \"@type\": \"SpeakableSpecification\",\n    \"cssSelector\": [\"h1\", \".post-lead\", \".faq summary\", \".info-box\"]\n  }\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n    { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry Calculator\", \"item\": \"/express-entry-crs-calculator\" },\n    { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Canada Express Entry Eligibility 2026\", \"item\": \"/canada-express-entry-eligibility\" }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Who is eligible for Canada Express Entry?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"You are eligible if you meet the minimum requirements for FSW (67 grid points + 1 yr skilled experience), CEC (1 yr Canadian skilled work experience), or FST (2 yrs trades experience + job offer or trade certificate). A valid language test result is required for all programs.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is the minimum CRS score to get a Canada PR invitation?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"There is no fixed minimum. The cutoff varies each draw. Recent all-program draw cutoffs have ranged from 470 to 525 CRS points.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What language score do I need for Express Entry?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"FSW and CEC NOC TEER 0/1 require CLB 7 in all four abilities. CEC TEER 2/3 requires CLB 5. FST requires CLB 5 speaking/listening and CLB 4 reading/writing.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Can I apply for Express Entry without Canadian work experience?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes \u2014 FSW and FST accept foreign work experience. CEC requires Canadian work experience. Canadian experience earns up to 80 CRS points vs 25 for foreign experience.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How does a PNP nomination help Express Entry eligibility?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A provincial nomination through an Enhanced PNP stream adds 600 CRS points, virtually guaranteeing an Invitation to Apply (ITA) regardless of your base CRS score.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How long does Express Entry processing take?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"IRCC targets 6 months or less for most complete Express Entry applications. Processing begins once you receive an ITA and submit your full application.\" }\n    }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"name\": \"CRS Calculator\",\n  \"url\": \"/\",\n  \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"/?q={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n  }\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

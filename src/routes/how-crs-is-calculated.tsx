import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import RelatedGuides from "@/components/RelatedGuides";
import pageHtml from "@/content/how_crs_is_calculated.html?raw";
import pageJs from "@/content/how_crs_is_calculated.pagejs.txt?raw";

export const Route = createFileRoute("/how-crs-is-calculated")({
  head: () => ({
    meta: [
      {
            "title": "How is CRS Calculated? 2026 Points Breakdown"
      },
      {
            "name": "description",
            "content": "How CRS is calculated section by section: age, language, education, work and the +600 extras. Learn to calculate your CRS score with worked examples."
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
            "content": "How is CRS Calculated? 2026 Points Breakdown"
      },
      {
            "property": "og:description",
            "content": "How CRS is calculated section by section: age, language, education, work and the +600 extras. Learn to calculate your CRS score with worked examples."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/how-crs-is-calculated"
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
            "content": "How is CRS Calculated? 2026 Points Breakdown"
      },
      {
            "name": "twitter:description",
            "content": "How CRS is calculated section by section: age, language, education, work and the +600 extras. Learn to calculate your CRS score with worked examples."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/how-crs-is-calculated"
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"How is the CRS Score Calculated? Complete 2026 Breakdown\",\n  \"description\": \"How is CRS calculated? Full breakdown of all Express Entry CRS factors including age, education, language CLB, Canadian work experience, spouse points, skill transferability, job offer, PNP nomination and bonus points.\",\n  \"url\": \"/how-crs-is-calculated\",\n  \"datePublished\": \"2026-01-01\",\n  \"dateModified\": \"2026-04-01\",\n  \"author\": { \"@type\": \"Organization\", \"name\": \"CRS Calculator\", \"url\": \"/\" },\n  \"publisher\": {\n    \"@type\": \"Organization\",\n    \"name\": \"CRS Calculator\",\n    \"url\": \"/\",\n    \"logo\": { \"@type\": \"ImageObject\", \"url\": \"/og-image.jpg\" }\n  },\n  \"mainEntityOfPage\": { \"@type\": \"WebPage\", \"@id\": \"/how-crs-is-calculated\" },\n  \"about\": [\n    { \"@type\": \"Thing\", \"name\": \"how is CRS calculated\" },\n    { \"@type\": \"Thing\", \"name\": \"CRS score calculation 2026\" },\n    { \"@type\": \"Thing\", \"name\": \"Comprehensive Ranking System breakdown\" },\n    { \"@type\": \"Thing\", \"name\": \"Express Entry CRS factors\" }\n  ],\n  \"speakable\": {\n    \"@type\": \"SpeakableSpecification\",\n    \"cssSelector\": [\"h1\", \".post-lead\", \".info-box\", \".faq summary\", \".section-label\"]\n  }\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"BreadcrumbList\",\n  \"itemListElement\": [\n    { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n    { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry Calculator\", \"item\": \"/express-entry-crs-calculator\" },\n    { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"How CRS is Calculated 2026\", \"item\": \"/how-crs-is-calculated\" }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is the maximum CRS score?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The maximum possible CRS score is 1,200 points, including up to 500 from core human capital (Section A), 40 from spouse factors (Section B), 100 from skill transferability (Section C), and 560 from additional points including a +600 PNP nomination.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How is the CRS score calculated for a single applicant?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"For a single applicant, CRS = Section A (age + education + language + Canadian work experience, max 500 pts) + Section C (skill transferability, max 100 pts) + Section D (job offer, PNP nomination, French bonus, Canadian study, siblings, max 560 pts).\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How many CRS points does language add?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Language can add up to 136 points for the first official language (34 pts \u00d7 4 skills at CLB 10+) and up to 24 points for a second official language.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How does a spouse affect CRS score calculation?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"When a spouse is included, your Section A maximums decrease slightly (e.g., age drops from 110 to 100 pts), but your spouse adds up to 40 points from education (10), language (20) and Canadian work experience (10). The combined A + B maximum remains 500 pts.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"What is Section C skill transferability in the CRS?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Section C rewards combinations of strong factors \u2014 for example, CLB 9+ language + post-secondary education = 25 pts. Multiple qualifying combinations can be added up to the 100-point cap.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How does a PNP nomination affect the CRS score?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A provincial nomination (Enhanced PNP stream) adds exactly +600 CRS points in Section D, virtually guaranteeing an ITA at the next PNP-only draw regardless of your base score.\" }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Where can I verify my official CRS score?\",\n      \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Create or update your Express Entry profile on the official IRCC website at canada.ca. Your official CRS score is calculated automatically by IRCC when you submit your profile.\" }\n    }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"HowTo\",\n  \"name\": \"How to Calculate Your CRS Score for Canada Express Entry\",\n  \"description\": \"Step-by-step guide to calculating your Comprehensive Ranking System (CRS) score for Canada Express Entry 2026.\",\n  \"totalTime\": \"PT10M\",\n  \"step\": [\n    {\n      \"@type\": \"HowToStep\",\n      \"position\": 1,\n      \"name\": \"Calculate Section A \u2014 Core Human Capital\",\n      \"text\": \"Add points for age (max 110), education (max 150), first official language CLB (max 136), and Canadian work experience (max 80). Section A total = up to 500 pts without a spouse.\"\n    },\n    {\n      \"@type\": \"HowToStep\",\n      \"position\": 2,\n      \"name\": \"Add Section B \u2014 Spouse Factors (if applicable)\",\n      \"text\": \"If your spouse accompanies you, add up to 40 points from their education (10), language (20) and Canadian work experience (10).\"\n    },\n    {\n      \"@type\": \"HowToStep\",\n      \"position\": 3,\n      \"name\": \"Calculate Section C \u2014 Skill Transferability\",\n      \"text\": \"Identify qualifying combinations of education + language, experience + language, or experience + education. Each combination earns 13\u201325 pts, capped at 100 total.\"\n    },\n    {\n      \"@type\": \"HowToStep\",\n      \"position\": 4,\n      \"name\": \"Add Section D \u2014 Additional Points\",\n      \"text\": \"Add points for provincial nomination (+600), valid job offer (+50 or +200), French bilingualism (+25 or +50), Canadian education (+15 or +30), and sibling in Canada (+15).\"\n    },\n    {\n      \"@type\": \"HowToStep\",\n      \"position\": 5,\n      \"name\": \"Sum all sections for your CRS score\",\n      \"text\": \"CRS total = Section A + Section B + Section C + Section D. Maximum is 1,200 points. Compare with the latest Express Entry draw cutoffs to assess your invitation likelihood.\"\n    }\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"name\": \"CRS Calculator\",\n  \"url\": \"/\",\n  \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"/?q={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n  }\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />
      <RelatedGuides path="/how-crs-is-calculated" />
    </>
  );
}

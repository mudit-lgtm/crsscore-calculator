import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/blog__minimum_crs_score.html?raw";
import pageJs from "@/content/blog__minimum_crs_score.pagejs.txt?raw";

export const Route = createFileRoute("/blog/minimum-crs-score")({
  head: () => ({
    meta: [
      {
            "title": "Minimum CRS Score 2026 - What Score Gets an ITA?"
      },
      {
            "name": "description",
            "content": "The minimum CRS score for an ITA in 2026, by draw type. Realistic targets for CEC, PNP, French and category draws - plus how to actually reach them."
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
            "content": "Minimum CRS Score 2026 - What Score Gets an ITA?"
      },
      {
            "property": "og:description",
            "content": "The minimum CRS score for an ITA in 2026, by draw type. Realistic targets for CEC, PNP, French and category draws - plus how to actually reach them."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/blog/minimum-crs-score"
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
            "content": "2026-04-19T00:00:00+00:00"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "Minimum CRS Score 2026 - What Score Gets an ITA?"
      },
      {
            "name": "twitter:description",
            "content": "The minimum CRS score for an ITA in 2026, by draw type. Realistic targets for CEC, PNP, French and category draws - plus how to actually reach them."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/blog/minimum-crs-score"
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Article\",\n      \"@id\": \"/blog/minimum-crs-score#article\",\n      \"headline\": \"Minimum CRS Score for Canada PR 2026 \u2013 What Score Do You Need for Express Entry?\",\n      \"description\": \"Complete 2026 guide to the minimum CRS score required for Canada PR through Express Entry. General draws average ~491. French language draws at 393. Trades at 388. PNP adds +600 pts to any base score.\",\n      \"datePublished\": \"2026-01-01T00:00:00+00:00\",\n      \"dateModified\": \"2026-04-19T00:00:00+00:00\",\n      \"url\": \"/blog/minimum-crs-score\",\n      \"author\": {\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"publisher\": {\n        \"@type\": \"Organization\",\n        \"name\": \"CRS Calculator\",\n        \"url\": \"/\",\n        \"logo\": {\"@type\":\"ImageObject\",\"url\":\"/og-image.jpg\"}\n      },\n      \"mainEntityOfPage\": {\"@type\":\"WebPage\",\"@id\":\"/blog/minimum-crs-score\"},\n      \"image\": \"/og-image.jpg\",\n      \"inLanguage\": \"en-CA\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What is the minimum CRS score for Canada PR in 2026?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"There is no officially fixed minimum CRS score for Canada PR. In 2026, the general Express Entry draw average is approximately 491 points. Category draws have lower effective minimums: French language draws at 393\u2013404, trades and agriculture at 388\u2013436, healthcare at 426\u2013476. With a Provincial Nomination (PNP), any score becomes sufficient because the +600 nomination points bring your total above any draw cutoff.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Is 400 a good CRS score for Canada PR?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"A CRS score of 400 is below the general draw average (~491) but is within range for French language draws (393\u2013404), trades draws (388\u2013436), transport draws (388\u2013430), and agriculture draws (388\u2013420) \u2014 if your NOC code qualifies. With French proficiency at NCLC 7+, 400 points could be sufficient for a French language draw ITA.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Is 450 a good CRS score for Canada PR?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"A CRS of 450 qualifies for healthcare category draws (cutoff 426\u2013476) if you are a healthcare professional. For trades, transport, and agriculture workers, 450 is comfortably above those draw cutoffs (388\u2013436). For a general draw, 450 is about 41 points below the 2026 average of ~491. Focus on language improvement (+50 pts potential) or PNP nomination (+600 pts).\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Is 470 enough for Canada PR in 2026?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"CRS 470 qualifies for healthcare draws (healthcare workers), trades, transport, agriculture, and French language draws (with NCLC 7+ French). For a general draw, 470 is about 21 points below the 2026 average (~491). A targeted language retake (CLB 8 to CLB 9 in one weak skill) could add 8\u201318 points to close this gap.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Has the minimum CRS score for Canada PR ever been below 400?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Yes. In category draws introduced in 2023, French language draws have had cutoffs as low as 379 (May 2023) and 388 (December 2024). For general draws, the all-time low was 413 in November 2019. The lowest cutoff ever in any Express Entry draw was 379.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What is the minimum CRS score for PNP?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"There is no minimum CRS score for PNP nomination itself \u2014 each province has its own criteria (job offer, work experience, education, language). However, once nominated, IRCC adds 600 CRS points to your profile, virtually guaranteeing an ITA in the next PNP draw regardless of your base CRS score.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What CRS score is needed for Canada PR without a job offer?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Without a job offer, you rely on your core CRS factors (age, education, language, work experience) and bonus factors (PNP, spouse factors, adaptability). The 2026 general draw average without a job offer is ~491. However, most category draw candidates (healthcare, trades, French) do not need a job offer \u2014 their NOC code or language skills are sufficient.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"How do I know what the current minimum CRS score is?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Check the CRS cutoff scores tracker at crscalculator.site/crs-cutoff-scores and the latest Express Entry draw results at crscalculator.site/express-entry-draws for the most current data. For the official source, IRCC publishes all draw results on the rounds of invitations page at canada.ca.\"\n          }\n        }\n      ]\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"itemListElement\": [\n        {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n        {\"@type\":\"ListItem\",\"position\":2,\"name\":\"CRS Score\",\"item\":\"/what-is-crs-score\"},\n        {\"@type\":\"ListItem\",\"position\":3,\"name\":\"Minimum CRS Score for Canada PR\",\"item\":\"/blog/minimum-crs-score\"}\n      ]\n    },\n    {\n      \"@type\": \"WebApplication\",\n      \"@id\": \"/blog/minimum-crs-score#tool\",\n      \"name\": \"CRS Score Eligibility Checker\",\n      \"description\": \"Interactive tool to check which 2026 Express Entry draw pathways you qualify for based on your CRS score, NOC category, French proficiency, and PNP status.\",\n      \"url\": \"/blog/minimum-crs-score#eligibility-checker\",\n      \"applicationCategory\": \"UtilityApplication\",\n      \"operatingSystem\": \"Web Browser\",\n      \"offers\": {\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"CAD\"}\n    },\n    {\n      \"@type\": \"Table\",\n      \"about\": \"Minimum CRS Score by Express Entry Draw Type 2026\",\n      \"description\": \"2026 effective minimum CRS scores by pathway: General ~491, CEC ~504, STEM ~481, Healthcare ~426, Trades ~388, Transport ~388, Agriculture ~388, French Language ~393, PNP any score with +600 nomination.\"\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"/blog/minimum-crs-score\",\n      \"name\": \"Minimum CRS Score for Canada PR 2026\",\n      \"description\": \"What is the minimum CRS score for Canada PR? 2026 guide with effective minimums by pathway, interactive eligibility checker, and historical low scores.\",\n      \"url\": \"/blog/minimum-crs-score\",\n      \"inLanguage\": \"en-CA\",\n      \"isPartOf\": {\"@type\":\"WebSite\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"about\": [\n        {\"@type\":\"Thing\",\"name\":\"Minimum CRS Score for Canada PR\"},\n        {\"@type\":\"Thing\",\"name\":\"Express Entry CRS Cutoff 2026\"},\n        {\"@type\":\"Thing\",\"name\":\"Canada PR Score Requirements\"}\n      ],\n      \"speakable\": {\n        \"@type\": \"SpeakableSpecification\",\n        \"cssSelector\": [\".post-lead\", \".info-box.blue\", \".faq\"]\n      }\n    }\n  ]\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

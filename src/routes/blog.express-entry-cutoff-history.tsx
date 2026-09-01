import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import RelatedGuides from "@/components/RelatedGuides";
import pageHtml from "@/content/blog__express_entry_cutoff_history.html?raw";
import pageJs from "@/content/blog__express_entry_cutoff_history.pagejs.txt?raw";

export const Route = createFileRoute("/blog/express-entry-cutoff-history")({
  head: () => ({
    meta: [
      {
            "title": "Express Entry Cutoff History - Every Draw Since 2015"
      },
      {
            "name": "description",
            "content": "Full Express Entry cutoff history with trends by year and draw type. See where CRS cutoffs are heading in 2026 and what score keeps you competitive."
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
            "content": "Express Entry Cutoff History - Every Draw Since 2015"
      },
      {
            "property": "og:description",
            "content": "Full Express Entry cutoff history with trends by year and draw type. See where CRS cutoffs are heading in 2026 and what score keeps you competitive."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/blog/express-entry-cutoff-history"
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
            "content": "Express Entry Cutoff History - Every Draw Since 2015"
      },
      {
            "name": "twitter:description",
            "content": "Full Express Entry cutoff history with trends by year and draw type. See where CRS cutoffs are heading in 2026 and what score keeps you competitive."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/blog/express-entry-cutoff-history"
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
      { type: "application/ld+json", children: "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Article\",\n      \"@id\": \"/blog/express-entry-cutoff-history#article\",\n      \"headline\": \"Express Entry Cutoff History 2015\u20132026 \u2013 CRS Score Draw Results & Trends\",\n      \"description\": \"Complete Express Entry CRS cutoff score history from 2015 to 2026. Every draw result, yearly averages, lowest and highest scores, category-based draw cutoffs, and 2026 trend analysis.\",\n      \"datePublished\": \"2026-01-01T00:00:00+00:00\",\n      \"dateModified\": \"2026-04-19T00:00:00+00:00\",\n      \"url\": \"/blog/express-entry-cutoff-history\",\n      \"author\": {\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"publisher\": {\n        \"@type\": \"Organization\",\n        \"name\": \"CRS Calculator\",\n        \"url\": \"/\",\n        \"logo\": {\"@type\":\"ImageObject\",\"url\":\"/og-image.jpg\"}\n      },\n      \"mainEntityOfPage\": {\"@type\":\"WebPage\",\"@id\":\"/blog/express-entry-cutoff-history\"},\n      \"image\": \"/og-image.jpg\",\n      \"inLanguage\": \"en-CA\"\n    },\n    {\n      \"@type\": \"FAQPage\",\n      \"mainEntity\": [\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What is the lowest Express Entry CRS score ever?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"The lowest Express Entry CRS cutoff score in a general all-programs draw was 413, set on November 28, 2019, when IRCC invited 3,900 candidates. For category-based draws introduced in 2023, the lowest cutoff was 379 in a French language draw.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What is the current Express Entry CRS cutoff in 2026?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"In 2026 (through April), general all-programs draws have had cutoffs ranging from approximately 485 to 497, with an average around 491. Category draws have significantly lower cutoffs \u2014 French language draws at 379\u2013430, healthcare at 426\u2013476, trades at 388\u2013436.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"What is the highest Express Entry CRS score ever?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"The highest CRS cutoff in a general all-programs draw was 568 in January 2021 due to COVID-19 backlog. PNP tie-breaking rounds have seen scores as high as 875.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"How often does IRCC hold Express Entry draws?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"IRCC typically holds Express Entry draws every two weeks \u2014 approximately 26 general draws per year, plus additional category draws for healthcare, STEM, trades, transport, agriculture, and French language proficient candidates.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Are category-based draw cutoffs lower than general draw cutoffs?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Yes \u2014 significantly lower. General draws in 2025\u20132026 average around 491\u2013495 CRS. Category draws range from 379 (French language) to 500 (STEM). Healthcare draws typically cut at 426\u2013476. Trades and transport draws at 388\u2013436.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Why did CRS scores spike in 2020\u20132021?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"COVID-19 caused IRCC to halt in-person processing in 2020, creating a backlog. When processing resumed, a large number of high-scoring candidates remained in the pool, pushing cutoffs to record highs \u2014 peaking at 568 in January 2021.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"Does Express Entry draw cutoff change every draw?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Yes. Each draw has a unique CRS cutoff score that depends on the number of invitations IRCC issues, the size and composition of the Express Entry pool, and whether the draw is general or category-based.\"\n          }\n        },\n        {\n          \"@type\": \"Question\",\n          \"name\": \"How do I know if my score is competitive for an Express Entry draw?\",\n          \"acceptedAnswer\": {\n            \"@type\": \"Answer\",\n            \"text\": \"Compare your CRS score to the recent 6\u201312 month average for the relevant draw type. If your score is within 10\u201315 points of recent cutoffs, you are likely to receive an ITA in the near term. Use the CRS Calculator at crscalculator.site to check your score.\"\n          }\n        }\n      ]\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"itemListElement\": [\n        {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n        {\"@type\":\"ListItem\",\"position\":2,\"name\":\"CRS Cutoff Scores\",\"item\":\"/crs-cutoff-scores\"},\n        {\"@type\":\"ListItem\",\"position\":3,\"name\":\"Express Entry Cutoff History 2015\u20132026\",\"item\":\"/blog/express-entry-cutoff-history\"}\n      ]\n    },\n    {\n      \"@type\": \"Dataset\",\n      \"name\": \"Express Entry CRS Cutoff Score History 2015\u20132026\",\n      \"description\": \"Complete dataset of Express Entry CRS cutoff scores from January 2015 to April 2026, including draw number, date, draw type, CRS cutoff, and invitations issued.\",\n      \"url\": \"/blog/express-entry-cutoff-history\",\n      \"creator\": {\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"license\": \"https://creativecommons.org/licenses/by/4.0/\",\n      \"isBasedOn\": \"https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/rounds-invitations.html\",\n      \"temporalCoverage\": \"2015-01-31/2026-04-10\",\n      \"spatialCoverage\": {\"@type\":\"Place\",\"name\":\"Canada\"},\n      \"variableMeasured\": [\n        {\"@type\":\"PropertyValue\",\"name\":\"CRS Cutoff Score\",\"minValue\":379,\"maxValue\":886},\n        {\"@type\":\"PropertyValue\",\"name\":\"Invitations Issued\"},\n        {\"@type\":\"PropertyValue\",\"name\":\"Draw Type\"}\n      ]\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"/blog/express-entry-cutoff-history\",\n      \"name\": \"Express Entry Cutoff History 2015\u20132026\",\n      \"description\": \"Complete Express Entry CRS cutoff score history with yearly averages, all draw types, and 2026 trends.\",\n      \"url\": \"/blog/express-entry-cutoff-history\",\n      \"inLanguage\": \"en-CA\",\n      \"isPartOf\": {\"@type\":\"WebSite\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n      \"speakable\": {\n        \"@type\": \"SpeakableSpecification\",\n        \"cssSelector\": [\".post-lead\",\".info-box.blue\",\".faq\"]\n      }\n    },\n    {\n      \"@type\": \"Table\",\n      \"about\": \"Express Entry CRS Cutoff Score History by Year 2015\u20132026\",\n      \"description\": \"Annual summary of Express Entry general draw CRS cutoffs: 2015 avg 476, 2016 avg 482, 2017 avg 432, 2018 avg 447, 2019 avg 454 (low 413), 2020 avg 452, 2021 avg 487 (high 568), 2022 avg 508, 2023 avg 496, 2024 avg 504, 2025 avg 494, 2026 avg 491 (to April).\"\n    }\n  ]\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />
      <RelatedGuides path="/blog/express-entry-cutoff-history" />
    </>
  );
}

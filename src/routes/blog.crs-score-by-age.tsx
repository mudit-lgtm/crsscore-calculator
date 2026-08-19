import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/blog__crs_score_by_age.html?raw";
import pageJs from "@/content/blog__crs_score_by_age.pagejs.txt?raw";

export const Route = createFileRoute("/blog/crs-score-by-age")({
  head: () => ({
    meta: [
      {
            "title": "CRS Score by Age 2026 \u2013 How Age Affects Canada Express Entry Points"
      },
      {
            "name": "description",
            "content": "How does age affect CRS score? Complete 2026 breakdown of CRS points by age group for Express Entry. See how many points you get at age 20, 25, 30, 35, 40, 45 and how to compensate for age-related CRS reductions."
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
            "content": "CRS Score by Age 2026 \u2013 How Age Affects Express Entry Points"
      },
      {
            "property": "og:description",
            "content": "How does age affect your CRS score? Full 2026 age points table for Express Entry. Scores range from 110 (age 18\u201335) down to 0 (age 47+). See your age bracket and strategies to compensate."
      },
      {
            "property": "og:url",
            "content": "/blog/crs-score-by-age"
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
            "content": "CRS Score by Age 2026 \u2013 Express Entry Age Points Table"
      },
      {
            "name": "twitter:description",
            "content": "CRS points by age for Canada Express Entry 2026. Maximum 110 pts at age 18\u201335, dropping to 0 at age 47+. Full breakdown + age calculator."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/blog/crs-score-by-age"
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
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"Article\",\n  \"headline\":\"CRS Score by Age 2026 \u2013 How Age Affects Canada Express Entry Points\",\n  \"description\":\"How does age affect CRS score for Canada Express Entry? Full 2026 age points table from IRCC. Maximum 110 points at age 18\u201335, dropping to 0 at age 47+. Includes interactive checker and compensation strategies.\",\n  \"url\":\"/blog/crs-score-by-age\",\n  \"datePublished\":\"2026-01-01\",\n  \"dateModified\":\"2026-04-01\",\n  \"author\":{\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n  \"publisher\":{\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"/og-image.jpg\"}},\n  \"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"/blog/crs-score-by-age\"},\n  \"about\":[\n    {\"@type\":\"Thing\",\"name\":\"CRS score by age\"},\n    {\"@type\":\"Thing\",\"name\":\"Express Entry age points 2026\"},\n    {\"@type\":\"Thing\",\"name\":\"CRS age points table Canada\"},\n    {\"@type\":\"Thing\",\"name\":\"How age affects Express Entry score\"}\n  ],\n  \"speakable\":{\"@type\":\"SpeakableSpecification\",\"cssSelector\":[\"h1\",\".post-lead\",\".info-box.blue\",\".faq summary\"]}\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"FAQPage\",\n  \"mainEntity\":[\n    {\"@type\":\"Question\",\"name\":\"How many CRS points do I get for my age?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ages 18\u201335 receive 110 CRS age points without a spouse (100 with spouse). Points decrease from age 36: 105 at 36, 99 at 37, 94 at 38, 88 at 39, 83 at 40, 77 at 41, 72 at 42, 66 at 43, 61 at 44, 55 at 45, 50 at 46, and 0 at age 47+.\"}},\n    {\"@type\":\"Question\",\"name\":\"Can I still immigrate to Canada through Express Entry if I am over 45?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Age 45\u201346 receives 50\u201355 age points and age 47+ receives 0. Express Entry is still viable through PNP nomination (+600 pts), French-language draws (cutoff 310\u2013370), or category-based draws.\"}},\n    {\"@type\":\"Question\",\"name\":\"What is the best age for Canada Express Entry?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The best age for Canada Express Entry is 18\u201335, when you receive the maximum 110 age points. Express Entry is competitive at any age with the right combination of language, education, experience, and provincial nomination.\"}},\n    {\"@type\":\"Question\",\"name\":\"How can I compensate for losing age points after 35?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The most effective compensators are: PNP nomination (+600 pts), French CLB 7+ for French-language draws (cutoff 310\u2013370), IELTS improvement from CLB 7/8 to CLB 9 (+28\u201334 pts), and Canadian work experience accumulation.\"}},\n    {\"@type\":\"Question\",\"name\":\"Is there an age limit for Express Entry Canada?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"There is no official age limit for Express Entry. Candidates aged 47 and over receive 0 age points but remain eligible if they meet all other CRS criteria through PNP nominations or French-language draws.\"}},\n    {\"@type\":\"Question\",\"name\":\"Does age affect CRS score differently with a spouse?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. With an accompanying spouse, maximum age points drop from 110 to 100 for ages 18\u201335. The reduction pattern is the same but at lower values across all age brackets.\"}},\n    {\"@type\":\"Question\",\"name\":\"Do CRS age points use your age at time of application or ITA?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"CRS age points are calculated based on your age on the date your profile is submitted to the Express Entry pool and recalculated with each draw. If your age changes while in the pool, your CRS score is automatically updated.\"}}\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"BreadcrumbList\",\n  \"itemListElement\":[\n    {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n    {\"@type\":\"ListItem\",\"position\":2,\"name\":\"What is CRS Score\",\"item\":\"/what-is-crs-score\"},\n    {\"@type\":\"ListItem\",\"position\":3,\"name\":\"CRS Score by Age 2026\",\"item\":\"/blog/crs-score-by-age\"}\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"WebSite\",\n  \"name\":\"CRS Calculator\",\n  \"url\":\"/\",\n  \"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"/?q={search_term_string}\",\"query-input\":\"required name=search_term_string\"}\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

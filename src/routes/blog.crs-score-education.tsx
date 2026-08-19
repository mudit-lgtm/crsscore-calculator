import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/blog__crs_score_education.html?raw";
import pageJs from "@/content/blog__crs_score_education.pagejs.txt?raw";

export const Route = createFileRoute("/blog/crs-score-education")({
  head: () => ({
    meta: [
      {
            "title": "CRS Score for Education 2026 \u2013 How Education Affects Canada Express Entry Points"
      },
      {
            "name": "description",
            "content": "How does education affect CRS score? Full 2026 breakdown of CRS education points for Express Entry. See how many points you get for a PhD, Master's, Bachelor's, diploma and high school. Official IRCC education points table with interactive checker."
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
            "content": "CRS Score for Education 2026 \u2013 Express Entry Education Points Table"
      },
      {
            "property": "og:description",
            "content": "CRS education points 2026 for Canada Express Entry. PhD earns 150 pts, Master's 135 pts, 3-year Bachelor's 120 pts, 1-year diploma 90 pts, high school 28 pts. Full IRCC table + interactive checker."
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
            "content": "CRS Score for Education 2026 \u2013 Express Entry Education Points"
      },
      {
            "name": "twitter:description",
            "content": "CRS education points table 2026. PhD=150, Master's=135, Bachelor's=120, Diploma=90, High School=28. Full guide + interactive checker."
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
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"Article\",\n  \"headline\":\"CRS Score for Education 2026 \u2013 How Education Affects Canada Express Entry Points\",\n  \"description\":\"How does education affect CRS score for Canada Express Entry? Full 2026 education points table from IRCC. PhD=150 pts, Master's=135, Bachelor's=120, High School=28. Includes Canadian edu bonus, skill transferability, ECA guide and interactive checker.\",\n  \"url\":\"/blog/crs-score-education\",\n  \"datePublished\":\"2026-01-01\",\n  \"dateModified\":\"2026-04-01\",\n  \"author\":{\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\"},\n  \"publisher\":{\"@type\":\"Organization\",\"name\":\"CRS Calculator\",\"url\":\"/\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"/og-image.jpg\"}},\n  \"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"/blog/crs-score-education\"},\n  \"about\":[\n    {\"@type\":\"Thing\",\"name\":\"CRS score for education\"},\n    {\"@type\":\"Thing\",\"name\":\"Express Entry education points 2026\"},\n    {\"@type\":\"Thing\",\"name\":\"CRS education points table Canada\"},\n    {\"@type\":\"Thing\",\"name\":\"How education affects Express Entry CRS score\"}\n  ],\n  \"speakable\":{\"@type\":\"SpeakableSpecification\",\"cssSelector\":[\"h1\",\".post-lead\",\".info-box.blue\",\".faq summary\"]}\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"FAQPage\",\n  \"mainEntity\":[\n    {\"@type\":\"Question\",\"name\":\"How many CRS points do I get for a bachelor's degree?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A 3-year or longer bachelor's degree earns 120 CRS points without a spouse, or 112 points with a spouse. A 2-year bachelor's earns 98 pts and a 1-year credential earns 90 pts, per the official IRCC CRS grid.\"}},\n    {\"@type\":\"Question\",\"name\":\"Does a master's degree give more CRS points than a bachelor's?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. A master's degree earns 135 CRS points (without spouse) versus 120 pts for a 3-year bachelor's \u2014 a 15-point increase. A PhD earns 150 pts, which is 30 pts more than a bachelor's degree.\"}},\n    {\"@type\":\"Question\",\"name\":\"Does a Canadian degree give extra CRS points?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. A Canadian post-secondary credential of 3+ years adds 30 bonus CRS points under Section C. A 1\u20132 year Canadian credential adds 15 bonus points. Foreign credentials do not receive this bonus.\"}},\n    {\"@type\":\"Question\",\"name\":\"Do I need an ECA for Express Entry education points?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes, all foreign credentials must be assessed by an IRCC-designated ECA organisation such as WES, ICAS, or IQAS. Canadian credentials do not require an ECA.\"}},\n    {\"@type\":\"Question\",\"name\":\"What is the maximum CRS score for education?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The maximum core CRS education score is 150 points (PhD, without spouse). Adding the Canadian credential bonus (30 pts) and skill transferability bonus (50 pts), education-related factors can contribute up to 230 CRS points in total.\"}},\n    {\"@type\":\"Question\",\"name\":\"How does a 3-year Indian bachelor's degree count for CRS?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A 3-year bachelor's degree from India is typically assessed by WES as equivalent to a Canadian bachelor's degree, earning 120 CRS points. You must submit an ECA from a designated organisation.\"}},\n    {\"@type\":\"Question\",\"name\":\"Can I increase my CRS education points after submitting my profile?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. You can update your Express Entry profile if you complete a new educational credential after submission. A new Canadian post-graduate diploma immediately adds to your CRS score with updated ECA or official transcript.\"}}\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"BreadcrumbList\",\n  \"itemListElement\":[\n    {\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},\n    {\"@type\":\"ListItem\",\"position\":2,\"name\":\"What is CRS Score\",\"item\":\"/what-is-crs-score\"},\n    {\"@type\":\"ListItem\",\"position\":3,\"name\":\"CRS Score for Education 2026\",\"item\":\"/blog/crs-score-education\"}\n  ]\n}" },
      { type: "application/ld+json", children: "{\n  \"@context\":\"https://schema.org\",\n  \"@type\":\"WebSite\",\n  \"name\":\"CRS Calculator\",\n  \"url\":\"/\",\n  \"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"/?q={search_term_string}\",\"query-input\":\"required name=search_term_string\"}\n}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

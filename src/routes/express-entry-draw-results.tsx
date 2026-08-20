import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/express_entry_draw_results.html?raw";
import pageJs from "@/content/express_entry_draw_results.pagejs.txt?raw";

export const Route = createFileRoute("/express-entry-draw-results")({
  head: () => ({
    meta: [
      {
            "title": "Express Entry Draw Results 2026 - Full Draw History"
      },
      {
            "name": "robots",
            "content": "index, follow"
      },
      {
            "name": "geo.region",
            "content": "CA"
      },
      {
            "name": "geo.placename",
            "content": "Canada"
      },
      {
            "name": "language",
            "content": "English"
      },
      {
            "name": "description",
            "content": "Latest Express Entry draw results: date, category, ITAs issued and CRS cutoff. Updated after every IRCC draw so you can see where the score is heading."
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:title",
            "content": "Express Entry Draw Results 2026 - Full Draw History"
      },
      {
            "property": "og:description",
            "content": "Latest Express Entry draw results: date, category, ITAs issued and CRS cutoff. Updated after every IRCC draw so you can see where the score is heading."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/express-entry-draw-results"
      },
      {
            "property": "og:image",
            "content": "https://crscalculator.site/images/og-image.jpg"
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
            "content": "Express Entry Draw Results 2026 - Full Draw History"
      },
      {
            "name": "twitter:description",
            "content": "Latest Express Entry draw results: date, category, ITAs issued and CRS cutoff. Updated after every IRCC draw so you can see where the score is heading."
      },
      {
            "name": "twitter:image",
            "content": "https://crscalculator.site/images/og-image.jpg"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/express-entry-draw-results"
      },
      {
            "rel": "icon",
            "href": "/images/favicon.ico"
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
      },
      {
            "rel": "stylesheet",
            "href": "/css/style.css"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Express Entry Draw Results \u2013 Latest Invitations to Apply (ITA)\",\"item\":\"/express-entry-draw-results.html\"}]}" },
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How often does IRCC hold Express Entry draws?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"IRCC typically holds Express Entry draws approximately every two weeks, though the frequency can vary. Some draws are for all programs, others are category-specific (French language, STEM, healthcare, etc.). IRCC does not announce draws in advance.\"}},{\"@type\":\"Question\",\"name\":\"Where can I find official Express Entry draw results?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Official draw results are published on the IRCC website at canada.ca. Our draw results page provides a curated summary of recent draws for quick reference. The IRCC website has the authoritative and complete draw history.\"}},{\"@type\":\"Question\",\"name\":\"What is the difference between a CEC draw and an all-program draw?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"A Canadian Experience Class (CEC) specific draw only invites candidates who are eligible for the CEC program. An all-program (No Program Specified) draw invites candidates eligible for any Express Entry program. CEC draws typically have slightly different cutoffs than all-program draws.\"}},{\"@type\":\"Question\",\"name\":\"What documents do I need ready for when I receive an ITA?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Prepare in advance: valid passport, language test results (less than 2 years old), Educational Credential Assessment, police certificates from each country lived in for 6+ months, medical exam (done by IRCC-approved physician), employment reference letters, and proof of funds if required.\"}},{\"@type\":\"Question\",\"name\":\"Can I receive multiple ITAs?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Once you accept an ITA, your Express Entry profile is no longer in the pool. If you decline or let an ITA expire, you may re-enter the pool with a new profile. However, declining an ITA without a genuine reason is generally not advisable as it delays your immigration timeline.\"}}]}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={["/js/main.js", "/js/calculator.js"]} />;
}

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import RelatedGuides from "@/components/RelatedGuides";
import pageHtml from "@/content/express_entry_reforms_2026.html?raw";
import { LAST_UPDATED_ISO } from "@/config/lastUpdated";

const URL = "https://crscalculator.site/express-entry-reforms-2026";
const TITLE = "Express Entry Changes November 2026: New CRS Points Explained";
const DESC = "From 3 Nov 2026, high-wage job offers add 50–100 CRS points and Canadian work 20–70. No LMIA. See what's in force vs only proposed.";

const FAQ: [string, string][] = [
  ["Do job offers give CRS points again?", "Yes, from 3 November 2026, but only qualifying job offers in high-wage occupations: 100, 70 or 50 points depending on the occupation's wage level."],
  ["Do I need an LMIA?", "No. The new high-wage points do not require an LMIA."],
  ["Can I get points for both work experience and a job offer?", "No. You get the higher of the two, capped at 150 without a spouse or 140 with a spouse."],
  ["Will the cutoff change?", "Probably. More candidates will gain points, so cutoffs may rise, but IRCC sets each round separately and no change is guaranteed."],
];

export const Route = createFileRoute("/express-entry-reforms-2026")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          datePublished: "2026-10-26",
          dateModified: LAST_UPDATED_ISO,
          mainEntityOfPage: URL,
          url: URL,
          author: { "@type": "Organization", name: "CRS Score Calculator", url: "https://crscalculator.site/" },
          publisher: { "@type": "Organization", name: "CRS Score Calculator", url: "https://crscalculator.site/" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://crscalculator.site/" },
            { "@type": "ListItem", position: 2, name: "Express Entry Changes 2026", item: URL },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <>
      <StaticPage html={pageHtml} />
      <RelatedGuides path="/express-entry-reforms-2026" />
    </>
  ),
});

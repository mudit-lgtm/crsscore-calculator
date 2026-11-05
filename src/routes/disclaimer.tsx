import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/disclaimer.html?raw";
import { LAST_UPDATED_ISO } from "@/config/lastUpdated";

const URL = "https://crscalculator.site/disclaimer";
const TITLE = 'Disclaimer | CRS Score Calculator';
const DESC = 'CRS results on this site are estimates only. Not legal or immigration advice and not affiliated with IRCC or the Government of Canada.';

const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: 'Disclaimer',
  description: DESC,
  url: URL,
  mainEntityOfPage: URL,
  dateModified: LAST_UPDATED_ISO,
  author: { "@type": "Organization", name: "CRS Score Calculator", url: "https://crscalculator.site/" },
  publisher: { "@type": "Organization", name: "CRS Score Calculator", url: "https://crscalculator.site/" },
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crscalculator.site/" },
    { "@type": "ListItem", position: 2, name: 'Disclaimer', item: URL },
  ],
};

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(article) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage kind="trust" html={pageHtml} />;
}

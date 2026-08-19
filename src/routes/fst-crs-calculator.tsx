import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/fst_crs_calculator.html?raw";
import pageJs from "@/content/fst_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/fst-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "FST CRS Calculator 2026 \u2013 Federal Skilled Trades Points Tool | Free Score Check"
      },
      {
            "name": "description",
            "content": "Use our free FST CRS Calculator 2026 to check your Federal Skilled Trades (FST) Express Entry points instantly. Calculate CRS score for skilled trades occupations, see latest draw cutoffs, and find if you qualify for Canada PR."
      },
      {
            "name": "keywords",
            "content": "fst crs calculator, federal skilled trades crs calculator, skilled trades crs calculator, fst points calculator, federal skilled trades points tool, crs calculator skilled trades, fst crs score calculator 2026"
      },
      {
            "property": "og:title",
            "content": "FST CRS Calculator 2026 \u2013 Free Federal Skilled Trades Points Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your Federal Skilled Trades CRS score free. Check if you qualify for Canada Express Entry FST Program with updated 2026 draw results."
      },
      {
            "property": "og:url",
            "content": "/"
      },
      {
            "property": "og:type",
            "content": "website"
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/"
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"FST CRS Calculator 2026 \u2013 Federal Skilled Trades Points Tool\",\n    \"url\": \"/fst-crs-calculator\",\n    \"description\": \"Free Federal Skilled Trades (FST) CRS calculator. Estimate your Express Entry points for skilled trades occupations using official IRCC Comprehensive Ranking System criteria. Updated for 2026.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum CRS score for Federal Skilled Trades in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"There is no official minimum CRS score for the Federal Skilled Trades (FST) Program itself. However, to receive an ITA in Express Entry trade occupation draws, you need a competitive CRS score. Recent 2026 Trade Occupations draws had cutoffs of 477\u2013494. The FST program requires CLB 5 for speaking/listening and CLB 4 for reading/writing, plus 2 years of full-time skilled trades experience.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What trades qualify for the Federal Skilled Trades Program?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Eligible trades under the FST Program include: Industrial, electrical and construction trades (NOC TEER 2\u20133), Maintenance and equipment operation trades, Supervisors and technical jobs in natural resources, agriculture and fishing, Processing, manufacturing and utilities supervisors and central control operators, and Chefs and cooks. Your occupation must fall under NOC TEER 2 or TEER 3.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How is CRS score calculated for skilled trades workers?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Skilled trades workers use the same federal CRS (max 1,200 points) as all Express Entry candidates. Points are awarded for Age (up to 110), Education (up to 150), Language proficiency (up to 160), Canadian work experience (up to 80), Skill Transferability (up to 100), and Additional Points like a job offer (+50/+200) or PNP (+600). Trades workers benefit most from Skill Transferability bonuses when combining foreign experience with strong language scores.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Does Federal Skilled Trades require a job offer?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"No. The Federal Skilled Trades Program does NOT require a job offer if you have a valid certificate of qualification. However, if you are NOT certified and want to enter the FST pool, you will need either (a) a valid offer of full-time employment from up to two Canadian employers, OR (b) a certificate of qualification in a trade from a province, territory or federal body.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the difference between FSW and FST programs?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The Federal Skilled Worker (FSW) program uses a 67-point grid for initial eligibility and is designed for professional/managerial occupations (TEER 0, 1). The Federal Skilled Trades (FST) program targets TEER 2\u20133 trade occupations, requires CLB 5/4 language (vs CLB 7 for FSW), needs a certificate of qualification or job offer, and does not use the 67-point grid. Both programs feed into Express Entry and compete on the same CRS score.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry\", \"item\": \"/express-entry\" },\n      { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"FST CRS Calculator\", \"item\": \"/fst-crs-calculator\" }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

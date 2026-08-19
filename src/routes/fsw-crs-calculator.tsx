import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/fsw_crs_calculator.html?raw";
import pageJs from "@/content/fsw_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/fsw-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "FSW Points Calculator 2026 \u2013 Free Federal Skilled Worker CRS Tool | Canada Express Entry"
      },
      {
            "name": "description",
            "content": "Use our free FSW Points Calculator 2026 to calculate your Federal Skilled Worker CRS score for Canada Express Entry. Check the 67-point eligibility grid, get instant results, see latest draw cutoffs. No login required."
      },
      {
            "name": "keywords",
            "content": "fsw points calculator, federal skilled worker crs calculator, fsw crs calculator, federal skilled worker points tool, crs calculator federal skilled worker, fsw crs score calculator 2026, federal skilled worker express entry calculator"
      },
      {
            "property": "og:title",
            "content": "FSW Points Calculator 2026 \u2013 Free Federal Skilled Worker CRS Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your Federal Skilled Worker CRS score free. Check 67-point grid eligibility and see if you qualify for Canada Express Entry FSW Program."
      },
      {
            "property": "og:url",
            "content": "/"
      },
      {
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:image",
            "content": "https://crscalculator.site/og-fsw.png"
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"FSW Points Calculator 2026 \u2013 Federal Skilled Worker CRS Tool\",\n    \"url\": \"/fsw-crs-calculator\",\n    \"description\": \"Free Federal Skilled Worker (FSW) points calculator. Calculate your Express Entry CRS score and check eligibility using the 67-point FSW grid. Updated for 2026 with latest draw results.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\"\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the Federal Skilled Worker (FSW) Program?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The Federal Skilled Worker (FSW) Program is one of three Express Entry streams for skilled foreign nationals with professional or managerial experience in NOC TEER 0 or TEER 1 occupations. FSW applicants must score at least 67 out of 100 on the FSW selection grid before entering the Express Entry pool, where they compete for ITAs using the federal CRS score.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"How do I calculate my FSW 67 points?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"The FSW 67-point grid awards points across 6 factors: Language skills (up to 28), Education (up to 25), Work experience (up to 15), Age (up to 12), Arranged employment (up to 10), and Adaptability (up to 10). You must score at least 67/100 to be eligible. A CLB 7 in all 4 English/French skills is the minimum language requirement for the FSW program.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is a good CRS score for Federal Skilled Worker in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"A CRS score of 490\u2013520 is competitive for all-program draws in 2026, which FSW applicants are eligible for. There are no dedicated FSW-only draws \u2014 FSW candidates compete in all-program and category-based draws. Scores above 500 have the best chances of receiving an ITA in 2026.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What language test do I need for the FSW program?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"FSW requires CLB 7 in all 4 skills (Speaking, Listening, Reading, Writing). For IELTS General Training that means at least: Speaking 6.0, Listening 6.0, Reading 6.0, Writing 6.0 \u2014 all four bands. You can also use CELPIP-General for English or TEF Canada/TCF Canada for French.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the difference between FSW, FST, and CEC?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"FSW (Federal Skilled Worker) targets TEER 0/1 professionals who need 1+ year of foreign skilled work experience and CLB 7 language. FST (Federal Skilled Trades) targets TEER 2/3 tradespeople with lower language requirements (CLB 5/4). CEC (Canadian Experience Class) requires 1 year of Canadian work experience in TEER 0\u20133. All three programs enter the Express Entry pool and compete using the CRS score.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Is a job offer required for the FSW program?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"No. A job offer is NOT required to be eligible for the Federal Skilled Worker program. However, a valid LMIA-based job offer or exempt offer in a TEER 0, 1, 2, or 3 occupation adds +50 CRS points (or +200 for TEER 0 senior managers). A job offer also adds 10 points to the FSW 67-point grid under 'Arranged Employment'.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry\", \"item\": \"/express-entry\" },\n      { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"FSW Points Calculator\", \"item\": \"/fsw-crs-calculator\" }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

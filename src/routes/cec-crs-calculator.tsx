import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/cec_crs_calculator.html?raw";
import pageJs from "@/content/cec_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/cec-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "CEC CRS Calculator 2026 \u2013 Canadian Experience Class CRS Score Tool"
      },
      {
            "name": "description",
            "content": "Free CEC CRS Calculator for Canadian Experience Class applicants. Instantly calculate your Canada CRS score with full CEC points breakdown. Updated for 2026 IRCC draws. No login needed."
      },
      {
            "name": "keywords",
            "content": "cec crs calculator, cec crs score calculator, canadian experience class crs calculator, crs score calculator cec, calculate crs score for cec, cec express entry calculator, crs calculator for canadian experience class"
      },
      {
            "name": "robots",
            "content": "index, follow"
      },
      {
            "property": "og:title",
            "content": "CEC CRS Calculator 2026 \u2013 Canadian Experience Class CRS Points Tool"
      },
      {
            "property": "og:description",
            "content": "Free CEC CRS Calculator. Calculate your Canadian Experience Class CRS score instantly with full breakdown. Updated for 2026 IRCC draws."
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
            "content": "https://crscalculator.site/og-image.png"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
      },
      {
            "name": "twitter:title",
            "content": "CEC CRS Calculator 2026 \u2013 Canadian Experience Class Tool"
      },
      {
            "name": "twitter:description",
            "content": "Free CEC CRS Score Calculator. Instant results, no login, updated 2026."
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@graph\": [\n      {\n        \"@type\": \"WebSite\",\n        \"@id\": \"/#website\",\n        \"url\": \"/\",\n        \"name\": \"CRS Score Calculator\",\n        \"description\": \"Free Canada Express Entry CRS calculator tools\",\n        \"inLanguage\": \"en\",\n        \"potentialAction\": {\n          \"@type\": \"SearchAction\",\n          \"target\": {\n            \"@type\": \"EntryPoint\",\n            \"urlTemplate\": \"/?s={search_term_string}\"\n          },\n          \"query-input\": \"required name=search_term_string\"\n        }\n      },\n      {\n        \"@type\": \"WebPage\",\n        \"@id\": \"/cec-crs-calculator\",\n        \"url\": \"/cec-crs-calculator\",\n        \"name\": \"CEC CRS Calculator 2026 \u2013 Canadian Experience Class CRS Score Tool\",\n        \"description\": \"Free Canadian Experience Class CRS calculator. Calculate your CEC CRS score instantly with full breakdown for age, education, language, and Canadian work experience.\",\n        \"inLanguage\": \"en\",\n        \"isPartOf\": { \"@id\": \"/#website\" },\n        \"breadcrumb\": { \"@id\": \"/cec-crs-calculator#breadcrumb\" },\n        \"dateModified\": \"2026-04-19\",\n        \"about\": {\n          \"@type\": \"Thing\",\n          \"name\": \"Canadian Experience Class\",\n          \"sameAs\": \"https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/canadian-experience-class.html\"\n        }\n      },\n      {\n        \"@type\": \"BreadcrumbList\",\n        \"@id\": \"/cec-crs-calculator#breadcrumb\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"ListItem\",\n            \"position\": 1,\n            \"name\": \"Home\",\n            \"item\": \"/\"\n          },\n          {\n            \"@type\": \"ListItem\",\n            \"position\": 2,\n            \"name\": \"CEC CRS Calculator\",\n            \"item\": \"/cec-crs-calculator\"\n          }\n        ]\n      },\n      {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"CEC CRS Calculator 2026\",\n        \"applicationCategory\": \"UtilitiesApplication\",\n        \"operatingSystem\": \"Web Browser\",\n        \"url\": \"/cec-crs-calculator\",\n        \"description\": \"Free online tool to calculate Canada CRS score for Canadian Experience Class (CEC) applicants. Covers all CRS sections including language (IELTS/CELPIP), Canadian work experience, education, and additional points.\",\n        \"offers\": {\n          \"@type\": \"Offer\",\n          \"price\": \"0\",\n          \"priceCurrency\": \"CAD\"\n        },\n        \"featureList\": \"CEC CRS score calculation, Canadian work experience scoring, IELTS/CELPIP support, PNP bonus points, Full score breakdown\",\n        \"aggregateRating\": {\n          \"@type\": \"AggregateRating\",\n          \"ratingValue\": \"4.9\",\n          \"reviewCount\": \"843\",\n          \"bestRating\": \"5\"\n        }\n      },\n      {\n        \"@type\": \"FAQPage\",\n        \"mainEntity\": [\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the CEC CRS Calculator?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The CEC CRS Calculator is a free online tool that estimates your Comprehensive Ranking System (CRS) score specifically for Canadian Experience Class (CEC) applicants. CEC candidates earn bonus CRS points for Canadian skilled work experience. This tool calculates your full score across all four CRS sections \u2014 age, education, language, Canadian work experience, skill transferability, and additional points.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the Canadian Experience Class (CEC)?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The Canadian Experience Class (CEC) is an Express Entry immigration pathway for people who have at least 1 year of skilled Canadian work experience in NOC TEER 0, 1, 2 or 3 jobs within the last 3 years. CEC applicants do not need a job offer or education credential evaluation (ECA), making it one of the fastest Canada PR pathways.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How many CRS points does Canadian work experience add under CEC?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Canadian work experience adds CRS points directly in Section A: 1 year = 40 points (single) or 35 points (with spouse), 2 years = 53/46, 3 years = 64/56, 4 years = 72/63, 5+ years = 80/70 points. CEC candidates also benefit from skill transferability bonuses when Canadian work experience is combined with strong language scores or foreign work experience.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is a competitive CRS score for CEC draws in 2026?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"CEC-specific Express Entry draw cutoffs in 2026 have ranged from 430 to 510. All-program draw cutoffs are higher at 470\u2013525. CEC candidates with CLB 9+ language scores and 3+ years of Canadian work experience typically score 460\u2013520, making them competitive for most draw types.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Do CEC applicants need an ECA (Educational Credential Assessment)?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"CEC applicants do not need an ECA to be eligible for CEC, but submitting an ECA can significantly boost your CRS score. A foreign degree evaluated as equivalent to a Canadian bachelor's degree adds 112 CRS points (Section A education factor). Without an ECA, your education field may show as 'no Canadian credential' reducing your score.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Can I use this CRS calculator for both CEC and FSW?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes. The CRS scoring system is the same for all Express Entry streams including CEC, FSW (Federal Skilled Worker), FST (Federal Skilled Trades), and PNP candidates. The difference is eligibility criteria, not the CRS points calculation. Use our FSW 67-Point Calculator separately to check FSW eligibility.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How does IELTS affect CEC CRS score?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"IELTS scores directly impact CRS through CLB levels. For CEC applicants, the minimum language requirement is CLB 7 in all four skills (approximately IELTS 6.0). However, achieving CLB 9+ (IELTS 7.0+) can add 60\u201380 more CRS points versus CLB 7, making language improvement the single biggest CRS booster for CEC applicants.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the minimum Canadian work experience for CEC?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The minimum is 1 year (1,560 hours) of skilled Canadian work experience in a NOC TEER 0, 1, 2, or 3 occupation within the last 3 years before applying. Self-employment and work done while on a student permit do not count toward CEC eligibility (though post-graduation work experience does).\"\n            }\n          }\n        ]\n      },\n      {\n        \"@type\": \"HowTo\",\n        \"name\": \"How to Calculate Your CEC CRS Score\",\n        \"description\": \"Step-by-step guide for Canadian Experience Class applicants to calculate their CRS score using this free tool.\",\n        \"totalTime\": \"PT3M\",\n        \"step\": [\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 1,\n            \"name\": \"Enter Personal and Education Details\",\n            \"text\": \"Select your age, marital status, and highest education level. CEC does not require an ECA but entering your education still impacts CRS points.\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 2,\n            \"name\": \"Enter Canadian Work Experience\",\n            \"text\": \"Select 1\u20135+ years of Canadian skilled work experience in Section A. This is the key CEC-specific factor.\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 3,\n            \"name\": \"Add Language Test Scores\",\n            \"text\": \"Enter IELTS, CELPIP-G, TEF Canada, or TCF Canada scores. CEC requires minimum CLB 7 in all skills.\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 4,\n            \"name\": \"Add Foreign Work Experience (if any)\",\n            \"text\": \"Foreign work experience adds skill transferability bonus points when combined with strong language scores.\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 5,\n            \"name\": \"Add Additional Points\",\n            \"text\": \"Enter any PNP nomination, LMIA job offer, Canadian education, French bonus, or sibling in Canada.\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 6,\n            \"name\": \"Calculate and Review\",\n            \"text\": \"Click 'Calculate My CEC CRS Score' to instantly see your total score out of 1,200 with a full section-by-section breakdown.\"\n          }\n        ]\n      }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

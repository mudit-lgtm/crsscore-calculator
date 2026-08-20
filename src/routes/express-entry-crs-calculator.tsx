import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/express_entry_crs_calculator.html?raw";
import pageJs from "@/content/express_entry_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/express-entry-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Express Entry Calculator 2026 - Instant CRS Score"
      },
      {
            "name": "description",
            "content": "Instant Express Entry calculator built on the official IRCC grid. See CRS points for age, language, education and PNP in seconds - free, no login."
      },
      {
            "name": "keywords",
            "content": "express entry crs calculator, crs score calculator, canada crs calculator, crs points calculator, calculate crs score, crs calculator canada, ircc crs calculator, free crs calculator"
      },
      {
            "property": "og:title",
            "content": "Express Entry Calculator 2026 - Instant CRS Score"
      },
      {
            "property": "og:description",
            "content": "Instant Express Entry calculator built on the official IRCC grid. See CRS points for age, language, education and PNP in seconds - free, no login."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/express-entry-crs-calculator"
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
            "content": "Express Entry Calculator 2026 - Instant CRS Score"
      },
      {
            "name": "twitter:description",
            "content": "Instant Express Entry calculator built on the official IRCC grid. See CRS points for age, language, education and PNP in seconds - free, no login."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/express-entry-crs-calculator"
      },
      {
            "rel": "icon",
            "href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIiSURBVFiF7ZdNaxNBGMd/s9mQNG0aaxoTbXxJjR/Qi4hevCh49ODFm0dP3jx49ODBkxcPHjx48GCSg6BIQdAiKCqIiCIqIuIBURBRRA==",
            "type": "image/png"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@graph\": [\n      {\n        \"@type\": \"WebPage\",\n        \"@id\": \"/express-entry-crs-calculator\",\n        \"url\": \"/express-entry-crs-calculator\",\n        \"name\": \"Express Entry CRS Calculator 2026 \u2013 Canada CRS Score Calculator\",\n        \"description\": \"Free Canada Express Entry CRS score calculator. Calculate your Comprehensive Ranking System points instantly with full breakdown.\",\n        \"inLanguage\": \"en\",\n        \"isPartOf\": { \"@id\": \"/#website\" },\n        \"breadcrumb\": { \"@id\": \"/express-entry-crs-calculator#breadcrumb\" },\n        \"dateModified\": \"2026-04-19\"\n      },\n      {\n        \"@type\": \"WebSite\",\n        \"@id\": \"/#website\",\n        \"url\": \"/\",\n        \"name\": \"CRS Score Calculator\",\n        \"description\": \"Free Canada Express Entry CRS calculator tools\",\n        \"potentialAction\": {\n          \"@type\": \"SearchAction\",\n          \"target\": { \"@type\": \"EntryPoint\", \"urlTemplate\": \"/?s={search_term_string}\" },\n          \"query-input\": \"required name=search_term_string\"\n        }\n      },\n      {\n        \"@type\": \"BreadcrumbList\",\n        \"@id\": \"/express-entry-crs-calculator#breadcrumb\",\n        \"itemListElement\": [\n          { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n          { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry CRS Calculator\", \"item\": \"/express-entry-crs-calculator\" }\n        ]\n      },\n      {\n        \"@type\": \"SoftwareApplication\",\n        \"name\": \"Express Entry CRS Calculator 2026\",\n        \"applicationCategory\": \"UtilitiesApplication\",\n        \"operatingSystem\": \"Web Browser\",\n        \"url\": \"/express-entry-crs-calculator\",\n        \"description\": \"Free online tool to calculate Canada Express Entry CRS score. Covers age, education, language (IELTS/CELPIP/TEF/TCF), work experience, and additional points.\",\n        \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n        \"featureList\": \"CRS score calculation, Points breakdown, IELTS/CELPIP support, PNP points, Job offer points\",\n        \"screenshot\": \"/og-image.png\",\n        \"aggregateRating\": {\n          \"@type\": \"AggregateRating\",\n          \"ratingValue\": \"4.8\",\n          \"reviewCount\": \"1247\",\n          \"bestRating\": \"5\"\n        }\n      },\n      {\n        \"@type\": \"FAQPage\",\n        \"mainEntity\": [\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the Express Entry CRS calculator?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"The Express Entry CRS (Comprehensive Ranking System) calculator is a free online tool that estimates your CRS score based on your age, education, language test results (IELTS, CELPIP, TEF, TCF), Canadian and foreign work experience, job offer, and provincial nomination. The maximum CRS score is 1,200 points.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is a good CRS score for Canada PR in 2026?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"A CRS score of 470 or above is generally competitive for all-program Express Entry draws in 2026. Recent IRCC draw cutoffs have ranged from 470 to 525. French-language and PNP draws often have lower cutoffs, sometimes below 400.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How is the CRS score calculated?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"CRS score is calculated across four sections: (A) Core human capital \u2014 age, education, first and second language, Canadian work experience; (B) Spouse/common-law partner factors; (C) Skill transferability factors combining education, language, and foreign work experience; (D) Additional points for provincial nomination (+600), valid job offer (+50 or +200), French language proficiency, Canadian education, and sibling in Canada (+15).\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Can I calculate CRS score without IRCC login?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes. This free CRS calculator requires no IRCC account, no login, and no personal information. All calculations run locally in your browser and no data is stored or transmitted.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How many CRS points does a provincial nomination add?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"A provincial nomination (PNP) adds 600 CRS points instantly, virtually guaranteeing an Invitation to Apply (ITA) in the next Express Entry draw.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"How does IELTS score affect CRS points?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"IELTS scores are converted to Canadian Language Benchmark (CLB) levels before being applied to CRS. A CLB 9+ in all four skills (approximately IELTS 7.0+) earns the maximum language points. Higher IELTS scores yield higher CRS points, especially for the first official language.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"What is the CRS score for FSW (Federal Skilled Worker)?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Federal Skilled Worker (FSW) candidates use the same CRS scoring system as other Express Entry streams. However, FSW candidates must also meet the 67-point FSW eligibility criteria separately from the CRS score. FSW-specific draws have had cutoffs around 490\u2013530 in recent rounds.\"\n            }\n          },\n          {\n            \"@type\": \"Question\",\n            \"name\": \"Does the CRS calculator work for CEC applicants?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes. Canadian Experience Class (CEC) applicants use this same CRS calculator. CEC candidates typically score higher due to Canadian work experience bonuses. Recent CEC-specific draw cutoffs have ranged from 430 to 500.\"\n            }\n          }\n        ]\n      },\n      {\n        \"@type\": \"HowTo\",\n        \"name\": \"How to Calculate Your CRS Score for Canada Express Entry\",\n        \"description\": \"Step-by-step guide to calculating your Comprehensive Ranking System (CRS) score for Canada Express Entry using this free calculator.\",\n        \"totalTime\": \"PT3M\",\n        \"step\": [\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 1,\n            \"name\": \"Enter Personal & Education Details\",\n            \"text\": \"Select your age, marital status, and highest education level. If applying with a spouse, toggle spouse inclusion and add their details.\",\n            \"url\": \"/express-entry-crs-calculator#section-a\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 2,\n            \"name\": \"Add Language Test Scores\",\n            \"text\": \"Choose your test type (IELTS, CELPIP, TEF Canada, or TCF Canada) and enter scores for speaking, listening, reading, and writing.\",\n            \"url\": \"/express-entry-crs-calculator#section-language\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 3,\n            \"name\": \"Enter Work Experience\",\n            \"text\": \"Input years of Canadian and foreign skilled work experience. Foreign work experience contributes to skill transferability points.\",\n            \"url\": \"/express-entry-crs-calculator#section-work\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 4,\n            \"name\": \"Add Additional Points\",\n            \"text\": \"Indicate if you have a valid job offer, provincial nomination, Canadian education credential, or a sibling who is a Canadian citizen or PR.\",\n            \"url\": \"/express-entry-crs-calculator#section-additional\"\n          },\n          {\n            \"@type\": \"HowToStep\",\n            \"position\": 5,\n            \"name\": \"Calculate and Review Your Score\",\n            \"text\": \"Click 'Calculate My CRS Score' to instantly see your total score out of 1,200, broken down by each section.\",\n            \"url\": \"/express-entry-crs-calculator#result\"\n          }\n        ]\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Express Entry Calculator 2026 - Instant CRS Score\", \"url\": \"https://crscalculator.site/express-entry-crs-calculator\", \"description\": \"Instant Express Entry calculator built on the official IRCC grid. See CRS points for age, language, education and PNP in seconds - free, no login.\", \"applicationCategory\": \"UtilityApplication\", \"operatingSystem\": \"All\", \"browserRequirements\": \"Requires JavaScript\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\"}, \"publisher\": {\"@type\": \"Organization\", \"name\": \"CRS Score Calculator\", \"url\": \"https://crscalculator.site/\"}}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/healthcare_crs_calculator.html?raw";
import pageJs from "@/content/healthcare_crs_calculator.pagejs.txt?raw";

export const Route = createFileRoute("/healthcare-crs-calculator")({
  head: () => ({
    meta: [
      {
            "title": "Healthcare Workers CRS Calculator 2026 \u2013 Express Entry Points Tool | Canada Immigration"
      },
      {
            "name": "description",
            "content": "Free Healthcare Workers CRS Calculator 2026 for Canada Express Entry. Calculate your CRS score for nurses, doctors, dentists, pharmacists & healthcare NOC codes. Check category-based draw eligibility instantly. No login required."
      },
      {
            "name": "keywords",
            "content": "healthcare workers crs calculator, healthcare crs score calculator, crs calculator for healthcare workers, crs score calculator for healthcare workers, canada express entry healthcare, healthcare worker canada immigration, nurse crs calculator canada, doctor crs score canada 2026"
      },
      {
            "property": "og:title",
            "content": "Healthcare Workers CRS Calculator 2026 \u2013 Free Express Entry Points Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your CRS score for Canada's Healthcare category-based Express Entry draws. Covers nurses, doctors, pharmacists, dentists and all healthcare NOC codes. Free, instant results."
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
            "content": "https://crscalculator.site/og-healthcare.png"
      },
      {
            "name": "twitter:card",
            "content": "summary_large_image"
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
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"WebApplication\",\n    \"name\": \"Healthcare Workers CRS Calculator 2026\",\n    \"url\": \"/healthcare-crs-calculator\",\n    \"description\": \"Free CRS Score Calculator for Canadian healthcare workers. Calculate Express Entry points for nurses, doctors, pharmacists and all healthcare NOC occupations. Updated for 2026 category-based draws.\",\n    \"applicationCategory\": \"UtilityApplication\",\n    \"operatingSystem\": \"All\",\n    \"offers\": { \"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"CAD\" },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"CRS Score Calculator\",\n      \"url\": \"/\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"/logo.png\"\n      }\n    }\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What CRS score do healthcare workers need for Canada Express Entry in 2026?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Healthcare workers need a CRS score of around 430\u2013471 for category-based healthcare draws in 2026, which is significantly lower than the all-program cutoff of 493\u2013520. IRCC held dedicated Healthcare draws in 2023 and 2024 with cutoffs as low as 430 CRS points, making this pathway far more accessible than the general Express Entry pool.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Which healthcare NOC codes qualify for Canada Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Healthcare NOC codes eligible for Express Entry include: 31100 (Specialist physicians), 31102 (General practitioners and family physicians), 31103 (Dentists), 31110 (Pharmacists), 31200 (Audiologists), 31301 (Registered nurses and registered psychiatric nurses), 31302 (Nurse practitioners), 32101 (Dental hygienists), 32103 (Medical laboratory technologists), 32111 (Radiological technologists), and many others in TEER 1, 2, and 3. Use the IRCC eligibility list to confirm your exact NOC code.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Do healthcare workers get extra CRS points in Canada?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Healthcare workers do not receive automatic extra CRS points just for their occupation. However, IRCC runs category-based Express Entry draws exclusively for healthcare occupations, with lower CRS cutoffs (as low as 430). This means healthcare workers have a much better chance of receiving an ITA at a lower CRS score than general pool candidates.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Can nurses immigrate to Canada through Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"Yes. Registered nurses (NOC 31301) and nurse practitioners (NOC 31302) qualify for Canada Express Entry through the Federal Skilled Worker (FSW) or Canadian Experience Class (CEC) programs. They are also eligible for dedicated healthcare category-based draws with lower CRS cutoffs. A CLB 7 language requirement applies for FSW; CLB 7 or 5 applies for CEC depending on the TEER level.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"Is a Canadian license required for healthcare workers to immigrate?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"A Canadian professional license is not required to apply for Express Entry or receive an ITA. However, you will need provincial licensing to practice your healthcare profession in Canada after arriving as a PR. Many provinces have bridging programs for internationally educated health professionals (IEHPs). The College of Nurses, CPSO (physicians), and equivalent provincial bodies govern licensing.\"\n        }\n      },\n      {\n        \"@type\": \"Question\",\n        \"name\": \"What is the minimum language requirement for healthcare workers in Express Entry?\",\n        \"acceptedAnswer\": {\n          \"@type\": \"Answer\",\n          \"text\": \"For FSW: CLB 7 (IELTS 6.0/6.0/6.0/6.0) in all 4 skills. For CEC (TEER 0/1 healthcare roles): CLB 7. For CEC (TEER 2/3 healthcare support roles): CLB 5. Higher language scores significantly boost CRS points \u2014 CLB 9 earns nearly double the CRS points vs CLB 7.\"\n        }\n      }\n    ]\n  }" },
      { type: "application/ld+json", children: "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"/\" },\n      { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Express Entry Tools\", \"item\": \"/express-entry\" },\n      { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Healthcare Workers CRS Calculator\", \"item\": \"/healthcare-crs-calculator\" }\n    ]\n  }" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

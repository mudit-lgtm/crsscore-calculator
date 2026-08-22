import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/home.html?raw";
import pageJs from "@/content/home.pagejs.txt?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
            "title": "CRS Calculator 2026 - Free Express Entry Score Tool"
      },
      {
            "name": "description",
            "content": "Calculate your Canada Express Entry CRS score in 60 seconds. Free IRCC-based CRS score calculator with a full point breakdown - no signup, instant result."
      },
      {
            "name": "keywords",
            "content": "crs calculator,crs score calculator,calculate crs score,crs points calculator,canada express entry crs calculator,crs calculator canada,instant crs calculator,crs calculator 2026,free crs score calculator,calculate crs score for canada"
      },
      {
            "name": "robots",
            "content": "index,follow,max-snippet:-1,max-image-preview:large"
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
            "property": "og:type",
            "content": "website"
      },
      {
            "property": "og:title",
            "content": "CRS Calculator 2026 - Free Express Entry Score Tool"
      },
      {
            "property": "og:description",
            "content": "Calculate your Canada Express Entry CRS score in 60 seconds. Free IRCC-based CRS score calculator with a full point breakdown - no signup, instant result."
      },
      {
            "property": "og:url",
            "content": "https://crscalculator.site/"
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
            "content": "CRS Calculator 2026 - Free Express Entry Score Tool"
      },
      {
            "name": "twitter:description",
            "content": "Calculate your Canada Express Entry CRS score in 60 seconds. Free IRCC-based CRS score calculator with a full point breakdown - no signup, instant result."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "https://crscalculator.site/"
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
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;800&display=swap"
      }
],
    scripts: [
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"WebApplication\",\"name\":\"CRS Score Calculator 2026\",\"url\":\"/\",\"description\":\"Free Canada Express Entry CRS Score Calculator 2026. Calculate your Comprehensive Ranking System points instantly.\",\"applicationCategory\":\"UtilityApplication\",\"operatingSystem\":\"All\",\"browserRequirements\":\"Requires JavaScript\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"CAD\"},\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.9\",\"ratingCount\":\"3847\",\"bestRating\":\"5\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"CRS Score Calculator\",\"url\":\"/\"}}" },
      { type: "application/ld+json", children: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is this CRS calculator accurate?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Every point value in this CRS score calculator is taken from IRCC's published Comprehensive Ranking System grid, and the grid is re-checked whenever IRCC updates it. It is an unofficial tool, so treat the result as a close estimate and confirm it with the official IRCC CRS tool before you submit an Express Entry profile. You can see exactly which rules we apply in how CRS is calculated.\"}}, {\"@type\": \"Question\", \"name\": \"What does CRS stand for?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"CRS stands for the Comprehensive Ranking System — the points system IRCC uses to rank Express Entry candidates out of 1,200. People search for this tool in many ways, including CRS caculator, CS score calculator or CRS score caluculator; they all mean the same thing: a Comprehensive Ranking System points calculator for Canadian permanent residence. Learn more in what is a CRS score.\"}}, {\"@type\": \"Question\", \"name\": \"What is a good CRS score for Canada Express Entry in 2026?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A CRS score of 470 or above is competitive for all-program Express Entry draws. Recent 2025 cutoffs ranged from 471 to 525. PNP-specific draws and French-language draws have lower cutoffs — sometimes under 400. Use our CRS cutoff scores history to track trends.\"}}, {\"@type\": \"Question\", \"name\": \"How is the CRS score calculated?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"CRS score is calculated across four sections: (A) Core human capital — age, education, language, Canadian work experience; (B) Spouse/partner factors; (C) Skill transferability — foreign work exp + language combinations; (D) Additional points including provincial nomination (+600) and job offer. Maximum total is 1,200 points. Read the full CRS calculation guide.\"}}, {\"@type\": \"Question\", \"name\": \"How many CRS points does a provincial nomination give?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A provincial nomination (PNP) adds 600 CRS points instantly — virtually guaranteeing an ITA in the next Express Entry draw. Check which province best suits your profile using our Ontario CRS calculator or Alberta CRS calculator.\"}}, {\"@type\": \"Question\", \"name\": \"What is the minimum CRS score needed to get an ITA?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"There is no fixed minimum — the cutoff varies each draw. Recent all-program draw cutoffs ranged from 471 to 525. Aim for 470+ for competitive chances. Monitor live cutoffs on our Express Entry cutoff scores page.\"}}, {\"@type\": \"Question\", \"name\": \"Can I calculate my CRS score without an IRCC account?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes — this free CRS calculator requires no IRCC login, government account, or personal information. Enter your details and get an instant score. Your data is never stored. You can also verify results using the official IRCC CRS tool.\"}}, {\"@type\": \"Question\", \"name\": \"How can I improve my CRS score?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Top strategies: (1) Improve IELTS/CELPIP scores — each CLB band adds 10–32 pts; (2) Get a Provincial Nomination (+600 pts); (3) Get a Canadian job offer (+50–200 pts); (4) Gain Canadian work experience; (5) Improve French language skills for a 25–50 pt bonus. See the full CRS score improvement guide.\"}}]}" },
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"CRS Calculator\",\"item\":\"/\"}]}" },
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"HowTo\",\"name\":\"How to Calculate Your CRS Score\",\"description\":\"Step-by-step guide to calculate your Comprehensive Ranking System (CRS) score for Canada Express Entry.\",\"step\":[{\"@type\":\"HowToStep\",\"name\":\"Enter Personal Details\",\"text\":\"Input your age, education level, marital status and Canadian work experience.\"},{\"@type\":\"HowToStep\",\"name\":\"Add Language Test Scores\",\"text\":\"Select your test type (IELTS, CELPIP, TEF or TCF) and enter CLB scores for all four skills.\"},{\"@type\":\"HowToStep\",\"name\":\"Add Additional Points\",\"text\":\"Select provincial nomination, job offer, sibling in Canada or French language bonuses if applicable.\"},{\"@type\":\"HowToStep\",\"name\":\"Get Your Score\",\"text\":\"Click Calculate My CRS Score to see your instant result with a full section-by-section breakdown.\"}]}" },
      { type: "application/ld+json", children: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"CRS Score Calculator\",\"url\":\"/\",\"logo\":\"/logo.png\"}" }
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

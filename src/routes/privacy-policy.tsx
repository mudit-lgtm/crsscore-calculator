import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/privacy_policy.html?raw";
import pageJs from "@/content/privacy_policy.pagejs.txt?raw";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
            "title": "Privacy Policy \u2013 CRS Score Calculator"
      },
      {
            "name": "description",
            "content": "Privacy Policy for CRS Score Calculator. Learn how we collect, use, and protect your information when you use our Canada Express Entry CRS tools."
      }
],
    links: [
      {
            "rel": "canonical",
            "href": "/privacy-policy"
      },
      {
            "rel": "preconnect",
            "href": "https://fonts.googleapis.com"
      },
      {
            "rel": "stylesheet",
            "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
],
    scripts: [
      
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={pageHtml} js={pageJs} externalScripts={[]} />;
}

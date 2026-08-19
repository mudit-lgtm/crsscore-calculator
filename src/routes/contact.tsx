import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import pageHtml from "@/content/contact.html?raw";
import pageJs from "@/content/contact.pagejs.txt?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
            "title": "Contact Us \u2013 CRS Score Calculator"
      },
      {
            "name": "description",
            "content": "Contact the CRS Score Calculator team. Send us your questions, feedback, or bug reports about our Canada Express Entry CRS calculator tools."
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

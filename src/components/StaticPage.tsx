import { useEffect, useRef } from "react";

type StaticPageProps = {
  html: string;
  js?: string;
  externalScripts?: string[];
};

/**
 * Renders a verbatim copy of an original static HTML page and runs its
 * original inline scripts, so inline onclick/onchange handlers keep working.
 */
export default function StaticPage({ html, js, externalScripts = [] }: StaticPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const added: HTMLScriptElement[] = [];

    externalScripts.forEach((src) => {
      const el = document.createElement("script");
      el.src = src;
      el.async = false;
      document.body.appendChild(el);
      added.push(el);
    });

    if (js && js.trim()) {
      const el = document.createElement("script");
      el.textContent = js;
      document.body.appendChild(el);
      added.push(el);
    }

    window.dispatchEvent(new Event("load"));
    document.dispatchEvent(new Event("DOMContentLoaded"));

    return () => {
      added.forEach((el) => el.remove());
    };
  }, [js, externalScripts]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
}

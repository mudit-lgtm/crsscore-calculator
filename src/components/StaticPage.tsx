import { useEffect, useLayoutEffect, useRef } from "react";
import { applyTokens } from "@/lib/draws";
import { LAST_UPDATED_LONG, LAST_UPDATED_ISO } from "@/config/lastUpdated";
import { mountAd } from "@/components/AdSlot";

const NOTE = `<aside class="crs-note">Estimate only. Not legal or immigration advice. Not affiliated with IRCC or the Government of Canada. Check <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer">canada.ca</a> for official rules. <a href="/disclaimer">Read the disclaimer</a>.</aside>`;
const AD = `<div class="crs-ad-anchor" aria-hidden="true"></div>`;

/** Insert the two allowed ad anchors: after the intro paragraph and before the FAQ. */
function addAdAnchors(h: string) {
  h = h.replace(/(<\/h1>[\s\S]*?<\/p>)/i, `$1${AD}`);
  const faq = h.search(/<(h2|h3|div)[^>]*>(?:(?!<\/\1>)[\s\S]){0,200}?(Frequently Asked|FAQ)/i);
  if (faq > 0) h = h.slice(0, faq) + AD + h.slice(faq);
  return h;
}

function prepare(raw: string) {
  let h = applyTokens(raw);
  if (!h.includes("class=\"last-updated\"")) {
    h = h.replace(/<\/h1>/i, `</h1><p class="last-updated" style="font-size:.8rem;opacity:.8;margin:6px 0 0">Last updated: <time datetime="${LAST_UPDATED_ISO}">${LAST_UPDATED_LONG}</time></p>`);
  }
  return h;
}

/**
 * Wrap a legacy page script in a function scope so re-running it (after
 * client navigation back to the page) cannot clash on top-level const/let/class.
 * Top-level function declarations and const/let bindings are exported to window
 * so inline onclick/onchange handlers keep working.
 */
function scopeScript(code: string) {
  const names = new Set<string>();
  // top-level only: lines starting at column 0
  const re = /^(?:async\s+)?function\s*\*?\s*([A-Za-z_$][\w$]*)|^(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) names.add((m[1] || m[2])!);
  const exports = [...names].map((n) => `try{window[${JSON.stringify(n)}]=${n};}catch(e){}`).join("");
  return `(function(){\n${code}\n;${exports}\n})();`;
}

type StaticPageProps = {
  html: string;
  /** "tool" = calculator/guide/blog (gets disclaimer note + ad anchors); "trust" = legal pages. */
  kind?: "tool" | "trust";
  js?: string;
  externalScripts?: string[];
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders a verbatim copy of an original static HTML page and runs its
 * original inline scripts, so inline onclick/onchange handlers keep working.
 */
export default function StaticPage({ html: rawHtml, js, externalScripts = [], kind = "tool" }: StaticPageProps) {
  const html = kind === "tool" ? addAdAnchors(prepare(rawHtml)) + NOTE : prepare(rawHtml);
  const containerRef = useRef<HTMLDivElement>(null);

  // Wrap every wide table in a mobile-safe horizontal scroll container.
  // Re-runs on DOM mutations because some page scripts inject tables later.
  useIsomorphicLayoutEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const wrapTables = () => {
      root.querySelectorAll("table").forEach((table) => {
        const parent = table.parentElement;
        if (parent && parent.classList.contains("table-scroll")) return;
        const wrap = document.createElement("div");
        wrap.className = "table-scroll";
        wrap.setAttribute("role", "region");
        wrap.setAttribute("tabindex", "0");
        wrap.setAttribute("aria-label", "Scrollable table");
        table.replaceWith(wrap);
        wrap.appendChild(table);
      });
    };
    wrapTables();
    if (kind === "tool") {
      // Disclaimer note right under the first calculator result box.
      const res = Array.from(root.querySelectorAll<HTMLElement>("[id]")).find(
        (el) => /result/i.test(el.id) && !el.parentElement?.closest("[id*='esult']") && !el.closest("script"),
      );
      if (res && !res.nextElementSibling?.classList.contains("crs-note")) {
        res.insertAdjacentHTML("afterend", NOTE);
      }
      const fill = () => root.querySelectorAll<HTMLElement>(".crs-ad-anchor").forEach((a) => mountAd(a));
      fill();
      window.addEventListener("crs-consent-change", fill);
    }
    if (typeof MutationObserver === "undefined") return;
    const obs = new MutationObserver(() => wrapTables());
    obs.observe(root, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [html]);


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
      el.textContent = scopeScript(applyTokens(js));
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

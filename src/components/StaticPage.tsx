import { useEffect, useLayoutEffect, useRef } from "react";
import { applyTokens } from "@/lib/draws";
import { LAST_UPDATED_LONG, LAST_UPDATED_ISO } from "@/config/lastUpdated";

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
  js?: string;
  externalScripts?: string[];
};

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Renders a verbatim copy of an original static HTML page and runs its
 * original inline scripts, so inline onclick/onchange handlers keep working.
 */
export default function StaticPage({ html: rawHtml, js, externalScripts = [] }: StaticPageProps) {
  const html = prepare(rawHtml);
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

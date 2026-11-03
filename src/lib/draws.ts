import data from "@/data/draws.json";
import { LAST_UPDATED_LONG, LAST_UPDATED_ISO } from "@/config/lastUpdated";

export type Draw = {
  draw: number;
  date: string;
  category: string;
  itas: number;
  crs: number;
  unverified?: boolean;
};

export const DRAWS_SOURCE_URL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html";

const CAT = data.categories as Record<string, string>;
/** All draws, newest first. */
export const DRAWS: Draw[] = [...(data.draws as Draw[])].sort((a, b) =>
  a.date === b.date ? b.draw - a.draw : b.date.localeCompare(a.date),
);
export const LATEST = DRAWS[0]!;
export const CURRENT_YEAR = LAST_UPDATED_ISO.slice(0, 4);

const fmt = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
const n = (x: number) => x.toLocaleString("en-US");
export const catLabel = (c: string) => CAT[c] ?? c;
const typeKey: Record<string, string> = { "all-program": "allprog", healthcare: "health" };

/** Lowest/highest cutoffs for a category over the latest `count` draws of it. */
export function cutoffRange(category: string, months = 12) {
  const since = new Date(LATEST.date + "T12:00:00Z");
  since.setUTCMonth(since.getUTCMonth() - months);
  const cut = since.toISOString().slice(0, 10);
  const xs = DRAWS.filter((d) => d.category === category && !d.unverified && d.date >= cut);
  if (!xs.length) return null;
  const v = xs.map((d) => d.crs);
  return { min: Math.min(...v), max: Math.max(...v), from: xs[xs.length - 1]!.date, to: xs[0]!.date };
}

const unv = (d: Draw) => (d.unverified ? ' <span class="unverified-badge" title="Not confirmed against IRCC data" style="display:inline-block;font-size:.65rem;font-weight:600;padding:1px 6px;border-radius:8px;background:#fff3cd;color:#7a5a00;vertical-align:middle">unverified</span>' : "");

function homeRows() {
  return DRAWS.slice(0, 5)
    .map(
      (d) =>
        `<tr><td>${d.draw}${unv(d)}</td><td>${fmt(d.date)}</td><td>${catLabel(d.category)}</td><td><strong>${d.crs}</strong></td><td>${n(d.itas)}</td></tr>`,
    )
    .join("");
}

function fullRows() {
  return DRAWS.map((d) => {
    const y = d.date.slice(0, 4);
    const k = typeKey[d.category] ?? d.category;
    const old = Number(y) < 2025 ? ` class="hidden-row year-${y}"` : "";
    return `<tr data-type="${k}"${old}><td class="draw-num">#${d.draw}${unv(d)}</td><td>${fmt(d.date)}</td><td><span class="type-badge type-${k}">${catLabel(d.category)}</span></td><td class="crs-val" style="color:var(--c-${k})">${d.crs}</td><td class="ita-val">${n(d.itas)}</td></tr>`;
  }).join("");
}

function latestOf(cat: string) {
  const d = DRAWS.find((x) => x.category === cat && !x.unverified);
  return d ? String(d.crs) : "n/a";
}

function rangeText(cat: string) {
  const r = cutoffRange(cat);
  return r ? (r.min === r.max ? `${r.min}` : `${r.min}–${r.max}`) : "no recent draws";
}

const PHRASE_CATS: [string, string][] = [
  ["all-program", "all-program"],
  ["cec", "CEC"],
  ["french", "French-language"],
];
/** "latest CEC draw: X, latest French-language draw: Y" — only categories with a draw in the last 12 months. */
export function latestCutoffsPhrase() {
  const parts = PHRASE_CATS.filter(([c]) => cutoffRange(c)).map(([c, l]) => `latest ${l} draw: ${latestOf(c)}`);
  return parts.length ? parts.join(", ") : `latest draw: ${LATEST.crs}`;
}

function latestBlock() {
  const rows = DRAWS.slice(0, 5)
    .map((d) => `<tr><td>${catLabel(d.category)}${unv(d)}</td><td>${fmt(d.date)}</td><td>${n(d.itas)}</td><td><strong>${d.crs}</strong></td></tr>`)
    .join("");
  return `<section class="latest-draws-block" style="margin:20px 0;padding:16px;border:1px solid #e5e7eb;border-radius:12px;background:#fff"><h2 style="margin:0 0 10px;font-size:1.2rem">Latest draws</h2><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.9rem"><thead><tr><th style="text-align:left">Category</th><th style="text-align:left">Date</th><th style="text-align:left">ITAs</th><th style="text-align:left">CRS</th></tr></thead><tbody>${rows}</tbody></table></div><p style="margin:10px 0 0;font-size:.85rem;color:#555">Next update: after IRCC's next round. Source: <a href="${DRAWS_SOURCE_URL}" target="_blank" rel="noopener noreferrer">IRCC</a>.</p></section>`;
}

/** Replace site tokens in legacy page HTML with values from the shared data files. */
export function applyTokens(html: string): string {
  const first = DRAWS[DRAWS.length - 1]!;
  const map: Record<string, string> = {
    LAST_UPDATED: LAST_UPDATED_LONG,
    YEAR: CURRENT_YEAR,
    DRAWS_HOME_ROWS: homeRows(),
    DRAWS_FULL_ROWS: fullRows(),
    DRAWS_COUNT: String(DRAWS.length),
    DRAWS_FIRST_YEAR: first.date.slice(0, 4),
    LATEST_NUM: String(LATEST.draw),
    LATEST_DATE: fmt(LATEST.date),
    LATEST_CRS: String(LATEST.crs),
    LATEST_ITAS: n(LATEST.itas),
    LATEST_CAT: catLabel(LATEST.category),
    RANGE_CEC: rangeText("cec"),
    RANGE_ALLPROG: rangeText("all-program"),
    RANGE_FRENCH: rangeText("french"),
    RANGE_PNP: rangeText("pnp"),
    SOURCE_URL: DRAWS_SOURCE_URL,
    LATEST_ALLPROG: latestOf("all-program"),
    LATEST_CEC: latestOf("cec"),
    LATEST_FRENCH: latestOf("french"),
    LATEST_CUTOFFS: latestCutoffsPhrase(),
    LATEST_DRAWS_BLOCK: latestBlock(),
  };
  return html.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => map[k] ?? m);
}

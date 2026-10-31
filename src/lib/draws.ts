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
export function cutoffRange(category: string, count = 6) {
  const xs = DRAWS.filter((d) => d.category === category && !d.unverified).slice(0, count);
  if (!xs.length) return null;
  const v = xs.map((d) => d.crs);
  return { min: Math.min(...v), max: Math.max(...v), from: xs[xs.length - 1]!.date, to: xs[0]!.date };
}

const unv = (d: Draw) => (d.unverified ? ' <small title="Could not be verified against IRCC">(unverified)</small>' : "");

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

function rangeText(cat: string) {
  const r = cutoffRange(cat);
  return r ? `${r.min}–${r.max}` : "n/a";
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
  };
  return html.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => map[k] ?? m);
}

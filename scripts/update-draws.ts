/**
 * Rebuilds src/data/draws.json from IRCC's official Express Entry rounds data.
 *
 * Source (the JSON that powers IRCC's rounds page):
 * https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html
 * -> https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json
 *
 * Run with: npm run update-draws   (or: bun scripts/update-draws.ts)
 * Every row in the output comes from IRCC's file, so nothing is marked
 * "unverified" after a successful run. Rows kept in draws.json that the
 * script could not confirm are removed by design — never invent rows.
 */
import { writeFileSync, readFileSync } from "node:fs";

const SOURCE_JSON =
  "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json";
const OUT = new URL("../src/data/draws.json", import.meta.url);

type Row = {
  draw: number;
  date: string;
  category: string;
  itas: number;
  crs: number;
};

function categoryOf(drawName: string): string {
  const n = drawName.toLowerCase();
  if (n.includes("provincial nominee")) return "pnp";
  if (n.includes("canadian experience class")) return "cec";
  if (n.includes("french")) return "french";
  if (n.includes("healthcare")) return "healthcare";
  if (n.includes("stem")) return "stem";
  if (n.includes("physicians")) return "physicians";
  if (n.includes("senior managers")) return "senior-managers";
  if (n.includes("military")) return "military";
  if (n.includes("transport")) return "transport";
  if (n.includes("agriculture")) return "agriculture";
  if (n.includes("education")) return "education";
  if (n.includes("skilled trades") || n.includes("trade occupation")) return "fst";
  if (n.includes("federal skilled worker")) return "fsw";
  if (n.includes("no program specified") || n.includes("general")) return "all-program";
  return "other";
}

// A local copy can be passed with `--from <file>` (or env IRCC_JSON) when
// canada.ca drops the connection — the parser only needs the same payload.
const cacheArg = process.argv[process.argv.indexOf("--from") + 1] || process.env.IRCC_JSON;

async function loadRounds(): Promise<Record<string, string>[]> {
  if (cacheArg) {
    console.log(`Using local copy: ${cacheArg}`);
    return JSON.parse(readFileSync(cacheArg, "utf8")).rounds;
  }
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fetch(SOURCE_JSON, {
        headers: { "User-Agent": "crscalculator.site draws updater (contact: site owner)" },
      });
      if (!res.ok) throw new Error(`IRCC fetch failed: ${res.status} ${res.statusText}`);
      return ((await res.json()) as { rounds?: Record<string, string>[] }).rounds ?? [];
    } catch (e) {
      console.warn(`Attempt ${attempt} failed: ${(e as Error).message}`);
      if (attempt === 5) throw e;
      await new Promise((r) => setTimeout(r, attempt * 3000));
    }
  }
  throw new Error("unreachable");
}

const rounds = await loadRounds();
if (!Array.isArray(rounds) || rounds.length === 0) {
  throw new Error("Unexpected IRCC payload shape: no rounds array");
}

const rows: Row[] = rounds
  .map((r) => ({
    draw: parseInt(r.drawNumber!, 10),
    date: r.drawDate!,
    category: categoryOf(r.drawName ?? ""),
    itas: parseInt(String(r.drawSize ?? "0").replace(/,/g, ""), 10) || 0,
    crs: parseInt(String(r.drawCRS ?? "0").replace(/,/g, ""), 10) || 0,
  }))
  .filter((r) => r.draw > 0 && /^\d{4}-\d{2}-\d{2}$/.test(r.date))
  .sort((a, b) => b.draw - a.draw);

// Sanity: draw numbers should be unique and consecutive-ish from the top.
const top = rows[0]!;
const seen = new Set(rows.map((r) => r.draw));
if (seen.size !== rows.length) throw new Error("Duplicate draw numbers in IRCC data");

const existing = JSON.parse(readFileSync(OUT, "utf8"));
const out = {
  ...existing,
  source: "IRCC Express Entry rounds (fetched automatically by scripts/update-draws.ts). Verify at IRCC.",
  sourceUrl:
    "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/mandate/policies-operational-instructions-agreements/ministerial-instructions/express-entry-rounds.html",
  fetchedFrom: SOURCE_JSON,
  updated: new Date().toISOString().slice(0, 10),
  categories: {
    "all-program": "All-Program",
    cec: "CEC",
    pnp: "PNP",
    french: "French",
    healthcare: "Healthcare",
    stem: "STEM",
    fst: "Federal Skilled Trades",
    fsw: "Federal Skilled Worker",
    transport: "Transport",
    agriculture: "Agriculture & Agri-Food",
    education: "Education",
    "senior-managers": "Senior Managers (CWE)",
    physicians: "Physicians (CWE)",
    military: "Skilled Military Recruits",
    other: "Other",
  },
  draws: rows,
};

writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
console.log(
  `Wrote ${rows.length} draws (latest #${top.draw}, ${top.date}, ${top.category}, CRS ${top.crs}) to src/data/draws.json`
);
const g389 = rows.find((r) => r.draw === 389);
console.log("Draw #389:", g389 ? JSON.stringify(g389) : "not present in IRCC data");

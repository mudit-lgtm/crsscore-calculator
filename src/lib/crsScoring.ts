// Pure CRS scoring module — matches the official IRCC Comprehensive Ranking System rules.
// Two rule sets are supported:
//   pre_2026_11_03  — rules in force before 3 November 2026 (no job-offer points, no high-wage points)
//   from_2026_11_03 — rules effective 3 November 2026 (Labour Market Integration factor)
// Sources: IRCC CRS criteria and IRCC's 3 Nov 2026 changes (canada.ca).

export type RulesetId = "pre_2026_11_03" | "from_2026_11_03";

export interface RulesetInfo {
  id: RulesetId;
  /** Short toggle label, e.g. "Before 3 Nov 2026". */
  toggleLabel: string;
  /** Shown in the result panel, e.g. "Calculated with IRCC rules effective 3 Nov 2026". */
  resultLabel: string;
  /** Whether the Labour Market Integration factor (with high-wage tiers) applies. */
  hasLabourMarketIntegration: boolean;
}

export const RULESETS: Record<RulesetId, RulesetInfo> = {
  pre_2026_11_03: {
    id: "pre_2026_11_03",
    toggleLabel: "Before 3 Nov 2026",
    resultLabel: "Calculated with IRCC rules in force before 3 Nov 2026",
    hasLabourMarketIntegration: false,
  },
  from_2026_11_03: {
    id: "from_2026_11_03",
    toggleLabel: "From 3 Nov 2026",
    resultLabel: "Calculated with IRCC rules effective 3 Nov 2026",
    hasLabourMarketIntegration: true,
  },
};

export const RULESET_SWITCH_DATE = "2026-11-03"; // America/Toronto local date
export const PROFILE_UPDATE_DEADLINE = "2026-11-03";
export const BANNER_SHOW_UNTIL = "2026-11-20";
export const HIGH_WAGE_HELP_URL =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score/high-wage.html";

/** Today's date (YYYY-MM-DD) in America/Toronto. */
export function torontoToday(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/** Default ruleset: from_2026_11_03 when today's America/Toronto date is on or after 2026-11-03. */
export function resolveDefaultRuleset(now: Date = new Date()): RulesetId {
  return torontoToday(now) >= RULESET_SWITCH_DATE ? "from_2026_11_03" : "pre_2026_11_03";
}

/** IRCC recalculation banner is shown until 2026-11-20 (America/Toronto). */
export function isBannerPeriodActive(now: Date = new Date()): boolean {
  return torontoToday(now) < BANNER_SHOW_UNTIL;
}

// ===== OFFICIAL IRCC CRS GRID (unchanged factors) =====
// Age: [with spouse, without spouse]
const AGE: Record<string, [number, number]> = {
  "17u": [0, 0], "18": [99, 90], "19": [105, 95], "20": [110, 100], "21": [110, 100], "22": [110, 100],
  "23": [110, 100], "24": [110, 100], "25": [110, 100], "26": [110, 100], "27": [110, 100], "28": [110, 100],
  "29": [110, 100], "30": [105, 95], "31": [99, 90], "32": [94, 85], "33": [88, 80], "34": [83, 75],
  "35": [77, 70], "36": [72, 65], "37": [66, 60], "38": [61, 55], "39": [55, 50], "40": [50, 45],
  "41": [39, 35], "42": [28, 25], "43": [17, 15], "44": [6, 5], "45p": [0, 0],
};
// Education: [with spouse, without spouse]
const EDU: Record<number, [number, number]> = { 0: [0, 0], 1: [28, 25], 2: [84, 75], 3: [91, 81], 4: [112, 100], 5: [119, 106], 6: [126, 112], 7: [140, 119] };
const SP_EDU: Record<number, number> = { 0: 0, 1: 2, 2: 6, 3: 7, 4: 8, 5: 9, 6: 10, 7: 10 };
// First official language points per CLB (per skill)
const L1: Record<number, number> = { 4: 6, 5: 6, 6: 8, 7: 16, 8: 22, 9: 29, 10: 32 };
// Second official language points per CLB (per skill)
const L2: Record<number, number> = { 4: 0, 5: 1, 6: 1 };
// Canadian work experience (work-length points) [with spouse, without spouse] by years index 0-5
const CWE_S: Record<number, number> = { 0: 0, 1: 40, 2: 53, 3: 64, 4: 72, 5: 80 };
const CWE_M: Record<number, number> = { 0: 0, 1: 35, 2: 46, 3: 56, 4: 63, 5: 70 };
// Spouse language per CLB per skill
const SP_L: Record<number, number> = { 4: 0, 5: 1, 6: 1, 7: 3, 8: 3, 9: 5 };
// Spouse Canadian work experience
const SP_CWE: Record<number, number> = { 0: 0, 1: 5, 2: 7, 3: 8, 4: 10, 5: 10 };

// High-wage tier → points, for Canadian work experience in a high-wage occupation (from 3 Nov 2026)
export const HW_WORK_POINTS: Record<string, number> = { "2x": 70, "1.5to2x": 40, "1.3to1.5x": 20 };
// High-wage tier → points, for a qualifying job offer in a high-wage occupation (from 3 Nov 2026)
export const HW_OFFER_POINTS: Record<string, number> = { "2x": 100, "1.5to2x": 70, "1.3to1.5x": 50 };

export type HwTier = "none" | "2x" | "1.5to2x" | "1.3to1.5x";
export type HwMonths = "none" | "under12" | "12plus";

export interface CrsInput {
  age: string;                 // AGE key, "" if unselected
  edu: number;                 // 0–7
  marital: "single" | "married";
  spouseComing: "yes" | "no";
  lsp: number; ll: number; lr: number; lw: number;  // first language CLB per skill
  l2test: string;              // "none" or test id
  l2sp: number; l2ll: number; l2lr: number; l2lw: number; // second language CLB
  canExp: number;              // Canadian work experience in years, 0–5
  spEdu: number;
  spCanExp: number;
  spLangTest: string;
  spLsp: number; spLll: number; spLlr: number; spLlw: number;
  fgnExp: string;              // "0" | "1" | "2"
  eduLang: string;             // "0" | "1"
  tradesCert: string;          // "0" | "1"
  pnp: number;                 // 0 | 600
  sib: number;                 // 0 | 15
  fr1: number; fr2: number;    // French bonus 25 / 50
  cedu1: number; cedu2: number; // Canadian study 15 / 30
  // New-rules fields (only read when ruleset is from_2026_11_03):
  hwMonths?: HwMonths;         // Canadian work months in a high-wage occupation
  hwTier?: HwTier;             // High-wage tier of that occupation
  jobOffer?: "yes" | "no";     // Valid job offer in a high-wage occupation
  offerTier?: HwTier;          // Wage tier of the job-offer occupation
}

export interface LmiDetail {
  /** Work-length points + high-wage points (capped). */
  workExperiencePoints: number;
  workLengthPoints: number;
  highWagePoints: number;
  /** Job-offer points (0 when there is no qualifying offer). */
  jobOfferPoints: number;
  /** Which side won the max-of rule. */
  winner: "work" | "offer" | "none";
}

export interface CrsResult {
  ruleset: RulesetId;
  /** Section A — Core Human Capital. Includes Canadian work-experience length points before 3 Nov 2026; excludes them from 3 Nov 2026 (moved to Labour Market Integration). */
  core: number;
  coreBreakdown: {
    age: number; education: number; firstLanguage: number; secondLanguage: number; canadianWorkExperience: number;
  };
  /** Section B — Spouse / Partner factors. */
  spouse: number;
  /** Section C — Skill Transferability (high-wage rules are NOT used there). */
  transferability: number;
  /** Section D — Additional points (PNP, French, Canadian study, sibling). */
  additional: number;
  /** Labour Market Integration points — null under pre_2026_11_03 rules. */
  labourMarketIntegration: number | null;
  lmiDetail: LmiDetail | null;
  /** Total CRS score, capped at 1,200. */
  total: number;
}

const MAX_TOTAL = 1200;

export function calculateCrs(input: CrsInput, rulesetId: RulesetId): CrsResult {
  const hasSpouse = input.marital === "married" && input.spouseComing === "yes";
  const idx = hasSpouse ? 1 : 0;
  const ruleset = RULESETS[rulesetId];

  // Section A — Core Human Capital
  const ageP = (AGE[input.age] || [0, 0])[idx] ?? 0;
  const eduRow = EDU[input.edu];
  const eduP = eduRow ? eduRow[idx] ?? 0 : 0;
  const langP = (L1[input.lsp] || 0) + (L1[input.ll] || 0) + (L1[input.lr] || 0) + (L1[input.lw] || 0);
  const firstLangMin = Math.min(input.lsp, input.ll, input.lr, input.lw);
  let l2P = 0;
  if (input.l2test !== "none") {
    l2P = Math.min((L2[input.l2sp] || 0) + (L2[input.l2ll] || 0) + (L2[input.l2lr] || 0) + (L2[input.l2lw] || 0), 24);
  }
  const workLengthP = hasSpouse ? CWE_M[input.canExp] || 0 : CWE_S[input.canExp] || 0;

  // From 3 Nov 2026 the Canadian work-experience factor moves into Labour Market Integration.
  const canadianWorkExperience = ruleset.hasLabourMarketIntegration ? 0 : workLengthP;
  const core = ageP + eduP + langP + l2P + canadianWorkExperience;

  // Section B — Spouse / Partner (unchanged; spouse factors keep their own maxima)
  let spouse = 0;
  if (hasSpouse) {
    const spEduP = SP_EDU[input.spEdu] || 0;
    let spLangP = 0;
    if (input.spLangTest !== "none") {
      spLangP = Math.min((SP_L[input.spLsp] || 0) + (SP_L[input.spLll] || 0) + (SP_L[input.spLlr] || 0) + (SP_L[input.spLlw] || 0), 20);
    }
    const spCweP = SP_CWE[input.spCanExp] || 0;
    spouse = spEduP + spLangP + spCweP;
  }

  // Section C — Skill Transferability (unchanged; high-wage rules are NOT used here)
  let transferability = 0;
  if (firstLangMin >= 7 && input.fgnExp === "1") transferability += 13;
  if (firstLangMin >= 7 && input.fgnExp === "2") transferability += 25;
  if (firstLangMin >= 9 && input.fgnExp === "1") transferability += 12;
  if (firstLangMin >= 9 && input.fgnExp === "2") transferability += 12;
  if (input.eduLang === "1" && firstLangMin >= 7) {
    if (input.edu >= 4) transferability += 25;
    else if (input.edu >= 2) transferability += 13;
  }
  if (input.fgnExp !== "0" && input.edu >= 4) transferability += 13;
  if (input.fgnExp === "2" && input.edu >= 4) transferability += 12;
  if (input.tradesCert === "1" && firstLangMin >= 5) transferability += 25;
  transferability = Math.min(transferability, 100);

  // Section D — Additional points (job-offer points were removed by IRCC in March 2025)
  const additional = Math.min(input.pnp + input.sib + input.fr1 + input.fr2 + input.cedu1 + input.cedu2, 600);

  // Labour Market Integration (from 3 Nov 2026): higher of work experience or job offer — never both.
  let lmi: number | null = null;
  let lmiDetail: LmiDetail | null = null;
  if (ruleset.hasLabourMarketIntegration) {
    // High-wage work points need at least 12 months (1,560 hours) in a high-wage occupation.
    const highWagePoints =
      input.hwMonths === "12plus" ? HW_WORK_POINTS[input.hwTier || "none"] || 0 : 0;
    const factorMax = hasSpouse ? 140 : 150; // 70+70 with spouse, 80+70 without
    const workExperiencePoints = Math.min(workLengthP + highWagePoints, factorMax);
    // A job offer alone is worth at most 100.
    const jobOfferPoints = input.jobOffer === "yes" ? HW_OFFER_POINTS[input.offerTier || "none"] || 0 : 0;
    const winner: LmiDetail["winner"] =
      workExperiencePoints > jobOfferPoints ? "work" : jobOfferPoints > workExperiencePoints ? "offer" : jobOfferPoints > 0 ? "work" : "none";
    lmi = Math.max(workExperiencePoints, jobOfferPoints);
    lmiDetail = { workExperiencePoints, workLengthPoints: workLengthP, highWagePoints, jobOfferPoints, winner };
  }

  // TODO: re-check against IRCC CRS criteria page once the full tables are updated
  const total = Math.min(core + spouse + transferability + additional + (lmi ?? 0), MAX_TOTAL);

  return {
    ruleset: rulesetId,
    core,
    coreBreakdown: {
      age: ageP,
      education: eduP,
      firstLanguage: langP,
      secondLanguage: l2P,
      canadianWorkExperience,
    },
    spouse,
    transferability,
    additional,
    labourMarketIntegration: lmi,
    lmiDetail,
    total,
  };
}

/** Baseline profile with everything at zero / unselected. */
export function emptyCrsInput(): CrsInput {
  return {
    age: "25", edu: 0, marital: "single", spouseComing: "no",
    lsp: 4, ll: 4, lr: 4, lw: 4,
    l2test: "none", l2sp: 4, l2ll: 4, l2lr: 4, l2lw: 4,
    canExp: 0, spEdu: 0, spCanExp: 0, spLangTest: "none",
    spLsp: 4, spLll: 4, spLlr: 4, spLlw: 4,
    fgnExp: "0", eduLang: "0", tradesCert: "0",
    pnp: 0, sib: 0, fr1: 0, fr2: 0, cedu1: 0, cedu2: 0,
    hwMonths: "none", hwTier: "none", jobOffer: "no", offerTier: "none",
  };
}

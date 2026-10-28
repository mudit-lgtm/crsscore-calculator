import { describe, it, expect } from "vitest";
import {
  calculateCrs,
  emptyCrsInput,
  resolveDefaultRuleset,
  RULESET_SWITCH_DATE,
  type CrsInput,
  type RulesetId,
} from "./crsScoring";

/** Build a minimal profile: age 25, no education, CLB 4 everywhere, no extras. */
function base(overrides: Partial<CrsInput> = {}): CrsInput {
  return { ...emptyCrsInput(), ...overrides };
}

function score(input: CrsInput, ruleset: RulesetId): number {
  return calculateCrs(input, ruleset).total;
}

describe("resolveDefaultRuleset", () => {
  it("defaults to the new ruleset on and after 3 Nov 2026 (America/Toronto)", () => {
    expect(resolveDefaultRuleset(new Date("2026-11-03T05:00:00Z"))).toBe("from_2026_11_03");
    expect(resolveDefaultRuleset(new Date("2026-11-03T04:59:00Z"))).toBe("from_2026_11_03");
    expect(resolveDefaultRuleset(new Date("2027-01-01T00:00:00Z"))).toBe("from_2026_11_03");
  });

  it("defaults to the old ruleset before 3 Nov 2026 (America/Toronto)", () => {
    expect(resolveDefaultRuleset(new Date("2026-11-03T03:59:00Z"))).toBe("pre_2026_11_03");
    expect(resolveDefaultRuleset(new Date("2026-06-01T00:00:00Z"))).toBe("pre_2026_11_03");
  });

  it("uses the documented switch date", () => {
    expect(RULESET_SWITCH_DATE).toBe("2026-11-03");
  });
});

describe("job-offer points removed (IRCC March 2025 change)", () => {
  it("adds no job-offer points under the old ruleset", () => {
    // A 2025-era profile would previously have gained +200 (TEER 0 Major 00) or +50.
    const before = score(base(), "pre_2026_11_03");
    const withOffer = score(base({ jobOffer: "yes", offerTier: "2x" }), "pre_2026_11_03");
    expect(withOffer).toBe(before);

    const r = calculateCrs(base({ jobOffer: "yes", offerTier: "1.5to2x" }), "pre_2026_11_03");
    expect(r.additional).toBe(0);
    expect(r.labourMarketIntegration).toBeNull();
  });

  it("no calculator path can produce the old +200 or +50 values", () => {
    for (const ruleset of ["pre_2026_11_03", "from_2026_11_03"] as const) {
      for (const offerTier of ["2x", "1.5to2x", "1.3to1.5x"] as const) {
        const r = calculateCrs(
          base({ jobOffer: "yes", offerTier, pnp: 0, sib: 0, fr1: 0, fr2: 0, cedu1: 0, cedu2: 0 }),
          ruleset
        );
        // Old +200/+50 never appear: additional has no offer component…
        expect(r.additional).toBe(0);
        // …and under the new ruleset the offer lives in LMI capped at 100.
        if (ruleset === "from_2026_11_03") {
          expect(r.lmiDetail?.jobOfferPoints).toBeLessThanOrEqual(100);
        }
      }
    }
  });
});

describe("Labour Market Integration (from 3 Nov 2026)", () => {
  it("5 years Canadian work experience, no spouse, 2x occupation → 150", () => {
    const r = calculateCrs(base({ canExp: 5, hwMonths: "12plus", hwTier: "2x" }), "from_2026_11_03");
    expect(r.labourMarketIntegration).toBe(150);
    expect(r.lmiDetail?.workLengthPoints).toBe(80);
    expect(r.lmiDetail?.highWagePoints).toBe(70);
    expect(r.lmiDetail?.winner).toBe("work");
  });

  it("5 years Canadian work experience, with spouse, 2x occupation → 140", () => {
    const r = calculateCrs(
      base({ marital: "married", spouseComing: "yes", canExp: 5, hwMonths: "12plus", hwTier: "2x" }),
      "from_2026_11_03"
    );
    expect(r.labourMarketIntegration).toBe(140);
    expect(r.lmiDetail?.workLengthPoints).toBe(70);
    expect(r.lmiDetail?.highWagePoints).toBe(70);
  });

  it("1 year Canadian work experience, no spouse, 1.3–1.5x occupation → 60 (max of work 60 vs offer 50)", () => {
    const r = calculateCrs(
      base({ canExp: 1, hwMonths: "12plus", hwTier: "1.3to1.5x", jobOffer: "yes", offerTier: "1.3to1.5x" }),
      "from_2026_11_03"
    );
    expect(r.labourMarketIntegration).toBe(60);
    expect(r.lmiDetail?.workExperiencePoints).toBe(60); // 40 + 20
    expect(r.lmiDetail?.jobOfferPoints).toBe(50);
    expect(r.lmiDetail?.winner).toBe("work");
  });

  it("no Canadian work experience + 2x job offer → 100", () => {
    const r = calculateCrs(base({ canExp: 0, jobOffer: "yes", offerTier: "2x" }), "from_2026_11_03");
    expect(r.labourMarketIntegration).toBe(100);
    expect(r.lmiDetail?.workExperiencePoints).toBe(0);
    expect(r.lmiDetail?.jobOfferPoints).toBe(100);
    expect(r.lmiDetail?.winner).toBe("offer");
  });

  it("work and job offer are never both counted (max-of rule)", () => {
    const r = calculateCrs(
      base({ canExp: 5, hwMonths: "12plus", hwTier: "2x", jobOffer: "yes", offerTier: "2x" }),
      "from_2026_11_03"
    );
    // 150 vs 100 → 150, not 250.
    expect(r.labourMarketIntegration).toBe(150);
  });

  it("under 12 months in a high-wage occupation earns no high-wage points", () => {
    const r = calculateCrs(base({ canExp: 2, hwMonths: "under12", hwTier: "2x" }), "from_2026_11_03");
    expect(r.lmiDetail?.highWagePoints).toBe(0);
    expect(r.labourMarketIntegration).toBe(46); // length points only (2 yrs, single)
  });
});

describe("old ruleset keeps Canadian work experience in Section A", () => {
  it("5 years Canadian experience scores 80 in core, and LMI is null", () => {
    const r = calculateCrs(base({ canExp: 5 }), "pre_2026_11_03");
    expect(r.coreBreakdown.canadianWorkExperience).toBe(80);
    expect(r.core).toBeGreaterThanOrEqual(80);
    expect(r.labourMarketIntegration).toBeNull();
  });

  it("the same profile under the new ruleset moves those points into LMI", () => {
    const oldR = calculateCrs(base({ canExp: 5 }), "pre_2026_11_03");
    const newR = calculateCrs(base({ canExp: 5 }), "from_2026_11_03");
    expect(newR.coreBreakdown.canadianWorkExperience).toBe(0);
    // No high-wage occupation entered: length points carry over unchanged.
    expect(newR.labourMarketIntegration).toBe(80);
    expect(newR.total).toBe(oldR.total);
  });
});

describe("total is capped at 1,200", () => {
  it("never exceeds 1,200 even with a maximum profile", () => {
    const r = calculateCrs(
      base({
        age: "20", edu: 7, lsp: 10, ll: 10, lr: 10, lw: 10,
        l2test: "celpip", l2sp: 6, l2ll: 6, l2lr: 6, l2lw: 6,
        canExp: 5, hwMonths: "12plus", hwTier: "2x", jobOffer: "yes", offerTier: "2x",
        pnp: 600, sib: 15, fr1: 50, fr2: 50, cedu1: 15, cedu2: 30,
        fgnExp: "2", eduLang: "1", tradesCert: "1",
      }),
      "from_2026_11_03"
    );
    expect(r.total).toBe(1200);
  });

  it("caps a pre-change profile too", () => {
    const r = calculateCrs(
      base({
        age: "20", edu: 7, lsp: 10, ll: 10, lr: 10, lw: 10,
        pnp: 600, sib: 15, fr1: 50, fr2: 50, cedu1: 15, cedu2: 30,
        fgnExp: "2", eduLang: "1", tradesCert: "1", canExp: 5,
      }),
      "pre_2026_11_03"
    );
    expect(r.total).toBe(1200);
  });
});

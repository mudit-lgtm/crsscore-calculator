const LABELS: Record<string, string> = {
  "/": "CRS Calculator (home)",
  "/cec-crs-calculator": "CEC CRS Calculator",
  "/crs-cutoff-scores": "CRS Cutoff Scores History",
  "/express-entry-crs-calculator": "Express Entry CRS Calculator",
  "/saskatchewan-crs-calculator": "Saskatchewan CRS Calculator",
  "/alberta-crs-calculator": "Alberta CRS Calculator",
  "/ontario-crs-calculator": "Ontario CRS Calculator",
  "/manitoba-crs-calculator": "Manitoba CRS Calculator",
  "/bc-crs-calculator": "BC CRS Calculator",
  "/pnp-crs-calculator": "PNP CRS Calculator (+600 points)",
  "/how-crs-is-calculated": "How the CRS Score Is Calculated",
  "/ielts-crs-calculator": "IELTS to CRS Score Calculator",
  "/blog/crs-score-education": "CRS Points for Education",
  "/blog/improve-crs-score-tips": "How to Improve Your CRS Score",
  "/blog/minimum-crs-score": "Minimum CRS Score for Canada PR",
  "/blog/crs-score-by-age": "CRS Points by Age",
  "/blog/express-entry-cutoff-history": "Express Entry Cutoff History",
};

/** Bidirectional related-page pairs. Each pair is wired both ways at build time. */
const PAIRS: [string, string][] = [
  ["/cec-crs-calculator", "/crs-cutoff-scores"],
  ["/saskatchewan-crs-calculator", "/express-entry-crs-calculator"],
  ["/alberta-crs-calculator", "/express-entry-crs-calculator"],
  ["/ontario-crs-calculator", "/express-entry-crs-calculator"],
  ["/manitoba-crs-calculator", "/express-entry-crs-calculator"],
  ["/bc-crs-calculator", "/express-entry-crs-calculator"],
  ["/how-crs-is-calculated", "/"],
  ["/ielts-crs-calculator", "/blog/crs-score-education"],

  // Provincial calculators -> cutoff data + score-improvement guide
  ["/saskatchewan-crs-calculator", "/crs-cutoff-scores"],
  ["/alberta-crs-calculator", "/crs-cutoff-scores"],
  ["/ontario-crs-calculator", "/crs-cutoff-scores"],
  ["/manitoba-crs-calculator", "/crs-cutoff-scores"],
  ["/bc-crs-calculator", "/crs-cutoff-scores"],
  ["/saskatchewan-crs-calculator", "/blog/improve-crs-score-tips"],
  ["/alberta-crs-calculator", "/blog/improve-crs-score-tips"],
  ["/ontario-crs-calculator", "/blog/improve-crs-score-tips"],
  ["/manitoba-crs-calculator", "/blog/improve-crs-score-tips"],
  ["/bc-crs-calculator", "/blog/improve-crs-score-tips"],

  // Blog posts -> tool pages
  ["/blog/improve-crs-score-tips", "/"],
  ["/blog/improve-crs-score-tips", "/ielts-crs-calculator"],
  ["/blog/minimum-crs-score", "/"],
  ["/blog/minimum-crs-score", "/crs-cutoff-scores"],
  ["/blog/crs-score-by-age", "/express-entry-crs-calculator"],
  ["/blog/crs-score-by-age", "/"],
  ["/blog/express-entry-cutoff-history", "/crs-cutoff-scores"],
  ["/blog/express-entry-cutoff-history", "/pnp-crs-calculator"],
  ["/blog/crs-score-education", "/"],
];


const MAP: Record<string, string[]> = (() => {
  const m: Record<string, string[]> = {};
  for (const [a, b] of PAIRS) {
    (m[a] ||= []).push(b);
    (m[b] ||= []).push(a);
  }
  return m;
})();

export default function RelatedGuides({ path }: { path: string }) {
  const links = MAP[path] ?? [];
  if (links.length === 0) return null;

  return (
    <section
      aria-labelledby="related-guides-heading"
      style={{ maxWidth: 1140, margin: "0 auto", padding: "24px 16px 40px" }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #dee2e6",
          borderRadius: 12,
          padding: "20px 22px",
        }}
      >
        <h2
          id="related-guides-heading"
          style={{ fontSize: "1.15rem", marginBottom: 12, color: "#1a1a1a" }}
        >
          Related guides &amp; calculators
        </h2>
        <ul style={{ margin: 0, paddingLeft: "1.2em", lineHeight: 1.9 }}>
          {links.map((href) => (
            <li key={href}>
              <a href={href} style={{ color: "#CC0000", fontWeight: 500 }}>
                {LABELS[href] ?? href}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

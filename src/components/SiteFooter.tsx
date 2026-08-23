import { LogoMark } from "./Logo";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "CRS Calculators",
    links: [
      ["/", "CRS Calculator"],
      ["/express-entry-crs-calculator", "Express Entry"],
      ["/cec-crs-calculator", "CEC Calculator"],
      ["/fsw-crs-calculator", "FSW Calculator"],
      ["/pnp-crs-calculator", "PNP Calculator"],
      ["/ielts-crs-calculator", "IELTS to CRS"],
    ],
  },
  {
    title: "Provincial Tools",
    links: [
      ["/ontario-crs-calculator", "Ontario OINP"],
      ["/alberta-crs-calculator", "Alberta AINP"],
      ["/bc-crs-calculator", "British Columbia"],
      ["/manitoba-crs-calculator", "Manitoba MPNP"],
      ["/nova-scotia-crs-calculator", "Nova Scotia"],
      ["/healthcare-crs-calculator", "Healthcare CRS"],
    ],
  },
  {
    title: "Guides & Blog",
    links: [
      ["/blog", "Blog"],
      ["/what-is-crs-score", "What is CRS Score?"],
      ["/blog/improve-crs-score-tips", "Improve CRS Score"],
      ["/blog/minimum-crs-score", "Minimum CRS Score"],
      ["/express-entry-draw-results", "Draw Results"],
      ["/crs-cutoff-scores", "Cutoff Scores"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About Us"],
      ["/contact", "Contact Us"],
      ["/privacy-policy", "Privacy Policy"],
      ["/terms-and-conditions", "Terms & Conditions"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">
              <LogoMark size={30} />
              <span>
                <strong>CRS Calculator</strong>
                <em>Canada Express Entry</em>
              </span>
            </div>
            <p className="site-footer__blurb">
              Free Canada Express Entry CRS score calculator. Trusted by thousands of applicants.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map(([href, label]) => (
                <a key={href + label} href={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 CRS Score Calculator. Free tool — not affiliated with IRCC.</p>
          <div>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-and-conditions">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

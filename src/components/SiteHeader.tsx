import { useState } from "react";
import Logo from "./Logo";

const NAV: [string, string][] = [
  ["/", "CRS Calculator"],
  ["/cec-crs-calculator", "CEC Calculator"],
  ["/express-entry-crs-calculator", "Express Entry"],
  ["/pnp-crs-calculator", "PNP Calculator"],
  ["/ontario-crs-calculator", "Ontario"],
  ["/alberta-crs-calculator", "Alberta"],
  ["/crs-cutoff-scores", "Cutoff Scores"],
  ["/blog/improve-crs-score-tips", "Improve Score"],
];

const MOBILE_NAV: [string, string][] = [
  ["/", "CRS Calculator"],
  ["/cec-crs-calculator", "CEC Calculator"],
  ["/express-entry-crs-calculator", "Express Entry Calculator"],
  ["/fsw-crs-calculator", "FSW Calculator"],
  ["/pnp-crs-calculator", "PNP Calculator"],
  ["/ielts-crs-calculator", "IELTS to CRS"],
  ["/ontario-crs-calculator", "Ontario CRS (OINP)"],
  ["/alberta-crs-calculator", "Alberta CRS (AINP)"],
  ["/bc-crs-calculator", "BC PNP Calculator"],
  ["/crs-cutoff-scores", "Cutoff Scores"],
  ["/express-entry-draw-results", "Express Entry Draws"],
  ["/blog", "Blog"],
  ["/blog/improve-crs-score-tips", "Improve CRS Score"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" role="banner">
      <div className="site-header__bar">
        <a href="/" className="site-header__logo" aria-label="CRS Calculator home">
          <Logo size={34} />
        </a>

        <nav className="site-header__nav" aria-label="Main navigation">
          {NAV.map(([href, label]) => (
            <a key={href + label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="/" className="site-header__cta">
            Calculate Now
          </a>
          <button
            type="button"
            className="site-header__burger"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="site-header__mobile">
          {MOBILE_NAV.map(([href, label]) => (
            <a key={href + label} href={href}>
              {label}
            </a>
          ))}
          <a href="/" className="site-header__mobile-cta">
            Calculate My CRS Score →
          </a>
        </div>
      )}
    </header>
  );
}

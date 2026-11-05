import { useEffect, useState } from "react";
import { CONSENT_MODE } from "@/config/ads";
import { currentConsent, saveConsent } from "@/lib/consent";

export default function ConsentBar() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    if (!currentConsent()) setOpen(true);
    const reopen = () => {
      setAds(currentConsent()?.ads === true);
      setSettings(true);
      setOpen(true);
    };
    window.addEventListener("crs-consent-open", reopen);
    return () => window.removeEventListener("crs-consent-open", reopen);
  }, []);

  if (CONSENT_MODE !== "custom" || !open) return null;
  const choose = (v: boolean) => {
    saveConsent(v);
    setOpen(false);
    setSettings(false);
  };

  return (
    <div className="crs-consent" role="dialog" aria-label="Cookie settings">
      {!settings ? (
        <div className="crs-consent__row">
          <p>
            We use cookies for advertising if you allow them. Calculator inputs never leave your browser. Read our{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>
          <div className="crs-consent__btns">
            <button type="button" onClick={() => choose(true)}>Accept</button>
            <button type="button" onClick={() => choose(false)}>Reject</button>
            <button type="button" onClick={() => setSettings(true)}>Settings</button>
          </div>
        </div>
      ) : (
        <div className="crs-consent__panel">
          <label><input type="checkbox" checked disabled /> <strong>Essential</strong> — always on (stores this choice only)</label>
          <label><input type="checkbox" checked={ads} onChange={(e) => setAds(e.target.checked)} /> <strong>Advertising</strong> — Google ad cookies</label>
          <p><a href="/cookie-policy">Cookie Policy</a></p>
          <div className="crs-consent__btns">
            <button type="button" onClick={() => choose(ads)}>Save</button>
            <button type="button" onClick={() => choose(false)}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
}

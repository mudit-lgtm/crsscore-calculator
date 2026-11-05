const KEY = "crs-consent-v1";
const MAX_AGE_MS = 183 * 24 * 60 * 60 * 1000; // ~6 months

export type Consent = { ads: boolean; date: string };

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (!c.date || Date.now() - new Date(c.date).getTime() > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

let memory: Consent | null = null;
export function currentConsent(): Consent | null {
  return readConsent() ?? memory;
}

export function saveConsent(ads: boolean) {
  const c: Consent = { ads, date: new Date().toISOString() };
  memory = c;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(c));
  } catch {
    /* storage blocked: keep choice for this page view only */
  }
  window.dispatchEvent(new CustomEvent("crs-consent-change", { detail: c }));
}

export const hasAdConsent = () => currentConsent()?.ads === true;
export const openConsentSettings = () => window.dispatchEvent(new Event("crs-consent-open"));

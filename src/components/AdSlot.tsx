import { useEffect, useRef } from "react";
import { ADS_ENABLED, ADSENSE_PUBLISHER_ID } from "@/config/ads";

let scriptRequested = false;

/** Load the AdSense library exactly once per page load. */
function loadAdSenseOnce() {
  if (scriptRequested || typeof document === "undefined") return;
  scriptRequested = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
}

/**
 * Fill a container with a responsive display ad unit.
 * Shared by the standalone <AdSlot /> component and the StaticPage slots.
 */
export function mountAd(container: HTMLElement) {
  if (container.querySelector("ins.adsbygoogle")) return;
  loadAdSenseOnce();
  const ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.style.display = "block";
  ins.style.minHeight = "90px";
  ins.setAttribute("data-ad-client", ADSENSE_PUBLISHER_ID);
  ins.setAttribute("data-ad-format", "auto");
  ins.setAttribute("data-full-width-responsive", "true");
  container.appendChild(ins);
  const w = window as unknown as { adsbygoogle?: unknown[] };
  w.adsbygoogle = w.adsbygoogle || [];
  try {
    w.adsbygoogle.push({});
  } catch {
    /* AdSense pushes can throw when blocked; ignore. */
  }
}

/**
 * Renders nothing while ADS_ENABLED is false. When enabled it renders an
 * "Advertisement" label and a container with a reserved min-height so the
 * page does not jump when the ad loads.
 */
export default function AdSlot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ADS_ENABLED && ref.current) mountAd(ref.current);
  }, []);

  if (!ADS_ENABLED) return null;
  return (
    <div className="crs-ad" ref={ref} aria-label="Advertisement">
      <span className="crs-ad__label">Advertisement</span>
    </div>
  );
}

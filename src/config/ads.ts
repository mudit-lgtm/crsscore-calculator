/** Ad readiness switch. Keep false until the AdSense account is approved
 *  and the user turns ads on. Flipping this single flag enables every slot. */
export const ADS_ENABLED = false;

/** Publisher id already listed in public/ads.txt. */
export const ADSENSE_PUBLISHER_ID = "ca-pub-9275267797924945";

/** "custom" shows our own consent bar. Set to "google" once Google's consent
 *  tool (CMP) is turned on in AdSense; the custom bar then does not render. */
export const CONSENT_MODE: "custom" | "google" = "custom";

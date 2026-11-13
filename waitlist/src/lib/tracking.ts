/**
 * Ad tracking IDs come from environment variables (see .env.example).
 * When an ID is empty, that tracker is not loaded at all.
 */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const GOOGLE_TAG_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID ?? "";
export const GOOGLE_ADS_CONVERSION = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION ?? "";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const FIRED_KEY = "waitlist_conversion_fired";

/** Fire the signup conversion to Meta and Google. Only fires once per tab session. */
export function trackWaitlistSignup(details: { homeType?: string; hasZip: boolean }) {
  if (typeof window === "undefined") return;

  try {
    if (window.sessionStorage.getItem(FIRED_KEY)) return;
    window.sessionStorage.setItem(FIRED_KEY, "1");
  } catch {
    // If storage is blocked we still fire the event.
  }

  // Meta: standard "Lead" event. Choose it as the conversion event for your campaign.
  window.fbq?.("track", "Lead", { content_name: "waitlist" });

  // Google: recommended lead event (GA4 / Google tag).
  window.gtag?.("event", "generate_lead", {
    form: "waitlist",
    home_type: details.homeType ?? "not_given",
    zip_given: details.hasZip,
  });

  // Google Ads conversion for YouTube campaigns, if a conversion label is set.
  if (GOOGLE_ADS_CONVERSION) {
    window.gtag?.("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION });
  }
}

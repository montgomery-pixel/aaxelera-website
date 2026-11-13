/**
 * Remembers which ad or link brought the visitor here, so it can be saved
 * with their signup. Stored in sessionStorage (cleared when the tab closes).
 */

const STORAGE_KEY = "waitlist_attribution";

const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

type ParamKey = (typeof PARAMS)[number];

export type Attribution = Partial<Record<ParamKey, string>> & {
  referrer?: string;
  landing_page?: string;
};

const clip = (value: string) => value.slice(0, 300);

function readStored(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/** Call on page load. Safe to call more than once. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const query = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of PARAMS) {
    const value = query.get(key);
    if (value) fromUrl[key] = clip(value);
  }

  const stored = readStored();
  const hasNewParams = Object.keys(fromUrl).length > 0;

  // Keep the first visit's details unless this page load carries new ad parameters.
  if (stored && !hasNewParams) return stored;

  const attribution: Attribution = {
    ...fromUrl,
    referrer: document.referrer ? clip(document.referrer) : stored?.referrer,
    landing_page: clip(window.location.pathname + window.location.search),
  };

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Storage can be blocked (private mode); the values above are still returned.
  }
  return attribution;
}

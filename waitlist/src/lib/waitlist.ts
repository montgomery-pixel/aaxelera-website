import type { Attribution } from "./utm";

const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "");
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const TABLE = "waitlist_signups";

export const isWaitlistConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export type Signup = {
  email: string;
  zip?: string;
  homeType?: string;
  attribution: Attribution;
};

export type SubmitResult =
  | { ok: true; duplicate: boolean }
  | { ok: false; reason: "not_configured" | "failed" };

/** Saves one signup to the Supabase table. The browser can add rows but never read them. */
export async function submitSignup(signup: Signup): Promise<SubmitResult> {
  if (!isWaitlistConfigured) return { ok: false, reason: "not_configured" };

  const row = {
    email: signup.email.trim().toLowerCase(),
    zip: signup.zip || null,
    home_type: signup.homeType || null,
    utm_source: signup.attribution.utm_source ?? null,
    utm_medium: signup.attribution.utm_medium ?? null,
    utm_campaign: signup.attribution.utm_campaign ?? null,
    utm_content: signup.attribution.utm_content ?? null,
    utm_term: signup.attribution.utm_term ?? null,
    fbclid: signup.attribution.fbclid ?? null,
    gclid: signup.attribution.gclid ?? null,
    referrer: signup.attribution.referrer ?? null,
    landing_page: signup.attribution.landing_page ?? null,
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    if (response.ok) return { ok: true, duplicate: false };
    // 409 = this email is already on the list. That is a success for the visitor.
    if (response.status === 409) return { ok: true, duplicate: true };
    return { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}

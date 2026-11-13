"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { form as copy } from "@/config/content";
import { trackWaitlistSignup } from "@/lib/tracking";
import { captureAttribution } from "@/lib/utm";
import { isWaitlistConfigured, submitSignup } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ZIP_PATTERN = /^\d{5}$/;

const fieldClass =
  "h-12 w-full rounded-lg border border-line bg-raised px-4 text-base text-text placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

/** `id` keeps field ids unique when the form appears twice on the page. */
export function WaitlistForm({ id }: { id: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState<"email" | "zip" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const zip = String(data.get("zip") ?? "").trim();
    const homeType = String(data.get("home_type") ?? "");
    const honeypot = String(data.get("company") ?? "");

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      setStatus("error");
      setErrorField("email");
      setError(copy.errorInvalidEmail);
      return;
    }
    if (zip && !ZIP_PATTERN.test(zip)) {
      setStatus("error");
      setErrorField("zip");
      setError(copy.errorInvalidZip);
      return;
    }

    setErrorField(null);
    setError("");

    // Bots fill the hidden field. Show them success and save nothing.
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const result = await submitSignup({
      email,
      zip: zip || undefined,
      homeType: homeType || undefined,
      attribution: captureAttribution(),
    });

    if (result.ok) {
      setStatus("success");
      // A repeat signup is not a new conversion.
      if (!result.duplicate) {
        trackWaitlistSignup({ homeType: homeType || undefined, hasZip: Boolean(zip) });
      }
      return;
    }

    setStatus("error");
    setError(
      result.reason === "not_configured"
        ? "Signups are not connected yet. Add the Supabase settings from the README, then try again."
        : copy.errorGeneric,
    );
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/40 bg-accent/10 p-5"
        data-testid={`${id}-success`}
      >
        <p className="flex items-center gap-2 text-lg font-semibold text-text">
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-accent" fill="currentColor" aria-hidden="true">
            <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm3.9 6.6-4.4 5a.9.9 0 0 1-1.3.05l-2.1-2a.9.9 0 1 1 1.24-1.3l1.42 1.35 3.78-4.3a.9.9 0 0 1 1.36 1.2Z" />
          </svg>
          {copy.successTitle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{copy.successBody}</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3" data-testid={`${id}-form`}>
      <div>
        <label htmlFor={`${id}-email`} className="sr-only">
          {copy.emailLabel}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={copy.emailPlaceholder}
          aria-invalid={errorField === "email"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`${id}-zip`} className="sr-only">
            {copy.zipLabel} (optional)
          </label>
          <input
            id={`${id}-zip`}
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            placeholder={copy.zipPlaceholder}
            aria-invalid={errorField === "zip"}
            aria-describedby={error ? `${id}-error` : undefined}
            className={fieldClass}
          />
        </div>
        <div className="relative">
          <label htmlFor={`${id}-home-type`} className="sr-only">
            {copy.homeTypeLabel} (optional)
          </label>
          <select id={`${id}-home-type`} name="home_type" defaultValue="" className={`${fieldClass} appearance-none pr-9`}>
            <option value="">{copy.homeTypePlaceholder}</option>
            {copy.homeTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </div>
      </div>

      {/* Hidden from people; only bots fill this in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="h-12 w-full rounded-lg bg-accent px-6 text-base font-semibold text-on-accent transition-colors hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? copy.submitting : copy.submit}
      </button>

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-danger">
          {error}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-muted">
        {copy.optionalHint} {copy.privacyNote}{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-text">
          privacy policy
        </Link>
        .
      </p>

      {!isWaitlistConfigured && process.env.NODE_ENV !== "production" ? (
        <p className="rounded-md border border-dashed border-line p-2 text-xs text-muted">
          Developer note: Supabase is not configured, so signups will not be saved. See the README.
        </p>
      ) : null}
    </form>
  );
}

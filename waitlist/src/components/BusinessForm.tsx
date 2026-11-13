"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { form as copy } from "@/config/business";
import { trackBusinessLead } from "@/lib/tracking";
import { captureAttribution } from "@/lib/utm";
import { isWaitlistConfigured, submitBusinessLead } from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const fieldClass =
  "h-12 w-full rounded-lg border border-line bg-raised px-4 text-base text-text placeholder:text-muted/80 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

/** `id` keeps field ids unique when the form appears twice on the page. */
export function BusinessForm({ id }: { id: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState<"email" | "company" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const industry = String(data.get("industry") ?? "");
    const sites = String(data.get("sites") ?? "");
    const honeypot = String(data.get("website") ?? "");

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      setStatus("error");
      setErrorField("email");
      setError(copy.errorInvalidEmail);
      return;
    }
    if (!company) {
      setStatus("error");
      setErrorField("company");
      setError(copy.errorCompany);
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
    const result = await submitBusinessLead({
      email,
      company,
      industry: industry || undefined,
      sites: sites || undefined,
      attribution: captureAttribution(),
    });

    if (result.ok) {
      setStatus("success");
      if (!result.duplicate) trackBusinessLead({ industry: industry || undefined });
      return;
    }

    setStatus("error");
    setError(
      result.reason === "not_configured"
        ? "Requests are not connected yet. Add the Supabase settings from the README, then try again."
        : copy.errorGeneric,
    );
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-accent/40 bg-accent/10 p-5" data-testid={`${id}-success`}>
        <p className="text-lg font-semibold text-text">{copy.successTitle}</p>
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
      <div>
        <label htmlFor={`${id}-company`} className="sr-only">
          {copy.companyLabel}
        </label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          required
          maxLength={200}
          placeholder={copy.companyPlaceholder}
          aria-invalid={errorField === "company"}
          aria-describedby={error ? `${id}-error` : undefined}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <label htmlFor={`${id}-industry`} className="sr-only">
            {copy.industryLabel} (optional)
          </label>
          <select id={`${id}-industry`} name="industry" defaultValue="" className={`${fieldClass} appearance-none pr-9`}>
            <option value="">{copy.industryPlaceholder}</option>
            {copy.industries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <Chevron />
        </div>
        <div className="relative">
          <label htmlFor={`${id}-sites`} className="sr-only">
            {copy.sitesLabel} (optional)
          </label>
          <select id={`${id}-sites`} name="sites" defaultValue="" className={`${fieldClass} appearance-none pr-9`}>
            <option value="">{copy.sitesPlaceholder}</option>
            {copy.sites.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <Chevron />
        </div>
      </div>

      {/* Hidden from people; only bots fill this in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
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
        We only use your details to contact you about the pilot. See our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-text">
          privacy policy
        </Link>
        .
      </p>

      {!isWaitlistConfigured && process.env.NODE_ENV !== "production" ? (
        <p className="rounded-md border border-dashed border-line p-2 text-xs text-muted">
          Developer note: Supabase is not configured, so requests will not be saved. See the README.
        </p>
      ) : null}
    </form>
  );
}

/**
 * Brand and business details. Change them here and they update everywhere,
 * including the privacy policy and the browser tab title.
 */
export const site = {
  /** Product / brand name shown across the page. */
  brand: "[BRAND]",
  /** Legal entity named in the privacy policy. */
  legalName: "[COMPANY LEGAL NAME]",
  /** Where people can write about their data or the waitlist. */
  contactEmail: "hello@example.com",
  /** Final public address of the page (used for link previews). */
  url: "https://example.com",

  /** Planned monthly price. */
  price: "$19.99",
  /** Approximate monthly range for typical professionally monitored plans. */
  typicalRange: "$40 to $60",
  /** Setup time used in the copy. */
  setupMinutes: 10,

  /** Shown at the top of the privacy policy. */
  privacyLastUpdated: "November 13, 2026",
  /** Set to false once a lawyer has reviewed the privacy policy. */
  showPrivacyDraftNotice: true,
} as const;

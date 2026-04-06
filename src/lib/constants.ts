export const CALENDLY_URL = "https://calendly.com/aaxelera/30min";

export const SECTION_IDS = {
  hero: "hero",
  promise: "promise",
  problem: "problem",
  solution: "solution",
  proptech: "proptech",
  guarantee: "guarantee",
  cta: "cta",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `#${SECTION_IDS.hero}` },
  { label: "About", href: `#${SECTION_IDS.promise}` },
  { label: "Solutions", href: `#${SECTION_IDS.solution}` },
  { label: "Results", href: `#${SECTION_IDS.promise}` },
  { label: "Insights", href: `#${SECTION_IDS.proptech}` },
  { label: "Contact", href: `#${SECTION_IDS.cta}` },
];

export const METRICS = [
  {
    value: 60,
    prefix: "30-",
    suffix: "",
    label: "Qualified Demos Per Month",
    description:
      "Our AI SDR systems consistently deliver a predictable flow of qualified demo appointments, directly into your calendar.",
    icon: "target",
  },
  {
    value: 60,
    prefix: "",
    suffix: "%+",
    label: "Show Rates",
    description:
      "Multi-touch confirmation sequences and smart scheduling ensure prospects actually show up to their demos.",
    icon: "check",
  },
  {
    value: 20,
    prefix: "",
    suffix: "+",
    label: "Hours Saved Monthly",
    description:
      "Reclaim your team's time by automating prospecting, outreach, follow-ups, and scheduling — without sacrificing quality.",
    icon: "clock",
  },
];

export const SOLUTIONS = [
  {
    title: "30-60 Qualified Demos Per Month",
    description:
      "Our AI SDR systems consistently deliver a predictable flow of qualified demo appointments, directly into your calendar.",
    icon: "target",
  },
  {
    title: "60%+ Show Rates",
    description:
      "Multi-touch confirmation sequences and smart scheduling ensure prospects actually show up to their demos.",
    icon: "check",
  },
  {
    title: "20+ Hours Saved Monthly",
    description:
      "Reclaim your team's time by automating prospecting, outreach, follow-ups, and scheduling — without sacrificing quality.",
    icon: "clock",
  },
  {
    title: "Clear Attribution",
    description:
      "Know exactly which messages, channels, and sequences are driving your best demos with full-funnel analytics.",
    icon: "chart",
  },
];

export const COPY = {
  hero: {
    headline: "Turn PropTech Data Into A",
    headlineHighlight: "Predictable Demo Pipeline",
    subheadline:
      "AI SDRs and message testing systems that help PropTech SaaS teams book 30 to 60 qualified demos per month — without adding headcount.",
    cta: "Book a Strategy Call",
    ctaSecondary: "Request a Pipeline Audit",
  },
  promise: {
    heading: "The Core Promise",
    body: "Aaxelera integrates with your existing tools to build, test, and scale an AI-powered outbound engine purpose-built for PropTech SaaS. No fluff. No guesswork. Just a repeatable system that fills your pipeline with qualified demos.",
  },
  problem: {
    heading: "Why Your Current Demo Engine Stalls",
    items: [
      {
        title: "Manual Prospecting Bottlenecks",
        description:
          "Your team spends hours hunting for leads instead of closing deals. Manual research doesn't scale.",
      },
      {
        title: "Generic Messaging That Gets Ignored",
        description:
          "One-size-fits-all outreach gets lost in the noise. PropTech buyers need messages that speak their language.",
      },
      {
        title: "Inconsistent Pipeline Flow",
        description:
          "Feast-or-famine cycles kill momentum. Without a system, your pipeline depends on luck, not process.",
      },
      {
        title: "No Clear Attribution",
        description:
          "You can't improve what you can't measure. Most teams have no idea which channels actually drive demos.",
      },
    ],
  },
  solution: {
    heading: "How Aaxelera Works",
    subheading:
      "A systematic approach to building your PropTech demo pipeline.",
  },
  proptech: {
    heading: "Built For PropTech SaaS",
    body: "We don't do generic. Aaxelera is built exclusively for PropTech SaaS companies. Every message template, every targeting filter, every automation sequence is designed around how property technology buyers actually evaluate, compare, and purchase software. That specificity is what drives our results.",
  },
  guarantee: {
    heading: "The 20-Hour Time Savings Guarantee",
    body: "We're so confident in our systems that we guarantee your team will save at least 20 hours per month on prospecting and outreach within the first 90 days — or we'll continue working with you at no additional cost until you do.",
  },
  finalCta: {
    heading: "Ready to Build Your Demo Pipeline?",
    subheading:
      "Let's talk about how Aaxelera can help your PropTech SaaS team book more qualified demos.",
    cta: "Book a Strategy Call",
  },
};

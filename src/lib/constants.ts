export const CALENDLY_URL = "https://calendly.com/aaxelera/30min";

export const SECTION_IDS = {
  hero: "hero",
  promise: "promise",
  problem: "problem",
  solution: "solution",
  pricing: "pricing",
  guarantee: "guarantee",
  cta: "cta",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `#${SECTION_IDS.hero}` },
  { label: "Why GEO", href: `#${SECTION_IDS.problem}` },
  { label: "How It Works", href: `#${SECTION_IDS.solution}` },
  { label: "Pricing", href: `#${SECTION_IDS.pricing}` },
  { label: "Contact", href: `#${SECTION_IDS.cta}` },
];

export const METRICS = [
  {
    value: 40,
    prefix: "",
    suffix: "%",
    label: "of Searches Now Start With AI",
    description:
      "ChatGPT, Perplexity, and Google AI Overviews are replacing traditional search. If you're not visible there, you're invisible to nearly half your market.",
    icon: "search",
  },
  {
    value: 3,
    prefix: "",
    suffix: "x",
    label: "More Calls From Optimized Businesses",
    description:
      "Local businesses with optimized GEO presence generate 3x more inbound calls than those relying on traditional SEO alone.",
    icon: "phone",
  },
  {
    value: 90,
    prefix: "",
    suffix: "%",
    label: "of Local Businesses Aren't Ready",
    description:
      "The vast majority of local businesses have zero AI search optimization. Early movers dominate their market for years.",
    icon: "chart",
  },
];

export const SOLUTIONS = [
  {
    title: "AI Visibility Audit",
    description:
      "We analyze your presence across ChatGPT, Perplexity, Google SGE, and 50+ local directories. You get a GEO Score and a clear picture of where you stand vs. competitors.",
    icon: "search",
    step: "01",
  },
  {
    title: "Local Growth Engine",
    description:
      "Neighborhood-targeted landing pages, structured data for AI crawlers, and GBP optimization — built to make you the answer when AI gets asked about your service area.",
    icon: "target",
  },
  {
    title: "Review & Reputation System",
    description:
      "Automated review generation funnels that drive 5-star reviews to Google. Reviews feed AI training data — more reviews means more AI citations.",
    icon: "star",
  },
  {
    title: "Tracked Results, Not Guesswork",
    description:
      "Call tracking, form attribution, and monthly GEO score reports. You see every lead source, every call recording, every ranking change. No black boxes.",
    icon: "chart",
  },
];

export const COPY = {
  hero: {
    headline: "Your Customers Are Asking AI",
    headlineHighlight: "Is AI Recommending You?",
    subheadline:
      "Aaxelera helps local businesses get found, recommended, and chosen by ChatGPT, Google AI, and Perplexity — before your competitors figure it out.",
    cta: "Get Your Free GEO Audit",
    ctaSecondary: "See How It Works",
  },
  promise: {
    heading: "The Shift Is Already Here",
    body: "40% of local searches now touch AI — and that number climbs every month. When someone asks ChatGPT for the best dentist, lawyer, or contractor in your city, are you the answer? If not, your competitors will be. Aaxelera is the growth system built for this new reality.",
  },
  problem: {
    heading: "Why Local Businesses Are Losing Patients, Clients, and Calls",
    items: [
      {
        title: "Invisible to AI Search",
        description:
          "ChatGPT, Perplexity, and Google AI Overviews are where your customers look first. Most local businesses don't show up at all — and don't even know it.",
      },
      {
        title: "Great Service, Weak Online Presence",
        description:
          "You're good at what you do, but your website, reviews, and local listings don't reflect it. AI judges you on digital signals, not handshakes.",
      },
      {
        title: "Competitors Are Moving First",
        description:
          "The businesses investing in AI visibility now will own the top spots for years. Search rankings compound — late movers pay more to catch up.",
      },
      {
        title: "No Way to Measure What's Working",
        description:
          "Most local businesses can't tell you which marketing channel drove their last 10 customers. Without tracking, you're flying blind and overpaying.",
      },
    ],
  },
  solution: {
    heading: "How Aaxelera Gets You Found",
    subheading:
      "A systematic approach to making your business the one AI recommends.",
  },
  pricing: {
    heading: "GEO Growth System",
    subheading: "Everything your business needs to dominate AI search in your market.",
    price: "$2,497",
    period: "/mo",
    setupFee: "$1,997 one-time setup",
    commitment: "6-month minimum",
    features: [
      "Monthly GEO audit + AI visibility tracking",
      "2 neighborhood landing pages per month",
      "Call & form conversion tracking (every lead attributed)",
      "Automated review generation on Google + Facebook",
      "Google Business Profile optimization + weekly posts",
      "Monthly strategy call + performance report",
      "Dedicated Slack channel for your team",
    ],
  },
  guarantee: {
    heading: "The Tracked-Results Guarantee",
    body: "Every call, every form submission, every ranking change — tracked and reported. You'll see exactly where your leads come from. If you don't see measurable growth in tracked inbound calls within 90 days, we keep working at no additional cost until you do.",
  },
  finalCta: {
    heading: "See Where You Stand — Free",
    subheading:
      "Get a personalized GEO Audit showing your AI visibility score, competitor comparison, and the exact gaps costing you customers. No commitment, no credit card.",
    cta: "Get Your Free GEO Audit",
  },
};

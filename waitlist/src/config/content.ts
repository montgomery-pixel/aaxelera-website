import { site } from "./site";

/**
 * All the words on the landing page live in this file.
 *
 * Copy rules for this page (keep them when editing):
 *  - The product is not available yet. Say "launching soon", "planned", "waitlist".
 *  - No testimonials, reviews, customer counts or press logos.
 *  - No claims about police response times or crimes prevented.
 *  - No named competitors in price comparisons.
 */

const { brand, price, typicalRange, setupMinutes } = site;

export const meta = {
  title: `${brand} | Home security with AI and real people, ${price}/mo. Join the waitlist`,
  description: `${brand} is a self-install home security system launching soon. AI filters out false alarms, trained operators verify what is real, and there is no contract. Planned price: ${price}/month.`,
};

export const header = {
  badge: "Launching soon",
  cta: "Join the waitlist",
};

export const hero = {
  eyebrow: "Launching soon in the US",
  headline: "Home security with a real person behind every alarm.",
  subheadline: `AI filters out pets, shadows and passing cars. A trained operator checks the video before anyone calls for help. Install it yourself in about ${setupMinutes} minutes. Planned price: ${price}/month, with no contract.`,
  formNote: `Join the waitlist to lock in early-bird pricing. ${brand} is not available yet. We will email you when it launches.`,
  bullets: ["Human-verified alarms", "No contract", "No technician visit"],
  illustrationCaption: "Illustration of the planned app. Not real footage.",
};

export const form = {
  emailLabel: "Email address",
  emailPlaceholder: "you@example.com",
  zipLabel: "ZIP code",
  zipPlaceholder: "ZIP code",
  homeTypeLabel: "Home type",
  homeTypePlaceholder: "Home type",
  homeTypes: [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "townhouse", label: "Townhouse" },
  ],
  optionalHint: "ZIP and home type are optional. They help us decide where to launch first.",
  submit: "Join the waitlist",
  submitting: "Adding you...",
  successTitle: "You're on the list.",
  successBody: `Thanks for signing up. We'll email you before ${brand} launches, and your early-bird price of ${price}/month is reserved for when it does.`,
  errorInvalidEmail: "Please enter a valid email address.",
  errorInvalidZip: "ZIP code should be 5 digits, or leave it blank.",
  errorGeneric: "Something went wrong and we could not save your signup. Please try again.",
  privacyNote: "We only use your details for waitlist updates. See our",
};

export const howItWorks = {
  title: "How it will work",
  intro: "Three steps from order to protected.",
  steps: [
    {
      title: "Order your kit",
      body: "Cameras and sensors arrive already paired to your account. Nothing to configure, nobody to book.",
    },
    {
      title: `Set up in about ${setupMinutes} minutes`,
      body: "Plug the devices in and scan the QR code with your phone. No drilling into walls, no technician, no tools.",
    },
    {
      title: "AI and people watch 24/7",
      body: "AI flags people and vehicles. Trained operators review each flagged event, and verified alarms go to a UL-listed US monitoring center that can request police dispatch.",
    },
  ],
};

export const benefits = {
  title: "An alarm someone has actually looked at",
  intro: `What ${brand} is being designed to do.`,
  items: [
    {
      icon: "person",
      title: "Verified by real people",
      body: "Operators review AI-flagged events around the clock before anything is escalated. Verified alarms carry video evidence, and many US police departments give unverified alarms lower priority.",
    },
    {
      icon: "filter",
      title: "AI that filters false alarms",
      body: "Detects people and vehicles, and is designed to ignore pets, shadows and cars passing by, so alerts mean something.",
    },
    {
      icon: "unlock",
      title: "No contract",
      body: "Pay month to month and cancel whenever you like. No multi-year agreement and no cancellation fee.",
    },
    {
      icon: "wrench",
      title: "No technician",
      body: "The kit arrives pre-paired. Plug in, scan a QR code and you are done. No appointment window to wait around for.",
    },
    {
      icon: "signal",
      title: "Cellular backup",
      body: "If your internet goes down, the system is designed to stay connected over a cellular link.",
    },
  ],
};

export const pricing = {
  title: `Human-verified monitoring for ${price} a month`,
  intro: "Planned pricing, compared with monitored plans from traditional providers.",
  ours: {
    label: brand,
    tag: "Planned early-bird price",
    price,
    period: "/month",
    points: [
      "AI detection plus human verification, 24/7",
      "UL-listed US monitoring center",
      "Self-install, no technician visit",
      "No contract, cancel anytime",
      "Cellular backup",
    ],
  },
  typical: {
    label: "Typical monitored plans",
    tag: "Traditional providers",
    price: typicalRange,
    period: "/month",
    points: [
      "Often a multi-year contract",
      "Often a scheduled technician install",
      "Fees and terms vary by provider",
    ],
  },
  footnote: `Typical range is an approximate monthly cost for professionally monitored plans from traditional US providers. Actual prices, contracts and installation terms vary by provider and package. ${brand} pricing is planned, covers monthly monitoring, and may change before launch. Equipment pricing will be announced before launch.`,
};

export const faq = {
  title: "Questions, answered",
  items: [
    {
      q: `Is ${brand} available now?`,
      a: `Not yet. ${brand} is launching soon and this page is a waitlist. Join it and we will email you when ordering opens in your area. Joining is free and does not commit you to anything.`,
    },
    {
      q: "How does setup work?",
      a: `The kit is designed to arrive already paired to your account. You plug in the cameras and sensors, scan a QR code with your phone, and the system comes online. We are aiming for about ${setupMinutes} minutes with no tools and no technician.`,
    },
    {
      q: "Is there a contract?",
      a: "No. The plan is month to month with no long-term contract and no cancellation fee.",
    },
    {
      q: "What happens when an alarm triggers?",
      a: "First, AI checks whether the camera is seeing a person or vehicle rather than a pet, a shadow or passing traffic. If it looks real, a trained operator reviews the event. If the operator verifies it, the alarm is escalated to a UL-listed US monitoring center, which can request police dispatch. You get notified in the app along the way.",
    },
    {
      q: "Who can see my video?",
      a: "The system is being designed so that operators only see clips from events the AI has flagged, not a constant live view of your home. You will control your cameras and privacy settings from the app. We will publish the full video privacy details before launch, and we will not sell your video.",
    },
    {
      q: "What if my internet goes down?",
      a: "The system is planned to include cellular backup, so it can stay connected to monitoring during an internet outage.",
    },
    {
      q: "What will it cost?",
      a: `The planned monitoring price is ${price} per month. Waitlist members get early-bird pricing locked in. Equipment pricing will be announced before launch.`,
    },
  ],
};

export const finalCta = {
  title: "Get early-bird pricing locked in",
  body: `Join the waitlist today and keep the ${price}/month early-bird price when ${brand} launches. No payment, no commitment.`,
};

export const footer = {
  disclaimer: `${brand} is a planned product that is not yet available for purchase. Features, pricing and availability described on this page may change before launch.`,
  privacyLink: "Privacy policy",
};

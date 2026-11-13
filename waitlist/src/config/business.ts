import { site } from "./site";

/**
 * All the words on the /business page live in this file.
 *
 * Copy rules (keep them when editing):
 *  - This is a pilot that has not started. Say "pilot", "planned", "request a spot".
 *  - No testimonials, customer counts or logos.
 *  - No promises about police response times or losses prevented.
 *  - No named competitors.
 */

const { brand } = site;

export const offer = {
  price: "$299",
  cameras: 8,
  hours: "nights and weekends",
  trialDays: 30,
};

export const meta = {
  title: `${brand} for business | Video-verified monitoring, ${offer.price}/month per site`,
  description: `AI watches your existing cameras ${offer.hours} and a trained person checks anything suspicious before the police are called. ${offer.price}/month per site, month to month. Pilot opening soon.`,
};

export const hero = {
  eyebrow: "Pilot opening soon · Washington State",
  headline: "Your alarm goes off at 2 a.m. Who checks if it's real?",
  subheadline: `AI watches the cameras you already have, ${offer.hours}. A trained person reviews anything suspicious on video before the police are called, so the call arrives with evidence. ${offer.price} a month per site, month to month.`,
  bullets: ["Uses your existing cameras", "No contract", "No site visit"],
  formNote: `${brand} business monitoring is a planned pilot and is not running yet. Requesting a spot is free and commits you to nothing.`,
};

export const form = {
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  companyLabel: "Company name",
  companyPlaceholder: "Company name",
  industryLabel: "Type of business",
  industryPlaceholder: "Type of business",
  industries: [
    { value: "self_storage", label: "Self-storage" },
    { value: "car_dealership", label: "Car dealership" },
    { value: "construction", label: "Construction" },
    { value: "other", label: "Other" },
  ],
  sitesLabel: "Number of sites",
  sitesPlaceholder: "Number of sites",
  sites: [
    { value: "1", label: "1 site" },
    { value: "2-5", label: "2 to 5 sites" },
    { value: "6+", label: "6 or more" },
  ],
  submit: "Request a pilot spot",
  submitting: "Sending...",
  successTitle: "Request received.",
  successBody: "Thanks. We'll email you with pilot details and a time to talk. Nothing is charged or installed until you say go.",
  errorInvalidEmail: "Please enter a valid email address.",
  errorCompany: "Please enter your company name.",
  errorGeneric: "Something went wrong and we could not save your request. Please try again.",
};

export const problem = {
  title: "An alarm nobody has looked at is easy to ignore",
  body: [
    "Most burglar alarms are false, so many police departments give unverified alarms low priority.",
    "Seattle went further: since October 2024, its police only respond to burglar alarms that come with supporting evidence such as video, audio or an eyewitness. A sensor tripping is no longer enough.",
    "If your site is empty overnight, that leaves a gap between the alarm sounding and anyone knowing whether it matters.",
  ],
};

export const steps = {
  title: "How the pilot will work",
  items: [
    {
      icon: "qr",
      title: "Connect your cameras",
      body: "You link the cameras you already own, remotely. No new hardware to buy and nobody comes to your site.",
    },
    {
      icon: "filter",
      title: "AI filters the noise",
      body: "Software watches for people and vehicles where they should not be, and is designed to ignore weather, animals and passing traffic.",
    },
    {
      icon: "eye",
      title: "A person checks, then escalates",
      body: "A trained operator reviews each flagged clip. If it looks like a break-in, it goes to a US monitoring center that can request police dispatch with the video evidence, and you are alerted.",
    },
  ],
};

export const pricing = {
  title: "One flat price per site",
  price: offer.price,
  period: "/month per site",
  tag: "Planned pilot pricing",
  points: [
    `Up to ${offer.cameras} cameras per site`,
    `Monitoring ${offer.hours}`,
    "AI detection plus human review of every flagged event",
    "Month to month, cancel anytime",
    `First ${offer.trialDays} days free`,
    "Works with the cameras you already have",
  ],
  footnote: `Pilot pricing is planned and may change before the pilot starts. Whether your existing cameras are compatible is confirmed before you pay anything. ${brand} cannot guarantee a police response; dispatch decisions are made by local authorities.`,
};

export const faq = {
  title: "Questions, answered",
  items: [
    {
      q: "Is this available now?",
      a: `Not yet. This is a pilot that is being set up, starting with a small number of sites in Washington State. Request a spot and we will email you the details and timing.`,
    },
    {
      q: "Do I need new cameras?",
      a: "The pilot is designed to work with the IP cameras most businesses already have. We check compatibility with you before anything starts. If your cameras cannot connect, you will not be charged.",
    },
    {
      q: "What happens when something is detected?",
      a: "AI flags a person or vehicle where there should not be one. A trained operator looks at the clip. If it appears to be a real intrusion, it is escalated to a US monitoring center that can request police dispatch with the video evidence, and you get an alert. If it is nothing, you are not woken up.",
    },
    {
      q: "Is there a contract?",
      a: `No. The pilot is month to month and you can cancel at any time. The first ${offer.trialDays} days are free.`,
    },
    {
      q: "Who can see my video?",
      a: "Operators see only the clips the AI has flagged during monitored hours, not a constant live view. Full details of how video is handled will be shared before the pilot starts.",
    },
    {
      q: "Will the police come?",
      a: "We cannot promise that. Dispatch decisions belong to local authorities. What video verification does is give them evidence that someone is on site, which is what departments such as Seattle's now require before responding to a burglar alarm.",
    },
  ],
};

export const finalCta = {
  title: "Request a pilot spot",
  body: `Free to request, no commitment. ${offer.price} a month per site if you continue after the first ${offer.trialDays} days.`,
};

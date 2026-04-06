"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { CALENDLY_URL } from "@/lib/constants";

const StarfieldWrapper = dynamic(
  () => import("@/components/effects/StarfieldWrapper"),
  { ssr: false }
);

const GlslHillsBg = dynamic(
  () =>
    import("@/components/ui/glsl-hills").then((m) => ({
      default: m.GLSLHills,
    })),
  { ssr: false }
);

const containerVariants = {
  hidden: { opacity: 0 } as const,
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  } as const,
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 } as const,
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const PRICING_FEATURES = [
  "Monthly GEO audit + AI visibility tracking",
  "2 neighborhood landing pages per month",
  "Call & form conversion tracking (every lead attributed)",
  "Automated review generation on Google + Facebook",
  "Google Business Profile optimization + weekly posts",
  "Monthly strategy call + performance report",
  "Dedicated Slack channel for your team",
];

const STEPS = [
  {
    step: "01",
    title: "AI Visibility Audit",
    description:
      "We analyze your presence across ChatGPT, Perplexity, Google SGE, and 50+ local directories. You get a GEO Score and a clear picture of where you stand vs. competitors.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Local Growth Engine",
    description:
      "Neighborhood-targeted landing pages, structured data for AI crawlers, and GBP optimization — built to make you the answer when AI gets asked about your service area.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Review & Reputation System",
    description:
      "Automated review generation funnels that drive 5-star reviews to Google. Reviews feed AI training data — more reviews means more AI citations.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Tracked Results, Not Guesswork",
    description:
      "Call tracking, form attribution, and monthly GEO score reports. You see every lead source, every call recording, every ranking change. No black boxes.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" />
      </svg>
    ),
  },
];

export default function GeoPage() {
  return (
    <>
      {/* Fixed GLSL hills background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <GlslHillsBg />
      </div>

      <StarfieldWrapper />
      <Navbar />

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <motion.div
            className="relative z-10 max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
              variants={itemVariants}
            >
              <span className="text-white">Your Customers Are Asking AI</span>
              <br />
              <span className="text-white/50">Is AI Recommending You?</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-light"
              variants={itemVariants}
            >
              Aaxelera helps local businesses get found, recommended, and chosen
              by ChatGPT, Google AI, and Perplexity — before your competitors
              figure it out.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              variants={itemVariants}
            >
              <Button variant="primary">Get Your Free GEO Audit</Button>
              <Button variant="secondary" href="#how-it-works">
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats */}
        <SectionWrapper>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                The Shift Is Already Here
              </h2>
              <p className="text-white/40 text-base max-w-2xl mx-auto leading-relaxed font-light">
                40% of local searches now touch AI — and that number climbs
                every month. When someone asks ChatGPT for the best dentist,
                lawyer, or contractor in your city, are you the answer?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  value: 40,
                  suffix: "%",
                  label: "of Searches Now Start With AI",
                  desc: "ChatGPT, Perplexity, and Google AI Overviews are replacing traditional search. If you're not visible there, you're invisible to nearly half your market.",
                },
                {
                  value: 3,
                  suffix: "x",
                  label: "More Calls From Optimized Businesses",
                  desc: "Local businesses with optimized GEO presence generate 3x more inbound calls than those relying on traditional SEO alone.",
                },
                {
                  value: 90,
                  suffix: "%",
                  label: "of Local Businesses Aren't Ready",
                  desc: "The vast majority of local businesses have zero AI search optimization. Early movers dominate their market for years.",
                },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <GlassCard className="text-center h-full">
                    <div className="text-4xl md:text-5xl font-bold mb-3">
                      <AnimatedCounter
                        value={m.value}
                        prefix=""
                        suffix={m.suffix}
                      />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">
                      {m.label}
                    </h3>
                    <p className="text-white/35 text-sm leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Problems */}
        <SectionWrapper>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white/60 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Local Businesses Are Losing Patients, Clients, and Calls
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Invisible to AI Search",
                  desc: "ChatGPT, Perplexity, and Google AI Overviews are where your customers look first. Most local businesses don't show up at all.",
                },
                {
                  title: "Great Service, Weak Online Presence",
                  desc: "You're good at what you do, but your website, reviews, and local listings don't reflect it. AI judges you on digital signals, not handshakes.",
                },
                {
                  title: "Competitors Are Moving First",
                  desc: "The businesses investing in AI visibility now will own the top spots for years. Search rankings compound — late movers pay more to catch up.",
                },
                {
                  title: "No Way to Measure What's Working",
                  desc: "Most local businesses can't tell you which marketing channel drove their last 10 customers. Without tracking, you're flying blind.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass-card p-6 md:p-8 group"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-base font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* How It Works */}
        <SectionWrapper id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
                How Aaxelera Gets You Found
              </h2>
              <p className="text-white/40 text-base max-w-2xl mx-auto font-light">
                A systematic approach to making your business the one AI
                recommends.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-white/40">{s.icon}</div>
                      <span className="text-xs font-medium text-white/20 tracking-[0.15em] uppercase">
                        Step {s.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-3">
                      {s.title}
                    </h3>
                    <p className="text-white/35 leading-relaxed font-light text-sm">
                      {s.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Pricing */}
        <SectionWrapper id="pricing">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
                GEO Growth System
              </h2>
              <p className="text-white/40 text-base max-w-2xl mx-auto font-light">
                Everything your business needs to dominate AI search in your
                market.
              </p>
            </motion.div>

            <motion.div
              className="relative glass-card p-8 md:p-12 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                      $2,497
                    </span>
                    <span className="text-xl text-white/40 font-light">
                      /mo
                    </span>
                  </div>
                  <p className="text-white/30 text-sm font-light">
                    $1,997 one-time setup &middot; 6-month minimum
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 max-w-2xl mx-auto">
                  {PRICING_FEATURES.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-cyan-400/70 mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/50 text-sm font-light leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-center space-y-4">
                  <Button variant="primary">Book a Strategy Call</Button>
                  <p className="text-white/20 text-xs font-light">
                    Start with a free GEO audit — no commitment required
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ROI callouts */}
            <motion.div
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                {
                  stat: "1 new patient",
                  value: "= $1,500 lifetime value",
                  detail:
                    "2 extra patients/month pays for the system",
                },
                {
                  stat: "1 signed case",
                  value: "= $5,000-$25,000",
                  detail:
                    "1 case every 2 months covers a year of investment",
                },
                {
                  stat: "1 HVAC install",
                  value: "= $8,000 average ticket",
                  detail:
                    "1 job covers 3+ months of your growth system",
                },
              ].map((item) => (
                <div key={item.stat} className="glass-card p-5 text-center">
                  <p className="text-white/60 text-sm font-medium mb-1">
                    {item.stat}
                  </p>
                  <p className="text-white/80 text-base font-semibold mb-2">
                    {item.value}
                  </p>
                  <p className="text-white/25 text-xs font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Guarantee */}
        <SectionWrapper className="py-32 md:py-40">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="relative glass-card p-8 md:p-12 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white/80 mb-6 tracking-tight">
                  The Tracked-Results Guarantee
                </h2>
                <p className="text-white/40 text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">
                  Every call, every form submission, every ranking change —
                  tracked and reported. If you don&apos;t see measurable growth in
                  tracked inbound calls within 90 days, we keep working at no
                  additional cost until you do.
                </p>
                <Button variant="primary">Get Your Free GEO Audit</Button>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Founder */}
        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Headshot placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center overflow-hidden">
                  {/* Replace with <Image src="/monty.jpg" ... /> when photo is added */}
                  <span className="text-4xl md:text-5xl font-bold text-white/20">
                    MP
                  </span>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">
                  Montgomery Pruss
                </h3>
                <p className="text-white/40 text-sm font-medium tracking-[0.1em] uppercase mb-4">
                  Founder, Aaxelera
                </p>
                <p className="text-white/40 text-sm leading-relaxed font-light mb-3">
                  I build AI-powered growth systems that get local businesses found
                  by ChatGPT, Google AI, and Perplexity — before their competitors
                  figure it out. Every tool in this system I built myself, from the
                  audit engine to the outreach pipeline.
                </p>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  I work with dentists, law firms, and service businesses across
                  the US who are ready to stop guessing and start tracking every
                  call, every lead, every dollar.
                </p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="py-32 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                See Where You Stand — Free
              </h2>
              <p className="text-white/40 text-base mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Get a personalized GEO Audit showing your AI visibility score,
                competitor comparison, and the exact gaps costing you customers.
                No commitment, no credit card.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="primary">Get Your Free GEO Audit</Button>
                <Button variant="secondary" href={CALENDLY_URL}>
                  Book a Strategy Call
                </Button>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}

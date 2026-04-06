"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function Pricing() {
  const { pricing } = COPY;

  return (
    <SectionWrapper id={SECTION_IDS.pricing}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            {pricing.heading}
          </h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto font-light">
            {pricing.subheading}
          </p>
        </motion.div>

        <motion.div
          className="relative glass-card p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle glow accent */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Price */}
            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                  {pricing.price}
                </span>
                <span className="text-xl text-white/40 font-light">
                  {pricing.period}
                </span>
              </div>
              <p className="text-white/30 text-sm font-light">
                {pricing.setupFee} &middot; {pricing.commitment}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 max-w-2xl mx-auto">
              {pricing.features.map((feature) => (
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

            {/* CTA */}
            <div className="text-center space-y-4">
              <Button variant="primary">Book a Strategy Call</Button>
              <p className="text-white/20 text-xs font-light">
                Start with a free GEO audit — no commitment required
              </p>
            </div>
          </div>
        </motion.div>

        {/* ROI callout */}
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
              detail: "2 extra patients/month pays for the system",
            },
            {
              stat: "1 signed case",
              value: "= $5,000-$25,000",
              detail: "1 case every 2 months covers a year of investment",
            },
            {
              stat: "1 HVAC install",
              value: "= $8,000 average ticket",
              detail: "1 job covers 3+ months of your growth system",
            },
          ].map((item) => (
            <div
              key={item.stat}
              className="glass-card p-5 text-center"
            >
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
  );
}

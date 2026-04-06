"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function PropTechFocus() {
  return (
    <SectionWrapper id={SECTION_IDS.proptech}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                {COPY.proptech.heading}
              </h2>
              <p className="text-white/40 text-base leading-relaxed font-light">
                {COPY.proptech.body}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

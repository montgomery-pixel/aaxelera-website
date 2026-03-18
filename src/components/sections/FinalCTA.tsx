"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <SectionWrapper id={SECTION_IDS.cta} className="py-32 md:py-40">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
            {COPY.finalCta.heading}
          </h2>
          <p className="text-white/40 text-base mb-10 max-w-xl mx-auto leading-relaxed font-light">
            {COPY.finalCta.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary">{COPY.finalCta.cta}</Button>
            <Button variant="secondary">Get The Demo Pipeline Playbook</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

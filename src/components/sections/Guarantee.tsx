"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function Guarantee() {
  return (
    <SectionWrapper id={SECTION_IDS.guarantee}>
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
              {COPY.guarantee.heading}
            </h2>
            <p className="text-white/40 text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light">
              {COPY.guarantee.body}
            </p>
            <Button variant="primary">Get Your Free GEO Audit</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

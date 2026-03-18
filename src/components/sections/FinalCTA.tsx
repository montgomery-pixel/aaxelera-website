"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <SectionWrapper id={SECTION_IDS.cta} className="py-32 md:py-40">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Background radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.06) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)",
          }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">
              {COPY.finalCta.heading}
            </span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {COPY.finalCta.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">{COPY.finalCta.cta}</Button>
            <Button variant="secondary">Get The Demo Pipeline Playbook</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

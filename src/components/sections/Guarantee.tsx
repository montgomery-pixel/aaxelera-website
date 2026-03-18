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
          whileHover={{
            borderColor: "rgba(245,158,11,0.3)",
            boxShadow: "0 0 50px rgba(245,158,11,0.15)",
          }}
        >
          {/* Amber glow */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <svg className="w-10 h-10 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
              {COPY.guarantee.heading}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              {COPY.guarantee.body}
            </p>

            <Button variant="primary">Talk To An AI SDR Specialist</Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

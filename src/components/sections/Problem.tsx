"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { COPY, SECTION_IDS } from "@/lib/constants";

export default function Problem() {
  return (
    <SectionWrapper id={SECTION_IDS.problem}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-white/60 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {COPY.problem.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COPY.problem.items.map((item, i) => (
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
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { COPY, SOLUTIONS, SECTION_IDS } from "@/lib/constants";

const solutionIcons: Record<string, React.ReactNode> = {
  search: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  target: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  chart: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-8" />
    </svg>
  ),
};

export default function Solution() {
  return (
    <SectionWrapper id={SECTION_IDS.solution}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            {COPY.solution.heading}
          </h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto font-light">
            {COPY.solution.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-white/40">
                    {solutionIcons[sol.icon]}
                  </div>
                  <span className="text-xs font-medium text-white/20 tracking-[0.15em] uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-white/35 leading-relaxed font-light text-sm">
                  {sol.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

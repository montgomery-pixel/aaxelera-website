"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COPY, SECTION_IDS } from "@/lib/constants";

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

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
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
          <span className="text-white">{COPY.hero.headline}</span>
          <br />
          <span className="text-white/50">
            {COPY.hero.headlineHighlight}
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-light"
          variants={itemVariants}
        >
          {COPY.hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          variants={itemVariants}
        >
          <Button variant="primary">{COPY.hero.cta}</Button>
          <Button variant="secondary">{COPY.hero.ctaSecondary}</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

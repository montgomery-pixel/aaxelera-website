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
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.04) 0%, rgba(59,130,246,0.02) 40%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          variants={itemVariants}
        >
          <span className="text-white">{COPY.hero.headline}</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {COPY.hero.headlineHighlight}
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light"
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

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

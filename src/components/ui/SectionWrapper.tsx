"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  variants,
  delay = 0,
}: SectionWrapperProps) {
  const v = variants || defaultVariants;

  return (
    <motion.section
      id={id}
      className={`relative px-6 py-24 md:py-32 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...((v.visible as Record<string, unknown>) || {}),
          transition: {
            ...((
              (v.visible as Record<string, unknown>)?.transition as Record<
                string,
                unknown
              >
            ) || {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "amber" | "blue";
  hover?: boolean;
}

const glowColors = {
  cyan: "hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
  amber: "hover:border-amber-400/20 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  blue: "hover:border-blue-400/20 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
};

export default function GlassCard({
  children,
  className,
  glowColor = "cyan",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={clsx(
        "glass-card p-6 md:p-8",
        hover && glowColors[glowColor],
        className
      )}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}

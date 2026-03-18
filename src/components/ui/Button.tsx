"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/constants";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const url = href || CALENDLY_URL;

  const primaryStyles =
    "bg-white/[0.08] text-white border border-white/[0.12] hover:bg-white/[0.15] hover:border-white/[0.25] backdrop-blur-xl";

  const secondaryStyles =
    "bg-transparent text-white/60 border border-white/[0.06] hover:bg-white/[0.05] hover:text-white/80 hover:border-white/[0.12] backdrop-blur-xl";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center text-[13px] font-medium tracking-[0.05em] uppercase
        rounded-full px-7 py-3 cursor-pointer transition-all duration-400
        ${variant === "primary" ? primaryStyles : secondaryStyles}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

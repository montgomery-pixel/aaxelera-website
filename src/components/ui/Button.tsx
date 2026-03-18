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
    "bg-white/[0.1] text-white border border-white/[0.15] hover:bg-white/[0.18] hover:border-white/[0.25] backdrop-blur-xl";

  const secondaryStyles =
    "bg-white/[0.05] text-gray-300 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] backdrop-blur-xl";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center text-[14px] font-medium tracking-wide
        rounded-full px-7 py-3 cursor-pointer transition-all duration-300
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

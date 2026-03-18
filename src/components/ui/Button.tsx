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
    "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500";

  const secondaryStyles =
    "bg-transparent text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center text-base font-semibold
        rounded-xl px-8 py-3.5 cursor-pointer transition-all duration-300
        ${variant === "primary" ? primaryStyles : secondaryStyles}
        ${className}
      `}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

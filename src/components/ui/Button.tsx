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
    "bg-white text-[#0a0a1a] hover:bg-gray-100";

  const secondaryStyles =
    "bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2]";

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

"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ShaderLines = dynamic(
  () =>
    import("@/components/ui/shader-lines").then((m) => ({
      default: m.ShaderAnimation,
    })),
  { ssr: false }
);

interface LandingGateProps {
  onEnter: () => void;
}

export default function LandingGate({ onEnter }: LandingGateProps) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Shader lines background */}
      <div className="absolute inset-0 opacity-50">
        <ShaderLines />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Logo button */}
        <motion.button
          onClick={onEnter}
          className="group relative flex flex-col items-center gap-6 cursor-pointer bg-transparent border-none outline-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Brand name — sole focal point, centered */}
          <motion.span
            className="text-3xl md:text-5xl font-light tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition-colors duration-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Aaxelera
          </motion.span>

          {/* Enter prompt */}
          <motion.span
            className="text-xs tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Click to enter
          </motion.span>

          {/* Subtle ring pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/[0.06]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.button>
      </div>
    </div>
  );
}

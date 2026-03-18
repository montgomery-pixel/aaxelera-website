"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

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
          {/* Pyramid logo */}
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow behind logo */}
            <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700">
              <Image
                src="/logo.svg"
                alt=""
                width={120}
                height={120}
                className="w-[120px] h-[120px] brightness-200"
              />
            </div>
            <Image
              src="/logo.svg"
              alt="Aaxelera"
              width={100}
              height={100}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Brand name */}
          <motion.span
            className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition-colors duration-500"
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

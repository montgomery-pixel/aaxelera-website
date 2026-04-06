"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import LandingGate from "@/components/sections/LandingGate";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CorePromise from "@/components/sections/CorePromise";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import PropTechFocus from "@/components/sections/PropTechFocus";
import Guarantee from "@/components/sections/Guarantee";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

const StarfieldWrapper = dynamic(
  () => import("@/components/effects/StarfieldWrapper"),
  { ssr: false }
);

const GlslHillsBg = dynamic(
  () =>
    import("@/components/ui/glsl-hills").then((m) => ({
      default: m.GLSLHills,
    })),
  { ssr: false }
);

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* Stage 1: Landing gate with shader lines */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="gate"
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <LandingGate onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 2: Main site */}
      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Fixed GLSL hills background */}
          <div className="fixed inset-0 z-0 opacity-40">
            <GlslHillsBg />
          </div>

          <StarfieldWrapper />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <CorePromise />
            <Problem />
            <Solution />
            <PropTechFocus />
            <Guarantee />
            <FinalCTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

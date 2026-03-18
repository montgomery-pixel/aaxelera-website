"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (v) => {
        setDisplayValue(v);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [inView, value, duration, motionValue, rounded]);

  return (
    <span ref={ref} className={`bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

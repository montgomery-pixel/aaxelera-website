"use client";

import { useEffect, useRef } from "react";

export default function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const orbs = containerRef.current.querySelectorAll<HTMLDivElement>("[data-orb]");
      orbs.forEach((orb, i) => {
        const speed = 0.02 + i * 0.015;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {/* Large glass orb - top right */}
      <div
        data-orb
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: "-5%",
          right: "-3%",
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
          border: "1px solid rgba(255,255,255,0.05)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          animation: "float 30s ease-in-out infinite",
        }}
      >
        {/* Inner refraction highlight */}
        <div
          className="absolute w-[60%] h-[30%] rounded-full"
          style={{
            top: "15%",
            left: "15%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Medium glass orb - center left */}
      <div
        data-orb
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          top: "35%",
          left: "-6%",
          background: "radial-gradient(circle at 40% 30%, rgba(0,212,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          border: "1px solid rgba(255,255,255,0.04)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          animation: "float 25s ease-in-out infinite 8s",
        }}
      >
        <div
          className="absolute w-[50%] h-[25%] rounded-full"
          style={{
            top: "12%",
            left: "20%",
            background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, transparent 60%)",
            filter: "blur(6px)",
          }}
        />
      </div>

      {/* Small glass orb - bottom right */}
      <div
        data-orb
        className="absolute w-[250px] h-[250px] rounded-full"
        style={{
          bottom: "10%",
          right: "15%",
          background: "radial-gradient(circle at 35% 35%, rgba(59,130,246,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          border: "1px solid rgba(255,255,255,0.03)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
          animation: "float 22s ease-in-out infinite 4s",
        }}
      >
        <div
          className="absolute w-[45%] h-[22%] rounded-full"
          style={{
            top: "15%",
            left: "18%",
            background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 60%)",
            filter: "blur(5px)",
          }}
        />
      </div>

      {/* Tiny accent orb */}
      <div
        data-orb
        className="absolute w-[150px] h-[150px] rounded-full"
        style={{
          top: "65%",
          right: "40%",
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.05) 0%, transparent 60%)",
          border: "1px solid rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          animation: "float 18s ease-in-out infinite 12s",
        }}
      />
    </div>
  );
}

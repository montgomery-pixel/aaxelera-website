"use client";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Cyan orb - top right */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
          top: "-10%",
          right: "-5%",
          animation: "float 25s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />
      {/* Amber orb - center left */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)",
          top: "40%",
          left: "-8%",
          animation: "float 30s ease-in-out infinite 5s",
          filter: "blur(60px)",
        }}
      />
      {/* Blue orb - bottom right */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-12"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
          bottom: "5%",
          right: "10%",
          animation: "float 20s ease-in-out infinite 10s",
          filter: "blur(60px)",
        }}
      />
      {/* Small cyan accent - mid page */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
          top: "60%",
          right: "30%",
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}

"use client";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {/* Subtle white glow - top right */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: "-5%",
          right: "-3%",
          background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.04) 0%, transparent 60%)",
          animation: "float 30s ease-in-out infinite",
        }}
      />
      {/* Small accent - bottom left */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          animation: "float 25s ease-in-out infinite 8s",
        }}
      />
    </div>
  );
}

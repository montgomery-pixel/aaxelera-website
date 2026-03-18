"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.8,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.05, 0.05, 0.12],
      markerColor: [0, 0.83, 1],
      glowColor: [0.02, 0.05, 0.15],
      markers: [
        // Major tech hubs
        { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
        { location: [51.5074, -0.1278], size: 0.06 },   // London
        { location: [40.4168, -3.7038], size: 0.04 },   // Madrid
        { location: [1.3521, 103.8198], size: 0.04 },   // Singapore
        { location: [35.6762, 139.6503], size: 0.04 },  // Tokyo
        { location: [48.8566, 2.3522], size: 0.04 },    // Paris
        { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
        { location: [55.7558, 37.6173], size: 0.04 },   // Moscow
        { location: [25.2048, 55.2708], size: 0.04 },   // Dubai
      ],
      onRender: (state) => {
        // Slow auto-rotation + pointer interaction
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        // Gentle tilt based on scroll
        state.theta = 0.25 + (scrollY * 0.0003);
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [scrollY]);

  return (
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-auto hidden md:block">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 100;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 100;
          }
        }}
        style={{ cursor: "grab", contain: "layout paint size" }}
      />
    </div>
  );
}

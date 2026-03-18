"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createCircleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, "rgba(210, 230, 255, 1)");
  gradient.addColorStop(0.2, "rgba(210, 230, 255, 0.5)");
  gradient.addColorStop(0.5, "rgba(210, 230, 255, 0.08)");
  gradient.addColorStop(1, "rgba(210, 230, 255, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);
  return new THREE.CanvasTexture(canvas);
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return progress;
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const count = 800;
  const texture = useMemo(() => createCircleTexture(), []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 40 + Math.random() * 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={1}
        sizeAttenuation
        map={texture}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Orbital ring component
function OrbitalRing({
  radius,
  speed,
  tilt,
  color,
  scrollProgress,
}: {
  radius: number;
  speed: number;
  tilt: number;
  color: string;
  scrollProgress: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (ref.current) {
      // Base rotation + scroll-driven rotation
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.y += scrollProgress * 2;
    }
  });

  // Create ring geometry points
  const ringPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return points;
  }, [radius]);

  const ringGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(ringPoints);
  }, [ringPoints]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ref}>
        {/* Planet/orb on the orbit */}
        <mesh ref={planetRef} position={[radius, 0, 0]}>
          <sphereGeometry args={[radius * 0.06, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.8} />
        </mesh>
        {/* Glow around planet */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[radius * 0.12, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.15} />
        </mesh>
      </group>
      {/* Orbital path */}
      <primitive object={new THREE.Line(ringGeometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.06 }))} />
    </group>
  );
}

function SolarSystem({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Entire system gently tilts based on scroll
      groupRef.current.rotation.x = 0.3 + scrollProgress * 0.4;
      groupRef.current.rotation.z = scrollProgress * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[15, 0, -20]}>
      {/* Center glow */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.15} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>

      {/* Orbital rings at different tilts and speeds */}
      <OrbitalRing radius={8} speed={0.15} tilt={0.2} color="#00d4ff" scrollProgress={scrollProgress} />
      <OrbitalRing radius={14} speed={0.08} tilt={0.5} color="#3b82f6" scrollProgress={scrollProgress} />
      <OrbitalRing radius={22} speed={0.04} tilt={0.15} color="#f59e0b" scrollProgress={scrollProgress} />
      <OrbitalRing radius={30} speed={0.02} tilt={0.6} color="#00d4ff" scrollProgress={scrollProgress} />
    </group>
  );
}

function Scene() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <Stars />
      <SolarSystem scrollProgress={scrollProgress} />
    </>
  );
}

export default function Starfield() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 40], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

"use client";

import { Component, ReactNode, useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

  // Error Boundary to prevent any 3D crash from taking down the page
  class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode; fallback: ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch() {
      // Graceful catch
    }
    render() {
      if (this.state.hasError) {
        return this.props.fallback;
      }
      return this.props.children;
    }
  }

    function ParticleGalaxy() {
      const pointsRef = useRef<THREE.Points>(null!);
      const count = 1400;

      const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        const tealColor = new THREE.Color("#5eead4");
        const blueColor = new THREE.Color("#38bdf8");

        for (let i = 0; i < count; i++) {
          const theta = i * 0.17 + Math.random() * 0.1;
          const radius = Math.pow(Math.random(), 0.6) * 11;
          const spreadY = (Math.random() - 0.5) * 7;

          pos[i * 3] = Math.cos(theta) * radius + (Math.random() - 0.5) * 1.5;
          pos[i * 3 + 1] = spreadY + Math.sin(theta * 0.5) * 1.5;
          pos[i * 3 + 2] = Math.sin(theta) * radius + (Math.random() - 0.5) * 1.5;

          const chosenColor = Math.random() < 0.65 ? tealColor : blueColor;
          col[i * 3] = chosenColor.r;
          col[i * 3 + 1] = chosenColor.g;
          col[i * 3 + 2] = chosenColor.b;
        }

        return [pos, col];
      }, [count]);

      useFrame((state) => {
        if (pointsRef.current) {
          const t = state.clock.getElapsedTime();
          pointsRef.current.rotation.y = t * 0.03 + (state.pointer?.x || 0) * 0.1;
          pointsRef.current.rotation.x = Math.sin(t * 0.02) * 0.08 - (state.pointer?.y || 0) * 0.08;
        }
      });

      return (
        <group rotation={[Math.PI / 8, 0, 0]}>
          <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
            <PointMaterial
              transparent
              vertexColors
              size={0.045}
              sizeAttenuation={true}
              depthWrite={false}
              opacity={0.65}
              blending={THREE.AdditiveBlending}
            />
          </Points>
        </group>
      );
    }

      function FallbackConstellation() {
        return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#5eead4]/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-[100px] animate-pulse" />
    </div>
        );
      }

      export default function WebGLBackground() {
        const [hasMounted, setHasMounted] = useState(false);

        useEffect(() => {
          setHasMounted(true);
        }, []);

        if (!hasMounted) {
          return <FallbackConstellation />;
        }

        return (
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-75">
              <CanvasErrorBoundary fallback={<FallbackConstellation />}>
                <Canvas
                  camera={{ position: [0, 0, 7], fov: 60 }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
                  style={{ pointerEvents: "none" }}
                >
                  <ParticleGalaxy />
                </Canvas>
              </CanvasErrorBoundary>
              <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/10 via-transparent to-[#050507]" />
            </div>
            );
}

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
    const ref = useRef<THREE.Points>(null!);
    const count = 3000;

    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Sphere distribution
            const r = 10 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            p[i * 3 + 2] = r * Math.cos(phi);
        }
        return p;
    }, [count]);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = state.pointer.y * 0.1;
            ref.current.rotation.y = state.pointer.x * 0.1 + state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#5eead4"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

export default function WebGLBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black/50">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ParticleField />
            </Canvas>
        </div>
    );
}

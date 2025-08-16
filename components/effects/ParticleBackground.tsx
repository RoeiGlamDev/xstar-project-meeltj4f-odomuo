"use client";

import React from "react";
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from "three";

interface ParticleBackgroundProps {}

const ParticleBackground: React.FC<ParticleBackgroundProps> = () => {
  return (
    <div className="relative w-full h-full">
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ backgroundColor: ''white' '}}
      >
        <Points>
          <PointMaterial
            color="#ff69b4" // Pink color
            size={0.05}
            sizeAttenuation={true}
          />
          <bufferGeometry>
            <bufferAttribute
              attachObject={["attributes", "position"]}
              array={new Float32Array(generateParticles(1000))}
              count={1000}
              itemSize={3}
            />
          </bufferGeometry>
        </Points>
      </Canvas>
      <motion.div
        className="text-pink-500 text-4xl md:text-6xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Welcome to luxury FashionTV cosmetics
      </motion.h1>
    </div>
  );
};

const generateParticles = (count: number): number[] => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const x = THREE.MathUtils.randFloatSpread(5);
    const y = THREE.MathUtils.randFloatSpread(5);
    const z = THREE.MathUtils.randFloatSpread(5);
    positions.push(x, y, z);
  }
  return positions;
};

export default ParticleBackground;

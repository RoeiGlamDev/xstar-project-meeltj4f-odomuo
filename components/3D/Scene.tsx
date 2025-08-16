'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface LuxuryItemProps {
  color: THREE.ColorRepresentation;
  position: [number, number, number];
  size: number;
}

const LuxuryItem: React.FC<LuxuryItemProps> = ({ color, position, size }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-pink-500 to-white">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls />
          <LuxuryItem color="pink" position={[0, 0, 0]} size={1} />
          <LuxuryItem color="white" position={[2, 1, -1]} size={0.5} />
        </Canvas>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-10 text-3xl font-bold text-white drop-shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to luxury FashionTV cosmetics
      </motion.div>
    </div>
  );
};

export default Scene;

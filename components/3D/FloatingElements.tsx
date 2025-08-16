import { useRef } from 'react';
'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

interface FloatingElementProps {
  position: Vector3;
  color: string;
  scale: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, color, scale }) => {
  const ref = React.useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-white flex justify-center items-center">
      <h1 className="absolute text-pink-500 text-4xl font-bold z-10">
        luxury FashionTV cosmetics
      </h1>
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement position={new Vector3(0, 0, 0)} color="#FFC0CB" scale={1.5} />
        <FloatingElement position={new Vector3(2, 1, -1)} color="#FFFFFF" scale={1} />
        <FloatingElement position={new Vector3(-2, -1, 1)} color="#FFC0CB" scale={1.2} />
      </Canvas>
      <motion.div
        className="absolute bottom-10 text-white bg-pink-500 px-4 py-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        Discover the essence of luxury
      </motion.div>
    </div>
  );
};

export default FloatingElements;

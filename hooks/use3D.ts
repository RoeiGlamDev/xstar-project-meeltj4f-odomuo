// hooks/use3D.ts

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to add 3D interaction for luxury FashionTV cosmetics site.
 * This hook manages a 3D scene using Three.js to enhance the luxury experience.
 */
export const use3D = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color('white')); // White background for elegance
    mountRef.current.appendChild(renderer.domElement);

    // Lighting for a luxury feel
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffc0cb, 0.5); // Pink accent lighting
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Basic cube as a placeholder for future cosmetic products
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xffc0cb }); // Pink color for brand consistency
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return mountRef;
};

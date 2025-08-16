// FILE: hooks/useAnimation.ts

'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

/
 * Custom animation hooks tailored for luxury FashionTV cosmetics user experience.
 * This hook provides elegant and high-end animations aligning with the brand's luxury fashion context.
 * @returns Animation controls for use in animated components.
 */
export const useLuxuryAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Triggering initial animations on mount for a luxurious entrance
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    });
  }, [controls]);

  return controls;
};

/
 * Example usage within a component:
 * 
 * const ExampleComponent: React.FC = () => {
 *   const animationControls = useLuxuryAnimation();
 * 
 *   return (
 *     <motion.div
 *       initial={{ opacity: 0, scale: 0.9 }}
 *       animate={animationControls}
 *     >
 *       <h1 className="text-pink-500 font-bold">Welcome to luxury FashionTV cosmetics</h1>
 *     </motion.div>
 *   );
 * };
 */

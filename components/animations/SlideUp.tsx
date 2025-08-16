"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
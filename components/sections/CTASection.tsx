'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => {
  return (
    <section className="bg-white py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="text-4xl md:text-5xl font-bold text-pink-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          onClick={onButtonClick}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;

'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6 md:px-12 lg:px-24">
        <motion.div
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to luxury FashionTV cosmetics
        </motion.h1>
        <motion.div
          className="mt-4 text-lg md:text-xl lg:text-2xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Elevate your style with our exclusive range of high-end cosmetics tailored for the fashion elite.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-white text-pink-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-colors duration-300">
            Discover Our Collection
          </button>
          <button className="ml-4 bg-transparent text-white border border-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-pink-500 transition-colors duration-300">
            Contact Us
          </button>
        </motion.div>
        <motion.div
          className="mt-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p>Trusted by the world's top fashion houses and celebrities.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useEffect, useRef } from 'react';
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0 },
      }}
      className="luxury-animation"
    >
      {children}
    </motion.div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="text-center py-8 bg-gradient-to-r from-pink-500 to-pink-300">
        <h1 className="text-4xl font-bold text-white">luxury FashionTV cosmetics</h1>
        <p className="text-xl text-white mt-2">
          Redefining Elegance in the Fashion Industry
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <FadeIn>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-pink-500">Our Philosophy</h2>
            <p className="mt-4 text-lg text-gray-700">
              At luxury FashionTV cosmetics, we believe in the fusion of fashion
              and beauty. Our products are crafted with precision to elevate your
              elegance and style.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <h2 className="text-3xl font-semibold text-pink-500">Collections</h2>
            <p className="mt-4 text-lg text-gray-700">
              Discover our exclusive range of cosmetics that embody the luxury
              and sophistication of the fashion world. From runway-ready lipsticks
              to high-definition foundations, explore products that make a
              statement.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/ Example product cards /}
              <div className="bg-white shadow-lg p-4 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-pink-500">Runway Red Lipstick</h3>
                <p className="mt-2 text-gray-600">Bold, vibrant, and captivating.</p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-pink-500">Silk Finish Foundation</h3>
                <p className="mt-2 text-gray-600">Smooth, flawless, and long-lasting.</p>
              </div>
              <div className="bg-white shadow-lg p-4 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-pink-500">Glamour Eyeshadow Palette</h3>
                <p className="mt-2 text-gray-600">Elegant shades for every occasion.</p>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>

      <footer className="bg-pink-500 text-white text-center py-6">
        <p>© 2023 luxury FashionTV cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryFashionTVCosmetics;

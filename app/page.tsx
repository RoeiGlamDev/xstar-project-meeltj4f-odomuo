'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/ Hero Section /}
      <section className="bg-gradient-to-r from-pink-500 to-pink-300 text-white py-24">
        <div className="container mx-auto text-center">
          <motion.div
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to luxury FashionTV cosmetics
          </motion.h1>
          <motion.div
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Elevate your beauty routine with our exclusive, fashion-forward products.
          </motion.p>
          <motion.div
            className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-100"
            whileHover={{ scale: 1.05 }}
          >
            Explore the Collection
          </motion.button>
        </div>
      </section>

      {/ Features Section /}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-500 text-center mb-12">
            Our Luxury Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">High-Quality Ingredients</h3>
              <p className="text-gray-700">
                Our formulas are curated with the finest ingredients for unmatched luxury.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Fashion-Forward Design</h3>
              <p className="text-gray-700">
                Sleek packaging inspired by the latest fashion trends.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">Expertly Crafted</h3>
              <p className="text-gray-700">
                Developed by leading experts in the beauty and fashion industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

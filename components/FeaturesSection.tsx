'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaRegGem, FaShoppingBag, FaStar } from 'react-icons/fa';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaRegGem className="text-pink-500 text-3xl" />,
    title: 'Exquisite Craftsmanship',
    description: 'Discover unparalleled quality and precision in every product of luxury FashionTV cosmetics, designed to elevate your fashion experience.',
  },
  {
    icon: <FaShoppingBag className="text-pink-500 text-3xl" />,
    title: 'Exclusive Collections',
    description: 'Indulge in our exclusive collections that bring the latest trends from the fashion runway to your everyday life.',
  },
  {
    icon: <FaStar className="text-pink-500 text-3xl" />,
    title: 'Celebrity Endorsed',
    description: 'Join the elite as global celebrities choose luxury FashionTV cosmetics for their exclusive events and appearances.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-center text-pink-700 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the Luxury of FashionTV Cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border border-pink-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-center text-pink-700 mb-2">{feature.title}</h3>
              <p className="text-center text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

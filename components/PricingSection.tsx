'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential Elegance',
    price: '$99',
    features: [
      'Personalized Makeup Consultation',
      'Exclusive FashionTV Cosmetics Kit',
      'VIP Customer Support',
    ],
  },
  {
    name: 'Glamour Deluxe',
    price: '$199',
    features: [
      'All Essential Elegance Features',
      'Complimentary Skin Analysis',
      'Priority Appointment Scheduling',
    ],
  },
  {
    name: 'Luxury Supreme',
    price: '$299',
    features: [
      'All Glamour Deluxe Features',
      'Personal Stylist Consultation',
      'Exclusive Event Invitations',
    ],
  },
];

const PricingSection: FC = () => {
  return (
    <section className="bg-white py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-12">
          luxury FashionTV cosmetics Pricing
        </h2>
        <div className="flex flex-wrap justify-center">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 lg:w-1/4 p-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="border border-pink-500 rounded-lg shadow-lg overflow-hidden">
                <div className="bg-pink-500 p-6 text-white text-center">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-2 text-2xl">{tier.price}</p>
                </div>
                <div className="p-6">
                  <ul className="text-gray-700">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="py-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors">
                    Select Plan
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Classic Elegance',
    price: '$49',
    features: [
      'Premium skincare products',
      'Exclusive makeup collection',
      'Personalized beauty consultation',
    ],
  },
  {
    title: 'Luxury Indulgence',
    price: '$99',
    features: [
      'All Classic Elegance features',
      'VIP customer support',
      'Monthly luxury gift box',
    ],
  },
  {
    title: 'Ultimate Glamour',
    price: '$199',
    features: [
      'All Luxury Indulgence features',
      'Access to limited-edition releases',
      'Private styling sessions',
    ],
  },
];

const FAQ = [
  {
    question: 'What is included in the luxury gift box?',
    answer: 'The luxury gift box includes a selection of exclusive products and accessories tailored to your preferences.',
  },
  {
    question: 'How do I book a private styling session?',
    answer: 'You can book a private styling session through our website or by contacting our VIP support team.',
  },
  {
    question: 'What are the shipping options?',
    answer: 'We offer free shipping on all orders over $50 within the continental United States.',
  },
];

const PricingPage: FC = () => (
  <div className="bg-white text-pink-500">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center"
      >
        luxury FashionTV cosmetics Pricing
      </motion.h1>
      <p className="mt-4 text-center text-lg text-pink-700">
        Experience the essence of luxury with our exclusive pricing plans designed for the fashion-forward.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pricingOptions.map((option) => (
          <motion.div
            key={option.title}
            whileHover={{ scale: 1.05 }}
            className="border border-pink-100 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="px-6 py-8 bg-gradient-to-r from-pink-300 to-pink-500 text-white">
              <h3 className="text-lg font-bold">{option.title}</h3>
              <p className="mt-4 text-4xl">{option.price}</p>
              <ul className="mt-6 space-y-4">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mt-8 space-y-6">
          {FAQ.map((item) => (
            <div key={item.question} className="bg-pink-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">{item.question}</h3>
              <p className="mt-2 text-pink-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PricingPage;

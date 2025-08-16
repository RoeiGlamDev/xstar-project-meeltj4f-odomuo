import { useState } from 'react';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {}

const NewsletterSection: React.FC<NewsletterSectionProps> = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate a successful form submission
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the luxury FashionTV cosmetics Community
        </motion.h2>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest trends and exclusive offers from luxury FashionTV cosmetics. Subscribe to our newsletter and indulge in the world of high-end beauty.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full md:w-auto border border-pink-500 rounded-md px-4 py-2 mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
            required
          />
          <motion.div
            type="submit"
            className="bg-pink-700 text-white font-medium rounded-md px-6 py-2 hover:bg-pink-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        {submitted && (
          <motion.div
            className="mt-4 text-pink-700 font-medium"
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to luxury FashionTV cosmetics!
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;

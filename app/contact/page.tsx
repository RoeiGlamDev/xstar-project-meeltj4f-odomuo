'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <motion.div
        className="w-full max-w-4xl text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-6">
          Contact luxury FashionTV cosmetics
        </h1>
        <p className="text-lg text-gray-700 mb-12">
          We value your feedback and inquiries. Please fill out the form below to get in touch with us.
        </p>
        <form className="bg-pink-100 p-8 rounded-lg shadow-lg w-full">
          <div className="mb-4">
            <label className="block text-left text-pink-500 font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border-2 border-pink-500 rounded-md focus:outline-none focus:border-pink-600"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-pink-500 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border-2 border-pink-500 rounded-md focus:outline-none focus:border-pink-600"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-pink-500 font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 border-2 border-pink-500 rounded-md focus:outline-none focus:border-pink-600"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Visit Us</h2>
          <p className="text-gray-700 mb-2">123 Fashion Avenue, Milan, Italy</p>
          <p className="text-gray-700 mb-2">Business Hours: Mon-Fri, 10am - 6pm</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

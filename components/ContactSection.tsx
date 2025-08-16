'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <section className="bg-white py-12 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-pink-600 text-center mb-4">Contact luxury FashionTV cosmetics</h2>
        <p className="text-center text-gray-700 mb-8">Reach out to us for any inquiries about our exclusive fashion products.</p>
        
        <form onSubmit={() => handleSubmit(onSubmit)} className="bg-pink-50 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-600 font-semibold mb-2">Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-3 border border-pink-200 rounded-md"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-600 font-semibold mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 border border-pink-200 rounded-md"
              {...register('email', { required: 'Email is required', pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Enter a valid email'
              }})}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          
          <div className="mb-4">
            <label htmlFor="reason" className="block text-pink-600 font-semibold mb-2">Reason for Contact</label>
            <select
              id="reason"
              className="w-full p-3 border border-pink-200 rounded-md"
              {...register('reason', { required: 'Please select a reason' })}
            >
              <option value="">Select a reason</option>
              <option value="product-inquiry">Product Inquiry</option>
              <option value="wholesale">Wholesale Opportunities</option>
              <option value="collaboration">Collaboration</option>
            </select>
            {errors.reason && <span className="text-red-500">{errors.reason.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-pink-600 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border border-pink-200 rounded-md"
              rows={4}
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>

          <button type="submit" className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 transition-all">
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <h3 className="text-2xl text-pink-600 font-bold mb-2">luxury FashionTV cosmetics</h3>
          <p className="text-gray-700">123 Fashion Avenue, Suite 100</p>
          <p className="text-gray-700">New York, NY 10001</p>
          <p className="text-gray-700">Email: contact@luxuryfashiontvcosmetics.com</p>
          <p className="text-gray-700">Phone: (123) 456-7890</p>
          <p className="text-gray-700 mt-4">Business Hours: Mon - Fri, 9 AM - 5 PM</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  name: string;
  photo: string;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia L.',
    photo: '/images/customers/sophia.jpg',
    rating: 5,
    feedback: 'The products from luxury FashionTV cosmetics are absolutely divine. The quality is unmatched, and the packaging feels so elegant. Every application feels like a luxurious experience!',
  },
  {
    name: 'Isabella M.',
    photo: '/images/customers/isabella.jpg',
    rating: 5,
    feedback: 'I adore the vibrant colors and the lasting effect of the cosmetics. The attention to detail by luxury FashionTV cosmetics sets it apart in the fashion world.',
  },
  {
    name: 'Olivia R.',
    photo: '/images/customers/olivia.jpg',
    rating: 4,
    feedback: 'Luxury FashionTV cosmetics has transformed my daily routine. The products not only look beautiful but also enhance my features naturally. Highly recommended for anyone in the fashion industry!',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-pink-500 text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-lg bg-gradient-to-r from-pink-100 to-white shadow-lg p-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.photo}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-pink-500">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 text-pink-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.09 6.42a1 1 0 00.95.69h6.829c.969 0 1.371 1.24.588 1.81l-5.522 4.01a1 1 0 00-.364 1.118l2.09 6.42c.3.921-.755 1.688-1.54 1.118l-5.522-4.01a1 1 0 00-1.176 0l-5.522 4.01c-.784.57-1.838-.197-1.539-1.118l2.09-6.42a1 1 0 00-.364-1.118l-5.522-4.01c-.783-.57-.381-1.81.588-1.81h6.829a1 1 0 00.95-.69l2.09-6.42z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;

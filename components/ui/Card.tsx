'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="group relative w-full max-w-sm p-6 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-pink-700">{title}</h3>
        <p className="mt-2 text-white">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;

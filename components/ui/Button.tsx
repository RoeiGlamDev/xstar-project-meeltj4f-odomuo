'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/classNames';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-pink-500 text-white hover:bg-pink-600',
  secondary: 'bg-white text-pink-500 hover:bg-pink-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-6 py-3 rounded-full transition-colors duration-300 ease-in-out',
        'focus:outline-none focus:ring-2 focus:ring-pink-300',
        buttonVariants[variant]
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;

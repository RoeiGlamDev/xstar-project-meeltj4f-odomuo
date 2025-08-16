import { useState } from 'react';
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, onChange, value, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-6">
      <motion.div
        className={block text-sm font-medium ${isFocused ? 'text-pink-500' : 'text-white'} transition-colors duration-300}
        htmlFor={label}
      >
        {label}
      </motion.label>
      <motion.div
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={mt-1 block w-full px-4 py-2 text-white bg-pink-500 border-2 border-white rounded-md focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all duration-300 ${
          error ? 'border-red-500' : ''
        }}
        aria-invalid={!!error}
        aria-describedby={error ? ${label}-error : undefined}
      />
      {error && (
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          className="mt-1 text-sm text-red-500"
          id={${label}-error}
        >
          {error}
        </motion.div>
      )}
    </div>
  );
};

export default Input;

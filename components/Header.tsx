'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-between h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center">
            <a href="/" className="text-pink-600 text-2xl font-bold">
              luxury FashionTV cosmetics
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-pink-600 focus:outline-none focus:text-pink-600"
              aria-label="Toggle menu"
            >
              {/ Mobile Menu Toggle Icon /}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

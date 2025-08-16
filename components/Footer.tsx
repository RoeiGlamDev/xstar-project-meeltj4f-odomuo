'use client';

import React from 'react';
import { motion } from 'framer-motion';

type FooterLink = {
  name: string;
  href: string;
};

type SocialMediaLink = {
  platform: string;
  href: string;
  icon: JSX.Element;
};

interface FooterProps {
  links: FooterLink[];
  socialMedia: SocialMediaLink[];
  companyInfo: string;
}

const Footer: React.FC<FooterProps> = ({ links, socialMedia, companyInfo }) => {
  return (
    <footer className="bg-white text-pink-500 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between"
        >
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">luxury FashionTV cosmetics</h2>
            <p className="text-sm">{companyInfo}</p>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-pink-700 transition-colors ease-in-out duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <ul className="flex space-x-4">
              {socialMedia.map((media) => (
                <li key={media.platform}>
                  <a
                    href={media.href}
                    className="hover:text-pink-700 transition-colors ease-in-out duration-300"
                    aria-label={media.platform}
                  >
                    {media.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

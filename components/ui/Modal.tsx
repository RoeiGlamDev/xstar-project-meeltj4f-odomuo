"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-pink-200 bg-opacity-50 backdrop-blur-sm z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center border-b border-pink-300 pb-3">
          <h2 id="modal-title" className="text-2xl font-bold text-pink-600">
            {title} - luxury FashionTV cosmetics
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-pink-600 hover:text-pink-800 transition duration-200 focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 text-black">
          {content}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition duration-200 focus:outline-none"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;

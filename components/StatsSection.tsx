'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StatsSectionProps {
  achievements: { title: string; value: number; description: string }[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="text-3xl leading-tight font-extrabold text-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            luxury FashionTV cosmetics Achievements
          </motion.h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Discover the milestones that define our luxury brand in the fashion industry.
          </p>
        </div>
        <div className="mt-10">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative bg-pink-50 px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <dt className="text-lg leading-6 font-medium text-pink-500">
                  {achievement.title}
                </dt>
                <motion.div
                  className="mt-2 text-3xl leading-9 font-extrabold text-black"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {achievement.value}
                </motion.dd>
                <p className="mt-3 text-base leading-5 text-gray-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

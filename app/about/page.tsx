'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  description: string;
}

interface CompanyHistory {
  year: number;
  milestone: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Armani',
    position: 'Creative Director',
    description: 'Sophia leads our visionary creative team with her exquisite taste and innovative designs.'
  },
  {
    name: 'Liam Couture',
    position: 'Lead Makeup Artist',
    description: 'Liam transforms our fashion ethos into stunning cosmetic artistry.'
  },
  // Add more team members as needed
];

const companyHistory: CompanyHistory[] = [
  {
    year: 2010,
    milestone: 'Founded',
    description: 'luxury FashionTV cosmetics was founded to revolutionize the fashion cosmetics industry.'
  },
  {
    year: 2015,
    milestone: 'International Expansion',
    description: 'We expanded our reach to international markets, bringing luxury worldwide.'
  },
  // Add more history entries as needed
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-800">
      <motion.section
        className="container mx-auto py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">About luxury FashionTV cosmetics</h1>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4">
            At luxury FashionTV cosmetics, we blend the essence of high fashion with the art of cosmetics. Our mission is to bring the runway glamour to everyday life, ensuring everyone feels like a star.
          </p>
          <p>
            Our luxury cosmetics line is crafted with the finest ingredients, keeping in mind the latest trends and timeless elegance that FashionTV represents.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="bg-pink-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Our History</h2>
        <div className="max-w-2xl mx-auto">
          {companyHistory.map((entry) => (
            <div key={entry.year} className="mb-6">
              <h3 className="text-2xl font-medium">{entry.year}</h3>
              <p className="font-bold">{entry.milestone}</p>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="m-4 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="font-semibold">{member.position}</p>
              <p>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;

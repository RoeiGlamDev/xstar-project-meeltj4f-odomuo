'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Sophia Laurent',
    role: 'Creative Director',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    role: 'Chief Innovation Officer',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Ava Martinez',
    role: 'Brand Strategist',
    image: '/images/team/ava.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-pink-100 text-white py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
          About luxury FashionTV cosmetics
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Our Story</h3>
          <p className="text-lg leading-relaxed">
            Founded by visionaries in the fashion industry, luxury FashionTV cosmetics embodies the pinnacle of elegance and innovation. Our journey began with a passion for redefining beauty standards and delivering unparalleled luxury experiences. Today, we are a beacon of style and sophistication, celebrated for our commitment to quality and excellence.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            At luxury FashionTV cosmetics, our mission is to empower individuals by enhancing their natural beauty with our exquisite product lines. We strive to innovate within the fashion realm, creating cosmetics that resonate with the elegance and grace of the modern luxury enthusiast.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-pink-500 mb-8">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  className="rounded-full border-4 border-pink-500 mb-4"
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                />
                <h4 className="text-xl font-medium">{member.name}</h4>
                <p className="text-pink-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

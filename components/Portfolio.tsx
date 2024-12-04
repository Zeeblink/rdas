import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Design', 'App', 'Graphic', 'Web Design'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Isalesbook.com - Inventory and Sales management app',
      category: 'App',
      image: '/isalesbook.png',
      link: 'https://isalesbook.com/',
    },
    // {
    //   id: 2,
    //   title: '',
    //   category: 'Web',
    //   image: '/dream-job.jpg',
    // },
    // Add more portfolio items as needed
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-[#fffefd]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-xl font-semibold text-secondary mb-2">Creative Portfolio</h2> */}
          <h3 className="text-4xl font-bold text-primary mb-4">Recent Projects</h3>
          <p className="text-primary max-w-2xl mx-auto">
            Here are some of our recent projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${activeFilter === filter
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-200'
                } transition-colors duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item) => (
            <Link href={item.link} key={item.id} target='_blank'>
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#000033] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.category}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
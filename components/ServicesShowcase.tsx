"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData as services } from '@/lib/servicesData';
import Image from 'next/image';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ServiceDetails from './ServiceDetails';

// Interface for service type
interface Service {
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
}

const ServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Track selected service
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility

  

  return (
    <section className="py-20 bg-[#000033] text-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl text-start font-semibold text-secondary uppercase mb-2">WHAT WE DO</h2>
          <h3 className="text-4xl text-start font-bold mb-4">We help to build clients their dream projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-[#000033] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  layout="responsive"
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <FontAwesomeIcon icon={service.icon} className="text-secondary text-3xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.excerpt}</p>
                <button
                  onClick={() => {
                    setSelectedService(service); // Set the selected service
                    setIsModalOpen(true); // Open modal
                  }}
                  className="text-secondary hover:text-[#003366] transition-colors duration-300 inline-flex items-center"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Modal */}
        {selectedService && (
          <ServiceDetails
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // Close modal
            title={selectedService.title}
            content={selectedService.description}
          />
        )}
      </div>
    </section>
  );
};

export default ServicesShowcase;

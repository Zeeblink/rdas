import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

interface ServiceDetailsProps {
  service: Service;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const services = [
    'Website Development',
    'Graphic Design',
    'App Development',
    // Add more services as needed
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[#4080FF] hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">&gt;</span>
            <span className="text-gray-500">Service Details</span>
          </nav>

          <h1 className="text-4xl font-bold text-[#000033] mb-4">Service Details</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget
            sapien consectetur ultrices. Ut quis dapibus libero.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-[#000033] mb-4">Services</h2>
              <ul>
                {services.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link href={`/services/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center text-[#000033] hover:text-[#4080FF] transition-colors">
                      <FontAwesomeIcon icon={faArrowRight} className="mr-2 w-4" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#4080FF] text-white p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s talk</h3>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                (+550) 647 876 093
              </p>
              <p className="mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                support@company.com
              </p>
              <button className="bg-white text-[#4080FF] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Get a call back
              </button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold text-[#000033] mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <p className="text-gray-600">{service.longDescription}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

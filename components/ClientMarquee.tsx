"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
}

interface ClientMarqueeProps {
  clients: Client[];
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ clients }) => {
  return (
    <div className="w-full overflow-hidden bg-white py-8 shadow-inner">
      <motion.div 
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image 
              src={client.logo} 
              alt={client.name} 
              width={120} 
              height={80} 
              objectFit="contain"
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientMarquee;
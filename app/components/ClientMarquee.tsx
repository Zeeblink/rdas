"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

interface ClientMarqueeProps {
  clients: Client[];
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ clients }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const marqueeContent = marquee.firstChild as HTMLElement;
    let scrollAmount = 0;
    const step = 1; // Adjust this value to change scroll speed
    
    const scroll = () => {
      if (!marquee) return;
      marquee.scrollTo(scrollAmount, 0);
      scrollAmount += step;
      if (scrollAmount >= marqueeContent.scrollWidth / 2) {
        scrollAmount = 0;
      }
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={marqueeRef}>
      <div className="flex animate-marquee">
        {clients.concat(clients).map((client, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <Image 
              src={client.logo} 
              alt={client.name} 
              width={100} 
              height={64} 
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;
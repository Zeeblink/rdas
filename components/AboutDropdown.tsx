import React from 'react';
import Link from 'next/link';

interface AboutDropdownProps {
  isOpen: boolean;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ isOpen }) => {
  return (
    <div
      className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <Link href="/about"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-secondary transition duration-300">
        Who We Are
      </Link>
      {/* <Link href="/mission"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-secondary transition duration-300">
        What We Believe In
      </Link> */}
      <Link href="/careers"
        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-secondary transition duration-300">
        Careers
      </Link>
    </div>
  );
};

export default AboutDropdown;

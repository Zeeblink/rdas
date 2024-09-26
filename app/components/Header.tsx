"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutDropdown from './AboutDropdown';

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 h-20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="flex items-center">
              <img src="/api/placeholder/50/50" alt="RDAS Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-primary ml-2">RDAS Solutions</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-secondary transition duration-300">Home</Link>

            {/* About Link with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="text-gray-700 hover:text-secondary transition duration-300">
                About
              </button>
              <AboutDropdown isOpen={isAboutOpen} />
            </div>

            <Link href="#services" className="text-gray-700 hover:text-secondary transition duration-300">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-secondary transition duration-300">Contact</Link>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-primary">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

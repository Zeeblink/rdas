"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import AboutDropdown from './AboutDropdown';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <header className="customContainer bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 h-16">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/rdassl_logo_1.png" alt="RDAS Logo" className="h-8 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-[#003366] hover:text-orange-500 transition-colors">Home</a>
              <div className="relative group">
                <button className="text-[#003366] hover:text-orange-500 transition-colors" onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)}>
                  <AboutDropdown isOpen={isAboutOpen} />
                  About
                </button>
              </div>
              <a href="#services" className="text-[#003366] hover:text-orange-500 transition-colors">Services</a>
              <a href="/contact" className="text-[#003366] hover:text-orange-500 transition-colors">Contact</a>
              <button className="bg-[#003366] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#003366]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t shadow-lg">
              <div className="flex flex-col space-y-4 p-4">
                <a href="/" className="text-[#003366] hover:text-orange-500 transition-colors">Home</a>
                <a href="/about" className="text-[#003366] hover:text-orange-500 transition-colors">About</a>
                <a href="#services" className="text-[#003366] hover:text-orange-500 transition-colors">Services</a>
                <a href="/contact" className="text-[#003366] hover:text-orange-500 transition-colors">Contact</a>
                <button className="bg-[#003366] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>


    </>
  );
};

export default Header;

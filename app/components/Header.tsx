import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/50/50" alt="RDAS Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-primary ml-2">RDAS Solutions</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300">About</a>
            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300">Services</a>
            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300">Case Studies</a>
            <a href="#" className="text-gray-700 hover:text-secondary transition duration-300">Contact</a>
            <button className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105">Get Started</button>
          </div>
          <div className="md:hidden">
            <button className="text-primary">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
import React from 'react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#000033] text-white">
      <div className="md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s build something great together.</h1>
        <p className="mb-4">We&apos;re happy to answer any questions you may have and help you determine which of our services best fits your needs.</p>
        <p className="mb-4">
          Call us at <a href="tel:+2347013004492" className="text-[#FF6600]">+234 7013004492</a> or email{' '}
          <a href="mailto:hello@247labs.com" className="text-[#FF6600]">info@rdas.com.ng</a>
        </p>
        <h2 className="text-2xl font-semibold mb-4">Your Benefits:</h2>
        <ul className="grid grid-cols-2 gap-2">
          {['Client Oriented', 'Result-driven', 'Independent', 'Problem-solving', 'Competent', 'Transparent'].map((benefit, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#FF6600]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#003366]">Schedule a Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company / Organization"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Company email"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            rows={4}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FF6600] text-white p-2 rounded hover:bg-[#003366] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
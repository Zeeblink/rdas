'use client'
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RDAS Solutions Limited',
    url: 'https://rdas.com.ng',
    logo: 'https://rdas.com.ng/rdassl_logo_1.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-701-300-4492',
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14 Adams Manuel Street',
      addressLocality: 'Sabo, Yaba',
      addressRegion: 'Lagos',
      addressCountry: 'NG'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100087000948577',
      'https://www.linkedin.com/company/rdas-softtech/'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <footer className="bg-[#111827] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">RDAS Solutions</h3>
              <p className="text-gray-400">Empowering businesses through innovative data solutions.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-[#FF6600] transition duration-300 flex items-center">
                    <span>&gt; Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[#FF6600] transition duration-300 flex items-center">  
                    <span>&gt; About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-400 hover:text-[#FF6600] transition duration-300 flex items-center">
                    <span>&gt; Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-[#FF6600] transition duration-300 flex items-center">
                    {/* <FontAwesomeIcon icon={faChevronRight} className="mr-2" /> */}
                    <span>&gt; Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-[#FF6600] transition duration-300 flex items-center">
                    <span>&gt; Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">14 Adams Manuel Street,<br />Sabo, Yaba, Lagos</p>
              <p className="text-gray-400 mt-2">Phone: 07013004492</p>
              <p className="text-gray-400 mt-2">Email: info@rdas.com.ng</p>
            </div>

            {/* Newsletter section commented out for now */}
            {/* <div>
              <h3 className="text-xl font-semibold mb-4">Join Our Newsletter</h3>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  className="p-3 rounded-lg bg-[#F9FAFB] text-black"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-[#FF6600] text-white py-3 px-6 rounded-lg hover:bg-[#FF6600]/80 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <Link target='_blank' href="https://www.facebook.com/profile.php?id=100087000948577" className="hover:text-[#153C99]">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              {/* <Link target='_blank' href="#" className="hover:text-[#FF6600]">
                <FontAwesomeIcon icon={faInstagram} />
              </Link> */}
              <Link target='_blank' href="https://www.linkedin.com/company/rdas-softtech/" className="hover:text-[#153C99]">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>

            <div className="mt-8 text-gray-500">
              <p>&copy; 2024 RDAS Solutions Limited. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

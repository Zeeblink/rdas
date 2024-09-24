import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">RDAS Solutions</h3>
              <p className="text-gray-400">Empowering businesses through innovative database solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-secondary transition duration-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">14 Adams Manuel Street,<br />Sabo, Yaba, Lagos</p>
              <p className="text-gray-400 mt-2">Phone: 07013004492</p>
              <p className="text-gray-400 mt-2">Email: info@rdas.com.ng</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 RDAS Solutions Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer































// import React from 'react'
// import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-10">
//           <div className="container mx-auto px-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">RDAS Solutions</h3>
//                 <p className="text-gray-400">Empowering businesses through innovative database solutions.</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//                 <ul className="space-y-2">
//                   <li><a href="/" className="text-gray-400 hover:text-secondary transition duration-300">Home</a></li>
//                   <li><a href="/about" className="text-gray-400 hover:text-secondary transition duration-300">About</a></li>
//                   <li><a href="/services" className="text-gray-400 hover:text-secondary transition duration-300">Services</a></li>
//                   <li><a href="/case-studies" className="text-gray-400 hover:text-secondary transition duration-300">Case Studies</a></li>
//                   <li><a href="/contact" className="text-gray-400 hover:text-secondary transition duration-300">Contact</a></li>
//                   <li><a href="/careers" className="text-gray-400 hover:text-secondary transition duration-300">Careers</a></li> {/* Career Link Added */}
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Contact</h3>
//                 <p className="text-gray-400">14 Adams Manuel Street,<br />Sabo, Yaba, Lagos</p>
//                 <p className="text-gray-400 mt-2">Phone: 07013004492</p>
//                 <p className="text-gray-400 mt-2">Email: info@rdas.com.ng</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
//                   <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
//                   <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 text-center">
//               <p>&copy; 2024 RDAS Solutions Limited. All Rights Reserved.</p>
//             </div>
//           </div>
//         </footer>
//   )
// }

// export default Footer
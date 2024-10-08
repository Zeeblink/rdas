import React from 'react';

const CareerPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Join the RDAS Team</h1>
          <p className="text-xl">Empowering businesses through innovative solutions. Join us and make a difference!</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Why Work With Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            At RDAS, we value creativity, collaboration, and a passion for technology. Be part of a dynamic team shaping the future of data and IT solutions for global businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-secondary mb-2">Innovation</h3>
              <p className="text-gray-600">Work on cutting-edge projects and solutions that push the boundaries of technology.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-secondary mb-2">Collaboration</h3>
              <p className="text-gray-600">Collaborate with a diverse team of experts who are leaders in their fields.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-secondary mb-2">Growth</h3>
              <p className="text-gray-600">Take your career to new heights with our training and development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-secondary">Front-End Developer</h3>
              <p className="text-gray-700 mt-2 mb-4">Location: Lagos, Nigeria | Full-time</p>
              <p className="text-gray-600 mb-4">
                We are looking for a talented front-end developer to join our team. You’ll work on responsive web apps, contribute to the overall design, and collaborate with our back-end team.
              </p>
              <a href="#" className="text-primary hover:underline">Read More & Apply →</a>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-secondary">Database Engineer</h3>
              <p className="text-gray-700 mt-2 mb-4">Location: Remote | Contract</p>
              <p className="text-gray-600 mb-4">
                Seeking a skilled Database Engineer to optimize and maintain our databases. Join us in ensuring our data solutions are top-notch.
              </p>
              <a href="#" className="text-primary hover:underline">Read More & Apply →</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-lg mb-6">If you don’t see a role that fits, we still want to hear from you! Reach out to us with your resume.</p>
          <a href="/contact" className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

export default CareerPage;

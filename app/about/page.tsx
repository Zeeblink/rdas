import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 md:pt-16 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About RDAS Solutions Limited</h1>
          <p className="text-xl">
            Your trusted partner for IT solutions, database management, and skills development.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">RDAS Solutions Limited</h2>
            <p className="text-gray-700">
              RDAS Solutions Limited is an IT company founded with the sole purpose of helping small and large-scale businesses manage their data without losing sight of their growth and development.
            </p>
            <h2 className="text-2xl font-bold text-secondary">RDAS Solutions Limited Academy</h2>
            <p className="text-gray-700">
              We operate an Academy that certifies individuals in IT soft skills such as Microsoft Word, Excel, PowerPoint, SSIS, SSRS, SSAS, Tableau, and PowerBI.
            </p>
            <h2 className="text-2xl font-bold text-secondary">Soft Skills Development</h2>
            <p className="text-gray-700">
              Through research, we discovered that many corporate and non-corporate workers underestimate the importance of soft skills, which can lead to inefficiency and ineffectiveness. We offer programs to bridge this gap.
            </p>
            <h2 className="text-2xl font-bold text-secondary">Relational Database Management</h2>
            <p className="text-gray-700">
              We specialize in Educational and Relational Database Management, working with technologies like Microsoft, Oracle, MSSQL, Azure, MySQL, PostgreSQL, and NoSQL databases such as MongoDB, Cassandra, Redis, and Neo4j.
            </p>
          </div>
          {/* Placeholder for Image */}
          <div className="bg-gray-300 h-64 md:h-96 rounded-lg shadow-md">
            {/* Placeholder for the image */}
            <p className="text-center pt-24 md:pt-40 text-gray-600">Image placeholder</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Data Analytics and Support</h2>
            <p className="text-gray-700">
              At RDAS Solutions Limited, we offer a wide range of services by combining innovative approaches, creative thinking, and a deep understanding of today&apos;s fast-moving technology landscape. Our services include Data Analytics, Database Support, Data Engineering, IT Training, and IT Engineering.
            </p>
            <h2 className="text-2xl font-bold text-primary">Our Skills</h2>
            <p className="text-gray-700">
              We specialize in Core Skills, Professionalism, and ICT Training Programs that are in high demand. We also offer comprehensive ICT training for entire office staff, ensuring they meet industry standards.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary">Technologies We Excel In</h2>
            <ul className="space-y-4">
              <li className="text-gray-700">Microsoft Office: <span className="font-bold">100%</span></li>
              <li className="text-gray-700">Oracle: <span className="font-bold">100%</span></li>
              <li className="text-gray-700">MSSQL: <span className="font-bold">100%</span></li>
              <li className="text-gray-700">Web Development: <span className="font-bold">100%</span></li>
              <li className="text-gray-700">Azure: <span className="font-bold">100%</span></li>
              <li className="text-gray-700">Database Management: <span className="font-bold">100%</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Info or Image Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Additional text or information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Why Choose Us?</h2>
            <p className="text-gray-700">
              RDAS Solutions Limited stands out for its dedication to professional training and high-end database solutions. Whether you&apos;re looking to improve your internal processes or gain certifications in sought-after technologies, we are here to provide top-tier services that align with the latest industry standards.
            </p>
          </div>
          {/* Placeholder for another image */}
          <div className="bg-gray-300 h-64 md:h-96 rounded-lg shadow-md">
            <p className="text-center pt-24 md:pt-40 text-gray-600">Image placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

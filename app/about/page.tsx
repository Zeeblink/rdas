import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { defaultMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About RDAS Solutions - Our Story & Mission | RDAS Solutions Limited',
  description: 'Learn about RDAS Solutions Limited, a leading IT solutions provider in Nigeria specializing in database management, IT training, and software development.',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'About RDAS Solutions - Our Story & Mission',
    description: 'Learn about RDAS Solutions Limited, a leading IT solutions provider in Nigeria.',
  }
};

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:pt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About RDAS Solutions Limited</h1>
          <p className="text-xl">
            Your trusted partner for IT solutions, database management, and skills development.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto space-y-6">
          <p className="text-gray-700 mb-14">
            RDAS Solutions Limited, formerly known as RDAS SOFTTECH, is an IT company founded solely for the main purpose of building data-driven solutions. These solutions manage engineering, hardware, and software systems to enable Small and Large Scale businesses to thrive in a data and AI-driven world. As an innovative IT company, RDAS Solutions Limited is dedicated to empowering businesses of all sizes to effectively manage their data while maintaining focus on growth and long-term development. By leveraging groundbreaking technologies, we deliver tailored solutions such as Data Migration, Database Support, Query Optimisation, Disaster Recovery, Data Security, Data modelling, Web Design, amongst others. These services ensure the efficiency, scalability, and sustainability of our clients, simplifying data management complexities so businesses can concentrate on achieving strategic objectives.
          </p>
          {/* history */} 
          <h2 className="text-3xl font-bold text-secondary">Our History</h2>
          <p className="text-gray-700 mb-14">
            Since its incorporation in 2016, RDAS Software Limited has partnered with a number of companies, offering database management services. Some of these companies and the services we rendered include: FBNQuest- Database Support, Query Optimisation, Disaster recovery, Data Security; Plexada System Integrators- Data Catalog, Data Visualization, Data Subscription, Data Access Through API, Customer Support, Data Modelling and all kinds of data related services; Heritage Bank- Data Migration process from an old legacy system to a new banking system; Nigerianmade.ng- Web Application Development; Flowers and Heart School- Web Application Development etc. RDAS Software Limited also specializes in Educational and Relational Database Management not limited to Microsoft, Oracle, MSSQL, Azure, My SQL, PostgreSQL and NoSQL databases like MongoDB, Cassandra, Redis and Neo4j. We offer a wide range of services by combining innovative approach, creative thinking and a full understanding of today&apos;s fast moving technological world, to market your services globally. These services include Data Analytics, Database support, Data Engineering, I.T training, and I.T Engineering.
          </p>
          {/* isalesbook */}
          <h2 className="text-2xl font-bold text-secondary">iSalesBook Software</h2>
          <p className="text-gray-700 mb-14">
          RDAS Software Limited is also the owner of iSalesBook, a flagship software solution designed to manage inventory, sales, suppliers, purchases, and stores for businesses. iSalesBook caters to various industries, including retail, manufacturing, healthcare, distributors, wholesalers, and e-commerce. It provides a comprehensive set of features to streamline and automate the supply chain and retail operations, such as automated inventory management, sales and purchase order tracking, supplier and store management, as well as advanced reporting and analytics. Designed to adapt to industry-specific workflows, iSalesBook offers customization options to meet unique requirements. Continuously updated and enhanced, the software ensures flexibility, ease of use, and cost-efficiency across the entire supply chain and production life cycle. This powerful tool serves as a digital counterpart to a traditional sales book, empowering businesses with cutting-edge inventory and sales management capabilities.          </p>
          <Link href={'https://isalesbook.com'} target='_blank' className='text-secondary underline'>iSalesBook.com</Link>

          <p className="text-gray-700">
            With a keen interest in Data, RDAS Software Limited aspires to be one of the leading IT companies in Africa. Our employment of experts with an ability for in-depth research would further aid our groundbreaking innovations in the field of data and AI. We aim to solve your problems, and this is what keeps us going; and most importantly, our unique selling point to you.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">What We Offer</h2>
            <p className="text-gray-700">
              RDAS Solutions Limited delivers tailored services such as Data Migration, Database Support, Query Optimization, Disaster Recovery, Data Security, Data Modeling, and Web Design. These services simplify data management complexities, allowing businesses to focus on strategic objectives.
            </p>
            
          </div>
          <Image src="/about2.png" alt="Company Image" width={500} height={500} className="hidden md:block" />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-primary py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary">Technologies We Excel In</h2>
            <ul className="space-y-4">
              <li>Microsoft Office: <span className="font-bold">100%</span></li>
              <li>Oracle: <span className="font-bold">100%</span></li>
              <li>MSSQL: <span className="font-bold">100%</span></li>
              <li>Web Development: <span className="font-bold">100%</span></li>
              <li>Azure: <span className="font-bold">100%</span></li>
              <li>Database Management: <span className="font-bold">100%</span></li>
            </ul>
          </div>
          {/* Mission Section */}
          <div className="text-center mt-14 md:mt-0 ">
            <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
            <p className="text-lg mt-4">
              Empowering businesses through innovative data solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-8 md:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary">Why Choose Us?</h2>
          <p className="text-gray-700 mt-4">
            RDAS Solutions Limited stands out for its dedication to professional training and high-end database solutions. Whether you&apos;re looking to improve your internal processes or gain certifications in sought-after technologies, we provide top-tier services that align with the latest industry standards.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

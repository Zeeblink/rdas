import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faGraduationCap, faDatabase, faCogs, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const ServicesShowcase = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions to meet your unique business needs and challenges.',
      icon: faLaptopCode,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'App Development',
        description: 'Building innovative mobile applications for iOS and Android platforms to engage your customers..',
        icon: faMobileAlt,
        image: 'https://images.pexels.com/photos/163184/instagram-cell-phone-tablet-device-163184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    {
      title: 'IT Training',
      description: 'Training programs in computer, network, and technology aim to develop tech-savvy individuals, equipping them to maximize their IT skills in any environment, whether corporate or non-corporate.',
      icon: faGraduationCap,
      image: 'https://images.pexels.com/photos/7792829/pexels-photo-7792829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Database Support',
      description: 'Database Support services that assist organizations in managing and maintaining their databases effectively.',
      icon: faDatabase,
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Data Engineering',
      description: 'Data Engineering services that make data more useful and accessible for consumers.',
      icon: faCogs,
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Data Analytics',
      description: 'Analyze raw data to make conclusions about information.',
      icon: faChartBar,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section className="py-20 bg-[#000033] text-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl text-start font-semibold text-secondary uppercase mb-2">WHAT WE DO</h2>
          <h3 className="text-4xl text-start font-bold mb-4">We help to build clients their dream projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-[#000033] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  layout="responsive"
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <FontAwesomeIcon icon={service.icon} className="text-secondary text-3xl mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-secondary hover:text-[#003366] transition-colors duration-300 inline-flex items-center"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-block bg-secondary text-white px-8 py-3 rounded-full hover:bg-[#003366] transition-colors duration-300 text-lg font-semibold"
          >
            EXPLORE SERVICES
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
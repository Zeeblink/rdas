'use client'
// import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import ClientMarquee from '../components/ClientMarquee';
import ServicesShowcase from '../components/ServicesShowcase';
import PortfolioShowcase from './Portfolio'
import Hero from './Hero'
import ContactSection from './ContactSection'
const Sections = () => {
    const clients = [
        { name: 'FBNQuest', logo: '/client-1.jpg' },
        { name: 'Plexada', logo: '/client-2.png' },
        { name: 'Heritage Bank', logo: '/client-3.png' },
        { name: 'Flowers and Heart School', logo: '/client-4.png' },
        // Add more clients as needed
    ];

    return (
        <>
            <Hero/>

            {/* Clients Section */}
            <section className="">
                <div className="container mx-auto">
                    {/* <motion.h2
                        className="text-4xl font-bold text-center text-primary mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Trusted Clients
                    </motion.h2> */}
                    <ClientMarquee clients={clients} />
                </div>
            </section>

            <ServicesShowcase />



            
            <PortfolioShowcase/>
            {/* About Us Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="md:w-1/2 mb-10 md:mb-0"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">Who We Are</h2>
                            <p className="text-lg text-white mb-6">
                                RDAS Solutions is a leading digital solutions company specializing in custom software development. We combine innovative approaches with creative thinking to deliver cutting-edge solutions that drive business growth and efficiency.
                            </p>
                            <p className="text-lg text-white mb-6">
                                Our team of expert developers and designers are committed to creating tailored software solutions that address the unique challenges of each client, ensuring measurable improvements in productivity and competitiveness.
                            </p>
                            <Link href="/about" passHref>
                                <motion.button
                                    className="bg-secondary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More About Us
                                </motion.button>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="md:w-1/2 md:pl-10"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Placeholder for company image */}
                            <Image src="/about2.png" alt="Company Image" width={500} height={500} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold text-center text-primary mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Why Choose RDAS Solutions?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Innovative Solutions</h3>
                            <p className="text-gray-600">We leverage cutting-edge technologies to deliver innovative and future-proof solutions.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Expert Team</h3>
                            <p className="text-gray-600">Our skilled professionals bring years of experience and expertise to every project.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Scalable Solutions</h3>
                            <p className="text-gray-600">Our solutions grow with your business, ensuring long-term success and efficiency.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactSection/>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-24 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-[url('/images/cta-pattern.svg')] opacity-10"></div>
                </motion.div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        With over <span className='text-secondary font-bold'>200</span> satisfied clients this year!
                    </motion.h2>
                    <motion.p
                        className="text-xl mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Rdas Solutions Limited specializes in Educational and Relational Database Management, offering a wide range of services by combining innovative approaches, creative thinking, and a full understanding of today&apos;s fast-moving technology world.
                    </motion.p>
                    <motion.button
                        className="bg-white text-secondary px-10 py-4 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg text-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request a Quote
                    </motion.button>
                </div>
            </section>


        </>
    )
}

export default Sections
















{/* Services Section */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold text-center text-primary mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our Digital Solutions
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Custom Software Development</h3>
                            <p className="text-gray-600 mb-4">Tailored software solutions to meet your unique business needs and challenges.</p>
                            <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Mobile App Development</h3>
                            <p className="text-gray-600 mb-4">Innovative mobile applications for iOS and Android platforms to engage your customers.</p>
                            <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
                        </motion.div>
                        <motion.div
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-secondary text-4xl mb-4">
                                <FontAwesomeIcon icon={faCloud} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary mb-4">Cloud Solutions</h3>
                            <p className="text-gray-600 mb-4">Scalable and secure cloud-based solutions to optimize your business operations.</p>
                            <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
                        </motion.div>
                    </div>
                </div>
            </section> */}

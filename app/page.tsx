import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRocket, faShieldAlt, faChartLine, faUsers, faGraduationCap, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RDAS Solutions Limited - Advanced Database Solutions',
  description: 'Empowering businesses through innovative database solutions.',
}

export default function Home() {
  return (
    <div className={`${inter.className} bg-gray-50`}>
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 animate-fadeIn">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Revolutionize Your Data Management
              </h1>
              <p className="text-lg sm:text-xl mb-6 md:mb-8">
                Empower your business with cutting-edge database solutions designed for the future.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 w-full sm:w-auto">
                  Explore Services
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-slideIn">
              <img
                src="/api/placeholder/600/400"
                alt="Database Illustration"
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Who We Are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              RDAS Solutions Limited operates an Academy which certifies individuals in IT Soft Skills such as Microsoft Word, Excel, PowerPoint, and more. Our mission is to enhance workplace efficiency and effectiveness through targeted skill development.
            </p>
            <p className="text-lg text-gray-700">
              Through extensive research, we've identified a critical gap in the corporate landscape: many workers, both in and out of traditional office settings, underestimate the importance of these essential soft skills. This oversight can lead to decreased productivity and missed opportunities for career advancement.
            </p>
            <p className="text-lg text-gray-700">
              At RDAS Solutions, we're committed to bridging this gap by providing top-tier training and certification programs that empower individuals to excel in their roles and drive organizational success.
            </p>
            <Link href="/about" passHref>
              <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 transform hover:scale-105 mt-4">
                Learn More About Us
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled instructors with industry experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Certifications</h3>
              <p className="text-gray-600">Recognized qualifications to boost your career</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Tailored Training</h3>
              <p className="text-gray-600">Customized programs to meet your needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FontAwesomeIcon icon={faChartLine} className="text-4xl text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Proven Results</h3>
              <p className="text-gray-600">Measurable improvements in workplace efficiency</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Choose RDAS Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-secondary text-4xl mb-4">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Cutting-edge Technology</h3>
              <p className="text-gray-600">Leverage the latest in database technology to stay ahead of the competition.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-secondary text-4xl mb-4">
                <FontAwesomeIcon icon={faShieldAlt} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Robust Security</h3>
              <p className="text-gray-600">Protect your valuable data with our state-of-the-art security measures.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-secondary text-4xl mb-4">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">Grow your database capabilities in tandem with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Database Management</h3>
              <p className="text-gray-600 mb-4">Optimize your database performance with our expert management services.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-chart-pie"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Data Analytics</h3>
              <p className="text-gray-600 mb-4">Uncover insights and drive decisions with powerful data analysis tools.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Database Support</h3>
              <p className="text-gray-600 mb-4">Database Support services that assist organizations in managing and maintaining their databases effectively.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Build robust data infrastructures that scale with your business needs.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">ICT Training</h3>
              <p className="text-gray-600 mb-4">Computer, network, and technological training programs. Aimed at forming tech savvy individuals, preparing them to efficiently maximize their IT skills in whatever environment (corporate or non-corporate) they find themselves.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            Testimonial items
            ... (similar structure as before, omitted for brevity)
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Database Solutions?</h2>
          <p className="text-xl mb-8">Join over 200 satisfied clients and transform your data strategy today!</p>
          <button className="bg-white text-secondary px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">Schedule a Consultation</button>
        </div>
      </section>
    </div >
  )
}
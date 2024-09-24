import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faRocket, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RDAS Solutions Limited - Advanced Database Solutions',
  description: 'Empowering businesses through innovative database solutions.',
}

export default function Home() {
  return (
    <div className={`${inter.className} bg-gray-50`}>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-blue-800 text-white">
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
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">Build robust data infrastructures that scale with your business needs.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-cloud"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Cloud Integration</h3>
              <p className="text-gray-600 mb-4">Seamlessly integrate your databases with leading cloud platforms.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Data Security</h3>
              <p className="text-gray-600 mb-4">Implement robust security measures to protect your valuable data assets.</p>
              <a href="#" className="text-secondary hover:text-primary transition duration-300">Learn more →</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Training & Support</h3>
              <p className="text-gray-600 mb-4">Comprehensive training and ongoing support for your team.</p>
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
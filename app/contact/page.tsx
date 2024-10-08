"use client"
import ContactForm from '../components/ContactForm';
const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
  {/* Hero Section */}
  <section className="bg-primary text-white py-16">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 md:text-5xl">Get in Touch with Us</h1>
      <p className="text-xl md:text-2xl">We&apos;re here to help. Reach out with any questions or inquiries.</p>
    </div>
  </section>

  {/* Contact Information Section */}
  <section className="py-16">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-secondary mb-2">Address</h3>
        <p className="text-gray-600">
          14 Adams Manuel Street,<br />
          Sabo, Yaba, Lagos, Nigeria
        </p>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-secondary mb-2">Phone</h3>
        <p className="text-gray-600">+234 701 300 4492</p>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-secondary mb-2">Email</h3>
        <p className="text-gray-600">info@rdas.com.ng</p>
      </div>
    </div>
  </section>
    
  {/* Contact Form Section */}
  <section className="bg-white py-16">
    {/* <div className="container mx-auto max-w-lg md:max-w-2xl px-4 sm:px-6 lg:px-8"> */}
      <h2 className="text-4xl font-bold text-primary text-center mb-12">Have a Project in Mind? We&apos;re Here to Help!</h2>
    {/* </div> */}
    <ContactForm/>
  </section>

  {/* Map Section */}
  <section className="py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Location</h2>
      <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.6255872786643!2d3.3705380163674355!3d6.517047693237738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3a2dc87cc9%3A0xc5c23f02f8490328!2sSabo%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1601313434901!5m2!1sen!2sng"
          allowFullScreen
          loading="lazy"
          title="RDAS Solutions Location"
        ></iframe>
      </div>
    </div>
  </section>
</div>

  );
};

export default ContactPage;



















{/* <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            value={formFields.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            value={formFields.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            value={formFields.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form> */}
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="overflow-hidden pb-10 lg:pb-0 bg-cover bg-center w-full hero-bg" style={{ backgroundImage: "url('/background.png')" }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Image Content */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <div className="relative">
                            <Image
                                src="/hero-image.png"
                                alt="Digital Transformation"
                                layout="responsive" // Adjust layout as needed
                                width={500} // Set appropriate width
                                height={300} // Set appropriate height
                                className=""
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                        <h1 className="text-3xl text-center md:text-start md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#003366] leading-tight mb-4">
                            Empowering Your{' '}
                            <span className="text-orange-500">Digital</span>{' '}
                            Transformation
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 mb-6 text-center md:text-left max-w-lg">
                            We provide cutting-edge software solutions to drive innovation
                            and success in your business.
                        </p>
                        <Link className="bg-[#003366] text-white px-6 py-2 rounded text-base md:text-lg font-semibold hover:bg-opacity-90 transition-colors scroll-smooth"
                            href="#consultation">
                            Schedule a Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;


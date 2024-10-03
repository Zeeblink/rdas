import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="overflow-hidden h-screen bg-cover bg-center w-full hero-bg" style={{ backgroundImage: "url('/background.png')" }}>
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
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003366] leading-tight mb-6">
                    Empowering Your{' '}
                    <span className="text-orange-500">Digital</span>{' '}
                    Transformation
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                    We provide cutting-edge software solutions to drive innovation
                    and success in your business.
                </p>
                <button className="bg-[#003366] text-white px-8 py-3 rounded text-lg font-semibold hover:bg-opacity-90 transition-colors">
                    Explore Our Services
                </button>
            </div>
        </div>
    </div>
</section>
    )
}

export default Hero;


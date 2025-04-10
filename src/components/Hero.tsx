import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0F0B45] overflow-hidden">
      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="particles-network"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Optimized Network Infrastructure
          <br />
          Engineered for High-Speed Performance
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8">
          Boost Your Network
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-3 bg-[#09273F] text-white rounded-full hover:bg-opacity-90 transition-colors text-lg font-semibold"
          >
            Connect with us today!
          </a>
          <a
            href="/about"
            className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0F0B45] transition-colors text-lg font-semibold"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Stats Container */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 py-8 px-4">
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm uppercase tracking-wider">Clients</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-sm uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">3+</div>
            <div className="text-sm uppercase tracking-wider">Years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
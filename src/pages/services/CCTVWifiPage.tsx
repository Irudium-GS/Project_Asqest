import React from 'react';
import PageBanner from '../../components/PageBanner';

const CCTVWifiPage = () => {
  return (
    <div>
      <PageBanner title="CCTV / WIFI Access" path="Services / CCTV & WIFI Access" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
                Advanced Security Solutions for Every Sector
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ali Saleh Al Qahthani is a leading provider of cutting-edge security solutions, committed to delivering unparalleled protection across various sectors, including banks, educational institutions, hotels, restaurants, government buildings, and transportation hubs.
              </p>
              <p className="text-lg text-gray-600">
                Our extensive portfolio of surveillance products includes state-of-the-art network IP cameras and traditional analog CCTV systems, all designed for seamless integration and optimal performance. Whether you require comprehensive monitoring for high-security areas or scalable solutions for growing businesses, our offerings are tailored to meet your specific needs.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c7de6c4?auto=format&fit=crop&q=80&w=800"
                alt="Security Camera System"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-lg mb-16">
            <p className="text-lg text-gray-600">
              We pride ourselves on delivering innovative surveillance technology that ensures safety, efficiency, and peace of mind. With a focus on quality and reliability, Ali Saleh Al Qahthani stands out as a trusted partner in the field of security services.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">IP Camera Systems</h3>
              <p className="text-gray-600">Latest technology in network-based surveillance with high resolution and remote access capabilities.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">Access Control</h3>
              <p className="text-gray-600">Advanced access management systems for secure entry and exit monitoring.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">WiFi Solutions</h3>
              <p className="text-gray-600">Enterprise-grade wireless networks with comprehensive coverage and security.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
            >
              Contact Us for Security Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCTVWifiPage;
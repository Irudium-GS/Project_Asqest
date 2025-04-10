import React from 'react';
import PageBanner from '../../components/PageBanner';

const AnnualMaintenancePage = () => {
  const services = [
    {
      title: 'Preventive Maintenance',
      description: 'Regular system checks and updates to prevent potential issues before they occur.',
    },
    {
      title: 'Emergency Support',
      description: '24/7 emergency response team for critical system issues.',
    },
    {
      title: 'System Optimization',
      description: 'Regular performance tuning and optimization of your security systems.',
    },
    {
      title: 'Technical Support',
      description: 'Dedicated technical support team for all your maintenance needs.',
    },
  ];

  return (
    <div>
      <PageBanner title="Annual Maintenance Service" path="Services / Annual Maintenance" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
                Comprehensive Annual Maintenance Solutions
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
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
                alt="Maintenance Service"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-lg mb-16">
            <p className="text-lg text-gray-600">
              We pride ourselves on delivering innovative surveillance technology that ensures safety, efficiency, and peace of mind. With a focus on quality and reliability, Ali Saleh Al Qahthani stands out as a trusted partner in the field of security services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#0F0B45] mb-8">Benefits of Annual Maintenance</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-600">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Reduced system downtime
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Improved system reliability
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Cost-effective maintenance
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Extended system lifespan
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
            >
              Get Annual Maintenance Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenancePage;
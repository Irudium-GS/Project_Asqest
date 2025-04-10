import React from 'react';
import PageBanner from '../../components/PageBanner';

const PlumbingServicePage = () => {
  const services = [
    {
      title: 'Leak Detection and Repair',
      description: 'Quickly address leaks to prevent water damage with our expert services:',
      items: [
        'Advanced leak detection technology',
        'Repair of pipe leaks, fixture leaks, and slab leaks',
        'Waterproofing and preventive measures',
        'Inspection and maintenance to prevent future leaks',
      ],
    },
    {
      title: 'Drain Cleaning and Unclogging',
      description: 'Ensure your drains are clear and functional with our professional cleaning services:',
      items: [
        'High-pressure water jetting',
        'Mechanical snaking and rooter services',
        'Removal of blockages and buildup',
        'Preventative maintenance plans to keep drains flowing smoothly',
      ],
    },
    {
      title: 'Water Heater Services',
      description: 'Maintain a steady supply of hot water with our comprehensive water heater services:',
      items: [
        'Installation of new water heaters (tank and tankless)',
        'Repair and maintenance of existing units',
        'Flushing and descaling services',
        'Energy-efficient upgrades and advice',
      ],
    },
    {
      title: 'Fixture Installation and Repair',
      description: 'Upgrade and maintain your plumbing fixtures with our reliable services:',
      items: [
        'Installation of sinks, faucets, toilets, and showers',
        'Repair and replacement of broken or outdated fixtures',
        'Assistance with selecting energy-efficient and stylish fixtures',
        'Installation of water filtration systems',
      ],
    },
    {
      title: 'Pipe Installation and Repair',
      description: 'Ensure a reliable water supply and waste removal system with our pipe services:',
      items: [
        'Installation of new plumbing systems for renovations and new constructions',
        'Repair and replacement of damaged or corroded pipes',
        'Repiping services for older properties',
        'Trenchless pipe repair options',
      ],
    },
    {
      title: 'Emergency Plumbing Services',
      description: 'Get prompt and efficient solutions for urgent plumbing issues with our 24/7 emergency services:',
      items: [
        'Immediate response to plumbing emergencies',
        'Quick and effective repairs to minimize damage',
        'Comprehensive solutions for all types of plumbing emergencies',
        'Preventive advice to avoid future emergencies',
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Plumbers',
      description: 'Our team consists of licensed, insured, and highly trained plumbers with extensive experience in all areas of plumbing.',
    },
    {
      title: 'Quality Workmanship',
      description: 'We pride ourselves on delivering high-quality workmanship using the best materials and latest techniques.',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We provide transparent pricing, clear communication, and exceptional customer service.',
    },
    {
      title: 'Fast and Reliable Service',
      description: 'We offer prompt and reliable service, ensuring that your plumbing issues are resolved quickly and efficiently.',
    },
  ];

  return (
    <div>
      <PageBanner title="Plumbing Service" path="Maintenance Services / Plumbing Service" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Plumbing Service
            </h2>
            <p className="text-lg text-gray-600">
              Ali saleh Al Qahthani , your trusted provider of comprehensive plumbing services. Our experienced and certified plumbers are dedicated to delivering top-quality solutions for all your plumbing needs, ensuring your systems run smoothly and efficiently.
            </p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-[#0F0B45] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#0F0B45] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlumbingServicePage;
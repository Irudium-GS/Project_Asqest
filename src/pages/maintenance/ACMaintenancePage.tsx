import React from 'react';
import PageBanner from '../../components/PageBanner';
import { Wrench, Shield, PenTool as Tool, Settings } from 'lucide-react';

const ACMaintenancePage = () => {
  const services = [
    {
      title: 'Routine Maintenance',
      items: [
        'Inspecting and cleaning filters',
        'Checking refrigerant levels',
        'Lubricating moving parts',
        'Inspecting electrical connections',
        'Assessing thermostat performance',
      ],
    },
    {
      title: 'AC Repair',
      items: [
        '24/7 emergency repair services',
        'Diagnosis and troubleshooting of issues',
        'Replacement of faulty components',
        'System performance testing',
      ],
    },
    {
      title: 'System Upgrades and Replacement',
      items: [
        'Expert advice on new energy-efficient models',
        'Professional installation services',
        'Removal and disposal of old units',
      ],
    },
    {
      title: 'Preventative Maintenance Plans',
      items: [
        'Scheduled maintenance visits',
        'Priority service scheduling',
        'Discounts on repairs and parts',
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: <Wrench className="w-8 h-8 text-[#0F0B45]" />,
      title: 'Experienced Technicians',
      description: 'Our certified professionals have extensive experience in handling all types of AC systems.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#0F0B45]" />,
      title: 'Quality Service',
      description: 'We use high-quality parts and follow industry best practices.',
    },
    {
      icon: <Tool className="w-8 h-8 text-[#0F0B45]" />,
      title: 'Customer Satisfaction',
      description: 'We prioritize your comfort and satisfaction with transparent pricing and excellent service.',
    },
    {
      icon: <Settings className="w-8 h-8 text-[#0F0B45]" />,
      title: 'Emergency Support',
      description: 'Our 24/7 emergency service ensures we are there when you need us most.',
    },
  ];

  return (
    <div>
      <PageBanner title="AC Maintenance" path="Maintenance Services / AC Maintenance" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Air Conditioning Maintenance and Repair Service
            </h2>
            <p className="text-lg text-gray-600">
              Ali Saleh Al Qahthani, your trusted partner for comprehensive air conditioning maintenance and repair services. Our team of certified technicians is dedicated to ensuring your AC units operate efficiently and reliably all year round.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">{service.title}</h3>
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
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F0B45] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
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
              Schedule Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACMaintenancePage;
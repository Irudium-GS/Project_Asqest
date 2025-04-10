import React from 'react';
import PageBanner from '../../components/PageBanner';
import { Zap, PenTool as Tool, Shield, Clock } from 'lucide-react';

const ElectricalMaintenancePage = () => {
  const services = [
    {
      title: 'Regular Inspection and Testing',
      items: [
        'Regular inspections and testing',
        'Repairing faulty wiring and components',
        'Upgrading electrical panels',
        'Emergency electrical repairs',
        'Lighting maintenance and upgrades',
      ],
    },
    {
      title: 'Safety Compliance',
      items: [
        'Electrical safety audits',
        'Code compliance inspections',
        'Safety equipment testing',
        'Emergency lighting systems',
        'Circuit breaker maintenance',
      ],
    },
    {
      title: 'System Upgrades',
      items: [
        'Panel upgrades and replacements',
        'Energy-efficient lighting solutions',
        'Smart electrical systems',
        'Power factor correction',
        'Surge protection installation',
      ],
    },
    {
      title: 'Emergency Services',
      items: [
        '24/7 emergency response',
        'Power outage troubleshooting',
        'Circuit overload resolution',
        'Emergency repairs',
        'Temporary power solutions',
      ],
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Expert Technicians',
      description: 'Licensed and experienced electrical professionals',
    },
    {
      icon: <Tool className="w-8 h-8 text-white" />,
      title: 'Quality Equipment',
      description: 'Using the latest tools and technology',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Safety First',
      description: 'Strict adherence to safety protocols',
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: '24/7 Service',
      description: 'Round-the-clock emergency support',
    },
  ];

  return (
    <div>
      <PageBanner title="Electrical Maintenance" path="Maintenance Services / Electrical Maintenance" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Professional Electrical Maintenance Services
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ensure your building's electrical systems are safe and reliable with our electrical maintenance services. Our team of certified electricians provides comprehensive electrical solutions for commercial and industrial properties.
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

          {/* Features Section */}
          <div className="bg-[#0F0B45] text-white rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8">Our Service Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
            >
              Request Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalMaintenancePage;
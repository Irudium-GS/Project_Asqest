import React from 'react';
import PageBanner from '../../components/PageBanner';

const CommercialBuildingPage = () => {
  const services = [
    {
      title: 'HVAC Maintenance',
      items: [
        'Routine inspections and maintenance',
        'Filter replacements and cleaning',
        'System diagnostics and repairs',
        'Energy efficiency assessments',
        'Seasonal tune-ups',
      ],
    },
    {
      title: 'Electrical Maintenance',
      items: [
        'Regular inspections and testing',
        'Repairing faulty wiring and components',
        'Upgrading electrical panels',
        'Emergency electrical repairs',
        'Lighting maintenance and upgrades',
      ],
    },
    {
      title: 'Plumbing Services',
      items: [
        'Routine inspections and maintenance',
        'Leak detection and repair',
        'Drain cleaning and unclogging',
        'Water heater maintenance and repair',
        'Fixture installations and replacements',
      ],
    },
    {
      title: 'General Building Maintenance',
      items: [
        'Interior and exterior repairs',
        'Painting and decorating',
        'Carpentry and structural repairs',
        'Floor maintenance and repairs',
        'Window and door maintenance',
      ],
    },
    {
      title: 'Janitorial Services',
      items: [
        'Daily, weekly, or monthly cleaning schedules',
        'Office and common area cleaning',
        'Restroom sanitation',
        'Waste removal and recycling',
        'Floor care and carpet cleaning',
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Team',
      description: 'Our team of professionals has extensive experience in commercial building maintenance, ensuring high-quality service and reliable results.',
    },
    {
      title: 'Comprehensive Solutions',
      description: 'We offer a wide range of services to meet all your building maintenance needs, from HVAC and electrical to plumbing and general repairs.',
    },
    {
      title: 'Customized Plans',
      description: 'We create maintenance plans tailored to your specific requirements and budget, providing efficient and cost-effective solutions.',
    },
    {
      title: '24/7 Emergency Support',
      description: 'Our team is available around the clock to handle any emergency maintenance issues that arise, minimizing downtime and disruption.',
    },
  ];

  return (
    <div>
      <PageBanner title="Commercial Building Maintenance" path="Maintenance Services / Commercial Building" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Commercial Building Maintenance
            </h2>
            <p className="text-lg text-gray-600">
              Ali Saleh Al Qahthani, your reliable partner in comprehensive commercial building maintenance. Our skilled team is dedicated to ensuring your commercial property remains in excellent condition, providing a safe and comfortable environment for your tenants and customers.
            </p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              Get Maintenance Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialBuildingPage;
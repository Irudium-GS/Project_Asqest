import React from 'react';
import PageBanner from '../components/PageBanner';
import { Wrench, Zap, Building2, Paintbrush, Droplet } from 'lucide-react';

const MaintenancePage = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-[#0F0B45]" />,
      title: 'AC Maintenance',
      description: 'Professional AC maintenance services to keep your cooling systems running efficiently.',
    },
    {
      icon: <Zap className="w-12 h-12 text-[#0F0B45]" />,
      title: 'Electrical Maintenance',
      description: 'Expert electrical maintenance and repair services for your property.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#0F0B45]" />,
      title: 'Commercial Building Maintenance',
      description: 'Comprehensive maintenance solutions for commercial properties.',
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-[#0F0B45]" />,
      title: 'Painting and Decorating Service',
      description: 'Professional painting and decorating services to enhance your space.',
    },
    {
      icon: <Droplet className="w-12 h-12 text-[#0F0B45]" />,
      title: 'Plumbing Service',
      description: 'Reliable plumbing services for all your maintenance needs.',
    },
  ];

  return (
    <div>
      <PageBanner title="Maintenance Services" path="Maintenance Services" />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-6">All Maintenance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your one-stop solution for all maintenance needs: From minor repairs to major overhauls, 
              we provide a wide array of maintenance services to keep your property running smoothly 
              and efficiently, saving you time and hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center text-[#0F0B45] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={`/maintenance/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-block px-6 py-2 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
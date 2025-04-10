import React from 'react';
import { Network, Wifi, Shield, Cable } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-[#0F0B45]" />,
      title: 'AMC SERVICE',
      description: "Stay worry-free with ASQEST's Annual Maintenance Service. Our expert IT team ensures smooth operation of your infrastructure.",
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: <Wifi className="w-12 h-12 text-[#0F0B45]" />,
      title: 'CCTV/ACCESS/WIFI',
      description: "From CCTV to access control and WiFi solutions, we ensure quality and reliability for diverse applications, including banks and libraries.",
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: <Network className="w-12 h-12 text-[#0F0B45]" />,
      title: 'NETWORK CONSULTING',
      description: "Experienced networking consultants specialize in delivering tailored solutions for achieving unparalleled network performance and reliability.",
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8b?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: <Cable className="w-12 h-12 text-[#0F0B45]" />,
      title: 'STRUCTURED CABLING',
      description: "We specialize in providing expert structured cabling services to ensure seamless connectivity and consistently reliable network performance.",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0F0B45] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-[#0F0B45] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block px-6 py-2 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
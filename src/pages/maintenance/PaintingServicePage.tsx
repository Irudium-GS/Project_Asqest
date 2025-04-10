import React from 'react';
import PageBanner from '../../components/PageBanner';

const PaintingServicePage = () => {
  const services = [
    {
      title: 'Interior Painting',
      items: [
        'Wall painting and finishing',
        'Ceiling painting',
        'Trim and molding painting',
        'Cabinet painting and refinishing',
        'Wallpaper removal and installation',
      ],
    },
    {
      title: 'Exterior Painting',
      items: [
        'Building exterior painting',
        'Door and window frame painting',
        'Deck and fence staining',
        'Weather-resistant coatings',
        'Pressure washing services',
      ],
    },
    {
      title: 'Decorative Finishes',
      items: [
        'Faux finishing techniques',
        'Textured wall finishes',
        'Decorative trim work',
        'Custom color matching',
        'Accent wall design',
      ],
    },
    {
      title: 'Surface Preparation',
      items: [
        'Wall repair and patching',
        'Surface cleaning and sanding',
        'Primer application',
        'Caulking and sealing',
        'Rust and mold treatment',
      ],
    },
  ];

  const features = [
    {
      title: 'Professional Team',
      description: 'Experienced painters with attention to detail',
    },
    {
      title: 'Quality Materials',
      description: 'Premium paints and materials for lasting results',
    },
    {
      title: 'Clean Work Environment',
      description: 'Thorough protection of your property and cleanup',
    },
    {
      title: 'Timely Completion',
      description: 'Efficient service with minimal disruption',
    },
  ];

  return (
    <div>
      <PageBanner title="Painting and Decorating Service" path="Maintenance Services / Painting Service" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Professional Painting and Decorating Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your space with our professional painting and decorating services. We provide high-quality painting solutions for both interior and exterior projects, ensuring beautiful and long-lasting results.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
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
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingServicePage;
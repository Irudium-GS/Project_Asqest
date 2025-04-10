import React from 'react';
import PageBanner from '../../components/PageBanner';

const WebsitePage = () => {
  const ecommerceFeatures = [
    'Seamless Online Stores: We specialize in creating user-friendly e-commerce platforms that drive sales and enhance customer experiences',
    'Secure Payment Integration: Our team ensures robust payment gateways to safeguard transactions and build trust with customers',
    'Dynamic Product Listings: We design intuitive product catalogs that showcase your offerings and facilitate easy navigation',
  ];

  const businessFeatures = [
    'Professional Online Presence: We deliver sleek and professional websites that represent your brand identity and values effectively',
    'User-Centric Design: Our focus on usability ensures that visitors can easily find information and engage with your business',
    'Scalable Solutions: Whether you\'re a startup or a large enterprise, we provide scalable website solutions to support your growth journey',
  ];

  const technologies = [
    {
      name: 'Shopify',
      image: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
    },
    {
      name: 'Wix',
      image: 'https://cdn.worldvectorlogo.com/logos/wix.svg',
    },
    {
      name: 'Google Sites',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Sites_2020_Logo.svg',
    },
    {
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'WordPress',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
    },
    {
      name: 'Squarespace',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Squarespace_Logo.svg',
    },
    {
      name: 'HTML5',
      image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    },
    {
      name: 'CSS3',
      image: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    },
  ];

  return (
    <div>
      <PageBanner title="Website Development" path="Digital Marketing / Create Your Website" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-6">
              Ali Saleh Al Qahthani - Website Development Expertise
            </h2>
            <p className="text-lg text-gray-600">
              At Ali Saleh Al Qahthani, we excel in crafting bespoke websites tailored for success in both e-commerce and business realms. Our expertise shines in the following areas:
            </p>
          </div>

          {/* E-commerce Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0F0B45] mb-8">E-commerce Website Development</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
                  alt="E-commerce Development"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#0F0B45] mb-6">e-commerce website experts</h4>
                <ul className="space-y-4">
                  {ecommerceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0F0B45] mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
              >
                Create Store Now
              </a>
            </div>
          </div>

          {/* Business Website Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0F0B45] mb-8">Business Website Development</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-xl font-semibold text-[#0F0B45] mb-6">
                  Transform Your Business Online: Expert Website Development
                </h4>
                <ul className="space-y-4">
                  {businessFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0F0B45] mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Business Website Development"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F0B45] text-center mb-12">Technologies We Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-[#0F0B45] text-white rounded-full hover:bg-[#09273F] transition-colors text-lg font-semibold"
              >
                Let's Chat Now
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-[#0F0B45] text-[#0F0B45] rounded-full hover:bg-[#0F0B45] hover:text-white transition-colors text-lg font-semibold"
              >
                Mail Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitePage;
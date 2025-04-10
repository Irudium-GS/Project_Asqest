import React from 'react';
import PageBanner from '../../components/PageBanner';

const NetworkConsultingPage = () => {
  const capabilities = [
    {
      title: 'Network Planning',
      description: 'We assist in achieving your business goals by offering business case modeling, thorough network design, technology evaluation, and the creation of a detailed network and future roadmap.',
    },
    {
      title: 'Network Design',
      description: 'We conduct meticulous system design, assess capacity, and develop comprehensive planning strategies to ensure optimal performance and scalability.',
    },
    {
      title: 'Network Implementation',
      description: 'We aid in network deployment by configuring networks, optimizing parameter settings, and thoroughly testing standalone network elements. Our expertise extends to integrating network elements across multiple systems, culminating in network acceptance and comprehensive end-to-end testing to ensure seamless functionality.',
    },
    {
      title: 'Network Operation',
      description: 'We provide Level 1, Level 2, and Tier 3 support, offering both onsite and remote personnel to address your network needs. Our network consulting services prioritize your requirements, objectives, and budget. We conduct thorough needs assessments to understand your goals, designing customized plans that align with your objectives and financial constraints.',
    },
  ];

  return (
    <div>
      <PageBanner title="Network Consulting" path="Services / Network Consulting" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <div className="mb-16">
            <p className="text-lg text-gray-600 mb-8">
              We provide a single-source solution, supporting a wide range of networking devices including routers, switches, and firewalls from leading manufacturers. Our network consulting services start with you—your needs, objectives, and budget.
            </p>
            <p className="text-lg text-gray-600">
              Ali-Saleh Al-Qahthani's experts take the time to understand your goals through a thorough needs assessment. During our site visits, we collaborate closely with your onsite staff, ensuring open communication and courteous interactions. We then design a plan that aligns with your objectives and fits within your budget, delivering tailored solutions that meet your specific requirements.
            </p>
          </div>

          {/* IT Support Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#0F0B45] mb-6">
              IT Support for Businesses by Ali-Saleh Al-Qahthani
            </h2>
            <p className="text-lg text-gray-600">
              Experience the benefits of regular IT checks for your business or subscribe to a support contract. With our support specialists on standby, Ali-Saleh Al-Qahthani ensures prompt troubleshooting for all your IT and connectivity issues, keeping your operations running smoothly.
            </p>
          </div>

          {/* IT Check Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#0F0B45] mb-6">IT Check</h2>
            <p className="text-lg text-gray-600">
              Ali-Saleh Al-Qahthani offers scheduled IT maintenance checks, so you don't have to wait for problems to arise before seeking help. Our IT support specialists conduct comprehensive system checks, either remotely via web support or on-site, ensuring your systems are always in optimal condition.
            </p>
          </div>

          {/* Capabilities Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0B45] mb-12">Capabilities</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our Network Consulting and Integration Services provide comprehensive network life cycle management for carrier networks, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
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
              CCTV / WIFI Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkConsultingPage;
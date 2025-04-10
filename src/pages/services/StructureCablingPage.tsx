import React from 'react';
import PageBanner from '../../components/PageBanner';

const StructureCablingPage = () => {
  const cableTypes = [
    {
      title: 'Overhead Tray',
      description: 'Cables are routed above the ceiling using overhead trays, which are suspended from the ceiling. This method keeps cables organized and easily accessible for maintenance, reducing clutter and potential damage.',
    },
    {
      title: 'Below False Floor Tray',
      description: 'Cables are placed beneath raised floors using trays specifically designed for this purpose. This approach is often used in data centers and offices, keeping cables out of sight while providing easy access for adjustments and repairs.',
    },
    {
      title: 'Trenches',
      description: 'Cables are routed through trenches that are cut into the floor. This method is typically used in industrial environments or large facilities, protecting cables from physical damage while maintaining a clean appearance.',
    },
    {
      title: 'Raceways',
      description: 'Cables are enclosed in raceways, which are mounted to walls, floors, or ceilings. Raceways provide a protective, organized pathway for cables and can be easily accessed for upgrades or maintenance, making them suitable for a variety of settings.',
    },
  ];

  return (
    <div>
      <PageBanner title="Structure Cabling" path="Services / Structure Cabling" />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Comprehensive Network Cabling Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Businesses aiming for growth require robust and adaptable voice and data networks. These networks must be scalable and flexible to accommodate future expansion. Ali-Saleh Al-Qahthani specializes in providing top-tier network cabling solutions for companies of all sizes, including enterprises with extensive networks spanning hundreds or thousands of locations. Our expertise ensures that we adhere to the latest standards, best practices, and technological advancements in cabling and communications. This commitment guarantees reliable and efficient results for our clients.
            </p>
          </div>

          {/* Fiber Optic Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-8">
              Reliable Fiber Optic Cabling Solutions for Modern Communications
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              For superior communication quality in everything from voice and video to high-speed internet access, fiber optic cabling is the go-to solution. Installing or upgrading a fiber optic system requires specialized expertise to ensure a communications infrastructure that is both scalable and reliable. Ali-Saleh Al-Qahthani has delivered fiber optic cabling services to hundreds of companies across various industries, addressing their current needs while preparing them for future opportunities. Our team receives ongoing training to stay updated on the latest fiber optic technologies and the evolving communication needs of different industries and applications.
            </p>
            <p className="text-lg text-gray-600">
              If you need to provide wireless coverage on your premises, troubleshoot existing wireless networks, or need guidance on whether wireless is the right choice for you and how to address security concerns, we are here to help with all your wireless needs.
            </p>
          </div>

          {/* Cable Routing Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-12">Types of Cable Routing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cableTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
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
              Chat Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructureCablingPage;
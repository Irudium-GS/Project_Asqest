import React from 'react';
import { Network } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F0B45] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Network size={32} />
              <span className="text-2xl font-bold">ASQ</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">
              Ali Saleh Al Qahthani provides customers with sophisticated network solutions. 
              These include IP telephony and complex new technology to large corporate and public sector organizations throughout Saudi Arabia and the broader region. 
              </p>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Office Address:</h3>
                <p className="text-gray-300">ALI SALEH AL-QAHTHANI TRADING EST.</p>
                <p className="text-gray-300">Dhahran - Doha Area - Abdullah Bin Al Abbas St.</p>
                <p className="text-gray-300">Near of Al-Gossaibi Mosque - Kingdom of Saudi Arabia</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/structure-cabling" className="hover:text-gray-300">Structure Cabling</a></li>
              <li><a href="/services/network-consulting" className="hover:text-gray-300">Network Consulting</a></li>
              <li><a href="/services/cctv-wifi" className="hover:text-gray-300">CCTV / WIFI Access</a></li>
              <li><a href="/maintenance" className="hover:text-gray-300">Maintenance Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Enquiry Now</h3>
            <ul className="space-y-2">
              <li>Chat: +966 56134 6255</li>
              <li>For Business: jalal@asqest.com</li>
              <li>For Sales: ibrahim@asqest.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ASQ Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
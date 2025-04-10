import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  {
    title: 'Our Services',
    href: '/services',
    dropdownItems: [
      { title: 'Structure Cabling', href: '/services/structure-cabling' },
      { title: 'Network Consulting', href: '/services/network-consulting' },
      { title: 'CCTV / WIFI Access', href: '/services/cctv-wifi' },
      { title: 'Annual Maintenance', href: '/services/annual-maintenance' },
    ],
  },
  {
    title: 'Maintenance Services',
    href: '/maintenance',
    dropdownItems: [
      { title: 'AC Maintenance', href: '/maintenance/ac-maintenance' },
      { title: 'Electrical Maintenance', href: '/maintenance/electrical-maintenance' },
      { title: 'Commercial Building Maintenance', href: '/maintenance/commercial-building' },
      { title: 'Painting and Decorating Service', href: '/maintenance/painting-service' },
      { title: 'Plumbing Service', href: '/maintenance/plumbing-service' },
    ],
  },
  {
    title: 'Digital Marketing',
    href: '/digital-marketing',
    dropdownItems: [
      { title: 'Create Your Website', href: '/digital-marketing/website' },
    ],
  },
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <nav className="bg-[#0F0B45] text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold">
                ASQ
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href}
                    className="px-3 py-2 hover:text-gray-300 transition-colors"
                  >
                    {item.title}
                  </a>
                  {item.dropdownItems && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-[#09273F] rounded-full transition-colors"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-[#09273F] rounded-full transition-colors mr-2"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-[#09273F] transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.title}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#09273F] transition-colors"
                  >
                    {item.title}
                  </a>
                  {item.dropdownItems && (
                    <div className="pl-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:bg-[#09273F] transition-colors"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md p-4 z-50">
          <div className="max-w-7xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#0F0B45]"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0F0B45]"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
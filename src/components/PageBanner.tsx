import React from 'react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  path: string;
}

const PageBanner = ({ title, path }: PageBannerProps) => {
  return (
    <div className="bg-[#0F0B45] text-white py-12 page-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center space-x-2 text-sm">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <span>/</span>
          <span>{path}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
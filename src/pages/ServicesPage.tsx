import React from 'react';
import PageBanner from '../components/PageBanner';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div>
      <PageBanner title="Our Services" path="Our Services" />
      <Services />
    </div>
  );
};

export default ServicesPage;
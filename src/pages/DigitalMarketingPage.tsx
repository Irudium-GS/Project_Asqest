import React from 'react';
import PageBanner from '../components/PageBanner';

const DigitalMarketingPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div>
      <PageBanner title="Digital Marketing" path="Digital Marketing" />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F0B45] mb-6">
              Welcome to Ali Saleh Al Qahthani, Your Partner in Digital Success!
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're here to help your business thrive online. Whether you need to boost your visibility, 
              engage with your audience, or improve your website, we've got you covered. Our team is 
              dedicated to your success. Let's work together to make your digital dreams a reality!
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <p className="text-lg text-gray-600 text-center">
              At Ali Saleh Al Qahthani, we're digital wizards dedicated to making your online presence shine. 
              With years of expertise and a knack for innovation, we craft tailored solutions to boost your 
              digital success. From SEO to social media and beyond, we're your go-to partner for digital excellence.
            </p>
          </div>

          <div className="bg-[#0F0B45] text-white rounded-lg p-12 mb-16">
            <p className="text-xl text-center mb-8">
              Ready to take your online presence to the next level? Dive into our services and discover 
              how we can elevate your digital success. Whether you're curious about SEO, social media, 
              or website design, we're here to help. Contact us today to learn more and embark on your 
              digital journey with Ali Saleh Al Qahthani!
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#0F0B45] rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Let's chat with us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Digital Marketing ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
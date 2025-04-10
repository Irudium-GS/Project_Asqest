import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
              alt="Global Network"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0F0B45] mb-6">
              Explore ASQEST: Where Technology Meets Success 
            </h2>
            <p className="text-gray-600 mb-6">
            Ali-Saleh Al-Qahthani is a leading technology consultancy firm operating primarily in Saudi Arabia. Our expertise lies in managing technology solutions for businesses of all sizes, 
            ranging from Small and Medium Enterprises to large corporations. With a focus on clarity and efficient utilization of IT investments, 
            Ali-Saleh Al-Qathani strives to optimize the performance of organizations' IT infrastructure and core applications. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
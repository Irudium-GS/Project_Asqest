import React from 'react';
import PageBanner from '../components/PageBanner';

const AboutPage = () => {
  return (
    <div>
      <PageBanner title="About Us" path="About Us" />
      
      {/* About Brand Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
            Established in 2k22, Ali-Saleh Al-Qahthani has garnered a reputation as a professional and dynamic provider of comprehensive network solutions. With a steadfast commitment to excellence, we boast a proven track record of business growth.
            </p>
            <p className="text-lg text-gray-600">
              Based in Dammam, Saudi Arabia, Ali Saleh Al-Qahthani is your premier partner for comprehensive networking solutions. With our specialized expertise, we meticulously plan, implement, and manage network infrastructures to meet the evolving needs of businesses today and into the future.
            </p>
            <p className="text-lg text-gray-600">
            At Ali Saleh Al-Qahthani, we are committed to delivering tailored technology solutions and services while providing unparalleled customer support. 
            Our guiding philosophy, 'Today's Network for a better future,' underscores our dedication to staying ahead in resolving complex networking challenges with timely and effective solutions.
            </p>
            <p className="text-lg text-gray-600">
            From IP telephony to cutting-edge technologies, we provide sophisticated network solutions to large corporate and public sector organizations across Saudi Arabia. 
            With a focus on innovation and reliability, Ali Saleh Al-Qahthani stands as your trusted partner in navigating the intricate landscape of modern networking.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800"
                alt="Network Infrastructure"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0F0B45] mb-4">Why Ali-Saleh Al-Qahthani</h3>
              <p className="text-lg text-gray-600">
              Ali Saleh Al-Qahthani is a technology consulting company dedicated to managing Small/Medium/Large-sized Enterprises across Saudi Arabia, ensuring clarity and optimal utilization of their IT investments. 
              Our mission is to achieve optimal performance with the IT infrastructure and core applications of these organizations, empowering clients to explore the transformative power of technology for their business needs and growth through specially designed services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pt-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-12 items-center">
            
              <div className="space-y-8 mt-8">
                <div>
                  <p className="text-gray-600">
                  Innovating our business model, Ali Saleh Al-Qahthani operates under a partnership-only approach with clients, rather than affiliating with Principal companies. 
                  This allows us to maintain consultancy roles at levels where they are justified. We provide training to our clients' existing vendors, ensuring optimal performance. 
                  As a consulting company, we offer clients the best choices in terms of products and services. 
                  Additionally, we collaborate with clients to successfully implement ERP solutions, accelerating their business growth.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                  Our comprehensive support includes 24/7 assistance, from design to execution. 
                  We excel in both IT and ITES segments, boasting a proven track record in executing large-scale projects nationwide. 
                  With an extensive execution team comprising 90% of engineers on our direct payroll, equipped with state-of-the-art machinery such as tower ladders, cable testers, splicing machines, and rentable switches, we ensure seamless project implementation and client satisfaction across Saudi Arabia.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F0B45] mb-4">Structured Cabling Services</h3>
                  <p className="text-gray-600">
                  At Ali Saleh Al-Qahthani, we provide a comprehensive range of precision solutions tailored to meet your communication cabling and data center needs. 
                  From managing simple moves, adds, or changes to designing and implementing complete solutions, our flexible approach and meticulous work practices ensure successful outcomes every time. 
                  With a focus on streamlined connectivity, we are committed to delivering reliable and efficient structured cabling services that meet the evolving demands of your business. 
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F0B45] mb-4">Network Consulting</h3>
                  <p className="text-gray-600">
                  we offer customized managed services packages, providing peace of mind for businesses of any size. 
                  Our plans are designed to address your organization's specific needs and financial constraints, making them ideal for businesses experiencing frequent issues or requiring emergency support. 
                  Please note that internet development is not included in our managed services plans by default. 
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0B45] mb-12 text-center">
            Our Team and Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">Technical Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Having Good Knowledge and skills in handling Switching, Routing, Firewall & Access System</li>
                <li>24/7 support</li>
                <li>Strong Relationship with Cisco sales and support team</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">Certified Team</h3>
              <ul className="space-y-2 text-gray-600">
                <li>CCNA – SIX</li>
                <li>CCDA – FOUR</li>
                <li>CCNP Routing & Switching – FOUR</li>
                <li>CCNP Firewall & Security – FOUR</li>
                <li>CCSP – TWO</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0F0B45] mb-4">Certified Engineers</h3>
              <p className="text-gray-600">
                All of our team members are Certified Members of Cisco, bringing professional expertise and industry-standard knowledge to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
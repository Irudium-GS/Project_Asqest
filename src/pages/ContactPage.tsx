import React from 'react';
import PageBanner from '../components/PageBanner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageBanner title="Contact Us" path="Contact Us" />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Office Address */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#0F0B45] mb-6">Office Address</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#0F0B45] mt-1" />
                  <div>
                    <h3 className="font-bold">ALI SALEH AL-QAHTHANI TRADING EST.</h3>
                    <p>Dhahran - Doha Area - Abdullah Bin Al Abbas St.</p>
                    <p>Near of Al-Gossaibi Mosque - Kingdom of Saudi Arabia</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Branches</h3>
                  <p>Riyadh | Dammam | Khobar | Jeddah</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold mb-2">Networking Service:</h3>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#0F0B45]" />
                    <a href='https://wa.me/+966561346255'>+966 56134 6255</a>
                  </div>
                  
                    <h3 className="font-bold mb-2">Maintenance Service:</h3>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#0F0B45]" />
                      <a href='https://wa.me/+966543751576'>+966 54375 1576</a>
                    </div>
                </div>
              

                <div className="space-y-3">
                <h3 className="font-bold mb-2">General Inquiries:</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0F0B45]"/>
                    <a href='mailto:alisalehalqathani@gmail.com'>alisalehalqathani@gmail.com</a>
                  </div>
                <h3 className="font-bold mb-2">Business Executive:</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0F0B45]" />
                    <a href='mailto:jalal@asqest.com'>jalal@asqest.com</a>
                  </div>
                <h3 className="font-bold mb-2">Sales Executive:</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#0F0B45]" />
                    <a href='mailto:ibrahim@asqest.com'>ibrahim@asqest.com</a>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-[#0F0B45] mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">Business Hours</h3>
                      <p>Monday - Thursday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <b>Friday: Closed</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 py-20">
              <h2 className="text-3xl font-bold text-[#0F0B45] mb-12">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={8}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                  ></textarea>
                </div>
                <button
                  type="submit" className="w-full px-6 py-3 bg-[#0F0B45] text-white rounded-md hover:bg-[#09273F] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0F0B45] mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0F0B45] focus:ring focus:ring-[#0F0B45] focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0F0B45] text-white rounded-md hover:bg-[#09273F] transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-[#0F0B45] rounded-lg shadow-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <b>ALI SALEH AL-QAHTHANI TRADING EST.</b>
                  <p>Dhahran - Doha Area - Abdullah Bin Al Abbas St.</p>
                  <p>Near of Al-Gossaibi Mosque -  Kingdom  of Saudi Arabia.</p>
                  <p>zip code / post code</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Networking Service</p>
                  <a href='https://wa.me/+966561346255'>+966 56134 6255</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Maintenance Service</p>
                  <a href='https://wa.me/+966543751576'>+966 54375 1576</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p>alisalehalqathani@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
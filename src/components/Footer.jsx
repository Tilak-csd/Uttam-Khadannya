import React from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto"> {/* Added max-width for better large-screen centering */}
        {/* Main Footer Content - Adjusted to 5 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Section - Slightly wider for description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <img src="./logo.png" alt="Uttam Khadannya Logo" className='w-10 h-10 object-contain' />
              </div>
              <span className="text-xl font-bold tracking-tight">Uttam Khadannya</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium quality spices sourced directly from the heart of Nepal. Bringing authentic flavors to your kitchen.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-green-500 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipes & Pairings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sourcing</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Customer Care</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refunds & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Help & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Help</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section - Taking slightly more space for long emails */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email us:</p>
                <p className="text-sm font-medium hover:text-green-500 transition-colors">
                  <a href="mailto:info@uttamkhadannya.com.np">info@uttamkhadannya.com.np</a>
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call us:</p>
                <p className="text-sm font-medium">+977-970-0004569</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Visit us:</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Samakhushi, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 Uttam Khadannya. All rights reserved.</p>
          <p>Designed by <a href="#" className="text-white hover:text-green-500 transition-colors">Unified Solutions</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
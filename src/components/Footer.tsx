import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@circularfashion.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-emerald-200 transition">About Us</a></li>
              <li><a href="/feedback" className="hover:text-emerald-200 transition">Feedback</a></li>
              <li><a href="/privacy-policy" className="hover:text-emerald-200 transition">Privacy Policy</a></li>
              <li><a href="/contribute">Contribute Content</a></li>
              <li><a href="/contributors" className="hover:text-emerald-200 transition">Contributors (WoCS)</a></li>

            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-200 transition">Twitter</a>
              <a href="#" className="hover:text-emerald-200 transition">Instagram</a>
              <a href="#" className="hover:text-emerald-200 transition">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-600 text-center">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by Circular Fashion Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Recycle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Recycle className="h-8 w-8" />
            <span className="font-bold text-xl">Circular Fashion</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-emerald-200 transition">Home</Link>
            <Link to="/auth" className="hover:text-emerald-200 transition">Login</Link>
            <Link to="/profile" className="hover:text-emerald-200 transition">Profile</Link>
            <Link to="/feedback" className="hover:text-emerald-200 transition">Feedback</Link>
            <Link to="/about" className="hover:text-emerald-200 transition">About Us</Link>
            <Link to="/blogs" className="hover:text-emerald-200 transition">Blogs</Link>
            <Link to="/events" className="hover:text-emerald-200 transition">Events</Link>
            <Link to="/resources" className="hover:text-emerald-200 transition">Resources</Link>
            <Link to="/glossary" className="hover:text-emerald-200 transition">Glossary</Link>
            <Link to="/materials/dashboard" className="hover:text-emerald-200 transition">Material</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-emerald-200 hover:bg-emerald-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/auth"
              className="block px-3 py-2 rounded-md hover:bg-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/profile"
              className="block px-3 py-2 rounded-md hover:bg-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/feedback"
              className="block px-3 py-2 rounded-md hover:bg-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Feedback
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
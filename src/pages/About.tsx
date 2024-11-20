import React from 'react';
import { Heart, Globe, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Circular Fashion Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize the fashion industry through sustainable practices
            and circular economy principles.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Circular Fashion Solutions, we believe in a future where fashion and sustainability
              go hand in hand. Our platform connects conscious consumers with innovative designers
              who share our vision for a more sustainable fashion industry.
            </p>
            <p className="text-gray-600">
              Through technology and community engagement, we're building a ecosystem that promotes
              circular economy principles and reduces fashion's environmental impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Globe className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">Reducing fashion's environmental footprint worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a network of conscious fashion enthusiasts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Leaf className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting eco-friendly fashion practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Heart className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Values</h3>
              <p className="text-gray-600">Putting ethics at the heart of fashion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
              {
                name: 'Michael Chen',
                role: 'Head of Sustainability',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
              {
                name: 'Emma Rodriguez',
                role: 'Community Director',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can create a more sustainable future for fashion. Join our community
            of changemakers and be part of the solution.
          </p>
          <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import ContributorCard from '../components/ContributorCard';
import contributors from '../data/contributors.json';

const Contributors = () => {
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-4">
            Our Contributors 💚
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Circular Fashion Solutions is proudly built by contributors from
            <span className="font-semibold text-emerald-700"> Winter of Code Social</span>.
             
            Raise an issue, pick one, and become part of the change 🌱
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((contributor, index) => (
            <ContributorCard key={index} contributor={contributor} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Want to contribute?
          </h2>
          <p className="text-gray-600 mb-6">
            Participate via Winter of Code Social by raising an issue on GitHub.
          </p>

          <a
            href="https://github.com/AseemPrasad/circularfashion/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            Raise an Issue on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributors;

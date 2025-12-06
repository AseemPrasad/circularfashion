import React from 'react';
import { Github } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  contributions: string;
  github: string;
  year: string;
}

const ContributorCard: React.FC<{ contributor: Contributor }> = ({ contributor }) => {
  return (
    <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-emerald-800">{contributor.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{contributor.role}</p>

      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Worked on:</span> {contributor.contributions}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
          {contributor.year}
        </span>

        <a
          href={contributor.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-800"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContributorCard;

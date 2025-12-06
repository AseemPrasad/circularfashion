// src/components/Glossary/GlossaryFilters.tsx
import React from 'react';

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  activeLetter: string | null;
  onLetterChange: (l: string | null) => void;
  enableSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (v: string) => void;
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const GlossaryFilters: React.FC<Props> = ({
  categories,
  activeCategory,
  onCategoryChange,
  activeLetter,
  onLetterChange,
  enableSearch = true,
  searchValue = '',
  onSearchChange = () => {}
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <label className="text-sm font-medium text-Glossarygreen">Category</label>
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-2 rounded-md border text-white border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <option value="All">All</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {enableSearch && (
          <div className="flex-1 min-w-[220px]">
            <input
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search terms (optional)"
              className="w-full px-3 py-2 rounded-md border text-white border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>
        )}
      </div>

      <div className="flex gap-1 flex-wrap items-center">
        <button
          onClick={() => onLetterChange(null)}
          className={`px-2 py-1 text-sm rounded ${activeLetter === null ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
        >
          All
        </button>
        {alphabet.map((a) => (
          <button
            key={a}
            onClick={() => onLetterChange(a)}
            className={`px-2 py-1 text-sm rounded ${activeLetter === a ? 'bg-purple-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}
            aria-pressed={activeLetter === a}
          >
            {a}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GlossaryFilters;

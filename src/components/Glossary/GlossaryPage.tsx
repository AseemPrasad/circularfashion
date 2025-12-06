// src/components/Glossary/GlossaryPage.tsx
import React, { useEffect, useMemo, useState } from 'react';
import GlossaryFilters from './GlossaryFilters';
import GlossaryTermCard, { GlossaryItem } from './GlossaryTermCard';

// import JSON (TypeScript + Vite / CRA allow importing JSON)
import glossaryData from '../../data/glossary.json';

const GlossaryPage: React.FC<{ enableSearch?: boolean }> = ({ enableSearch = true }) => {
  // glossaryData is typed as any by default; cast properly
  const items: GlossaryItem[] = (glossaryData as unknown) as GlossaryItem[];

  const categories = useMemo(() => {
    const s = new Set<string>();
    items.forEach((it) => s.add(it.category || 'Other'));
    return Array.from(s).sort();
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filtering logic
  const filtered = useMemo(() => {
    let out = items.slice();

    if (activeCategory !== 'All') {
      out = out.filter((i) => (i.category || 'Other') === activeCategory);
    }

    if (activeLetter) {
      out = out.filter((i) => i.term && i.term[0].toUpperCase() === activeLetter);
    }

    if (enableSearch && searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      out = out.filter((i) => (i.term + ' ' + i.definition + ' ' + i.category).toLowerCase().includes(q));
    }

    // sort alphabetically
    out.sort((a, b) => a.term.localeCompare(b.term));
    return out;
  }, [items, activeCategory, activeLetter, searchTerm, enableSearch]);

  useEffect(() => {
    // reset page scroll to top when filters change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory, activeLetter, searchTerm]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-Glossarygreen">Glossary — Sustainable Fashion</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">A curated glossary of terms and concepts used across circular fashion, materials, and sustainability.</p>
      </header>

      <div className="mb-6">
        <GlossaryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          activeLetter={activeLetter}
          onLetterChange={setActiveLetter}
          enableSearch={enableSearch}
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Showing <strong>{filtered.length}</strong> terms {activeCategory !== 'All' && <>in <em>{activeCategory}</em></>} {activeLetter && <>starting with <em>{activeLetter}</em></>}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((it) => (
          <GlossaryTermCard key={it.term} item={it} />
        ))}
      </section>

      {filtered.length === 0 && (
        <div className="mt-8 p-6 text-center bg-yellow-50 dark:bg-yellow-900 rounded">
          <p className="text-yellow-800 dark:text-yellow-100">No matching terms. Try toggling filters or clearing the search.</p>
        </div>
      )}
    </div>
  );
};

export default GlossaryPage;

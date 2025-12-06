import React, { useEffect, useState } from 'react';
import { Material } from '../utils/materials';
import { MaterialComparison } from '../components/Materials/MaterialComparison';
import { ImpactCalculator } from '../components/Materials/ImpactCalculator';
import { PerUseCalculator } from '../components/Materials/PerUseCalculator';
import { AdminEditor } from '../components/Materials/AdminEditor';

type TabKey = 'compare' | 'impact' | 'peruse' | 'admin';

export default function MaterialsDashboard() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [tab, setTab] = useState<TabKey>('compare');
  const [rawJson, setRawJson] = useState<string>('');

  useEffect(() => {
    // load public JSON
    fetch('/data/materials.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch materials.json');
        return res.json();
      })
      .then((data) => {
        setMaterials(data);
        setSelectedIds(data.slice(0, 3).map((m: any) => m.id));
        setRawJson(JSON.stringify(data, null, 2));
      })
      .catch(err => {
        console.error(err);
        setMaterials([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  if (loading) return <div className="p-8">Loading materials...</div>;
  if (!materials.length) return <div className="p-8 text-red-600">No materials found. Make sure <code>public/data/materials.json</code> exists.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Material Comparison & Impact Calculator</h1>
        <div className="space-x-2">
          <button onClick={() => setTab('compare')} className={`px-3 py-1 rounded ${tab==='compare'?'bg-green-600 text-white':''}`}>Compare</button>
          <button onClick={() => setTab('impact')} className={`px-3 py-1 rounded ${tab==='impact'?'bg-green-600 text-white':''}`}>Impact Calculator</button>
          <button onClick={() => setTab('peruse')} className={`px-3 py-1 rounded ${tab==='peruse'?'bg-green-600 text-white':''}`}>Per-Use Calculator</button>
          <button onClick={() => setTab('admin')} className={`px-3 py-1 rounded ${tab==='admin'?'bg-green-600 text-white':''}`}>Admin Editor</button>
        </div>
      </header>

      {tab === 'compare' && (
        <MaterialComparison materials={materials} selectedIds={selectedIds} onToggle={toggleSelect} />
      )}

      {tab === 'impact' && (
        <ImpactCalculator materials={materials} />
      )}

      {tab === 'peruse' && (
        <PerUseCalculator materials={materials} />
      )}

      {tab === 'admin' && (
        <AdminEditor initialJson={rawJson} />
      )}
    </div>
  );
}

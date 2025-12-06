import React, { useState } from 'react';
import { Material, co2PerUse, waterPerUse, energyPerUse } from '../../utils/materials';

type Props = { materials: Material[] };

export const PerUseCalculator: React.FC<Props> = ({ materials }) => {
  const [materialId, setMaterialId] = useState(materials[0]?.id || '');
  const [kgPerGarment, setKgPerGarment] = useState(0.5);
  const [expectedYears, setExpectedYears] = useState(1);
  const [wearsPerWeek, setWearsPerWeek] = useState(2);

  const material = materials.find(m => m.id === materialId);
  if (!material) return <div>No material selected</div>;

  const totalWears = Math.max(1, expectedYears * 52 * wearsPerWeek);
  const co2Total = material.co2_kg_per_kg * kgPerGarment;
  const co2PerWear = co2Total / totalWears;

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <select value={materialId} onChange={(e) => setMaterialId(e.target.value)} className="border rounded px-3 py-2">
          {materials.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <input type="number" step="0.1" value={kgPerGarment} onChange={(e) => setKgPerGarment(Number(e.target.value))} className="border rounded px-2 py-1 w-28" placeholder="kg per garment" />
        <input type="number" value={expectedYears} onChange={(e) => setExpectedYears(Number(e.target.value))} className="border rounded px-2 py-1 w-28" />
        <input type="number" value={wearsPerWeek} onChange={(e) => setWearsPerWeek(Number(e.target.value))} className="border rounded px-2 py-1 w-28" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Per-use impacts</h4>
          <p>CO₂ per wear: <strong>{co2PerWear.toFixed(4)} kg</strong></p>
          <p>Water per wear: <strong>{(material.water_l_per_kg * kgPerGarment / totalWears).toFixed(2)} L</strong></p>
          <p>Energy per wear: <strong>{(material.energy_mj_per_kg * kgPerGarment / totalWears).toFixed(3)} MJ</strong></p>
        </div>

        <div className="p-4 border rounded">
          <h4 className="font-semibold">Summary</h4>
          <p>Total expected wears: <strong>{totalWears}</strong></p>
          <p>Material durability (default): <strong>{material.durability_wears}</strong></p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Material, co2PerUse, waterPerUse, energyPerUse } from '../../utils/materials';

type Props = {
  materials: Material[];
};

export const ImpactCalculator: React.FC<Props> = ({ materials }) => {
  const [selectedId, setSelectedId] = useState<string>(materials[0]?.id || '');
  const [kgPerGarment, setKgPerGarment] = useState<number>(0.5);

  const material = materials.find(m => m.id === selectedId);

  if (!material) return <div>No material selected</div>;

  const co2Kg = material.co2_kg_per_kg * kgPerGarment;
  const waterL = material.water_l_per_kg * kgPerGarment;
  const energy = material.energy_mj_per_kg * kgPerGarment;

  return (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="border rounded px-3 py-2">
          {materials.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>

        <label className="flex items-center gap-2">
          <span className="text-sm">Kg / garment</span>
          <input type="number" step="0.1" value={kgPerGarment} onChange={(e) => setKgPerGarment(Number(e.target.value))} className="border rounded px-2 py-1 w-24" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Total CO₂ (kg)</h4>
          <p className="text-xl">{co2Kg.toFixed(2)}</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Total Water (L)</h4>
          <p className="text-xl">{waterL.toFixed(0)}</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Total Energy (MJ)</h4>
          <p className="text-xl">{energy.toFixed(1)}</p>
        </div>
      </div>

      <div className="p-4 border rounded">
        <h4 className="font-semibold">Per-use / wear (using durability)</h4>
        <p>CO₂ per use: <strong>{co2PerUse(material, kgPerGarment).toFixed(3)} kg</strong></p>
        <p>Water per use: <strong>{waterPerUse(material, kgPerGarment).toFixed(0)} L</strong></p>
        <p>Energy per use: <strong>{energyPerUse(material, kgPerGarment).toFixed(2)} MJ</strong></p>
      </div>
    </div>
  );
};

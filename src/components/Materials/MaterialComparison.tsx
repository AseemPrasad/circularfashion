import React from 'react';
import { Material } from '../../utils/materials';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

type Props = {
  materials: Material[];
  selectedIds: string[];
  onToggle: (id: string) => void;
};

const COLORS = ['#4CAF50', '#00AEEF', '#FFB020', '#FF6B6B', '#7C4DFF'];

export const MaterialComparison: React.FC<Props> = ({ materials, selectedIds, onToggle }) => {
  // create arrays for charts
  const chosen = materials.filter(m => selectedIds.includes(m.id));
  const barData = chosen.map(m => ({
    name: m.name,
    co2: Number(m.co2_kg_per_kg.toFixed(2)),
    water: Number(m.water_l_per_kg.toFixed(0)),
    energy: Number(m.energy_mj_per_kg.toFixed(1)),
    recyclability: Number(m.recyclability_pct)
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {materials.map(m => (
          <label key={m.id} className="flex items-center space-x-2">
            <input type="checkbox" checked={selectedIds.includes(m.id)} onChange={() => onToggle(m.id)} />
            <span className="text-sm">{m.name}</span>
          </label>
        ))}
      </div>

      <div style={{ height: 300 }}>
        <h3 className="text-lg font-semibold mb-2">CO₂ (kg / kg)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="co2" fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 300 }}>
        <h3 className="text-lg font-semibold mb-2">Water (L / kg)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="water" fill="#00AEEF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 300 }}>
        <h3 className="text-lg font-semibold mb-2">Energy (MJ / kg)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="energy" fill="#FFB020" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: 280 }}>
        <h3 className="text-lg font-semibold mb-2">Recyclability (%) — Selected materials</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={barData.map(d => ({ name: d.name, value: d.recyclability }))}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {barData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

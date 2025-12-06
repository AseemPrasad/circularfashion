export type Material = {
  id: string;
  name: string;
  co2_kg_per_kg: number;
  water_l_per_kg: number;
  energy_mj_per_kg: number;
  recyclability_pct: number;
  durability_wears: number;
  description?: string;
  notes?: string;
};

export function co2PerUse(material: Material, kgPerGarment = 0.5) {
  // default garment mass 0.5 kg, can be overridden by UI
  const total_co2 = material.co2_kg_per_kg * kgPerGarment;
  const uses = Math.max(1, material.durability_wears);
  return total_co2 / uses;
}

export function waterPerUse(material: Material, kgPerGarment = 0.5) {
  const total = material.water_l_per_kg * kgPerGarment;
  return total / Math.max(1, material.durability_wears);
}

export function energyPerUse(material: Material, kgPerGarment = 0.5) {
  return (material.energy_mj_per_kg * kgPerGarment) / Math.max(1, material.durability_wears);
}

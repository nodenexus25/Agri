export const mainProduct = {
  name: "Refined Sugar",
  variants: ["White Crystal Sugar", "Raw Sugar", "Natural Brown Sugar"],
  description: "Pure, high-quality sugar trusted by food and beverage industries worldwide. Produced from premium sugarcane sourced directly from our farmer network — refined to international standards of purity, crystal consistency, and shelf stability.",
  specs: {
    "Polarization": "99.8° minimum",
    "Moisture": "0.04% maximum",
    "Color": "ICUMSA 45 (Premium White)",
    "Granulation": "0.6mm — 1.2mm (customizable)",
    "Packaging": "50kg HDPE / 1MT Jumbo / Bulk"
  },
  industries: ["Food & Beverage", "Bakery & Confectionery", "Pharmaceutical", "Export Markets", "Retail Consumer"],
  icon: "Candy"
};

export const byProducts = [
  {
    name: "Molasses",
    use: "Essential feedstock for ethanol distillation, rum production, yeast culture, and high-energy animal feed.",
    description: "Rich in fermentable sugars and minerals, our C-grade molasses is the primary input that feeds our ethanol ecosystem and the broader Sanjivani Chemical Division.",
    icon: "Droplet",
    industries: ["Ethanol Distilleries", "Animal Feed", "Distilleries & Rum", "Yeast Production"],
    specs: {
      "Brix": "80° — 85°",
      "Sugar Content": "45% — 55%",
      "Color": "Dark Brown Viscous"
    }
  },
  {
    name: "Bagasse",
    use: "Renewable in-house fuel for cogeneration and raw material for pulp, paper, and particle board industries.",
    description: "The fibrous residue left after sugarcane crushing powers our boilers throughout the season — generating steam and electricity for the factory, with surplus available for nearby industries.",
    icon: "Wind",
    industries: ["Power Cogeneration", "Paper & Pulp", "Particle Board", "Biomass Energy"],
    specs: {
      "Moisture": "48% — 52% (as received)",
      "Calorific Value": "~2,000 kcal/kg",
      "Fiber Length": "1.0mm — 2.5mm"
    }
  },
  {
    name: "Press Mud",
    use: "Organic fertilizer base and soil conditioner that restores carbon, microbial activity, and nutrient balance to farm soils.",
    description: "Filter cake from juice clarification — composted and enriched into our branded Sanjivani Organic Manure, closing the loop between factory output and farm input.",
    icon: "Layers",
    industries: ["Organic Fertilizer", "Soil Amendment", "Compost Manufacturing", "Horticulture"],
    specs: {
      "Organic Carbon": "18% — 25%",
      "NPK (combined)": "2.5% — 4.0%",
      "pH": "6.5 — 7.5"
    }
  },
  {
    name: "Ethanol",
    use: "Clean, renewable transportation fuel-blend component (E20-ready), solvent, and feedstock for our Chemical Division's ESJ-to-Ethanol and sanitizer operations.",
    description: "Produced both from C-heavy molasses and direct juice — we are the first cooperative sugar factory in the region commissioned for Juice-to-Ethanol supply to distillery plants.",
    icon: "Flame",
    industries: ["Fuel Blending (Oil Marketing Companies)", "Chemical Division Sanitizers", "Industrial Solvents", "Distillery"],
    specs: {
      "Purity": "99.9% v/v (Anhydrous)",
      "Moisture": "< 0.1%",
      "Denatured": "As per OMC specification"
    }
  }
];

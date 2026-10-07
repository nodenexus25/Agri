export const mainProduct = {
  name: "Refined Sugar",
  variants: ["White Crystal Sugar", "Raw Sugar", "Natural Brown Sugar"],
  description: "Pure, high-quality sugar trusted by food and beverage industries worldwide. Produced from premium sugarcane sourced directly from our farmer network — refined to international purity standards.",
  specs: {
    "Polarization": "99.8° minimum",
    "Moisture": "0.04% maximum",
    "Color": "ICUMSA 45 (Premium White)",
    "Granulation": "0.6mm — 1.2mm (customizable)",
    "Packaging": "50kg HDPE / 1MT Jumbo / Bulk"
  },
  industries: ["Food & Beverage", "Bakery & Confectionery", "Pharmaceutical", "Export Markets", "Retail Consumer"],
  icon: "Candy",
  image: "/prod/1.png"
};

export const byProducts = [
  {
    name: "Molasses",
    use: "Essential feedstock for ethanol distillation, rum, yeast culture, and high-energy animal feed.",
    description: "Rich in fermentable sugars — our C-grade molasses feeds the ethanol ecosystem and Sanjivani Chemical Division.",
    icon: "Droplet",
    industries: ["Ethanol Distilleries", "Animal Feed", "Distilleries & Rum", "Yeast Production"],
    image: "/prod/2.png"
  },
  {
    name: "Bagasse",
    use: "Renewable in-house fuel for cogeneration and raw material for pulp, paper, and particle board.",
    description: "Fibrous residue after crushing powers our boilers season-long — steam and electricity for the factory, surplus for nearby industries.",
    icon: "Wind",
    industries: ["Power Cogeneration", "Paper & Pulp", "Particle Board", "Biomass Energy"],
    image: "/prod/3.png"
  },
  {
    name: "Press Mud",
    use: "Organic fertilizer base and soil conditioner restoring carbon, microbes, and nutrient balance.",
    description: "Filter cake from juice clarification — composted into branded Sanjivani Organic Manure, closing the factory-to-farm loop.",
    icon: "Layers",
    industries: ["Organic Fertilizer", "Soil Amendment", "Compost Manufacturing", "Horticulture"],
    image: "/prod/4.png"
  },
  {
    name: "Ethanol",
    use: "Clean renewable fuel-blend (E20-ready), solvent, and feedstock for Chemical Division ESJ-to-Ethanol and sanitizers.",
    description: "Produced from C-heavy molasses and direct juice — first cooperative in the region commissioned for Juice-to-Ethanol.",
    icon: "Flame",
    industries: ["Fuel Blending (OMCs)", "Chemical Division Sanitizers", "Industrial Solvents", "Distillery"],
    image: "/prod/5.png"
  }
];

export const caneInitiatives = [
  {
    id: 1,
    icon: "Sprout",
    title: "Cane Seed Development",
    description: "Annual three-tier cane seed development program ensuring high-yielding, disease-resistant varieties for every farmer in our network.",
    category: "Seeds & Nursery"
  },
  {
    id: 2,
    icon: "FlaskConical",
    title: "Soil & Water Analysis",
    description: "Comprehensive soil and water testing available at minimal charges to guide precise input decisions and optimize yields.",
    category: "Advisory"
  },
  {
    id: 3,
    icon: "Leaf",
    title: "Green Manuring Support",
    description: "Subsidized supply of seeds for green manuring crops to naturally enrich soil fertility and reduce chemical dependency.",
    category: "Soil Health"
  },
  {
    id: 4,
    icon: "Tractor",
    title: "Pre-Tillage Assistance",
    description: "Financial assistance for pre-tillage operations so farmers can prepare their fields on time without cash-flow constraints.",
    category: "Financial"
  },
  {
    id: 5,
    icon: "Package",
    title: "Basal Dose Fertilizers",
    description: "Supply of chemical fertilizers for basal dose application at subsidized rates, calibrated to local soil requirements.",
    category: "Inputs"
  },
  {
    id: 6,
    icon: "ShieldCheck",
    title: "Credit Facility for Crop Protection",
    description: "Weedicide and insecticide available on credit facility — protecting standing crops without immediate financial burden.",
    category: "Inputs"
  },
  {
    id: 7,
    icon: "Recycle",
    title: "Bio-Compost & Micronutrients",
    description: "Subsidized supply of enriched bio-compost and micronutrient blends to restore soil biology and boost long-term productivity.",
    category: "Soil Health"
  },
  {
    id: 8,
    icon: "Droplets",
    title: "Drip Irrigation Financing",
    description: "Low-interest financial support for drip irrigation installation — reducing water usage by up to 60% while increasing yields.",
    category: "Irrigation"
  },
  {
    id: 9,
    icon: "Waves",
    title: "Irrigation & Farm Ponds",
    description: "Active promotion and technical guidance for drip irrigation adoption and farm pond construction for water security.",
    category: "Irrigation"
  },
  {
    id: 10,
    icon: "Sprout",
    title: "Coco Peat & Poly Trays",
    description: "Subsidized supply of coco peat and poly trays for nursery development — stronger seedlings mean healthier harvests.",
    category: "Seeds & Nursery"
  },
  {
    id: 11,
    icon: "Leaf",
    title: "Sanjivani Organic Manure",
    description: "Our proprietary organic manure enriched with rock phosphate, micronutrients, and bio-fertilizers — made from our own press mud.",
    category: "Soil Health"
  },
  {
    id: 12,
    icon: "Plane",
    title: "Drone Spraying Services",
    description: "Precision drone spraying available on sugarcane at nominal charges — uniform coverage, less chemical waste, and farmer safety.",
    category: "Technology"
  }
];

export const supportTypes = caneInitiatives.map(i => ({
  value: i.id,
  label: i.title
}));

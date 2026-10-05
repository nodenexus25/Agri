export const stats = [
  {
    id: "years",
    value: 63,
    suffix: "+",
    prefix: "",
    label: "Years of Cooperative Legacy",
    description: "Six decades of uninterrupted farmer-led operation"
  },
  {
    id: "capacity",
    value: null,
    suffix: "",
    prefix: "",
    label: "Modern Crushing Capacity",
    description: "Next-gen boilers, crystallizers & automated handling"
  },
  {
    id: "farmers",
    value: null,
    suffix: "",
    prefix: "",
    label: "Farmer Families",
    description: "Member-owners across our registered command area"
  },
  {
    id: "ethanol",
    value: 1,
    suffix: "st",
    prefix: "",
    label: "Juice-to-Ethanol",
    description: "First sugar factory in Maharashtra"
  }
];

export const groupEcosystem = {
  title: "Group Ecosystem — One Supply Chain",
  description: "Our sugarcane by-products feed directly into the Chemical Division's Ethanol and ESJ-to-Ethanol operations — a closed-loop model from farm to fuel.",
  flow: [
    { step: 1, label: "Farm", icon: "Sprout", detail: "Registered cane growers across our command area villages" },
    { step: 2, label: "Sugar Factory", icon: "Factory", detail: "Modern crushing producing Sugar + Molasses + Bagasse + Press Mud" },
    { step: 3, label: "Molasses / ESJ", icon: "Droplet", detail: "C-heavy molasses and end syrup routed as feedstock" },
    { step: 4, label: "Chemical Division", icon: "FlaskConical", detail: "Ethanol distillation + sanitizers + specialty chemicals" },
    { step: 5, label: "Fuel & Consumer", icon: "Zap", detail: "OMC ethanol blending, industrial solvents, hand sanitizers" }
  ],
  chemicalDivisionLink: "#",
  chemicalDivisionCTA: "Visit Chemical Division →"
};

export const contactInfo = {
  factory: {
    name: "Sahakar Maharshi Shankar Rao Kolhe Sahakari Sakhar Karkhana Ltd.",
    address: "Sanjivani Nagar, Post — Saikheda, Taluka — Sindkhed Raja, District — Buldhana, Maharashtra 443 203",
    phone: ["+91 7266 202 400", "+91 7266 202 401"],
    email: ["info@sanjivani-agri.coop", "cane.dev@sanjivani-agri.coop"],
    workingHours: "Factory operational 24×7 during crushing season (Nov–Feb). Cane Development Office: Mon–Sat, 9:00 AM – 6:00 PM IST."
  },
  caneDevelopmentOffice: {
    name: "Cane Development & Farmer Helpdesk",
    phone: ["+91 7266 202 450"],
    email: ["farmerhelpdesk@sanjivani-agri.coop"],
    officer: "Shri. Rajendra Patil — Chief Cane Development Officer"
  },
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.123456789!2d76.123456!3d20.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiA3NsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

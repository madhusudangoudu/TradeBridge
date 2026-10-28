const imageUrl = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=90`;

const iconArt = {
  fabric: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 10h19a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5H12z"/><path d="M12 10v28M18 14h13a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H18z"/><path d="M22 18h8m-8 6h8m-8 6h8"/></svg>',
  machine: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 35h34M10 35V23h7l5-7h14v19M17 23h19M22 28h8"/><circle cx="28" cy="27" r="5"/><path d="M28 19v3m0 10v3m-8-8h3m10 0h3"/></svg>',
  box: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m8 16 16-8 16 8v18l-16 8-16-8z"/><path d="m8 16 16 8 16-8M24 24v18M16 12l16 8"/></svg>',
  metal: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m9 14 25-5 5 5-25 5zM9 22l25-5 5 5-25 5zM9 30l25-5 5 5-25 5z"/></svg>',
  fridge: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="7" width="24" height="34" rx="4"/><path d="M12 23h24m-5-10v5m0 9v7M17 41v3m14-3v3"/></svg>',
  turmeric: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 31c3-8 10-13 19-13s14 5 15 13H8z"/><path d="M11 31h28v4a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4z"/><path d="M19 14c2-3 4-5 7-6m2 8c2-3 4-4 7-5"/></svg>',
  pallet: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 13h32v7H8zm0 11h32v7H8zM8 35h32v5H8z"/><path d="M13 20v4m11-4v4m11-4v4M13 31v4m11-4v4m11-4v4"/></svg>',
  glove: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 25V12a3 3 0 0 1 6 0v9-13a3 3 0 0 1 6 0v13-11a3 3 0 0 1 6 0v13-7a3 3 0 0 1 6 0v13c0 8-5 13-13 13h-4c-4 0-7-2-9-5l-6-10a3 3 0 0 1 5-3z"/></svg>',
  heart: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 39 8 23C-1 12 14 4 24 15 34 4 49 12 40 23z"/></svg>',
  layers: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 8 17 9-17 9-17-9zM7 25l17 9 17-9M7 33l17 9 17-9"/></svg>',
  refresh: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M39 18A16 16 0 0 0 11 13l-4 5m0-10v10h10M9 30a16 16 0 0 0 28 5l4-5m0 10V30H31"/></svg>',
  search: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="21" r="12"/><path d="m30 30 10 10"/></svg>',
  pin: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M38 20c0 10-14 22-14 22S10 30 10 20a14 14 0 1 1 28 0z"/><circle cx="24" cy="20" r="4"/></svg>'
};

function iconSvg(key, className = "") {
  const emojiIcons = {
    fabric: "🧶", machine: "⚙️", box: "📦", metal: "🔩", fridge: "🧊",
    turmeric: "🌾", pallet: "🪵", glove: "🧤", heart: "💛", layers: "📚",
    refresh: "♻️", search: "🔎", pin: "📍", crop: "🌱", build: "🧱",
    electronics: "🔌", furniture: "🪑", paper: "📄", auto: "🚗",
    energy: "☀️", lab: "🧪", office: "🗄️", recycle: "♻️"
  };
  return `<span class="vector-icon icon-${key} ${className}" aria-hidden="true">${emojiIcons[key] || "📦"}</span>`;
}

const listings = [
  {
    name: "Recycled cotton fabric rolls",
    industry: "Textiles & Apparel",
    category: "Raw materials",
    location: "Coimbatore",
    quantity: "1,200 kg available",
    price: 185,
    unit: "per kg",
    icon: "🧵",
    iconKey: "fabric",
    color: "#ead6bc",
    image: imageUrl("photo-1741275269888-95292e64eb1a"),
    supplier: "Sundar Textiles",
    description: "Sorted recycled cotton rolls for small-batch production. Ask about available colors and lot sizes."
  },
  {
    name: "Precision lathe machine",
    industry: "Industrial Machinery",
    category: "Pre-owned",
    location: "Pune",
    quantity: "1 unit · good condition",
    price: 245000,
    unit: "per unit",
    icon: "⚙️",
    iconKey: "machine",
    color: "#d9d8cf",
    image: imageUrl("photo-1764114441097-6a475eca993d"),
    supplier: "Kaveri Machine Works",
    description: "A maintained workshop lathe available as its current owner upgrades equipment. Arrange an inspection."
  },
  {
    name: "Corrugated cartons · surplus lot",
    industry: "Packaging & Logistics",
    category: "Surplus",
    location: "Chennai",
    quantity: "8,000 pieces available",
    price: 12,
    unit: "per piece",
    icon: "📦",
    iconKey: "box",
    color: "#e9d8b7",
    image: imageUrl("photo-1570086625846-f33f679eb4f5"),
    supplier: "Mitra Packaging",
    description: "Unused standard cartons from a completed order. Available as one lot or in smaller quantities."
  },
  {
    name: "Stainless steel sheet 304",
    industry: "Metals & Fabrication",
    category: "Raw materials",
    location: "Ahmedabad",
    quantity: "600 kg available",
    price: 218,
    unit: "per kg",
    icon: "🔩",
    iconKey: "metal",
    color: "#d7d9d6",
    image: imageUrl("photo-1504917595217-d4dc5ebe6122"),
    supplier: "Aruna Steel Traders",
    description: "Grade 304 stainless steel sheets. Share the thickness and quantity you need to check availability."
  },
  {
    name: "Display refrigerators",
    industry: "Food & Hospitality",
    category: "Pre-owned",
    location: "Bengaluru",
    quantity: "3 tested units",
    price: 38000,
    unit: "per unit",
    icon: "🥣",
    iconKey: "fridge",
    color: "#e7d7b7",
    image: imageUrl("photo-1774977864150-be36aa3db802"),
    supplier: "Freshline Equipment",
    description: "Three tested display refrigerators available after a store renovation. Ask about size and pickup."
  },
  {
    name: "Organic turmeric powder · bulk",
    industry: "Food & Agriculture",
    category: "Finished goods",
    location: "Coimbatore",
    quantity: "500 kg ready stock",
    price: 165,
    unit: "per kg",
    icon: "🌾",
    iconKey: "turmeric",
    color: "#efd59c",
    image: imageUrl("photo-1757802261964-a8e03ed98981"),
    supplier: "Vaigai Agro Collective",
    description: "Bulk turmeric powder from a regional producer. Request sample and packaging details."
  },
  {
    name: "Reclaimed wooden pallets",
    industry: "Packaging & Logistics",
    category: "Surplus",
    location: "Hyderabad",
    quantity: "240 pallets available",
    price: 190,
    unit: "per pallet",
    icon: "🪵",
    iconKey: "pallet",
    color: "#dfc6a4",
    image: imageUrl("photo-1739204618173-3e89def7140f"),
    supplier: "GreenRoute Warehouse",
    description: "Reusable wooden pallets from warehouse operations. Ask for photos and dimensions before pickup."
  },
  {
    name: "Industrial safety gloves · carton",
    industry: "Industrial Supplies",
    category: "Finished goods",
    location: "Chennai",
    quantity: "75 cartons available",
    price: 2400,
    unit: "per carton",
    icon: "🧤",
    iconKey: "glove",
    color: "#e5d7c3",
    image: imageUrl("photo-1581091226825-a6a2a5aee158"),
    supplier: "SafeHands Supply",
    description: "Bulk cartons of coated work gloves. Contact the supplier for available sizes and carton details."
  },
  {
    name: "Drip irrigation pipe coils",
    industry: "Agriculture & Farming",
    category: "Raw materials",
    location: "Nashik",
    quantity: "850 m available",
    price: 28,
    unit: "per metre",
    icon: "🌱",
    iconKey: "crop",
    color: "#ead8b8",
    image: imageUrl("photo-1500382017468-9049fed747ef"),
    supplier: "Deccan Farm Supply",
    description: "Drip irrigation pipe coils for farm water systems. Confirm diameter and pickup quantity with the supplier."
  },
  {
    name: "Reclaimed construction bricks",
    industry: "Construction & Building",
    category: "Surplus",
    location: "Jaipur",
    quantity: "2,400 bricks available",
    price: 8,
    unit: "per brick",
    icon: "🧱",
    iconKey: "build",
    color: "#ead1b8",
    image: imageUrl("photo-1504307651254-35680f356dfd"),
    supplier: "Pink City Salvage",
    description: "Clean reclaimed bricks from a renovation project. Inspect the lot and arrange local transport before purchase."
  },
  {
    name: "Mixed electronic components lot",
    industry: "Electronics & Electrical",
    category: "Surplus",
    location: "Bengaluru",
    quantity: "120 components",
    price: 35,
    unit: "per piece",
    icon: "🔌",
    iconKey: "electronics",
    color: "#d9e0df",
    image: imageUrl("photo-1518770660439-4636190af475"),
    supplier: "Circuit Loop Traders",
    description: "Assorted boards and electronic components from excess stock. Request the component list and condition details."
  },
  {
    name: "Solid wood table panels",
    industry: "Furniture & Wood",
    category: "Raw materials",
    location: "Mysuru",
    quantity: "36 panels available",
    price: 1450,
    unit: "per panel",
    icon: "🪑",
    iconKey: "furniture",
    color: "#e8d3b4",
    image: imageUrl("photo-1530124566582-a618bc2615dc"),
    supplier: "Mysuru Timber Works",
    description: "Sanded wood panels suitable for furniture making. Confirm dimensions, finish, and available quantity."
  },
  {
    name: "Recycled kraft paper rolls",
    industry: "Paper & Printing",
    category: "Raw materials",
    location: "Surat",
    quantity: "420 kg available",
    price: 62,
    unit: "per kg",
    icon: "📄",
    iconKey: "paper",
    color: "#eadfc8",
    image: imageUrl("photo-1504711434969-e33886168f5c"),
    supplier: "Saras Paper House",
    description: "Recycled kraft paper rolls for packaging and print jobs. Ask for roll width and GSM before ordering."
  },
  {
    name: "Commercial vehicle tyres · inspected",
    industry: "Automotive & Transport",
    category: "Pre-owned",
    location: "Pune",
    quantity: "8 tyres available",
    price: 3200,
    unit: "per tyre",
    icon: "🚗",
    iconKey: "auto",
    color: "#d8d9d6",
    image: imageUrl("photo-1486262715619-67b85e0b08d3"),
    supplier: "Pune Fleet Reuse",
    description: "Inspected commercial tyres released during fleet replacement. Check tread, size, and fitment before purchase."
  },
  {
    name: "Solar panel mounting rails",
    industry: "Renewable Energy",
    category: "Surplus",
    location: "Hyderabad",
    quantity: "60 rails available",
    price: 540,
    unit: "per rail",
    icon: "☀️",
    iconKey: "energy",
    color: "#f0e0b9",
    image: imageUrl("photo-1509391366360-2e959784a276"),
    supplier: "SunGrid Components",
    description: "Unused mounting rails left from a completed installation. Verify rail length and connector compatibility."
  },
  {
    name: "Laboratory glassware set",
    industry: "Chemicals & Laboratory",
    category: "Pre-owned",
    location: "Chennai",
    quantity: "24 pieces · inspected",
    price: 1800,
    unit: "per set",
    icon: "🧪",
    iconKey: "lab",
    color: "#dce5e2",
    image: imageUrl("photo-1532094349884-543bc11b234d"),
    supplier: "SouthLab Exchange",
    description: "A cleaned set of reusable lab glassware. Confirm the included pieces and suitability for your application."
  },
  {
    name: "Ergonomic office chairs · refurbished",
    industry: "Office & Commercial",
    category: "Pre-owned",
    location: "Mumbai",
    quantity: "12 chairs available",
    price: 4200,
    unit: "per chair",
    icon: "🗄️",
    iconKey: "office",
    color: "#dedbd4",
    image: imageUrl("photo-1497366754035-f200968a6e72"),
    supplier: "Workspace Renew",
    description: "Refurbished chairs from an office refresh. Arrange a visit to check adjustment, upholstery, and delivery."
  },
  {
    name: "Sorted recycled PET flakes",
    industry: "Plastics & Recycling",
    category: "Raw materials",
    location: "Ahmedabad",
    quantity: "300 kg available",
    price: 78,
    unit: "per kg",
    icon: "♻️",
    iconKey: "recycle",
    color: "#d9e3df",
    image: imageUrl("photo-1605600659873-d808a13e4d9a"),
    supplier: "ReForm Materials",
    description: "Sorted recycled PET flakes for suitable manufacturing processes. Request a sample and grade specification."
  }
];

const additionalListings = [
  ["Combed cotton yarn · natural", "Textiles & Apparel", "Raw materials", "Coimbatore", "180 kg available", 295, "per kg", "🧶", "fabric", "#ead6bc", "photo-1523381210434-271e8be1f52b", "Loom & Fibre Co.", "Natural cotton yarn in a production-ready lot. Confirm count, shade, and quantity with the supplier."],
  ["Denim cutting offcuts · surplus", "Textiles & Apparel", "Surplus", "Bengaluru", "95 kg available", 110, "per kg", "🧵", "fabric", "#d9c9b7", "photo-1551232864-3f0890e580d9", "Indigo Reuse Works", "Clean denim offcuts suitable for patchwork and small textile products. Lot inspection is available."],
  ["Workshop bench drill press", "Industrial Machinery", "Pre-owned", "Pune", "1 unit · tested", 18500, "per unit", "⚙️", "machine", "#d9d8cf", "photo-1581092160562-40aa08e78837", "Pune Tool Exchange", "Tested bench drill press from a workshop upgrade. Check capacity and arrange an inspection."],
  ["CNC tool holders · mixed lot", "Industrial Machinery", "Surplus", "Ahmedabad", "18 pieces available", 950, "per piece", "⚙️", "machine", "#d5d8d6", "photo-1581092580497-e0d23cbdf1dc", "Precision Shop Supply", "Unused tool holders from excess inventory. Confirm taper, size, and machine compatibility."],
  ["Reusable plastic transport crates", "Packaging & Logistics", "Pre-owned", "Chennai", "140 crates available", 95, "per crate", "📦", "box", "#e9d8b7", "photo-1586528116311-ad8dd3c8310d", "Coastline Pack Loop", "Stackable crates released from a distribution route. Check dimensions and condition before collection."],
  ["Honeycomb paperboard sheets", "Packaging & Logistics", "Raw materials", "Hyderabad", "320 sheets available", 24, "per sheet", "📦", "box", "#eadfc8", "photo-1578575437130-527eed3abbec", "Mitra Packaging", "Protective paperboard sheets for packing and transit. Ask for sheet size and thickness."],
  ["Aluminium sheet 6061 · cut size", "Metals & Fabrication", "Raw materials", "Ahmedabad", "280 kg available", 310, "per kg", "🔩", "metal", "#d7d9d6", "photo-1567789884554-0b844b597180", "Aruna Steel Traders", "6061 aluminium sheets offered in a mixed cut-size lot. Confirm thickness and grade documents."],
  ["Stainless steel pipe offcuts", "Metals & Fabrication", "Surplus", "Pune", "160 kg available", 145, "per kg", "🔩", "metal", "#dce0dd", "photo-1504917595217-d4dc5ebe6122", "ForgeLine Metals", "Sorted stainless pipe offcuts from fabrication work. Review lengths and grade before purchase."],
  ["Convection oven · inspected", "Food & Hospitality", "Pre-owned", "Bengaluru", "1 unit · working", 42000, "per unit", "🧊", "fridge", "#e7d7b7", "photo-1556911220-bff31c812dba", "Freshline Equipment", "Working commercial convection oven from a kitchen refresh. Confirm capacity and power requirements."],
  ["Stainless steel prep table", "Food & Hospitality", "Pre-owned", "Chennai", "2 tables available", 7800, "per table", "🧊", "fridge", "#e2ded5", "photo-1517248135467-4c7edcad34c4", "Harbour Kitchen Supply", "Used stainless prep tables available after a restaurant refit. Check dimensions and pickup options."],
  ["Whole cumin seeds · bulk lot", "Food & Agriculture", "Finished goods", "Nashik", "250 kg ready stock", 185, "per kg", "🌾", "turmeric", "#efd59c", "photo-1596040033229-a9821ebd058d", "Vaigai Agro Collective", "Cleaned cumin seeds packed for bulk supply. Request a sample and harvest details."],
  ["Reusable grain sacks · bundle", "Food & Agriculture", "Raw materials", "Coimbatore", "600 sacks available", 18, "per sack", "🌾", "turmeric", "#ead8b8", "photo-1542838132-92c53300491e", "Harvest Pack Partners", "Durable empty sacks for farm and food handling. Confirm size, material, and bundle count."],
  ["Protective safety goggles · carton", "Industrial Supplies", "Finished goods", "Chennai", "40 cartons available", 1250, "per carton", "🧤", "glove", "#e5d7c3", "photo-1581091226825-a6a2a5aee158", "SafeHands Supply", "Bulk protective eyewear for workshop use. Ask about lens type and carton quantities."],
  ["Hydraulic hose fittings · surplus", "Industrial Supplies", "Surplus", "Pune", "75 fittings available", 85, "per fitting", "🧤", "glove", "#ded6c9", "photo-1581092580497-e0d23cbdf1dc", "Deccan Industrial Mart", "Assorted unused hose fittings from excess stock. Verify thread and pressure specifications."],
  ["Seedling trays · reusable", "Agriculture & Farming", "Pre-owned", "Nashik", "90 trays available", 42, "per tray", "🌱", "crop", "#ead8b8", "photo-1500382017468-9049fed747ef", "Deccan Farm Supply", "Reusable nursery trays from a seasonal operation. Check cell size and condition before pickup."],
  ["Organic compost · screened", "Agriculture & Farming", "Finished goods", "Mysuru", "1,000 kg available", 12, "per kg", "🌱", "crop", "#e7d8bd", "photo-1592982537447-6f2a6a0a4a5e", "Mysuru Soil Collective", "Screened compost for soil improvement. Request a sample and confirm packing options."],
  ["Exterior plywood sheets · 18 mm", "Construction & Building", "Raw materials", "Jaipur", "48 sheets available", 1850, "per sheet", "🧱", "build", "#ead1b8", "photo-1503387762-592deb58ef4e", "Pink City Build Supply", "Plywood sheets for interior and construction work. Confirm grade, dimensions, and delivery."],
  ["Reclaimed timber door frames", "Construction & Building", "Surplus", "Mysuru", "16 frames available", 650, "per frame", "🧱", "build", "#e5d4bc", "photo-1518780664697-55e3ad937233", "SouthBuild Salvage", "Recovered timber frames from a building renovation. Inspect sizes and condition before purchase."],
  ["Digital multimeters · tested", "Electronics & Electrical", "Pre-owned", "Bengaluru", "10 units available", 1250, "per unit", "🔌", "electronics", "#d9e0df", "photo-1519389950473-47ba0277781c", "Circuit Loop Traders", "Tested meters from a lab refresh. Confirm model, included leads, and calibration status."],
  ["Copper wire coils · assorted", "Electronics & Electrical", "Raw materials", "Chennai", "95 kg available", 720, "per kg", "🔌", "electronics", "#d9d5c9", "photo-1518770660439-4636190af475", "South Circuit Supply", "Assorted copper wire coils for electrical work. Confirm gauge, insulation, and coil lengths."],
  ["Solid wood chair legs · set", "Furniture & Wood", "Raw materials", "Mysuru", "80 sets available", 340, "per set", "🪑", "furniture", "#e8d3b4", "photo-1505693416388-ac5ce068fe85", "Mysuru Timber Works", "Turned wood legs ready for furniture assembly. Ask for dimensions, wood type, and finish."],
  ["Workshop stools · refurbished", "Furniture & Wood", "Pre-owned", "Mumbai", "14 stools available", 1600, "per stool", "🪑", "furniture", "#e3d8c8", "photo-1497366811353-6870744d04b2", "Second Life Furnishings", "Refurbished workshop stools from a studio closure. Arrange a visit to check comfort and finish."],
  ["Corrugated paper sheets · bulk", "Paper & Printing", "Raw materials", "Surat", "500 sheets available", 16, "per sheet", "📄", "paper", "#eadfc8", "photo-1504711434969-e33886168f5c", "Saras Paper House", "Corrugated sheets for protective packaging. Confirm sheet size and flute profile."],
  ["Offset paper stock · surplus", "Paper & Printing", "Surplus", "Chennai", "360 kg available", 48, "per kg", "📄", "paper", "#e9e2d3", "photo-1455390582262-044cdead277a", "PrintCycle Traders", "Unused paper stock from a completed print run. Ask for GSM, sheet size, and stock photos."],
  ["Alternator assemblies · inspected", "Automotive & Transport", "Pre-owned", "Pune", "6 units available", 5400, "per unit", "🚗", "auto", "#d8d9d6", "photo-1486262715619-67b85e0b08d3", "Pune Fleet Reuse", "Inspected alternators removed during fleet maintenance. Verify part numbers and vehicle fitment."],
  ["Commercial brake pad kits", "Automotive & Transport", "Finished goods", "Ahmedabad", "32 kits available", 1850, "per kit", "🚗", "auto", "#e1ddd5", "photo-1492144534655-ae79c964c9d7", "RoadReady Parts", "New brake pad kits for commercial vehicles. Confirm model compatibility before ordering."],
  ["Solar inverter · serviced", "Renewable Energy", "Pre-owned", "Hyderabad", "1 unit · tested", 18500, "per unit", "☀️", "energy", "#f0e0b9", "photo-1509391366360-2e959784a276", "SunGrid Components", "Serviced solar inverter from a system upgrade. Check output rating and installation needs."],
  ["PV cable coils · surplus", "Renewable Energy", "Surplus", "Jaipur", "220 m available", 42, "per metre", "☀️", "energy", "#e9dec5", "photo-1473341304170-971dccb5ac1e", "SunGrid Components", "Unused cable coils from a completed installation. Verify gauge, length, and connector compatibility."],
  ["Borosilicate beakers · assorted", "Chemicals & Laboratory", "Finished goods", "Chennai", "36 pieces available", 145, "per piece", "🧪", "lab", "#dce5e2", "photo-1532094349884-543bc11b234d", "SouthLab Exchange", "Assorted borosilicate beakers for laboratory use. Confirm sizes and request condition details."],
  ["Chemical-resistant storage drums", "Chemicals & Laboratory", "Pre-owned", "Mumbai", "8 drums available", 950, "per drum", "🧪", "lab", "#d9e0df", "photo-1582719471384-894fbb16e074", "LabStore Renew", "Clean empty storage drums available for reuse. Confirm prior use, capacity, and material compatibility."],
  ["Modular office desks · refurbished", "Office & Commercial", "Pre-owned", "Mumbai", "9 desks available", 6800, "per desk", "🗄️", "office", "#dedbd4", "photo-1497366754035-f200968a6e72", "Workspace Renew", "Refurbished modular desks from an office move. Check size, cable ports, and delivery availability."],
  ["Printer toner cartridges · sealed lot", "Office & Commercial", "Surplus", "Pune", "28 cartridges available", 780, "per cartridge", "🗄️", "office", "#e8e4dc", "photo-1497366811353-6870744d04b2", "DeskCycle Supplies", "Sealed surplus toner cartridges. Match the printer model and confirm expiry before ordering."],
  ["Recycled HDPE regrind", "Plastics & Recycling", "Raw materials", "Ahmedabad", "420 kg available", 64, "per kg", "♻️", "recycle", "#d9e3df", "photo-1532996122724-e3c354a0b15b", "ReForm Materials", "Sorted HDPE regrind for compatible manufacturing. Request a sample and grade information."],
  ["PET preforms · excess stock", "Plastics & Recycling", "Surplus", "Surat", "2,000 pieces available", 3, "per piece", "♻️", "recycle", "#dce4df", "photo-1605600659873-d808a13e4d9a", "ReForm Materials", "Unused PET preforms from excess inventory. Confirm neck finish, weight, and colour." ]
].map(([name, industry, category, location, quantity, price, unit, icon, iconKey, color, photo, supplier, description]) => ({
  name, industry, category, location, quantity, price, unit, icon, iconKey, color,
  image: imageUrl(photo), supplier, description
}));

listings.push(...additionalListings);

const industries = [
  { name: "Textiles & Apparel", iconKey: "fabric", color: "#f1dfc4" },
  { name: "Industrial Machinery", iconKey: "machine", color: "#e2e1d7" },
  { name: "Packaging & Logistics", iconKey: "box", color: "#f0dfb9" },
  { name: "Metals & Fabrication", iconKey: "metal", color: "#e1e4e2" },
  { name: "Food & Hospitality", iconKey: "fridge", color: "#f0dfc4" },
  { name: "Food & Agriculture", iconKey: "turmeric", color: "#f3e2b4" },
  { name: "Industrial Supplies", iconKey: "glove", color: "#eee0d5" },
  { name: "Agriculture & Farming", iconKey: "crop", color: "#f0e2c9" },
  { name: "Construction & Building", iconKey: "build", color: "#f0dfd1" },
  { name: "Electronics & Electrical", iconKey: "electronics", color: "#dfe7e8" },
  { name: "Furniture & Wood", iconKey: "furniture", color: "#ecddc8" },
  { name: "Paper & Printing", iconKey: "paper", color: "#eee5d2" },
  { name: "Automotive & Transport", iconKey: "auto", color: "#e1e1dc" },
  { name: "Renewable Energy", iconKey: "energy", color: "#f4e8c8" },
  { name: "Chemicals & Laboratory", iconKey: "lab", color: "#dfe8e4" },
  { name: "Office & Commercial", iconKey: "office", color: "#e8e4dc" },
  { name: "Plastics & Recycling", iconKey: "recycle", color: "#dfe8e2" }
];

const $ = (selector) => document.querySelector(selector);
const industryOptions = $("#industryOptions");
const industrySearch = $("#industrySearch");
const industryEmpty = $("#industryEmpty");
const industryPicker = $("#industryPicker");
const marketResults = $("#marketResults");
const selectedIndustryTitle = $("#selectedIndustryTitle");
const grid = $("#listingGrid");
const itemSearch = $("#itemSearch");
const locationFilter = $("#locationFilter");
const sortFilter = $("#sortFilter");
const listingCount = $("#listingCount");
const emptyState = $("#emptyState");
const savedFilter = $("#savedFilter");
const savedCount = $("#savedCount");
const listingDialog = $("#listingDialog");
const dialogContent = $("#dialogContent");

/* Keep each navigation choice in its own in-site page view. */
const siteMain = document.querySelector(".site > main");
const sourceSections = [...siteMain.children];
const pageViews = new Map();

function makePageView(name, sections = []) {
  const view = document.createElement("div");
  view.className = "page-view";
  view.dataset.pageView = name;
  sections.forEach((section) => view.append(section));
  pageViews.set(name, view);
  return view;
}

const homeView = makePageView("home", [sourceSections[0], sourceSections[2]]);
const browseView = makePageView("browse", [sourceSections[1]]);
const howView = makePageView("how", [sourceSections[3]]);
const aboutView = makePageView("about", [sourceSections[4]]);
siteMain.replaceChildren(homeView, browseView, howView, aboutView);

function makeStandaloneView(name, eyebrow, title, description) {
  const view = document.createElement("section");
  view.className = "page-view standalone-view";
  view.dataset.pageView = name;
  view.innerHTML = `<div class="standalone-heading"><p class="eyebrow"><span></span>${escapeHTML(eyebrow)}</p><h1>${escapeHTML(title)}</h1><p>${escapeHTML(description)}</p></div><div class="standalone-body" data-view-body="${escapeHTML(name)}"></div>`;
  siteMain.append(view);
  pageViews.set(name, view);
  return view;
}

makeStandaloneView("sell", "SHARE WHAT YOU HAVE", "List useful goods.", "Add materials, surplus stock, or equipment for others to discover.");
makeStandaloneView("messages", "YOUR CONVERSATIONS", "Messages", "Keep track of supplier and buyer conversations in one place.");
makeStandaloneView("history", "RECENTLY VIEWED", "Browsing history", "Return to listings you have explored recently.");
makeStandaloneView("saved", "YOUR COLLECTION", "Saved listings", "Keep useful listings close while you compare options.");
makeStandaloneView("settings", "YOUR PREFERENCES", "Settings", "Choose how TradeBridge works for you.");
makeStandaloneView("help", "HERE TO HELP", "Help & support", "Find quick guidance for using the TradeBridge marketplace.");
makeStandaloneView("profile", "YOUR TRADEBRIDGE SPACE", "Your profile", "Manage the details people use to connect with you.");

let currentPage = "home";

let selectedIndustry = "";
let selectedCategory = "all";
let showSavedOnly = false;
const historyKey = "tradeBridgeHistory";

function loadHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem(historyKey) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function recordHistory(item) {
  const history = loadHistory().filter((entry) => !(entry.name === item.name && entry.supplier === item.supplier));
  history.unshift({
    name: item.name,
    industry: item.industry,
    location: item.location,
    price: item.price,
    unit: item.unit,
    supplier: item.supplier
  });
  try { localStorage.setItem(historyKey, JSON.stringify(history.slice(0, 30))); } catch { /* Optional browser history. */ }
}

let savedListings = loadSavedListings();

function loadSavedListings() {
  try {
    return JSON.parse(localStorage.getItem("tradeBridgeSaved") || "[]");
  } catch {
    return [];
  }
}

function saveSavedListings() {
  try {
    localStorage.setItem("tradeBridgeSaved", JSON.stringify(savedListings));
  } catch {
    // Saved listings still work for the current page view if storage is unavailable.
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[character]));
}

function formatPrice(amount) {
  return `₹${new Intl.NumberFormat("en-IN").format(amount)}`;
}

function renderIndustryOptions(searchTerm = "") {
  const query = searchTerm.trim().toLowerCase();
  const filtered = industries.filter((industry) =>
    industry.name.toLowerCase().includes(query)
  );

  industryEmpty.hidden = filtered.length > 0;
  industryOptions.innerHTML = filtered.map((industry) => `
    <button class="industry-option ${selectedIndustry === industry.name ? "selected" : ""}"
      type="button" data-industry="${escapeHTML(industry.name)}"
      aria-pressed="${selectedIndustry === industry.name}">
      <span class="industry-illustration"
        style="--industry-bg:${industry.color}" aria-hidden="true">${iconSvg(industry.iconKey)}</span>
      <span>${escapeHTML(industry.name)}</span>
    </button>
  `).join("");
}

function renderListings() {
  const searchTerm = itemSearch.value.trim().toLowerCase();
  const selectedLocation = locationFilter.value;
  const sortChoice = sortFilter.value;

  let filtered = listings
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => {
      const searchableText =
        `${item.name} ${item.category} ${item.location} ${item.supplier}`.toLowerCase();

      return item.industry === selectedIndustry &&
        searchableText.includes(searchTerm) &&
        (!selectedLocation || item.location === selectedLocation) &&
        (selectedCategory === "all" || item.category === selectedCategory) &&
        (!showSavedOnly || savedListings.includes(index));
    });

  if (sortChoice === "low") filtered.sort((a, b) => a.item.price - b.item.price);
  if (sortChoice === "high") filtered.sort((a, b) => b.item.price - a.item.price);

  listingCount.textContent =
    `${filtered.length} ${filtered.length === 1 ? "listing" : "listings"} found`;
  emptyState.hidden = filtered.length > 0;

  grid.innerHTML = filtered.map(({ item, index }) => `
    <article class="listing-card">
      <div class="listing-art" style="--art-bg:${item.color}">
        <span class="art-icon-badge">${iconSvg(item.iconKey)}</span>
        <img class="listing-image" src="${item.image}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async">
        <span class="listing-tag">${escapeHTML(item.category)}</span>
        <button class="save-listing ${savedListings.includes(index) ? "saved" : ""}"
          type="button" data-save="${index}"
          aria-label="${savedListings.includes(index) ? "Remove saved listing" : "Save listing"}"
          aria-pressed="${savedListings.includes(index)}">
          ${savedListings.includes(index) ? "♥" : "♡"}
        </button>
      </div>
      <div class="listing-body">
        <span class="listing-category">${escapeHTML(item.industry)}</span>
        <h4>${escapeHTML(item.name)}</h4>
        <div class="listing-meta">
          <span>${iconSvg("pin", "meta-icon")} ${escapeHTML(item.location)}</span>
          <span>${escapeHTML(item.quantity)}</span>
        </div>
        <p class="listing-price">${formatPrice(item.price)} <small>${escapeHTML(item.unit)}</small></p>
        <button class="listing-action" type="button" data-listing="${index}">
          View listing <span>↗</span>
        </button>
      </div>
    </article>
  `).join("");
}

function setIndustryView(showPicker) {
  industryPicker.hidden = !showPicker;
  marketResults.hidden = showPicker;
}

function updateSavedCount() {
  savedCount.textContent = String(savedListings.length);
}

industrySearch.addEventListener("input", () => renderIndustryOptions(industrySearch.value));

industryOptions.addEventListener("click", (event) => {
  const option = event.target.closest("[data-industry]");
  if (!option) return;

  selectedIndustry = option.dataset.industry;
  selectedIndustryTitle.textContent = selectedIndustry;
  setIndustryView(false);
  itemSearch.value = "";
  locationFilter.value = "";
  sortFilter.value = "featured";
  selectedCategory = "all";
  showSavedOnly = false;
  savedFilter.classList.remove("active");
  savedFilter.setAttribute("aria-pressed", "false");
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === "all");
  });

  renderIndustryOptions(industrySearch.value);
  renderListings();
});

$("#changeIndustry").addEventListener("click", () => {
  industrySearch.value = "";
  renderIndustryOptions();
  setIndustryView(true);
  $(".industry-search").scrollIntoView({ behavior: "smooth", block: "center" });
  industrySearch.focus({ preventScroll: true });
});

itemSearch.addEventListener("input", renderListings);
locationFilter.addEventListener("change", renderListings);
sortFilter.addEventListener("change", renderListings);

$("#categoryFilters").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-category]");
  if (!chip) return;
  selectedCategory = chip.dataset.category;
  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button === chip);
  });
  renderListings();
});

savedFilter.addEventListener("click", () => {
  showSavedOnly = !showSavedOnly;
  savedFilter.classList.toggle("active", showSavedOnly);
  savedFilter.setAttribute("aria-pressed", String(showSavedOnly));
  renderListings();
});

grid.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const index = Number(saveButton.dataset.save);
    savedListings = savedListings.includes(index)
      ? savedListings.filter((savedIndex) => savedIndex !== index)
      : [...savedListings, index];
    saveSavedListings();
    updateSavedCount();
    renderListings();
    return;
  }

  const viewButton = event.target.closest("[data-listing]");
  if (!viewButton) return;

  const item = listings[Number(viewButton.dataset.listing)];
  if (!item) return;
  recordHistory(item);

  dialogContent.innerHTML = `
    <img class="dialog-image" src="${item.image}" alt="${escapeHTML(item.name)}">
    <span class="dialog-category">${escapeHTML(item.industry)} · ${escapeHTML(item.category)}</span>
    <h3>${escapeHTML(item.name)}</h3>
    <p class="dialog-meta">⌖ ${escapeHTML(item.location)} · ${escapeHTML(item.quantity)}</p>
    <p class="dialog-price">${formatPrice(item.price)} <small>${escapeHTML(item.unit)}</small></p>
    <p class="dialog-description">${escapeHTML(item.description)}</p>
    <p><strong>Supplier:</strong> ${escapeHTML(item.supplier)}</p>
    <button class="button button-dark" id="contactSupplier" type="button">
      Contact supplier <span>↗</span>
    </button>
    <p class="dialog-note">Prototype preview: this does not send a real message.</p>
  `;

  listingDialog.showModal();

  $("#contactSupplier").addEventListener("click", () => {
    dialogContent.innerHTML = `
      <span class="dialog-category">TRADEBRIDGE PREVIEW</span>
      <h3>Thanks for your interest.</h3>
      <p class="dialog-description">
        The contact feature will let you reach ${escapeHTML(item.supplier)} about this listing.
      </p>
      <button class="button button-dark" id="closeThanks" type="button">Got it</button>
    `;
    $("#closeThanks").addEventListener("click", () => listingDialog.close());
  });
});

grid.addEventListener("error", (event) => {
  const image = event.target.closest(".listing-image");
  if (!image) return;
  image.hidden = true;
  image.closest(".listing-art")?.classList.add("image-unavailable");
}, true);

$("#listingDialogClose").addEventListener("click", () => listingDialog.close());
listingDialog.addEventListener("click", (event) => {
  if (event.target === listingDialog) listingDialog.close();
});

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");
let profileData = loadProfile();

function loadProfile() {
  try { return { name: "", contact: "", business: "", location: "", industry: "", ...JSON.parse(localStorage.getItem("tradeBridgeProfile") || "{}") }; }
  catch { return { name: "", contact: "", business: "", location: "", industry: "" }; }
}

function saveProfile() {
  try { localStorage.setItem("tradeBridgeProfile", JSON.stringify(profileData)); } catch { /* Profile remains usable for this page session. */ }
}

function renderStandalonePage(page) {
  const body = siteMain.querySelector(`[data-view-body="${page}"]`);
  if (!body) return;

  if (page === "sell") {
    body.innerHTML = `
      <form class="sell-page-form" id="sellPageForm">
        <label>Item name<input name="name" placeholder="e.g. Cotton fabric rolls" required></label>
        <label>Industry<select name="industry" required>${industries.map((item) => `<option>${escapeHTML(item.name)}</option>`).join("")}</select></label>
        <label>Listing type<select name="category"><option>Raw materials</option><option>Surplus</option><option>Pre-owned</option><option>Finished goods</option></select></label>
        <label>Location<input name="location" placeholder="Your city" required></label>
        <label>Price (₹)<input name="price" type="number" min="1" placeholder="Enter price" required></label>
        <label>Quantity available<input name="quantity" placeholder="e.g. 100 kg available" required></label>
        <label class="wide-field">Description<textarea name="description" placeholder="Share condition, specifications, and pickup details"></textarea></label>
        <button class="button button-dark" type="submit">Preview listing <span>↗</span></button>
        <p class="page-note">Prototype preview only. Your listing stays in this browser.</p>
      </form>`;
    return;
  }

  if (page === "messages") {
    body.innerHTML = `<div class="page-empty"><span>✉</span><h2>No conversations yet</h2><p>When you contact a supplier about a listing, your conversations will appear here.</p><a class="button button-dark" href="#marketplace" data-page-link="browse">Browse listings <span>↗</span></a></div>`;
    return;
  }

  if (page === "history") {
    const history = loadHistory();
    body.innerHTML = history.length ? `<div class="page-list">${history.map((item) => `<article class="page-list-card"><span class="page-list-icon">◷</span><span><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.industry)} · ${escapeHTML(item.location)} · ${escapeHTML(item.supplier)}</small></span><b>${formatPrice(Number(item.price) || 0)}</b></article>`).join("")}</div><button class="button button-outline" type="button" data-clear-history>Clear history</button>` : `<div class="page-empty"><span>◷</span><h2>No history yet</h2><p>Listings you view will appear here for quick access.</p><a class="button button-dark" href="#marketplace" data-page-link="browse">Browse listings <span>↗</span></a></div>`;
    return;
  }

  if (page === "saved") {
    const savedItems = savedListings.map((index) => ({ item: listings[index], index })).filter(({ item }) => item);
    body.innerHTML = savedItems.length ? `<div class="page-list">${savedItems.map(({ item, index }) => `<article class="page-list-card"><span class="page-list-icon">${iconSvg(item.iconKey)}</span><span><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.industry)} · ${escapeHTML(item.location)}</small></span><b>${formatPrice(item.price)}</b><button type="button" class="button button-outline" data-open-saved="${index}">View</button></article>`).join("")}</div>` : `<div class="page-empty"><span>${iconSvg("heart")}</span><h2>No saved listings yet</h2><p>Tap the heart on a listing to keep it here.</p><a class="button button-dark" href="#marketplace" data-page-link="browse">Browse listings <span>↗</span></a></div>`;
    return;
  }

  if (page === "settings") {
    body.innerHTML = `<div class="settings-page-card"><label class="setting-page-row"><span><strong>Reduce motion</strong><small>Limit animations and page movement</small></span><input id="reduceMotionSetting" type="checkbox" ${document.body.classList.contains("user-reduced-motion") ? "checked" : ""}></label><div class="setting-page-row"><span><strong>Saved listings</strong><small>${savedListings.length} item${savedListings.length === 1 ? "" : "s"} in your collection</small></span><button type="button" class="button button-outline" data-page-link="saved">View saved</button></div><p class="page-note">Preferences and saved listings are kept in this browser.</p></div>`;
    return;
  }

  if (page === "help") {
    body.innerHTML = `<div class="help-page-grid"><article><span>01</span><h2>How do I browse?</h2><p>Choose an industry, then filter by listing type, location, or price.</p></article><article><span>02</span><h2>How do I save an item?</h2><p>Tap the heart on any listing. Find saved items in Saved listings.</p></article><article><span>03</span><h2>How do I list goods?</h2><p>Open Sell from the menu and add the item details for a preview.</p></article></div>`;
    return;
  }

  if (page === "profile") {
    const myListings = listings.filter((item) => item.supplier === profileData.name).length;
    body.innerHTML = `
      <div class="profile-page-card">
        <div class="profile-page-summary"><span class="user-avatar">${escapeHTML((profileData.name || "G").charAt(0).toUpperCase())}</span><div><strong>${escapeHTML(profileData.name || "Guest")}</strong><small>TradeBridge member</small></div></div>
        <div class="profile-stats"><div><small>ACCOUNT</small><strong>Member</strong></div><div><small>YOUR LISTINGS</small><strong>${myListings}</strong></div><div><small>SAVED LISTINGS</small><strong>${savedListings.length}</strong></div></div>
        <form id="profilePageForm" class="profile-page-form">
          <label>First name<input name="name" value="${escapeHTML(profileData.name)}" required></label>
          <label>Mobile number / email ID<input name="contact" value="${escapeHTML(profileData.contact)}" placeholder="Add your contact details"></label>
          <label>Business or organization<input name="business" value="${escapeHTML(profileData.business)}" placeholder="Optional"></label>
          <label>City / location<input name="location" value="${escapeHTML(profileData.location)}" placeholder="Optional"></label>
          <label class="wide-field">Industry<input name="industry" value="${escapeHTML(profileData.industry)}" placeholder="e.g. Textiles & Apparel"></label>
          <button class="button button-dark" type="submit">Save profile <span>↗</span></button>
          <p class="page-note">Profile details are stored locally in this browser only.</p>
        </form>
      </div>`;
  }
}

function navigatePage(page, updateAddress = true) {
  if (!pageViews.has(page)) page = "home";
  closeMenu();
  if (["sell", "messages", "history", "saved", "settings", "help", "profile"].includes(page)) renderStandalonePage(page);
  pageViews.forEach((view, key) => { view.hidden = key !== page; });
  currentPage = page;
  mainNav.querySelectorAll("[data-tab], [data-menu-panel]").forEach((item) => {
    const active = (item.dataset.tab || item.dataset.menuPanel) === page;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page"); else item.removeAttribute("aria-current");
  });
  if (updateAddress) history.pushState({ page }, "", `#${page}`);
  window.scrollTo({ top: 0, behavior: document.body.classList.contains("user-reduced-motion") ? "auto" : "smooth" });
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
$("#sideClose").addEventListener("click", closeMenu);
$("#menuScrim").addEventListener("click", closeMenu);
document.addEventListener("click", (event) => {
  if (!event.target.closest("#sidePanel") && !event.target.closest("#menuToggle")) closeMenu();
});
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeMenu(); if (listingDialog.open) listingDialog.close(); } });

mainNav.addEventListener("click", (event) => {
  const menuPanel = event.target.closest("[data-menu-panel]");
  if (menuPanel) {
    navigatePage(menuPanel.dataset.menuPanel);
    return;
  }

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    event.preventDefault();
    navigatePage(tab.dataset.tab);
  }
});

$(".footer-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-footer-panel]");
  if (button) { navigatePage(button.dataset.footerPanel); return; }
  const link = event.target.closest("a");
  if (link) {
    const page = link.getAttribute("href") === "#marketplace" ? "browse" : "home";
    event.preventDefault();
    navigatePage(page);
  }
});

document.addEventListener("click", (event) => {
  if (event.defaultPrevented) return;
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const routes = { "#home": "home", "#marketplace": "browse", "#how-it-works": "how", "#about": "about" };
  const page = routes[link.getAttribute("href")];
  if (!page) return;
  event.preventDefault();
  navigatePage(page);
});

siteMain.addEventListener("click", (event) => {
  if (event.target.closest("[data-clear-history]")) {
    try { localStorage.removeItem(historyKey); } catch { /* Ignore unavailable storage. */ }
    renderStandalonePage("history");
    return;
  }

  const savedButton = event.target.closest("[data-open-saved]");
  if (savedButton) {
    const index = Number(savedButton.dataset.openSaved);
    const item = listings[index];
    if (!item) return;
    navigatePage("browse");
    selectedIndustry = item.industry;
    selectedIndustryTitle.textContent = selectedIndustry;
    setIndustryView(false);
    itemSearch.value = "";
    locationFilter.value = "";
    sortFilter.value = "featured";
    selectedCategory = "all";
    renderIndustryOptions(industrySearch.value);
    renderListings();
    grid.querySelector(`[data-listing="${index}"]`)?.click();
    return;
  }

  const pageLink = event.target.closest("[data-page-link]");
  if (pageLink) { event.preventDefault(); navigatePage(pageLink.dataset.pageLink); }
});

siteMain.addEventListener("submit", (event) => {
  if (event.target.id === "sellPageForm") {
    event.preventDefault();
    const values = new FormData(event.target);
    const industry = String(values.get("industry"));
    listings.push({
      name: String(values.get("name")).trim(), industry,
      category: String(values.get("category")), location: String(values.get("location")).trim(),
      quantity: String(values.get("quantity")).trim(), price: Number(values.get("price")), unit: "per item",
      icon: "📦", iconKey: "box", color: "#ead9bb", image: "./images/tradebridge-marketplace-hero.png",
      supplier: profileData.name || "TradeBridge member",
      description: String(values.get("description")).trim() || "Contact the supplier for more details."
    });
    selectedIndustry = industry;
    selectedIndustryTitle.textContent = industry;
    setIndustryView(false);
    itemSearch.value = "";
    locationFilter.value = "";
    sortFilter.value = "featured";
    selectedCategory = "all";
    renderIndustryOptions(industrySearch.value);
    renderListings();
    navigatePage("browse");
    return;
  }

  if (event.target.id === "profilePageForm") {
    event.preventDefault();
    const values = new FormData(event.target);
    profileData = Object.fromEntries(["name", "contact", "business", "location", "industry"].map((key) => [key, String(values.get(key) || "").trim()]));
    saveProfile();
    $("#welcomeName").textContent = profileData.name || "Guest";
    $("#userInitial").textContent = (profileData.name || "G").charAt(0).toUpperCase();
    renderStandalonePage("profile");
    const confirmation = document.createElement("p");
    confirmation.className = "profile-saved-note";
    confirmation.textContent = "Profile details saved on this device.";
    siteMain.querySelector('[data-view-body="profile"]').prepend(confirmation);
  }
});

siteMain.addEventListener("change", (event) => {
  if (event.target.id === "reduceMotionSetting") {
    document.body.classList.toggle("user-reduced-motion", event.target.checked);
    try { localStorage.setItem("tradeBridgeReduceMotion", String(event.target.checked)); } catch { /* Optional setting. */ }
  }
});

window.addEventListener("popstate", () => {
  const route = { "#marketplace": "browse", "#how-it-works": "how" }[location.hash] || location.hash.slice(1) || "home";
  navigatePage(route, false);
});

dialogContent.addEventListener("click", (event) => {
  if (!event.target.closest("[data-clear-history]")) return;
  try { localStorage.removeItem(historyKey); } catch { /* Ignore unavailable browser storage. */ }
  dialogContent.innerHTML = `
    <span class="dialog-category">RECENTLY VIEWED</span>
    <h3>Browsing history</h3>
    <div class="history-empty"><span>◷</span><strong>History cleared</strong><p>Listings you view will show up here.</p></div>
    <p class="dialog-note">Recent views are saved in this browser only.</p>
  `;
});

function enterMarketplace(name = "Guest", contact = "") {
  const cleanName = name.trim() || "Guest";
  profileData = { ...profileData, name: cleanName, contact: contact.trim() };
  saveProfile();
  $("#welcomeName").textContent = cleanName;
  $("#userInitial").textContent = cleanName.charAt(0).toUpperCase();
  $("#accountWidget").hidden = false;
  document.body.classList.remove("needs-login");
  window.scrollTo(0, 0);
}

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const contact = $("#loginContact").value.trim();
  const phone = contact.replace(/[\s()-]/g, "");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const validPhone = /^(?:\+?91)?[6-9]\d{9}$/.test(phone);
  const error = $("#loginError");
  if (!validEmail && !validPhone) {
    error.textContent = "Enter a valid email or 10-digit Indian mobile number.";
    error.hidden = false;
    $("#loginContact").focus();
    return;
  }
  error.hidden = true;
  enterMarketplace($("#loginName").value, contact);
});

$("#guestContinue").addEventListener("click", () => enterMarketplace("Guest"));
$("#logoutButton").addEventListener("click", exitMarketplace);

function exitMarketplace() {
  closeMenu();
  if (listingDialog.open) listingDialog.close();
  $("#accountWidget").hidden = true;
  $("#loginForm").reset();
  document.body.classList.add("needs-login");
  window.scrollTo(0, 0);
}

/* Short intro animation with Skip Intro button. */
const intro = $("#introLoader");
const skipButton = $("#skipIntro");
const progressBar = $("#loaderProgress");
const progressNumber = $("#loaderPercent");
const introDuration = 1500;
const introStart = performance.now();
let introClosed = false;

function closeIntro() {
  if (introClosed) return;
  introClosed = true;
  intro.classList.add("hide");
  document.body.classList.remove("is-loading");
  window.setTimeout(() => intro.remove(), 500);
}

function updateIntro(now) {
  if (introClosed) return;
  const progress = Math.min((now - introStart) / introDuration, 1);
  const percentage = Math.round(progress * 100);
  progressBar.style.width = `${percentage}%`;
  progressNumber.textContent = `${String(percentage).padStart(2, "0")}%`;

  if (progress >= 1) closeIntro();
  else requestAnimationFrame(updateIntro);
}

skipButton.addEventListener("click", closeIntro);
requestAnimationFrame(updateIntro);

renderIndustryOptions();
updateSavedCount();

try {
  if (localStorage.getItem("tradeBridgeReduceMotion") === "true") document.body.classList.add("user-reduced-motion");
} catch { /* Optional accessibility preference. */ }
const routeFromHash = { "#marketplace": "browse", "#how-it-works": "how" }[location.hash] || location.hash.slice(1) || "home";
navigatePage(routeFromHash, false);

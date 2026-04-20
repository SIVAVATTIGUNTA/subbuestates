export const company = {
  name: 'Subbu Estates',
  tagline: 'Verified ventures. Clear guidance. Confident ownership.',
  phone: '+919391080716',
  phoneDisplay: '+91 93910 80716',
  whatsapp: '919391080716',
  email: 'subbu.vaddelli@gmail.com',
  address: 'F-69,Madhura Nagar, Hyderabad, Telangana',
  hours: 'Mon - Sun, 10:00 AM - 7:00 PM'
};

export const propertyTypes = [
  {
    id: 'plots',
    label: 'Open Plots',
    short: 'Plots',
    icon: 'Map',
    summary: 'HMDA and DTCP plotted developments in growth corridors with clear documents.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'flats',
    label: 'Flats',
    short: 'Flats',
    icon: 'Building',
    summary: 'Move-in-ready and under-construction 2 BHK, 3 BHK, and premium apartments.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'commercial',
    label: 'Commercial Lands',
    short: 'Commercial',
    icon: 'Factory',
    summary: 'Road-facing parcels, warehouse land, and investment-ready business zones.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'agriculture',
    label: 'Agriculture Lands',
    short: 'Agriculture',
    icon: 'Sprout',
    summary: 'Farm land, managed farm plots, and long-horizon land banking opportunities.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'management',
    label: 'Property Management',
    short: 'Management',
    icon: 'Key',
    summary: 'Tenant search, rent collection, maintenance, inspections, and owner reports.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80'
  }
];

export const locations = [
  {
    name: 'Shadnagar',
    zone: 'South Hyderabad',
    count: 18,
    driver: 'Regional ring road influence, pharma and logistics demand',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Kondapur',
    zone: 'West Hyderabad',
    count: 12,
    driver: 'IT corridor access, rental demand, premium apartment supply',
    image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Mokila',
    zone: 'West Growth Belt',
    count: 9,
    driver: 'Villa communities, clean residential planning, investor interest',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Amaravati',
    zone: 'Capital Region',
    count: 11,
    driver: 'Institutional growth, highway access, plotted layouts',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=700&q=80'
  }
];

export const ventures = [
  {
    id: 'golden-orchard',
    name: 'Golden Orchard',
    type: 'Open Plots',
    location: 'Shadnagar',
    status: 'Ready to register',
    approval: 'HMDA approved',
    price: 'From Rs. 28L',
    units: '167 - 500 sq yd',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    highlights: ['60 ft entrance road', 'Underground drainage', 'Avenue plantation', 'Clear title support']
  },
  {
    id: 'skyline-heights',
    name: 'Skyline Heights',
    type: 'Premium Flats',
    location: 'Kondapur',
    status: 'Under construction',
    approval: 'RERA registered',
    price: 'From Rs. 82L',
    units: '2 and 3 BHK',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Clubhouse', 'EV charging', 'Work pods', 'High rental zone']
  },
  {
    id: 'orbit-business-park',
    name: 'Orbit Business Park',
    type: 'Commercial Land',
    location: 'Shamshabad',
    status: 'Limited inventory',
    approval: 'Conversion ready',
    price: 'From Rs. 4.2Cr',
    units: '1 - 5 acres',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    highlights: ['ORR access', 'Warehouse suitable', 'Wide frontage', 'Lease assistance']
  },
  {
    id: 'harvest-valley',
    name: 'Harvest Valley Farms',
    type: 'Agriculture Land',
    location: 'Chevella',
    status: 'Managed farms',
    approval: 'Clear passbooks',
    price: 'From Rs. 22L per acre',
    units: '1 - 12 acres',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Drip irrigation', 'Farm fencing', 'Weekend access', 'Caretaker option']
  }
];

export const properties = [
  {
    id: 'golden-orchard-east-facing-plot',
    title: 'Golden Orchard East Facing Plot',
    slug: 'golden-orchard-east-facing-plot',
    type: 'plots',
    venture: 'Golden Orchard',
    location: 'Shadnagar',
    price: 'Rs. 31.5L',
    priceValue: 31.5,
    area: '183 sq yd',
    status: 'Ready to register',
    badge: 'Featured',
    approval: 'HMDA',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A premium east-facing plot in a fully planned venture with wide roads, greenery, and quick access to the Bengaluru highway.',
    amenities: ['Blacktop roads', 'Electricity lines', 'Underground drainage', 'Compound wall', 'Avenue plantation', 'Children play area'],
    locationHighlights: ['8 min to NH 44', '18 min to Regional Ring Road proposed node', '35 min to airport'],
    featured: true
  },
  {
    id: 'skyline-heights-3bhk-kondapur',
    title: 'Skyline Heights 3 BHK Residence',
    slug: 'skyline-heights-3bhk-kondapur',
    type: 'flats',
    venture: 'Skyline Heights',
    location: 'Kondapur',
    price: 'Rs. 1.18Cr',
    priceValue: 118,
    area: '1,840 sq ft',
    status: 'Under construction',
    badge: 'High rental yield',
    approval: 'RERA',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A spacious 3 BHK apartment planned for working professionals and families who want clubhouse amenities and fast IT corridor access.',
    amenities: ['Clubhouse', 'Gymnasium', 'EV charging', '24/7 security', 'Co-working lounge', 'Power backup'],
    locationHighlights: ['10 min to Hitec City', '12 min to Gachibowli', 'Walkable retail and schools'],
    featured: true
  },
  {
    id: 'mokila-villa-corner-plot',
    title: 'Mokila Villa Community Corner Plot',
    slug: 'mokila-villa-corner-plot',
    type: 'plots',
    venture: 'Lakeview Meadows',
    location: 'Mokila',
    price: 'Rs. 74L',
    priceValue: 74,
    area: '267 sq yd',
    status: 'Limited inventory',
    badge: 'Corner unit',
    approval: 'DTCP',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Corner plot in a premium villa neighborhood with peaceful surroundings and fast access to the financial district growth belt.',
    amenities: ['Gated layout', 'Water connection', 'Street lighting', 'Park zone', 'Security cabin', 'Vastu-friendly plots'],
    locationHighlights: ['20 min to Financial District', 'Near reputed schools', 'Fast villa community growth'],
    featured: false
  },
  {
    id: 'orbit-commercial-frontage-land',
    title: 'ORR Frontage Commercial Land',
    slug: 'orbit-commercial-frontage-land',
    type: 'commercial',
    venture: 'Orbit Business Park',
    location: 'Shamshabad',
    price: 'Rs. 4.2Cr',
    priceValue: 420,
    area: '1 acre',
    status: 'Conversion ready',
    badge: 'Road facing',
    approval: 'Legal verified',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A high-visibility commercial parcel suitable for warehouses, showrooms, service centers, or long-term lease income.',
    amenities: ['Wide road frontage', 'Power access', 'Truck movement', 'Clear title check', 'Lease support', 'Survey assistance'],
    locationHighlights: ['Near airport corridor', 'ORR connectivity', 'Logistics and hospitality demand'],
    featured: true
  },
  {
    id: 'harvest-valley-managed-farm-acre',
    title: 'Harvest Valley Managed Farm Acre',
    slug: 'harvest-valley-managed-farm-acre',
    type: 'agriculture',
    venture: 'Harvest Valley Farms',
    location: 'Chevella',
    price: 'Rs. 22L',
    priceValue: 22,
    area: '1 acre',
    status: 'Managed farms',
    badge: 'Farm care',
    approval: 'Clear passbook',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A peaceful managed farm parcel with fencing, water access, and optional maintenance for hands-off owners.',
    amenities: ['Fencing', 'Bore access', 'Drip irrigation', 'Caretaker support', 'Internal track', 'Farmhouse planning support'],
    locationHighlights: ['Weekend-drive distance', 'Near village road', 'Good soil and water access'],
    featured: true
  },
  {
    id: 'amaravati-growth-corridor-plot',
    title: 'Amaravati Growth Corridor Plot',
    slug: 'amaravati-growth-corridor-plot',
    type: 'plots',
    venture: 'Capital County',
    location: 'Amaravati',
    price: 'Rs. 39L',
    priceValue: 39,
    area: '200 sq yd',
    status: 'Pre-launch',
    badge: 'Investor pick',
    approval: 'Layout submitted',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A plotted investment option in the Amaravati capital growth corridor with attractive pre-launch pricing.',
    amenities: ['Proposed gated layout', '30 and 40 ft roads', 'Park allocation', 'Boundary stones', 'Documentation support', 'Flexible payment'],
    locationHighlights: ['Capital region access', 'Near highway link', 'Institutional growth corridor'],
    featured: false
  },
  {
    id: 'guntur-midtown-2bhk-flat',
    title: 'Guntur Midtown 2 BHK Flat',
    slug: 'guntur-midtown-2bhk-flat',
    type: 'flats',
    venture: 'Midtown Residences',
    location: 'Guntur',
    price: 'Rs. 58L',
    priceValue: 58,
    area: '1,260 sq ft',
    status: 'Ready to move',
    badge: 'Family ready',
    approval: 'Approved plan',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A ready-to-move 2 BHK home near daily conveniences, schools, and transport routes in central Guntur.',
    amenities: ['Lift', 'Parking', 'Power backup', 'CCTV', 'Modular kitchen provision', 'Municipal water'],
    locationHighlights: ['Central Guntur address', 'Near schools and hospitals', 'Quick possession'],
    featured: false
  },
  {
    id: 'visakhapatnam-industrial-acre',
    title: 'Visakhapatnam Industrial Land Parcel',
    slug: 'visakhapatnam-industrial-acre',
    type: 'commercial',
    venture: 'Coastal Trade Yard',
    location: 'Visakhapatnam',
    price: 'Rs. 2.8Cr',
    priceValue: 280,
    area: '0.75 acre',
    status: 'Legal verified',
    badge: 'Port access',
    approval: 'Industrial use fit',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Industrial-use fit parcel suited for small manufacturing, storage, or service operations close to coastal trade movement.',
    amenities: ['Approach road', 'Power line nearby', 'Compound-ready', 'Survey completed', 'Document review', 'Brokerage support'],
    locationHighlights: ['Port-side business demand', 'Industrial neighborhood', 'Stable lease potential'],
    featured: false
  }
];

export const managementPackages = [
  {
    name: 'Essential Care',
    price: 'From 5% of monthly rent',
    description: 'For owners who need rent collection, tenant coordination, and quarterly inspections.',
    features: ['Tenant onboarding', 'Rent reminders', 'Quarterly inspection', 'Digital owner report']
  },
  {
    name: 'Complete Management',
    price: 'From 8% of monthly rent',
    description: 'Hands-off property management with maintenance coordination and renewal support.',
    features: ['Everything in Essential', 'Maintenance handling', 'Move-in and move-out checks', 'Lease renewal support']
  },
  {
    name: 'NRI Owner Desk',
    price: 'Custom plan',
    description: 'Dedicated support for NRI owners with document assistance and priority response.',
    features: ['Dedicated manager', 'Video inspection updates', 'Vendor supervision', 'Sale or rental advisory']
  }
];

export const testimonials = [
  {
    name: 'Ramesh K.',
    role: 'Plot buyer, Shadnagar',
    quote: 'The team explained every document clearly and helped us compare locations without pressure.'
  },
  {
    name: 'Anitha R.',
    role: 'NRI property owner',
    quote: 'Their property management reports and maintenance follow-up make ownership in India much easier.'
  },
  {
    name: 'Mahesh V.',
    role: 'Commercial land investor',
    quote: 'They brought serious location insight, legal coordination, and negotiation support into one place.'
  }
];

export const budgetBands = [
  { label: 'Any budget', value: 'any' },
  { label: 'Up to Rs. 30L', value: '0-30' },
  { label: 'Rs. 30L - 75L', value: '30-75' },
  { label: 'Rs. 75L - 1.5Cr', value: '75-150' },
  { label: 'Above Rs. 1.5Cr', value: '150-9999' }
];

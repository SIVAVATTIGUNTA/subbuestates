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
    id: 'dream-city-hmda-shadnagar',
    name: 'Dream City HMDA',
    type: 'Open Plots',
    location: 'Shadnagar',
    status: 'Trending',
    approval: 'HMDA approved',
    price: 'Rs. 17,000 per sq yd',
    units: 'Plots available',
    image: '/assets/dreamcity.jpeg',
    gallery: ['/assets/dreamcity.jpeg', '/assets/dreamcity1.jpeg', '/assets/dreamcity2.jpeg'],
    trending: true,
    highlights: ['East facing: Rs. 200 extra per sq yd', 'North East corner: Rs. 500 extra per sq yd', 'Other corner plots: Rs. 300 extra per sq yd', 'Located in Shadnagar growth corridor'],
    priceAddons: ['East facing + Rs. 200/sq yd', 'North East corner + Rs. 500/sq yd', 'Other corner plots + Rs. 300/sq yd']
  }
];

export const properties = [
  {
    id: 'dream-city-hmda-shadnagar',
    title: 'Dream City HMDA',
    slug: 'dream-city-hmda-shadnagar',
    type: 'plots',
    venture: 'Dream City HMDA',
    location: 'Shadnagar',
    price: 'Rs. 17,000/sq yd',
    priceValue: 17,
    area: 'Open plots',
    status: 'Available',
    badge: 'Trending',
    approval: 'HMDA',
    image: '/assets/dreamcity.jpeg',
    gallery: [
      '/assets/dreamcity.jpeg',
      '/assets/dreamcity1.jpeg',
      '/assets/dreamcity2.jpeg'
    ],
    summary: 'Dream City HMDA open plots in Shadnagar with base pricing at Rs. 17,000 per sq yd and facing or corner premiums based on plot selection.',
    amenities: ['HMDA approved venture', 'Open plots in Shadnagar', 'East facing: Rs. 200 extra per sq yd', 'North East corner: Rs. 500 extra per sq yd', 'Other corner plots: Rs. 300 extra per sq yd', 'Site visit support'],
    locationHighlights: ['Shadnagar growth corridor', 'Suitable for investment and future construction', 'Call for exact plot availability'],
    featured: true
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

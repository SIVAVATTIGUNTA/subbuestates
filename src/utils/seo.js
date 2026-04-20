export const routeSeo = {
  '/': {
    title: 'Subbu Estates | Premium Plots, Flats, Lands and Property Management',
    description: 'Explore verified open plots, flats, commercial lands, agriculture lands, featured ventures, and property management services.'
  },
  '/about': {
    title: 'About Subbu Estates | Real Estate Advisory and Venture Sales',
    description: 'Meet Subbu Estates, a professional real estate advisory team helping buyers and owners make confident property decisions.'
  },
  '/ventures': {
    title: 'Featured Ventures | Subbu Estates',
    description: 'Discover featured real estate ventures across growth locations, including plotted layouts, flats, commercial lands, and farm lands.'
  },
  '/properties': {
    title: 'Properties for Sale | Plots, Flats, Commercial and Agriculture Lands',
    description: 'Filter verified listings by property type, location, budget, approval, and status.'
  },
  '/property-management': {
    title: 'Property Management Services | Subbu Estates',
    description: 'Tenant search, rent collection, inspections, maintenance coordination, and NRI owner support from Subbu Estates.'
  },
  '/contact': {
    title: 'Contact Subbu Estates | Enquire About Properties and Management',
    description: 'Book a site visit, request a property shortlist, or speak with Subbu Estates about buying, selling, or managing property.'
  }
};

export function applySeo({ title, description, path = '/' }) {
  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', description);
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', `https://www.subbuestates.com${path === '/' ? '/' : path}`);
  }
}

export function getPropertySeo(property) {
  return {
    title: `${property.title} | ${property.location} | Subbu Estates`,
    description: `${property.title} in ${property.location}: ${property.area}, ${property.price}, ${property.status}. Enquire with Subbu Estates for site visit and documents.`
  };
}

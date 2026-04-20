import { useMemo, useState } from 'react';
import FilterPanel from '../components/FilterPanel.jsx';
import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import PageHero from '../components/PageHero.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { properties } from '../data/properties.js';

function getInitialType() {
  const params = new URLSearchParams(window.location.search);
  return params.get('type') || 'all';
}

function matchesBudget(property, budget) {
  if (budget === 'any') return true;
  const [min, max] = budget.split('-').map(Number);
  return property.priceValue >= min && property.priceValue <= max;
}

export default function Properties() {
  const [filters, setFilters] = useState({
    search: '',
    type: getInitialType(),
    location: 'all',
    budget: 'any',
    status: 'all'
  });

  const locations = useMemo(() => [...new Set(properties.map((property) => property.location))].sort(), []);

  const filteredProperties = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return properties.filter((property) => {
      const searchMatch =
        !search ||
        [property.title, property.venture, property.location, property.status, property.approval]
          .join(' ')
          .toLowerCase()
          .includes(search);
      const typeMatch = filters.type === 'all' || property.type === filters.type;
      const locationMatch = filters.location === 'all' || property.location === filters.location;
      const budgetMatch = matchesBudget(property, filters.budget);
      const statusMatch = filters.status === 'all' || property.status.toLowerCase().includes(filters.status.toLowerCase());

      return searchMatch && typeMatch && locationMatch && budgetMatch && statusMatch;
    });
  }, [filters]);

  return (
    <>
      <PageHero
        eyebrow="Property listings"
        title="Search plots, flats, commercial lands, and agriculture lands"
        text="Filter dummy listings by type, location, budget, and status. The structure is ready for API-backed inventory later."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section listings-section">
        <div className="container listing-layout">
          <FilterPanel filters={filters} onChange={setFilters} locations={locations} resultCount={filteredProperties.length} />

          <div className="listing-content">
            <div className="listing-topbar">
              <SectionHeader
                eyebrow="Available inventory"
                title={`${filteredProperties.length} properties found`}
                text="Every card includes pricing, approval, status, and a direct route to enquiry."
              />
              <a className="btn btn-primary" href="tel:+919876543210">
                <Icon name="Phone" size={17} />
                Speak to advisor
              </a>
            </div>

            {filteredProperties.length ? (
              <div className="property-grid">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <Icon name="Search" size={34} />
                <h2>No matching properties</h2>
                <p>Try widening your budget, changing the location, or sending an enquiry for a custom shortlist.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-layout">
          <div>
            <span className="eyebrow light">Custom shortlist</span>
            <h2>Cannot find the right property?</h2>
            <p>Tell us your preferred location, budget, and property type. We will prepare a curated shortlist.</p>
          </div>
          <LeadForm title="Get matching options" source="Properties page lead form" />
        </div>
      </section>
    </>
  );
}

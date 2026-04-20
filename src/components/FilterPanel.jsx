import { budgetBands, propertyTypes } from '../data/properties.js';
import Icon from './Icon.jsx';

export default function FilterPanel({ filters, onChange, locations, resultCount }) {
  function updateFilter(key, value) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <aside className="filter-panel">
      <div className="filter-title">
        <Icon name="Sliders" size={20} />
        <div>
          <h2>Find your property</h2>
          <p>
            {resultCount} matching {resultCount === 1 ? 'listing' : 'listings'}
          </p>
        </div>
      </div>

      <label>
        Search
        <div className="input-with-icon">
          <Icon name="Search" size={18} />
          <input
            type="search"
            value={filters.search}
            onChange={(event) => updateFilter('search', event.target.value)}
            placeholder="Search venture, location, title"
          />
        </div>
      </label>

      <label>
        Property type
        <select value={filters.type} onChange={(event) => updateFilter('type', event.target.value)}>
          <option value="all">All property types</option>
          {propertyTypes
            .filter((type) => type.id !== 'management')
            .map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
        </select>
      </label>

      <label>
        Location
        <select value={filters.location} onChange={(event) => updateFilter('location', event.target.value)}>
          <option value="all">All locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label>
        Budget
        <select value={filters.budget} onChange={(event) => updateFilter('budget', event.target.value)}>
          {budgetBands.map((budget) => (
            <option key={budget.value} value={budget.value}>
              {budget.label}
            </option>
          ))}
        </select>
      </label>

      <label>
        Status
        <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)}>
          <option value="all">Any status</option>
          <option value="Ready">Ready inventory</option>
          <option value="Under">Under construction</option>
          <option value="Pre">Pre-launch</option>
          <option value="Managed">Managed farms</option>
          <option value="Legal">Legal verified</option>
        </select>
      </label>

      <button
        className="btn btn-soft full-width"
        type="button"
        onClick={() => onChange({ search: '', type: 'all', location: 'all', budget: 'any', status: 'all' })}
      >
        Reset filters
      </button>
    </aside>
  );
}

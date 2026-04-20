import Icon from './Icon.jsx';
import Link from './Link.jsx';

const typeLabel = {
  plots: 'Open Plot',
  flats: 'Flat',
  commercial: 'Commercial Land',
  agriculture: 'Agriculture Land'
};

export default function PropertyCard({ property }) {
  return (
    <article className="property-card reveal">
      <Link href={`/properties/${property.slug}`} className="property-media" aria-label={`View ${property.title}`}>
        <img src={property.image} alt={property.title} loading="lazy" />
        <span className="property-badge">{property.badge}</span>
      </Link>

      <div className="property-body">
        <div className="property-meta">
          <span>{typeLabel[property.type]}</span>
          <span>{property.approval}</span>
        </div>

        <h3>
          <Link href={`/properties/${property.slug}`}>{property.title}</Link>
        </h3>

        <p className="location-line">
          <Icon name="MapPin" size={16} />
          {property.location} - {property.venture}
        </p>

        <div className="property-facts">
          <span>
            <strong>{property.price}</strong>
            Price
          </span>
          <span>
            <strong>{property.area}</strong>
            Area
          </span>
          <span>
            <strong>{property.status}</strong>
            Status
          </span>
        </div>

        <div className="card-actions">
          <Link href={`/properties/${property.slug}`} className="text-link">
            View details <Icon name="ChevronRight" size={16} />
          </Link>
          <a className="mini-cta" href="tel:+919876543210">
            <Icon name="Phone" size={16} />
            Call
          </a>
        </div>
      </div>
    </article>
  );
}

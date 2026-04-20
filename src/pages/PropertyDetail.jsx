import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import Link from '../components/Link.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company, properties } from '../data/properties.js';

export default function PropertyDetail({ property }) {
  const related = properties.filter((item) => item.type === property.type && item.id !== property.id).slice(0, 3);

  return (
    <>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div className="detail-copy">
            <Link href="/properties" className="text-link back-link">
              <Icon name="ChevronRight" size={16} />
              Back to properties
            </Link>
            <div className="venture-kicker">
              <span>{property.badge}</span>
              <span>{property.approval}</span>
            </div>
            <h1>{property.title}</h1>
            <p>{property.summary}</p>
            <div className="hero-mini-trust dark">
              <span>
                <Icon name="MapPin" size={17} />
                {property.location}
              </span>
              <span>
                <Icon name="Calendar" size={17} />
                {property.status}
              </span>
              <span>
                <Icon name="Shield" size={17} />
                Document assistance
              </span>
            </div>
          </div>

          <div className="detail-lead">
            <LeadForm compact title="Enquire about this property" source={property.title} />
          </div>
        </div>
      </section>

      <section className="section detail-gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {property.gallery.map((image, index) => (
              <img key={image} className={index === 0 ? 'gallery-main' : ''} src={image} alt={`${property.title} view ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main">
            <div className="detail-facts large">
              <span>
                <strong>{property.price}</strong>
                Price
              </span>
              <span>
                <strong>{property.area}</strong>
                Area
              </span>
              <span>
                <strong>{property.venture}</strong>
                Venture
              </span>
              <span>
                <strong>{property.status}</strong>
                Status
              </span>
            </div>

            <SectionHeader
              eyebrow="Property overview"
              title="Designed for confident enquiries"
              text={property.summary}
            />

            <div className="detail-columns">
              <div>
                <h3>Amenities and features</h3>
                <ul className="check-list">
                  {property.amenities.map((amenity) => (
                    <li key={amenity}>
                      <Icon name="Check" size={16} />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Location highlights</h3>
                <ul className="check-list">
                  {property.locationHighlights.map((item) => (
                    <li key={item}>
                      <Icon name="MapPin" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <aside className="detail-sidebar">
            <h3>Fast actions</h3>
            <a className="btn btn-primary full-width" href={`tel:${company.phone}`}>
              <Icon name="Phone" size={17} />
              Call for site visit
            </a>
            <a
              className="btn btn-soft full-width"
              href={`https://wa.me/${company.whatsapp}?text=Hi%20Subbu%20Estates%2C%20I%20want%20details%20about%20${encodeURIComponent(
                property.title
              )}.`}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="Message" size={17} />
              WhatsApp details
            </a>
            <div className="sidebar-note">
              <Icon name="Shield" size={20} />
              <p>Ask for document status, site visit slots, payment schedule, and current availability before booking.</p>
            </div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="section muted-section">
          <div className="container">
            <SectionHeader
              eyebrow="Related properties"
              title="Similar opportunities"
              text="Compare nearby or similar inventory before choosing a site visit."
            />
            <div className="property-grid">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

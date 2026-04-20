import { company, propertyTypes } from '../data/properties.js';
import Icon from './Icon.jsx';
import Link from './Link.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">SE</span>
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </Link>
          <p>
            Premium property advisory for buyers, investors, land owners, and NRI owners across high-growth locations.
          </p>
          <div className="footer-contact">
            <a href="tel:+919876543210">
              <Icon name="Phone" size={17} />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`}>
              <Icon name="Mail" size={17} />
              {company.email}
            </a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/properties">Properties</Link>
          <Link href="/ventures">Featured ventures</Link>
          <Link href="/property-management">Property management</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Property types</h3>
          {propertyTypes.map((type) => (
            <Link key={type.id} href={type.id === 'management' ? '/property-management' : `/properties?type=${type.id}`}>
              {type.label}
            </Link>
          ))}
        </div>

        <div>
          <h3>Office</h3>
          <p>{company.address}</p>
          <p>{company.hours}</p>
          <a
            className="btn btn-primary footer-btn"
            href={`https://wa.me/${company.whatsapp}?text=Hi%20Subbu%20Estates%2C%20I%20want%20to%20book%20a%20site%20visit.`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="Message" size={17} />
            Book site visit
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright 2026 Subbu Estates. All rights reserved.</span>
        <span>Dummy content and placeholder images for development.</span>
      </div>
    </footer>
  );
}

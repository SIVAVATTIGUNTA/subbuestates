import {
  company,
  locations,
  managementPackages,
  properties,
  propertyTypes,
  testimonials,
  ventures
} from '../data/properties.js';
import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import Link from '../components/Link.jsx';
import PropertyCard from '../components/PropertyCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Home() {
  const featuredProperties = properties.filter((property) => property.featured).slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85"
          alt="Premium real estate buildings and land investment advisory"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow light">Premium real estate advisory</span>
            <h1>{company.name}</h1>
            <p>
              Discover open plots, flats, commercial lands, agriculture lands, and hands-off property management across
              fast-growing locations.
            </p>
            <div className="hero-actions">
              <Link href="/properties" className="btn btn-primary btn-large">
                <Icon name="Search" size={18} />
                Browse properties
              </Link>
              <a className="btn btn-light btn-large" href="tel:+919876543210">
                <Icon name="Phone" size={18} />
                Talk to advisor
              </a>
            </div>
            <div className="hero-trust">
              <span>
                <Icon name="Shield" size={18} />
                Verified documents
              </span>
              <span>
                <Icon name="MapPin" size={18} />
                Multiple ventures
              </span>
              <span>
                <Icon name="BadgeCheck" size={18} />
                Site visit support
              </span>
            </div>
          </div>

          <div className="hero-lead">
            <LeadForm compact title="Get a curated shortlist" source="Response within business hours" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container stats-grid">
          <div>
            <strong>40+</strong>
            <span>active listings</span>
          </div>
          <div>
            <strong>12</strong>
            <span>growth locations</span>
          </div>
          <div>
            <strong>6</strong>
            <span>featured ventures</span>
          </div>
          <div>
            <strong>24 hr</strong>
            <span>lead response target</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we offer"
            title="Real estate options for every ownership goal"
            text="Buy for family use, rental income, business expansion, land banking, or professional property care."
          />

          <div className="service-grid">
            {propertyTypes.map((type) => (
              <article className="service-card reveal" key={type.id}>
                <img src={type.image} alt={type.label} loading="lazy" />
                <div>
                  <span className="icon-badge">
                    <Icon name={type.icon} size={20} />
                  </span>
                  <h3>{type.label}</h3>
                  <p>{type.summary}</p>
                  <Link href={type.id === 'management' ? '/property-management' : `/properties?type=${type.id}`} className="text-link">
                    Explore <Icon name="ChevronRight" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-split">
            <SectionHeader
              eyebrow="Featured listings"
              title="Handpicked properties with stronger buyer interest"
              text="These listings combine location access, legal readiness, and conversion-friendly site visit potential."
            />
            <Link href="/properties" className="btn btn-soft">
              View all properties
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>

          <div className="property-grid">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured ventures"
            title="Venture launches and inventory worth watching"
            text="Every venture card is structured for quick sales conversations, site visits, and lead capture."
          />

          <div className="venture-grid">
            {ventures.map((venture) => (
              <article className="venture-card reveal" key={venture.id}>
                <img src={venture.image} alt={venture.name} loading="lazy" />
                <div className="venture-body">
                  <div className="venture-kicker">
                    <span>{venture.type}</span>
                    <span>{venture.status}</span>
                  </div>
                  <h3>{venture.name}</h3>
                  <p className="location-line">
                    <Icon name="MapPin" size={16} />
                    {venture.location}
                  </p>
                  <div className="venture-price">
                    <strong>{venture.price}</strong>
                    <span>{venture.units}</span>
                  </div>
                  <ul className="check-list compact-list">
                    {venture.highlights.slice(0, 3).map((item) => (
                      <li key={item}>
                        <Icon name="Check" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section location-section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured locations"
            title="Growth corridors with active buyer demand"
            text="Shortlist by commute, infrastructure, rental potential, business movement, or long-term land appreciation."
          />

          <div className="location-grid">
            {locations.map((location) => (
              <article className="location-card reveal" key={location.name}>
                <img src={location.image} alt={`${location.name} real estate location`} loading="lazy" />
                <div>
                  <span>{location.zone}</span>
                  <h3>{location.name}</h3>
                  <p>{location.driver}</p>
                  <strong>{location.count} active opportunities</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section management-preview">
        <div className="container management-layout">
          <div>
            <span className="eyebrow">Property management</span>
            <h2>Own property without everyday follow-up</h2>
            <p>
              From tenant search and rent tracking to inspections and maintenance coordination, the owner desk keeps
              your asset monitored and income-ready.
            </p>
            <div className="package-strip">
              {managementPackages.map((item) => (
                <span key={item.name}>{item.name}</span>
              ))}
            </div>
            <Link href="/property-management" className="btn btn-primary btn-large">
              Explore management plans
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85"
            alt="Property advisor presenting property management documents"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="Client confidence"
            title="Built for clear decisions and faster enquiries"
            text="Professional content, trust signals, and clear calls to action help visitors move from browsing to booking."
          />

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card reveal" key={testimonial.name}>
                <div className="stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} />
                  ))}
                </div>
                <p>"{testimonial.quote}"</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-layout">
          <div>
            <span className="eyebrow light">Need a shortlist?</span>
            <h2>Tell us your budget, location, and property goal.</h2>
            <p>We will share matching plots, flats, lands, or property management options with the next clear step.</p>
          </div>
          <LeadForm title="Start your enquiry" source="Home page lead form" />
        </div>
      </section>
    </>
  );
}

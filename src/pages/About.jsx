import Icon from '../components/Icon.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/properties.js';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Subbu Estates"
        title="Real estate advisory built on clarity, documents, and local insight"
        text="We help buyers compare ventures, verify essentials, understand growth corridors, and make confident decisions across plots, flats, lands, and managed assets."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <SectionHeader
              eyebrow="Our story"
              title="A buyer-first real estate desk for serious decisions"
              text={`${company.name} brings property discovery, venture comparison, legal coordination, site visit planning, and owner support into one professional experience.`}
            />
            <p>
              The market has many options, but the right decision needs context: approval status, future access,
              neighborhood demand, realistic pricing, and the small details that appear only during a site visit.
            </p>
            <p>
              Our team works with dummy inventory in this development build, but the structure is ready for real
              ventures, CRM integration, and content updates.
            </p>
          </div>

          <div className="about-panel">
            <div>
              <strong>Buyer advisory</strong>
              <span>Shortlists, comparisons, site visits, and negotiation support.</span>
            </div>
            <div>
              <strong>Owner support</strong>
              <span>Property management, tenant coordination, and maintenance tracking.</span>
            </div>
            <div>
              <strong>Investment view</strong>
              <span>Location drivers, rental potential, and holding-period guidance.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="How we work"
            title="A transparent process from enquiry to ownership"
            text="Each step is designed to reduce uncertainty and keep leads moving toward a real conversation."
          />

          <div className="process-grid">
            {[
              ['01', 'Understand requirement', 'Budget, preferred location, use case, timeline, and financing readiness.'],
              ['02', 'Curate matches', 'Relevant ventures and listings are shortlisted with clear status and next steps.'],
              ['03', 'Verify and visit', 'Document checklist, site visit planning, and advisor-led comparison support.'],
              ['04', 'Close and manage', 'Booking, registration coordination, and optional property management support.']
            ].map(([number, title, text]) => (
              <article className="process-card reveal" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          {[
            ['Shield', 'Verified-first mindset', 'We keep document status, approvals, and ownership clarity visible.'],
            ['MapPin', 'Local growth insight', 'We map locations by access, demand drivers, and realistic use cases.'],
            ['Users', 'Human follow-through', 'Every enquiry gets a practical next step, not a generic brochure.'],
            ['Trending', 'Investor-ready framing', 'Listings show yield, appreciation drivers, and exit potential.']
          ].map(([icon, title, text]) => (
            <article className="value-card reveal" key={title}>
              <span className="icon-badge">
                <Icon name={icon} size={20} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

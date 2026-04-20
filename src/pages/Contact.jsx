import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { company } from '../data/properties.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Subbu Estates about your next property decision"
        text="Book a site visit, request venture details, ask for property management support, or get a custom shortlist."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <SectionHeader
              eyebrow="Reach us"
              title="Fast contact channels for serious enquiries"
              text="Use the form, WhatsApp, or direct call CTA depending on urgency."
            />

            <div className="contact-list">
              <a href="tel:+919876543210">
                <span className="icon-badge">
                  <Icon name="Phone" size={20} />
                </span>
                <div>
                  <strong>{company.phoneDisplay}</strong>
                  <small>Call for listings and site visits</small>
                </div>
              </a>
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
                <span className="icon-badge">
                  <Icon name="Message" size={20} />
                </span>
                <div>
                  <strong>WhatsApp enquiry</strong>
                  <small>Share budget and preferred location</small>
                </div>
              </a>
              <a href={`mailto:${company.email}`}>
                <span className="icon-badge">
                  <Icon name="Mail" size={20} />
                </span>
                <div>
                  <strong>{company.email}</strong>
                  <small>Documentation and partnership queries</small>
                </div>
              </a>
              <div>
                <span className="icon-badge">
                  <Icon name="MapPin" size={20} />
                </span>
                <div>
                  <strong>{company.address}</strong>
                  <small>{company.hours}</small>
                </div>
              </div>
            </div>
          </div>

          <LeadForm title="Send an enquiry" source="Contact page form" />
        </div>
      </section>

      <section className="section muted-section">
        <div className="container map-layout">
          <div className="map-placeholder">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Map style city location placeholder"
              loading="lazy"
            />
            <div>
              <Icon name="MapPin" size={28} />
              <strong>Hyderabad advisory office</strong>
              <span>Replace this visual with an embedded Google Map during production integration.</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Branches and coverage</span>
            <h2>Serving buyers and owners across major growth markets</h2>
            <p>
              Dummy office and coverage content is included for Hyderabad, Amaravati, Vijayawada, Guntur, and
              Visakhapatnam. Add live branch data when the business finalizes locations.
            </p>
            <div className="coverage-tags">
              {['Hyderabad', 'Shadnagar', 'Kondapur', 'Mokila', 'Amaravati', 'Guntur', 'Visakhapatnam'].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

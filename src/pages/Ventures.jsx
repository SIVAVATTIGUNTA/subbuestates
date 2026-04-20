import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import VentureImageScroller from '../components/VentureImageScroller.jsx';
import { company, ventures } from '../data/properties.js';

export default function Ventures() {
  return (
    <>
      <PageHero
        eyebrow="Current venture"
        title="Dream City HMDA open plots in Shadnagar"
        text="Explore current Dream City pricing, facing premiums, corner plot premiums, site photos, and enquiry actions."
        image="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Available venture"
            title="Dream City HMDA"
            text="Only the current active venture is shown now. More ventures can be added here later from the data file."
          />

          <div className="venture-list">
            {ventures.map((venture) => (
              <article className="venture-detail-card reveal" key={venture.id}>
                <VentureImageScroller venture={venture} className="venture-detail-media" />
                <div className="venture-detail-body">
                  <div className="venture-kicker">
                    <span>{venture.type}</span>
                    <span>{venture.status}</span>
                  </div>
                  <h2>{venture.name}</h2>
                  <p className="location-line">
                    <Icon name="MapPin" size={17} />
                    {venture.location}
                  </p>
                  <div className="detail-facts">
                    <span>
                      <strong>{venture.price}</strong>
                      Starting price
                    </span>
                    <span>
                      <strong>{venture.units}</strong>
                      Inventory
                    </span>
                    <span>
                      <strong>{venture.approval}</strong>
                      Approval
                    </span>
                  </div>
                  {venture.priceAddons?.length ? (
                    <div className="price-addon-grid">
                      {venture.priceAddons.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  ) : null}
                  <ul className="check-list">
                    {venture.highlights.map((item) => (
                      <li key={item}>
                        <Icon name="Check" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <a className="btn btn-primary" href={`tel:${company.phone}`}>
                      <Icon name="Phone" size={17} />
                      Call for availability
                    </a>
                    <a
                      className="btn btn-soft"
                      href={`https://wa.me/${company.whatsapp}?text=Hi%20Subbu%20Estates%2C%20I%20want%20details%20about%20${encodeURIComponent(
                        venture.name
                      )}.`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="Message" size={17} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-layout">
          <div>
            <span className="eyebrow light">Launch support</span>
            <h2>Need venture-specific availability, documents, or pricing?</h2>
            <p>Send your requirement and an advisor will share the most relevant venture shortlist.</p>
          </div>
          <LeadForm title="Ask about ventures" source="Ventures page enquiry" />
        </div>
      </section>
    </>
  );
}

import Icon from '../components/Icon.jsx';
import LeadForm from '../components/LeadForm.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { managementPackages } from '../data/properties.js';

export default function PropertyManagement() {
  return (
    <>
      <PageHero
        eyebrow="Property management"
        title="Tenant, rent, maintenance, and owner reporting handled professionally"
        text="For local and NRI owners who want a dependable team to keep rental property visible, maintained, and income-ready."
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Complete owner support under one desk"
            text="The page is structured for lead generation from owners, investors, and NRIs who need dependable local follow-up."
          />

          <div className="values-grid">
            {[
              ['Users', 'Tenant search', 'Marketing, tenant screening, visits, move-in checklist, and lease support.'],
              ['Clock', 'Rent tracking', 'Monthly rent follow-up, payment reminders, and owner reporting.'],
              ['Shield', 'Inspection and care', 'Periodic inspections, photo updates, and property condition notes.'],
              ['Key', 'Maintenance handling', 'Vendor coordination, estimates, approvals, and completion tracking.']
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
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionHeader
            eyebrow="Management plans"
            title="Simple packages for different owner needs"
            text="Dummy pricing is included for development and can be replaced by live service plans."
          />

          <div className="package-grid">
            {managementPackages.map((plan) => (
              <article className="package-card reveal" key={plan.name}>
                <span className="package-price">{plan.price}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <ul className="check-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Icon name="Check" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container owner-flow">
          <div>
            <span className="eyebrow">Owner journey</span>
            <h2>From vacant unit to managed rental</h2>
            <p>
              Owners get a practical operating flow: inspect, prepare, market, onboard, collect, maintain, and report.
              This keeps the service understandable and conversion-focused.
            </p>
          </div>
          <div className="process-grid compact-process">
            {['Property audit', 'Rental readiness', 'Tenant onboarding', 'Monthly reporting'].map((step, index) => (
              <article className="process-card reveal" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-layout">
          <div>
            <span className="eyebrow light">Owner enquiry</span>
            <h2>Want us to manage your property?</h2>
            <p>Share your property type, location, and current status. We will suggest the best management plan.</p>
          </div>
          <LeadForm title="Request owner support" source="Property management lead form" />
        </div>
      </section>
    </>
  );
}

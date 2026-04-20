import { useId, useState } from 'react';
import { company } from '../data/properties.js';
import Icon from './Icon.jsx';

const interestOptions = ['Open Plots', 'Flats', 'Commercial Land', 'Agriculture Land', 'Property Management'];

export default function LeadForm({ compact = false, title = 'Request a call back', source = 'Website enquiry' }) {
  const [submitted, setSubmitted] = useState(false);
  const frameName = `lead-frame-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  function handleSubmit(event) {
    setSubmitted(true);
  }

  return (
    <form
      className={`lead-form ${compact ? 'lead-form-compact' : ''}`}
      action={`https://formsubmit.co/${company.email}`}
      method="POST"
      target={frameName}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value={`New enquiry from ${title}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="page_url" value={window.location.href} />

      <div className="form-heading">
        <span className="icon-badge">
          <Icon name="Phone" size={18} />
        </span>
        <div>
          <h3>{title}</h3>
          <p>{source}</p>
        </div>
      </div>

      <label>
        Full name
        <input type="text" name="name" placeholder="Your name" required />
      </label>

      <label>
        Mobile number
        <input type="tel" name="phone" placeholder={company.phoneDisplay} required />
      </label>

      <label>
        Interested in
        <select name="interest" required defaultValue="">
          <option value="" disabled>
            Select property type
          </option>
          {interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      {!compact ? (
        <label>
          Message
          <textarea name="message" rows="4" placeholder="Tell us your preferred location, budget, or service need." />
        </label>
      ) : null}

      <button className="btn btn-primary" type="submit">
        <Icon name="ArrowRight" size={18} />
        Submit enquiry
      </button>

      {submitted ? (
        <p className="form-success" role="status">
          Thank you. Your enquiry is being sent to {company.email}.
        </p>
      ) : null}
      <iframe className="form-submit-frame" title="Lead form submission" name={frameName} />
    </form>
  );
}

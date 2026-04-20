import { useState } from 'react';
import { company } from '../data/properties.js';
import Icon from './Icon.jsx';

const interestOptions = ['Open Plots', 'Flats', 'Commercial Land', 'Agriculture Land', 'Property Management'];

export default function LeadForm({ compact = false, title = 'Request a call back', source = 'Website enquiry' }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={`lead-form ${compact ? 'lead-form-compact' : ''}`} onSubmit={handleSubmit}>
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
          Thank you. Our advisor will contact you shortly.
        </p>
      ) : null}
    </form>
  );
}

import { company } from '../data/properties.js';
import Icon from './Icon.jsx';

export default function FloatingCtas() {
  return (
    <div className="floating-ctas" aria-label="Quick contact actions">
      <a className="float-call" href={`tel:${company.phone}`} aria-label="Call Subbu Estates">
        <Icon name="Phone" size={20} />
        <span>Call</span>
      </a>
      <a
        className="float-whatsapp"
        href={`https://wa.me/${company.whatsapp}?text=Hi%20Subbu%20Estates%2C%20please%20share%20available%20properties.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Subbu Estates"
      >
        <Icon name="Message" size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

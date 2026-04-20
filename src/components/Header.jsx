import { useState } from 'react';
import { company } from '../data/properties.js';
import Icon from './Icon.jsx';
import Link from './Link.jsx';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Ventures', href: '/ventures' },
  { label: 'Properties', href: '/properties' },
  { label: 'Management', href: '/property-management' },
  { label: 'Contact', href: '/contact' }
];

export default function Header({ path }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" onClick={closeMenu} aria-label="Subbu Estates home">
          <span className="brand-logo">
            <img src="/assets/subbu_estate_logo.jpg" alt="" />
          </span>
          <span>
            <strong>{company.name}</strong>
            <small>Real estate advisory</small>
          </span>
        </Link>

        <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={path === item.href || (item.href === '/properties' && path.startsWith('/properties')) ? 'active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost nav-call" href={`tel:${company.phone}`}>
            <Icon name="Phone" size={17} />
            Call
          </a>
          <a
            className="btn btn-primary nav-whatsapp"
            href={`https://wa.me/${company.whatsapp}?text=Hi%20Subbu%20Estates%2C%20I%20want%20property%20details.`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="Message" size={17} />
            WhatsApp
          </a>
          <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            <Icon name={open ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

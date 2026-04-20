import Icon from '../components/Icon.jsx';
import Link from '../components/Link.jsx';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <span className="icon-badge">
          <Icon name="Search" size={26} />
        </span>
        <h1>Page not found</h1>
        <p>The page may have moved, or the listing URL may be unavailable.</p>
        <Link href="/properties" className="btn btn-primary">
          <Icon name="ArrowRight" size={18} />
          Browse properties
        </Link>
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from 'react';
import FloatingCtas from './components/FloatingCtas.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { properties } from './data/properties.js';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Properties from './pages/Properties.jsx';
import PropertyDetail from './pages/PropertyDetail.jsx';
import PropertyManagement from './pages/PropertyManagement.jsx';
import Ventures from './pages/Ventures.jsx';
import { applySeo, getPropertySeo, routeSeo } from './utils/seo.js';

function usePath() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function updatePath() {
      setPath(window.location.pathname);
    }

    function handleClick(event) {
      const anchor = event.target.closest('a[data-app-link]');
      if (!anchor) return;

      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      event.preventDefault();
      window.history.pushState({}, '', `${url.pathname}${url.search}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      updatePath();
    }

    window.addEventListener('popstate', updatePath);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', updatePath);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return path;
}

function resolveRoute(path) {
  if (path === '/') return { page: <Home />, seo: routeSeo['/'] };
  if (path === '/about') return { page: <About />, seo: routeSeo['/about'] };
  if (path === '/ventures') return { page: <Ventures />, seo: routeSeo['/ventures'] };
  if (path === '/properties') return { page: <Properties />, seo: routeSeo['/properties'] };
  if (path === '/property-management') return { page: <PropertyManagement />, seo: routeSeo['/property-management'] };
  if (path === '/contact') return { page: <Contact />, seo: routeSeo['/contact'] };

  if (path.startsWith('/properties/')) {
    const slug = path.split('/').filter(Boolean)[1];
    const property = properties.find((item) => item.slug === slug);

    if (property) {
      return {
        page: <PropertyDetail property={property} />,
        seo: getPropertySeo(property)
      };
    }
  }

  return {
    page: <NotFound />,
    seo: {
      title: 'Page Not Found | Subbu Estates',
      description: 'The requested page could not be found.'
    }
  };
}

export default function App() {
  const path = usePath();
  const route = useMemo(() => resolveRoute(path), [path]);

  useEffect(() => {
    applySeo({ ...route.seo, path });
  }, [route.seo, path]);

  return (
    <>
      <Header path={path} />
      <main>{route.page}</main>
      <Footer />
      <FloatingCtas />
    </>
  );
}

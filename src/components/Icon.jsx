const icons = {
  ArrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  BadgeCheck: (
    <>
      <path d="M8.5 12.5 11 15l4.5-5" />
      <path d="m12 2 2.1 2.5 3.3-.2.7 3.2 2.8 1.7-1.3 3 1.3 3-2.8 1.7-.7 3.2-3.3-.2L12 22l-2.1-2.5-3.3.2-.7-3.2-2.8-1.7 1.3-3-1.3-3 2.8-1.7.7-3.2 3.3.2L12 2Z" />
    </>
  ),
  Building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
      <path d="M3 21h18" />
      <path d="M8 7h1" />
      <path d="M12 7h1" />
      <path d="M8 11h1" />
      <path d="M12 11h1" />
      <path d="M8 15h1" />
      <path d="M12 15h1" />
      <path d="M17 9h1a2 2 0 0 1 2 2v10" />
    </>
  ),
  Calendar: (
    <>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  Check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  ChevronRight: (
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  ),
  Clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  Factory: (
    <>
      <path d="M2 20h20" />
      <path d="M4 20V8l6 4V8l6 4V4h4v16" />
      <path d="M8 16h1" />
      <path d="M12 16h1" />
      <path d="M16 16h1" />
    </>
  ),
  Home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  Key: (
    <>
      <circle cx="7.5" cy="14.5" r="4.5" />
      <path d="m11 11 9-9" />
      <path d="m17 5 2 2" />
      <path d="m14 8 2 2" />
    </>
  ),
  Mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  Map: (
    <>
      <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path d="M9 3v15" />
      <path d="M15 6v15" />
    </>
  ),
  MapPin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  Menu: (
    <>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </>
  ),
  Message: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
    </>
  ),
  Phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
    </>
  ),
  Search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  Shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  Sliders: (
    <>
      <path d="M4 21v-7" />
      <path d="M4 10V3" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M20 21v-5" />
      <path d="M20 12V3" />
      <path d="M2 14h4" />
      <path d="M10 8h4" />
      <path d="M18 16h4" />
    </>
  ),
  Sprout: (
    <>
      <path d="M7 20h10" />
      <path d="M12 20V9" />
      <path d="M12 9C10 5 7 4 4 4c0 4 3 7 8 7" />
      <path d="M12 12c2-4 5-5 8-5 0 4-3 7-8 7" />
    </>
  ),
  Star: (
    <>
      <path d="m12 2 3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5L2.5 8.9 9 8l3-6Z" />
    </>
  ),
  Trending: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  Users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  X: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  )
};

export default function Icon({ name, size = 20, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? 'false' : 'true'}
    >
      {title ? <title>{title}</title> : null}
      {icons[name] || icons.Home}
    </svg>
  );
}

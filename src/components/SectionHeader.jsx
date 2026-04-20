export default function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'section-header-center' : ''}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

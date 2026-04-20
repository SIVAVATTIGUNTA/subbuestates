import Icon from './Icon.jsx';

export default function PageHero({ eyebrow, title, text, image, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={image} alt="" />
      </div>
      <div className="container page-hero-content">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-mini-trust">
          <span>
            <Icon name="Shield" size={17} />
            Legal verification
          </span>
          <span>
            <Icon name="Phone" size={17} />
            Site visit support
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}

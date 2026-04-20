export default function VentureImageScroller({ venture, className = '' }) {
  const images = venture.gallery?.length ? venture.gallery : [venture.image];

  return (
    <div className={`venture-media-scroller ${className}`}>
      <div className="venture-image-track">
        {images.map((image, index) => (
          <img key={image} src={image} alt={`${venture.name} view ${index + 1}`} loading="lazy" />
        ))}
      </div>
      {images.length > 1 ? <span className="scroll-pill">{images.length} photos</span> : null}
    </div>
  );
}

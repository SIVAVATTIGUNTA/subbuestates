export default function Link({ href, children, className = '', onClick, ...props }) {
  return (
    <a href={href} className={className} data-app-link onClick={onClick} {...props}>
      {children}
    </a>
  );
}

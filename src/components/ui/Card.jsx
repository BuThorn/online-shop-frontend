export default function Card({ children, className = '' }) {
  return <div className={`overflow-hidden rounded-3xl bg-white shadow-soft ${className}`}>{children}</div>;
}

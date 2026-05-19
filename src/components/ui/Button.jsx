export default function Button({ children, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

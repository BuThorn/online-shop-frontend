export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <label className="block">
      <span className="sr-only">Search</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
    </label>
  );
}

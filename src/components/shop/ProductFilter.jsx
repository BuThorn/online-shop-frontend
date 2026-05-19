import Button from '../ui/Button.jsx';

export default function ProductFilter({ categories, selected, onChange }) {
  return (
    <div className="mb-6 rounded-3xl bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">Filter</h2>
          <p className="mt-1 text-sm text-slate-500">Browse categories or use search for a quick find.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              className={category === selected ? 'bg-indigo-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
              onClick={() => onChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

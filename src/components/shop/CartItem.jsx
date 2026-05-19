import { formatCurrency } from '../../utils/helpers.js';

export default function CartItem({ item, onRemove, onUpdate }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-3xl bg-slate-100">
          <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
          <p className="text-sm text-slate-500">{item.category}</p>
          <p className="mt-2 text-sm font-semibold text-slate-900">{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-600">
          Qty
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(event) => onUpdate(item.id, Number(event.target.value))}
            className="w-16 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900"
          />
        </label>
        <button
          onClick={() => onRemove(item.id)}
          className="rounded-2xl bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-200"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

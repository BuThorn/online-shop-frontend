export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          <button className="text-slate-500 hover:text-slate-900" onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

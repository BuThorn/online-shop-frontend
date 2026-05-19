export default function Breadcrumb({ current }) {
  return (
    <div className="mb-6 rounded-3xl bg-white p-5 shadow-soft">
      <p className="text-sm text-slate-500">Home / {current}</p>
    </div>
  );
}

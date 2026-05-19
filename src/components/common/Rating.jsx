export default function Rating({ value }) {
  const stars = Array.from({ length: 5 }).map((_, index) => index + 1);
  return (
    <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
      {stars.map((star) => (
        <span key={star}>{star <= Math.round(value) ? '★' : '☆'}</span>
      ))}
      <span className="ml-2 text-xs font-medium text-slate-500">{value.toFixed(1)}</span>
    </div>
  );
}

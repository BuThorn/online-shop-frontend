export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
      <p className="font-semibold">Something went wrong</p>
      <p>{message}</p>
    </div>
  );
}

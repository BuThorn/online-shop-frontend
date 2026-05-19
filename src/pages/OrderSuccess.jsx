import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';

export default function OrderSuccess() {
  return (
    <div className="rounded-3xl bg-white p-12 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.3em] text-indigo-500">Order confirmed</p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-950">Thank you for your purchase.</h1>
      <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-600">
        Your order is being processed and you will receive a confirmation email shortly. Continue shopping or review your order history.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/products">
          <Button>Continue shopping</Button>
        </Link>
        <Link to="/">
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
            Back to home
          </span>
        </Link>
      </div>
    </div>
  );
}

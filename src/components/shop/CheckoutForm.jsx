import { useState } from 'react';
import Button from '../ui/Button.jsx';

export default function CheckoutForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, address });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-950">Shipping details</h2>
      <div className="mt-5 space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Shipping address
          <textarea
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
            rows="4"
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>
      <div className="mt-6">
        <Button type="submit">Place order</Button>
      </div>
    </form>
  );
}

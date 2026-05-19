import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';

export default function About() {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">About us</p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950">Built for seamless online shopping.</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          ShopEase is a polished storefront template built with React, Tailwind CSS, and Vite. It demonstrates product browsing, cart management, checkout flow, and responsive layout.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-950">Design</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A simple, modern e-commerce interface with intuitive navigation and clean product presentation.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-950">Performance</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Powered by Vite for fast development refresh and optimized production builds.</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-950">Delivery</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A complete frontend experience ready for integration with backend APIs or headless commerce services.</p>
        </div>
      </div>
      <div className="rounded-3xl bg-indigo-600 p-8 text-white shadow-soft">
        <h2 className="text-2xl font-semibold">Ready to launch?</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100">Use ShopEase as a foundation for your storefront or add new pages and product collections quickly.</p>
        <Link to="/products">
          <Button className="mt-6 bg-white text-indigo-700 hover:bg-slate-100">Browse products</Button>
        </Link>
      </div>
    </div>
  );
}

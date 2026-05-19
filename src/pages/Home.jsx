import { Link } from 'react-router-dom';
import ProductCard from '../components/shop/ProductCard.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import useProducts from '../hooks/useProducts.js';
import useCart from '../hooks/useCart.js';
import { formatCurrency } from '../utils/helpers.js';

export default function Home() {
  const { products, loading, error, search, setSearch } = useProducts();
  const { addToCart } = useCart();

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-indigo-600 px-6 py-12 text-white shadow-soft sm:px-10">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">ShopEase</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Find the products that match your next adventure.</h1>
          <p className="max-w-2xl text-base text-indigo-100">
            Discover curated collections for work, home, beauty, and outdoor activity. Enjoy fast checkout and a polished shopping experience.
          </p>
          <div className="max-w-md">
            <SearchBar value={search} onChange={setSearch} placeholder="Search trending products" />
          </div>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
            <Link to="/products" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow hover:bg-slate-100">
              Browse products
            </Link>
            <p className="text-sm text-indigo-100">Fast shipping and easy returns on every order.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Featured</p>
            <h2 className="text-2xl font-semibold text-slate-950">Top picks for you</h2>
          </div>
          <p className="text-sm text-slate-500">Quick add to cart from our most popular products.</p>
        </div>

        {loading && <p className="text-slate-500">Loading products…</p>}
        {error && <p className="text-rose-600">{error}</p>}
        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Savings</p>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">Real value with every order</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">ShopEase makes it easy to compare products, add items to your cart, and purchase securely in minutes.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Support</p>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">Dedicated customer care</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Our support team is ready to help you with orders, returns, and product questions.</p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Shipping</p>
          <h3 className="mt-4 text-xl font-semibold text-slate-950">Fast delivery nationwide</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">Enjoy free shipping on all orders and real-time delivery tracking through checkout.</p>
        </div>
      </section>
    </div>
  );
}

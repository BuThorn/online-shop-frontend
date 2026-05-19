import { useMemo } from 'react';
import ProductCard from '../components/shop/ProductCard.jsx';
import ProductFilter from '../components/shop/ProductFilter.jsx';
import SearchBar from '../components/common/SearchBar.jsx';
import useProducts from '../hooks/useProducts.js';
import useCart from '../hooks/useCart.js';
import LoadingSpinner from '../components/ui/LoadingSpinner.jsx';
import ErrorMessage from '../components/ui/ErrorMessage.jsx';

export default function Products() {
  const { products, loading, error, search, setSearch, category, setCategory, categories } = useProducts();
  const { addToCart } = useCart();

  const summary = useMemo(() => ({
    count: products.length,
    category,
  }), [products.length, category]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Browse</p>
            <h1 className="text-3xl font-semibold text-slate-950">All products</h1>
          </div>
          <p className="text-sm text-slate-500">Showing {summary.count} products for {summary.category}</p>
        </div>
        <div className="mt-6 max-w-md">
          <SearchBar value={search} onChange={setSearch} />
        </div>
      </div>

      <ProductFilter categories={categories} selected={category} onChange={setCategory} />

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

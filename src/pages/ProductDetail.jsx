import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../services/api.js';
import { formatCurrency, getEstimatedDelivery } from '../utils/helpers.js';
import useCart from '../hooks/useCart.js';
import Button from '../components/ui/Button.jsx';
import LoadingSpinner from '../components/ui/LoadingSpinner.jsx';
import ErrorMessage from '../components/ui/ErrorMessage.jsx';
import Rating from '../components/common/Rating.jsx';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl bg-white p-6 shadow-soft">
        <img src={product.image} alt={product.title} className="h-80 w-full rounded-3xl object-contain bg-slate-100" />
        <div className="mt-6 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{product.category}</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-950">{product.title}</h1>
            </div>
            <p className="text-3xl font-semibold text-indigo-600">{formatCurrency(product.price)}</p>
          </div>
          <Rating value={product.rating} />
          <p className="text-sm leading-7 text-slate-600">{product.description}</p>
          <div className="rounded-3xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Delivery</p>
            <p className="mt-2 text-base font-medium text-slate-900">{getEstimatedDelivery()}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.badges.map((badge) => (
              <span key={badge} className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => addToCart(product)}>Add to cart</Button>
            <Link to="/cart" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              View cart
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-950">Product details</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Category: {product.category}</li>
            <li>Rating: {product.rating.toFixed(1)} stars</li>
            <li>Shipping: Free shipping on all orders</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-950">Helpful links</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <Link to="/products" className="text-indigo-600 hover:text-indigo-500">
              Back to product list
            </Link>
            <Link to="/about" className="text-indigo-600 hover:text-indigo-500">
              Learn more about ShopEase
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

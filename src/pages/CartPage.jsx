import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart.js';
import CartItem from '../components/shop/CartItem.jsx';
import CartSummary from '../components/shop/CartSummary.jsx';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  const empty = cartItems.length === 0;
  const itemsInfo = useMemo(() => ({ count: totalItems, price: totalPrice }), [totalItems, totalPrice]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
      <section className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-soft">
          <h1 className="text-3xl font-semibold text-slate-950">Shopping cart</h1>
          <p className="mt-2 text-sm text-slate-500">Review your selected items before checkout.</p>
        </div>

        {empty ? (
          <div className="rounded-3xl bg-white p-8 text-center shadow-soft">
            <p className="text-base font-medium text-slate-900">Your cart is empty.</p>
            <Link to="/products" className="mt-4 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
              Continue shopping
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdate={updateQuantity}
            />
          ))
        )}
      </section>
      <aside>
        <CartSummary totalItems={itemsInfo.count} totalPrice={itemsInfo.price} />
      </aside>
    </div>
  );
}

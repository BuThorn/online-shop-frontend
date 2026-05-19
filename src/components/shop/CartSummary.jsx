import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers.js';
import Button from '../ui/Button.jsx';

export default function CartSummary({ totalPrice, totalItems }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-slate-950">Order summary</h2>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 font-semibold text-slate-950">
          <span>Total</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </div>
      <Link to="/checkout" className="mt-6 block">
        <Button className="w-full">Checkout</Button>
      </Link>
    </div>
  );
}

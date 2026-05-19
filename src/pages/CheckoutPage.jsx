import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart.js';
import CheckoutForm from '../components/shop/CheckoutForm.jsx';
import CartSummary from '../components/shop/CartSummary.jsx';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { totalItems, totalPrice, clearCart } = useCart();

  const handleSubmit = () => {
    clearCart();
    navigate('/success');
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
      <section>
        <CheckoutForm onSubmit={handleSubmit} />
      </section>
      <aside>
        <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
      </aside>
    </div>
  );
}

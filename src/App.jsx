import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import OrderSuccess from './pages/OrderSuccess.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;

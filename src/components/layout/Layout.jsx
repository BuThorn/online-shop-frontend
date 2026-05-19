import { useLocation } from 'react-router-dom';
import useScrollTop from '../../hooks/useScrollTop.js';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  const location = useLocation();
  useScrollTop();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {location.pathname !== '/' && (
          <div className="mb-6 rounded-3xl bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">Explore our shop and find the perfect product.</p>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
}

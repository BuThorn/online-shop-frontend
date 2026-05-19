import { NavLink } from 'react-router-dom';
import useCart from '../../hooks/useCart.js';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-semibold tracking-tight text-slate-950">
          ShopEase
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <NavLink
            to="/cart"
            className="relative inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-slate-300"
          >
            Cart
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-indigo-600 px-2 text-xs font-semibold text-white">
              {totalItems}
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

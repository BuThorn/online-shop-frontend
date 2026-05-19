import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../services/api.js';
import { CATEGORIES } from '../utils/constants.js';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    let active = true;
    getProducts()
      .then((data) => {
        if (active) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message || 'Unable to load products');
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        category === 'All' ? true : product.category === category
      )
      .filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
  }, [products, category, search]);

  return {
    products: filteredProducts,
    rawProducts: products,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    categories: ['All', ...CATEGORIES],
  };
}

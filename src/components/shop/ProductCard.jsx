import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';
import Rating from '../common/Rating.jsx';
import { formatCurrency } from '../../utils/helpers.js';

export default function ProductCard({ product, onAdd }) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-[4/3] bg-slate-100 p-6">
        <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-xs text-indigo-600">
          <span>{product.category}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-950">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xl font-semibold text-slate-950">{formatCurrency(product.price)}</p>
            <Rating value={product.rating} />
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={() => onAdd(product)}>Add</Button>
            <Link
              to={`/products/${product.id}`}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

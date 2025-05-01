import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
        <div className="badge">{product.category}</div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-200">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="star-rating">
            <FaStar className="h-4 w-4" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            <span className="ml-1 text-sm text-gray-400">({product.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="price">
            ${product.price.toFixed(2)}
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm py-2 px-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 
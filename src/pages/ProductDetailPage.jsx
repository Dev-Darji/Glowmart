import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { products } from '../utils/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link
          to="/products"
          className="mt-4 inline-block text-purple-600 hover:text-purple-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center text-yellow-400">
                <FaStar className="h-5 w-5" />
                <span className="ml-1 text-gray-600">{product.rating}</span>
                <span className="ml-1 text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="text-3xl font-bold text-purple-600">
            ${product.price.toFixed(2)}
          </div>

          <div className="text-gray-600">
            {product.description}
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
          >
            Add to Cart
          </button>

          <div className="text-sm text-gray-500">
            <p>Free shipping on orders over $50</p>
            <p>30-day money-back guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 
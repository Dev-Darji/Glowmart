import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const CartPage = () => {
  const { cartItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const { isDarkMode } = useTheme();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Your cart is empty</h2>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>Looks like you haven't added any items to your cart yet.</p>
        <Link
          to="/products"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-8">
        <Link
          to="/products"
          className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <FaArrowLeft className="mr-2" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Shopping Cart</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 flex flex-col sm:flex-row`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-32 h-32 object-cover rounded-md"
                />
                <div className="flex-1 mt-4 sm:mt-0 sm:ml-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                  <p className="text-purple-400 font-bold mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className={`flex items-center border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-md`}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={`px-3 py-1 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        -
                      </button>
                      <span className={`px-4 py-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={`px-3 py-1 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-400 hover:text-red-300"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Subtotal</span>
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Shipping</span>
                <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                  {totalPrice >= 50 ? 'Free' : '$5.99'}
                </span>
              </div>
              <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                <div className="flex justify-between">
                  <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Total</span>
                  <span className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${(totalPrice + (totalPrice >= 50 ? 0 : 5.99)).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 
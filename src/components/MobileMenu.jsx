import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-black transition-colors duration-200"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block text-gray-700 hover:text-black transition-colors duration-200"
              onClick={onClose}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="block text-gray-700 hover:text-black transition-colors duration-200"
              onClick={onClose}
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-black transition-colors duration-200"
              onClick={onClose}
            >
              About
            </Link>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="space-y-2">
              <Link
                to="/account"
                className="block text-gray-700 hover:text-black transition-colors duration-200"
                onClick={onClose}
              >
                My Account
              </Link>
              <Link
                to="/cart"
                className="block text-gray-700 hover:text-black transition-colors duration-200"
                onClick={onClose}
              >
                Shopping Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 
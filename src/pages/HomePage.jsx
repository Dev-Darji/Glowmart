import { Link } from 'react-router-dom';
import { FaShoppingBag, FaTshirt, FaShoePrints, FaGlasses, FaWrench, FaHeadphones } from 'react-icons/fa';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const featuredProducts = products.slice(0, 6);

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'clothing':
        return <FaTshirt className="w-8 h-8" />;
      case 'footwear':
        return <FaShoePrints className="w-8 h-8" />;
      case 'accessories':
        return <FaGlasses className="w-8 h-8" />;
      case 'grooming':
        return <FaWrench className="w-8 h-8" />;
      case 'electronics':
        return <FaHeadphones className="w-8 h-8" />;
      default:
        return <FaShoppingBag className="w-8 h-8" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-purple-600'} rounded-2xl overflow-hidden my-8`}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&auto=format&fit=crop&q=60"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className={`text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Discover Premium Products
          </h1>
          <p className={`mt-6 max-w-lg mx-auto text-center text-xl ${isDarkMode ? 'text-gray-300' : 'text-purple-100'} sm:max-w-3xl`}>
            Shop the latest trends in fashion, electronics, and more. Quality products for your modern lifestyle.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              to="/products"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-50 transition-colors duration-200"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12">
        <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className={`flex flex-col items-center p-6 rounded-lg transition-all duration-200 ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-white hover:bg-gray-50 text-gray-900'
              } shadow-md hover:shadow-lg`}
            >
              <div className={`mb-4 p-4 rounded-full ${
                isDarkMode ? 'bg-gray-700' : 'bg-purple-100'
              }`}>
                {getCategoryIcon(category.id)}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className={`text-sm text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Products
          </h2>
          <Link
            to="/products"
            className={`text-purple-600 hover:text-purple-700 font-medium ${
              isDarkMode ? 'text-purple-400 hover:text-purple-300' : ''
            }`}
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 
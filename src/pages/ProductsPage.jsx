import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFilter, FaTshirt, FaShoePrints, FaGlasses, FaWrench, FaHeadphones } from 'react-icons/fa';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useTheme } from '../context/ThemeContext';

const ProductsPage = () => {
  const { category: selectedCategory } = useParams();
  const { isDarkMode } = useTheme();
  const [sortBy, setSortBy] = useState('default');
  const [priceRange, setPriceRange] = useState('all');

  // Filter products by category if specified
  let filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Apply price range filter
  if (priceRange !== 'all') {
    const [min, max] = priceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(product => {
      if (max) {
        return product.price >= min && product.price <= max;
      }
      return product.price >= min;
    });
  }

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'clothing':
        return <FaTshirt className="w-5 h-5" />;
      case 'footwear':
        return <FaShoePrints className="w-5 h-5" />;
      case 'accessories':
        return <FaGlasses className="w-5 h-5" />;
      case 'grooming':
        return <FaWrench className="w-5 h-5" />;
      case 'electronics':
        return <FaHeadphones className="w-5 h-5" />;
      default:
        return <FaFilter className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`w-full md:w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md h-fit`}>
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
            <FaFilter className="mr-2" /> Filters
          </h3>
          
          {/* Categories Filter */}
          <div className="mb-6">
            <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Categories
            </h4>
            <div className="space-y-2">
              <Link
                to="/products"
                className={`flex items-center p-2 rounded-md transition-colors duration-200 ${
                  !selectedCategory
                    ? isDarkMode
                      ? 'bg-gray-700 text-white'
                      : 'bg-purple-100 text-purple-600'
                    : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <FaFilter className="mr-2" />
                All Categories
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className={`flex items-center p-2 rounded-md transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? isDarkMode
                        ? 'bg-gray-700 text-white'
                        : 'bg-purple-100 text-purple-600'
                      : isDarkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span className="ml-2">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Price Range Filter */}
          <div className="mb-6">
            <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Price Range
            </h4>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className={`w-full p-2 rounded-md border ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="all">All Prices</option>
              <option value="0-50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-">Over $200</option>
            </select>
          </div>

          {/* Sort By Filter */}
          <div>
            <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
              Sort By
            </h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`w-full p-2 rounded-md border ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'All Products'}
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {filteredProducts.length} products
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className={`text-center py-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No products found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 
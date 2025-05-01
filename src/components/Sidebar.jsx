import { FaHome, FaTshirt, FaMobile, FaLaptop, FaHeadphones, FaGamepad, FaTag, FaStar, FaFire } from 'react-icons/fa';

const categories = [
  { name: 'Home', icon: FaHome },
  { name: 'Clothing', icon: FaTshirt },
  { name: 'Electronics', icon: FaMobile },
  { name: 'Computers', icon: FaLaptop },
  { name: 'Audio', icon: FaHeadphones },
  { name: 'Gaming', icon: FaGamepad },
];

const specialOffers = [
  { name: 'Deals of the Day', icon: FaFire },
  { name: 'Top Rated', icon: FaStar },
  { name: 'Special Offers', icon: FaTag },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:block fixed left-0 top-24 h-[calc(100vh-6rem)] w-64 bg-white shadow-md overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.name}
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 group"
                >
                  <Icon className="mr-3 h-5 w-5 text-purple-500 group-hover:text-purple-600" />
                  {category.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Special Offers Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Special Offers</h2>
          <nav className="space-y-1">
            {specialOffers.map((offer) => {
              const Icon = offer.icon;
              return (
                <a
                  key={offer.name}
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors duration-200 group"
                >
                  <Icon className="mr-3 h-5 w-5 text-red-500 group-hover:text-red-600" />
                  {offer.name}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Price Range Filter */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h2>
          <div className="px-4 space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="price1" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="price1" className="ml-2 text-sm text-gray-700">Under $25</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="price2" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="price2" className="ml-2 text-sm text-gray-700">$25 - $50</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="price3" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="price3" className="ml-2 text-sm text-gray-700">$50 - $100</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="price4" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <label htmlFor="price4" className="ml-2 text-sm text-gray-700">Over $100</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar; 
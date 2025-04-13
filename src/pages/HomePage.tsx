import React from 'react';
import { Search, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories, businesses } from '../data';
import ServiceCard from '../components/ServiceCard';

const HomePage = () => {
  const popularBusinesses = businesses.filter(business => business.isPopular);
  const businessesWithDiscounts = businesses.filter(business => business.discount);

  return (
    // Use a light gray for the main background
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">Find the Perfect Beauty Service Near You</h1>
          {/* Responsive Search Bar Container */}
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-2 flex flex-col sm:flex-row">
            {/* Search Input Section */}
            <div className="flex-1 flex items-center px-2 sm:px-4 sm:border-r border-b sm:border-b-0 border-gray-200">
              <Search className="w-5 h-5 text-gray-400 mr-2 sm:mr-3" />
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full py-3 outline-none text-gray-700 bg-transparent placeholder:text-gray-500"
              />
            </div>
            {/* Location Input Section */}
            <div className="flex items-center px-2 sm:px-4 sm:border-r border-b sm:border-b-0 border-gray-200">
              <MapPin className="w-5 h-5 text-gray-400 mr-2 sm:mr-3" />
              <input
                type="text"
                placeholder="Location"
                className="w-full sm:w-48 py-3 outline-none text-gray-700 bg-transparent placeholder:text-gray-500"
              />
            </div>
            {/* Search Button - Use pink-700/800 */}
            <button className="bg-pink-700 text-white px-4 sm:px-8 py-3 rounded-md hover:bg-pink-800 transition-colors w-full sm:w-auto mt-2 sm:mt-0 font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      {/* Use bg-white for this section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                to={`/discover?category=${category.id}`}
                key={category.id}
                // Use pink for icon color and hover effect
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center group border border-gray-200 hover:border-pink-200"
              >
                <category.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-pink-600 group-hover:text-pink-700 transition-colors" />
                <h3 className="font-semibold text-sm sm:text-base text-gray-800">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Businesses */}
      {/* Keep this section on light gray */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Popular Beauty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBusinesses.slice(0, 6).map((business) => (
              <ServiceCard key={business.id} business={business} />
            ))}
          </div>
          <div className="text-center mt-8">
            {/* Use pink-700/800 for button */}
            <Link
              to="/discover"
              className="inline-block px-6 py-3 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      {/* Use bg-white for contrast */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 sm:mb-0 text-gray-800">Special Offers</h2>
            {/* Pink icon */}
            <Tag className="w-8 h-8 text-pink-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessesWithDiscounts.map((business) => (
              <div key={business.id} className="relative">
                <ServiceCard business={business} />
                {/* Keep offer tag red for emphasis */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  Special Offer
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      {/* Use a very light pink for this section background */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose BeautyFind</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards on white bg */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Verified Professionals</h3>
              <p className="text-gray-600">All our listed professionals are verified and reviewed by real customers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Easy Booking</h3>
              <p className="text-gray-600">Book appointments instantly with our easy-to-use platform.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Best Prices</h3>
              <p className="text-gray-600">Compare prices and get the best deals on beauty services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
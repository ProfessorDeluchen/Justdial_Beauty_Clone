import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Filter, ChevronDown } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { categories, businesses, subcategories } from '../data';

// Define a type for the keys of subcategories to help TypeScript
type SubcategoryKey = keyof typeof subcategories;

const DiscoverPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  // Use the SubcategoryKey type for better type safety, although useState allows broader initial value
  const [selectedCategory, setSelectedCategory] = useState<SubcategoryKey | 'all'>(initialCategory as SubcategoryKey | 'all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBusinesses = businesses.filter(business => {
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || business.subcategory === selectedSubcategory;
    const matchesLocation = location === '' || business.location.toLowerCase().includes(location.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesLocation;
  });

  return (
    // Use light gray for the main page background
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Filter and Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Discover Beauty Services</h1>
          
          {/* Filter Toggle Button for Mobile - Use pink for icon */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-between w-full p-3 mb-4 bg-white border border-gray-200 rounded-md text-gray-700"
          >
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            <Filter className="w-5 h-5 text-pink-600" />
          </button>

          {/* Filter Controls Section - Use bg-white */}
          <div className={`bg-white p-4 rounded-md shadow-sm border border-gray-200 ${showFilters ? 'block' : 'hidden'} md:flex md:items-end md:gap-4 mb-6`}>
            {/* Category Filter */}
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value as SubcategoryKey | 'all');
                  setSelectedSubcategory('all');
                }}
                // Use pink for focus ring
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:border-pink-300 focus:ring-1 focus:ring-pink-300"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            {/* Subcategory Filter */}
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-600 mb-1">Subcategory</label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                // Use pink for focus ring
                className="w-full p-2 border border-gray-300 rounded-md text-gray-700 focus:border-pink-300 focus:ring-1 focus:ring-pink-300"
                disabled={selectedCategory === 'all' || !subcategories[selectedCategory as SubcategoryKey]}
              >
                <option value="all">All Subcategories</option>
                {selectedCategory !== 'all' && subcategories[selectedCategory as SubcategoryKey]?.map(sub => (
                  <option key={sub.id} value={sub.id}>{sub.name}</option>
                ))}
              </select>
            </div>
            
            {/* Location Filter */}
            <div className="flex-1 mb-4 md:mb-0">
              <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
              {/* Use pink for focus ring */}
              <div className="flex items-center border border-gray-300 rounded-md p-2 bg-white focus-within:border-pink-300 focus-within:ring-1 focus-within:ring-pink-300">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full outline-none bg-transparent text-gray-700 placeholder:text-gray-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* More Filters Button (Desktop) - Pink icon and hover border */}
            <div className="hidden md:block">
             <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-pink-300 text-gray-700 h-full">
               <Filter className="w-5 h-5 text-pink-600" />
               <span>More</span>
               <ChevronDown className="w-4 h-4" />
             </button>
           </div>
          </div>

          {/* Results Info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 text-sm sm:text-base">{filteredBusinesses.length} results found</p>
            {/* More Filters Button (Mobile) - Pink icon and hover border */}
            {showFilters && (
               <button className="md:hidden flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-gray-200 hover:border-pink-300 text-gray-700 text-sm">
                 <Filter className="w-4 h-4 text-pink-600" />
                 <span>More Filters</span>
                 <ChevronDown className="w-3 h-3" />
               </button>
             )}
          </div>
        </div> {/* End of Filter and Header Section */} 

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.length > 0 ? (
              filteredBusinesses.map((business) => (
                <ServiceCard key={business.id} business={business} />
              ))
            ) : (
              <p className="text-gray-600 md:col-span-2 lg:col-span-3 text-center py-10">
                No services found matching your criteria.
              </p>
          )}
        </div> {/* End of Results Grid */} 
        
      </div> {/* End of Container Div */} 
    </div> // End of Outermost Div
  );
};

export default DiscoverPage;
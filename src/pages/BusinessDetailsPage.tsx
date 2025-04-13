import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, Calendar } from 'lucide-react';
import { businesses } from '../data';

const BusinessDetailsPage = () => {
  const { id } = useParams();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return <div className="container mx-auto px-4 py-8 text-gray-700">Business not found</div>;
  }

  return (
    // Light gray background
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[250px] sm:h-[300px]">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{business.name}</h1>
            <div className="flex flex-wrap items-center text-sm sm:text-base space-x-2 sm:space-x-4">
              {/* Ratings */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < business.rating
                        ? 'text-yellow-400 fill-current' // Keep yellow for stars
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-1 sm:ml-2">({business.reviews} reviews)</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="mt-1 sm:mt-0">{business.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Content Sections */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-6">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">About</h2>
              <p className="text-gray-600 text-sm sm:text-base">{business.description}</p>
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Example services */}
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800">Haircut</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">From $30</p>
                </div>
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800">Hair Coloring</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">From $75</p>
                </div>
                 <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800">Manicure</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">From $25</p>
                </div>
                 <div className="p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800">Pedicure</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">From $40</p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Reviews</h2>
              {/* Example reviews */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold text-sm sm:text-base text-gray-800">Sarah M.</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Amazing service! The staff was very professional and I love my new haircut.
                </p>
              </div>
               <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                     <Star className="w-4 h-4 text-gray-300 fill-current" />
                  </div>
                  <span className="ml-2 font-semibold text-sm sm:text-base text-gray-800">John D.</span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Great experience, very relaxing atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            {/* Sidebar Card */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-24 border border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800">Contact & Booking</h2>
              {/* Contact Details - Pink icons */}
              <div className="space-y-3 sm:space-y-4 mb-6 text-sm sm:text-base text-gray-700">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mr-2 flex-shrink-0" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mr-2 flex-shrink-0" />
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mr-2 flex-shrink-0" />
                  <span>{business.hours}</span>
                </div>
              </div>

              {/* Booking Button - Pink */}
              <button className="w-full bg-pink-700 text-white py-2 sm:py-3 rounded-md hover:bg-pink-800 transition-colors flex items-center justify-center text-sm sm:text-base font-medium">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetailsPage;
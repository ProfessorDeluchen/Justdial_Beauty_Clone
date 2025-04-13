import React from 'react';
import { Star, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  location: string;
  phone: string;
  hours: string;
  description: string;
  discount: string | null;
}

interface ServiceCardProps {
  business: Business;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ business }) => {
  return (
    // Use white background for cards, add subtle border
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full border border-gray-200">
      <Link to={`/business/${business.id}`}>
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-40 sm:h-48 object-cover"
        />
      </Link>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <Link to={`/business/${business.id}`} className="flex-grow">
          {/* Pink hover for title */}
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 hover:text-pink-600 transition-colors">{business.name}</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{business.description}</p>
        </Link>
        
        {/* Ratings - Standard yellow/gold for stars */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < business.rating
                    ? 'text-yellow-400 fill-current' // Keep yellow for stars
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs sm:text-sm text-gray-500">
            ({business.reviews} reviews)
          </span>
        </div>

        {/* Discount - Keep red for emphasis */}
        {business.discount && (
          <div className="mb-4 p-2 sm:p-3 bg-red-50 text-red-700 rounded-md text-xs sm:text-sm font-medium">
            {business.discount}
          </div>
        )}

        {/* Details Section - Use standard gray text */}
        <div className="space-y-2 text-xs sm:text-sm text-gray-500"> 
          <div className="flex items-center">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400" />
            <span>{business.location}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400" />
            <span>{business.phone}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400" />
            <span>{business.hours}</span>
          </div>
        </div>

        {/* Booking Button - Use pink-700/800 */}
        <Link to={`/business/${business.id}`} className="mt-auto pt-4">
          <button className="w-full bg-pink-700 text-white py-2 rounded-md hover:bg-pink-800 transition-colors text-sm sm:text-base font-medium">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
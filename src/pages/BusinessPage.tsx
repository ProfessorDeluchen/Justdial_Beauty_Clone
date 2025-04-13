import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Clock, BarChart2 } from 'lucide-react';

const BusinessPage = () => {
  return (
    // Use light gray for the background
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left text-gray-800">List Your Business</h1>
        
        {/* Main Content Card - White background */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Why Join BeautyFind?</h2>
            
            <div className="space-y-6 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                {/* Use light pink for icon background, medium pink for icon */}
                <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-800">Increased Visibility</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Reach thousands of potential customers searching for beauty services in your area.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                   <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-800">Easy Booking Management</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Manage appointments, client communications, and reviews all in one place.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                  <BarChart2 className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-800">Growth Analytics</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Get insights into your business performance and customer satisfaction.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Pink button */}
              <button className="w-full bg-pink-700 text-white py-3 rounded-md hover:bg-pink-800 transition-colors text-sm sm:text-base font-semibold">
                Create Business Account
              </button>
              <p className="text-center text-sm sm:text-base text-gray-600">
                Already have an account?{' '}
                {/* Pink link */}
                <Link to="/login" className="text-pink-600 hover:text-pink-700 font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
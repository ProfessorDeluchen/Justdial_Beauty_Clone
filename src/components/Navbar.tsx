import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use shades of pink for active links and gray for inactive
  const navLinkClasses = (path: string) => 
    `block md:inline-block px-4 py-2 rounded-md transition-colors ${
      location.pathname === path 
        ? 'bg-pink-100 text-pink-700 font-medium' // Active link
        : 'text-gray-600 hover:bg-pink-50 hover:text-gray-800' // Inactive link
    }`;

  return (
    <>
      {/* Keep navbar background white for clean look, add subtle border */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                {/* Use a strong pink for the logo icon */}
                <Scissors className="w-8 h-8 text-pink-600" /> 
                <span className="ml-2 text-xl font-bold text-gray-800">BeautyFind</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className={navLinkClasses('/')}>Home</Link>
              <Link to="/discover" className={navLinkClasses('/discover')}>Discover</Link>
              <Link to="/business" className={navLinkClasses('/business')}>Business</Link>

              {/* Search Bar */}
              <div className={`flex items-center bg-gray-100 rounded-md ${isScrolled ? 'lg:w-48' : 'lg:w-64'} md:w-40 transition-all border border-transparent focus-within:border-pink-300`}>
                <Search className="w-5 h-5 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 px-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* List Business Button - Use a darker pink, maybe pink-700 or pink-800 */}
              <button className="px-4 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-colors whitespace-nowrap font-medium">
                List Your Business
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md absolute w-full py-4 border-t border-gray-200">
            <div className="container mx-auto px-4 space-y-2">
               {/* Mobile Search Bar */}
               <div className={`flex items-center bg-gray-100 rounded-md mb-3 border border-transparent focus-within:border-pink-300`}>
                 <Search className="w-5 h-5 text-gray-400 ml-3" />
                 <input
                   type="text"
                   placeholder="Search..."
                   className="w-full py-2 px-3 bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
               </div>
              <Link to="/" className={navLinkClasses('/')} onClick={toggleMobileMenu}>Home</Link>
              <Link to="/discover" className={navLinkClasses('/discover')} onClick={toggleMobileMenu}>Discover</Link>
              <Link to="/business" className={navLinkClasses('/business')} onClick={toggleMobileMenu}>Business</Link>
              <button className="w-full mt-2 px-4 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-800 transition-colors font-medium">
                List Your Business
              </button>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16" /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;
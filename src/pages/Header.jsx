import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Example data for search
const searchData = [
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Email', action: () => window.location.href = 'mailto:your-email@example.com' },
  // Add more items as needed
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filteredResults = searchData.filter(item =>
        item.name.toLowerCase().includes(lowerQuery)
      );
      setResults(filteredResults);

      if (filteredResults.length === 1) {
        const result = filteredResults[0];
        if (result.path) {
          navigate(result.path); // Navigate to the path if available
        } else if (result.action) {
          result.action(); // Execute the action if available
        }
        setIsMenuOpen(false); // Close the menu after navigating or executing action
      }
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Component for Navigation Item
  const NavItem = ({ to, label }) => (
    <Link
      to={to}
      className="text-white text-base hover:bg-blue-800 py-2 px-4 rounded-md transition-colors"
    >
      {label}
    </Link>
  );

  // Component for Search Form
  const SearchForm = ({ query, setQuery, handleSearch }) => (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-gray-200 rounded-lg overflow-hidden"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="pl-3 pr-4 py-1 text-sm rounded-l-md bg-gray-200 text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500 w-full sm:w-40 md:w-48"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded-r-md border border-blue-600"
      >
        Search
      </button>
    </form>
  );

  // Component for Mobile Menu
  const MobileMenu = ({ isOpen, handleMenuClick, query, setQuery, handleSearch, results }) => (
    <div
      className={`fixed top-0 left-0 w-full bg-blue-900 bg-opacity-90 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} z-30`}
    >
      <div className="p-4 relative">
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={handleMenuClick}
            className="text-white text-2xl absolute top-4 right-4 focus:outline-none"
          >
            <FaTimes />
          </button>
        )}

        {/* Search Form for mobile screens */}
        <div className="mt-6">
          <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />
        </div>

        {/* Search Results for Mobile */}
        <div className="mt-4">
          {results.length > 0 && (
            <ul className="flex flex-col items-center space-y-2">
              {results.map((result, index) => (
                <li key={index} className="w-full border-b border-gray-700 last:border-b-0">
                  <Link
                    to={result.path || '#'}
                    className="block text-white text-lg py-3 px-4 hover:bg-blue-800 transition-colors rounded-md"
                    onClick={() => {
                      if (result.action) {
                        result.action(); // Execute the action if available
                      }
                      handleMenuClick(); // Close the menu
                    }}
                  >
                    {result.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-center space-y-2 mt-6">
          <MenuItem to="/" label="Home" handleMenuClick={handleMenuClick} />
          <MenuItem to="/about" label="About" handleMenuClick={handleMenuClick} />
          <MenuItem to="/skills" label="Skills" handleMenuClick={handleMenuClick} />
          <MenuItem to="/portfolio" label="Portfolio" handleMenuClick={handleMenuClick} />
          <MenuItem to="/services" label="Services" handleMenuClick={handleMenuClick} />
          <MenuItem to="/contact" label="Contact" handleMenuClick={handleMenuClick} />
        </ul>
      </div>
    </div>
  );

  // Component for Menu Item
  const MenuItem = ({ to, label, handleMenuClick }) => (
    <li className="w-full border-b border-gray-700 last:border-b-0">
      <Link
        to={to}
        className="block text-white text-lg py-3 px-4 hover:bg-blue-800 transition-colors rounded-md"
        onClick={handleMenuClick}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <header className="bg-blue-900 p-4 shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold">
          <Link to="/" className="text-white hover:text-gray-300 text-xl md:text-2xl lg:text-3xl">
            Developer P.
          </Link>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/skills" label="Skills" />
          <NavItem to="/portfolio" label="Portfolio" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Form for larger screens */}
        <div className="hidden md:flex items-center">
          <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />
        </div>
      </nav>

      {/* Mobile Menu for smaller screens */}
      <MobileMenu
        isOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        results={results}
      />

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;

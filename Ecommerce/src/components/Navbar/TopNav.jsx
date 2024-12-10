import React, { useState, useEffect } from 'react';

function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-gray-800 shadow-md' : 'bg-transparent shadow-none'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 
            className={`text-white ${isScrolled ? 'text-2xl' : 'text-4xl'}`}
          >
            My Logo
          </h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-blue-500">
              About
            </a>
          </li>
          {/* More navigation items */}
        </ul>
      </div>
    </nav>
  );
}

export default TopNav;
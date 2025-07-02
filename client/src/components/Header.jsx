import React from "react";
import { Link } from "react-router-dom";
import "./header.css"; // Optional if you're using additional custom styles

const Header = () => {
  return (
    <header className="bg-sky-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Left menu */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/shop" className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-700">Shop</Link>
        </div>

        {/* Center logo */}
        <div className="w-full sm:w-auto text-center sm:flex-1 sm:text-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-900">Sparkle PVD</Link>
        </div>

        {/* Right login/signup */}
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <Link to="/signin" className="bg-white text-blue-800 px-3 py-1 rounded border border-blue-300 hover:bg-blue-100 text-sm sm:text-base">
            Login / Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

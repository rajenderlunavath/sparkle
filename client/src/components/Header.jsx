import React from "react";
import "./css/header.css"; // Adjust if you use Tailwind or another method

const Header = () => {
  return (
    <header className="header">
      {/* Left: Menu */}
      <div className="header-section left">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </div>

      {/* Center: Logo or Brand Name */}
      <div className="header-section center">
        <a href="/" className="brand-title">SPARKLE PVD</a>
      </div>

      {/* Right: Login / SignUp */}
      <div className="header-section right">
        <a href="#login" className="btn-auth">Login</a>
        <a href="#signup" className="btn-auth">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;

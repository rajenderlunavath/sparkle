import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/profile"); // ✅ redirect after login
    } catch (err) {
      console.error("Google Sign-In Error:", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-sky-100 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Left Section: Nav */}
        <div className="flex-1 flex items-center space-x-4 justify-start">
          <Link to="/" className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/shop" className="text-sm sm:text-base font-medium text-gray-700 hover:text-blue-700">Shop</Link>
        </div>

        {/* Center logo */}
        <div className="flex-1 justify-center">
          <Link to="/">
            <img
             src={logo}
             alt="Sparkle PVD Logo"
             className="max-h-16 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right auth buttons */}
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          {!user ? (
            <button
              onClick={handleLogin}
              className="bg-white text-blue-800 px-3 py-1 rounded border border-blue-300 hover:bg-blue-100 text-sm sm:text-base"
            >
              Login / Signup
            </button>
          ) : (
            <>
              <Link
                to="/profile"
                className="bg-white text-green-700 px-3 py-1 rounded border border-green-300 hover:bg-green-100 text-sm sm:text-base"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm sm:text-base"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
      navigate("/profile");
    } catch (err) {
      console.error("Login error", err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-sky-100 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Menu toggle for mobile */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center items-center flex-1 sm:flex-none">
          <Link to="/">
            <img
              src={logo}
              alt="Sparkle Logo"
              className="h-14 sm:h-16 w-auto object-contain mx-auto"
            />
          </Link>
        </div>

        {/* Right: Desktop nav */}
        <nav className="hidden sm:flex items-center space-x-5">
          <Link to="/shop" className="text-gray-700 hover:text-blue-700 text-sm sm:text-base">Shop</Link>
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
        </nav>
      </div>

      {/* Mobile nav when menuOpen */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-700">Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-blue-700">Shop</Link>
          {!user ? (
            <button
              onClick={() => {
                handleLogin();
                setMenuOpen(false);
              }}
              className="w-full bg-white text-blue-800 px-3 py-1 rounded border border-blue-300 hover:bg-blue-100 text-left"
            >
              Login / Signup
            </button>
          ) : (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="block bg-white text-green-700 px-3 py-1 rounded border border-green-300 hover:bg-green-100"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full bg-red-600 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;

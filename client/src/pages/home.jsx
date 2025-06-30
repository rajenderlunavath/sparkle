import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Welcome to Sparkle 🌿</h1>
      <p className="text-lg mb-8">Explore all our pages below</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Link to="/shop" className="bg-white shadow p-4 rounded hover:bg-purple-50">🛍 Shop</Link>
        <Link to="/signin" className="bg-white shadow p-4 rounded hover:bg-purple-50">🔐 Sign In / Sign Up</Link>
        <Link to="/cart" className="bg-white shadow p-4 rounded hover:bg-purple-50">🛒 Cart</Link>
        <Link to="/content" className="bg-white shadow p-4 rounded hover:bg-purple-50">📄 Content</Link>
        <Link to="/content-details" className="bg-white shadow p-4 rounded hover:bg-purple-50">📋 Content Details</Link>
        <Link to="/order-placed" className="bg-white shadow p-4 rounded hover:bg-purple-50">✅ Order Placed</Link>
      </div>
    </div>
  );
};

export default Home;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Shop from "./pages/shop";
import SignIn from "./pages/SignIn";
import Cart from "./pages/cart";
import Content from "./pages/content";
import ContentDetails from "./pages/contentDetails";
import OrderPlaced from "./pages/orderPlaced";

// Components (optional usage inside pages)
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Optional: Wrap with layout */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content-details" element={<ContentDetails />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

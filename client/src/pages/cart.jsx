import React, { useEffect, useState } from "react";
import "./css/cart.css";
import { Helmet } from "react-helmet";

// Placeholder components for Header and Footer
// Replace these with your actual Header and Footer components or implement them accordingly
const Header = () => (
  <header>
    {/* Header content goes here */}
  </header>
);

const Footer = () => (
  <footer>
    {/* Footer content goes here */}
  </footer>
);

const Cart = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Example: You can fetch cart items from an API or local storage here
  useEffect(() => {
    // Placeholder for fetching cart items logic
    // For now, just simulate with empty array and 0 total items
    setCartItems([]); 
    setTotalItems(0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cart | E-COMMERCE WEBSITE BY EDYODA</title>
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8NZEg=s900-c-k-c0xffffffff-no-rj-mo"
          type="image/gif"
          sizes="16x16"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/4a3b1f73a2.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Helmet>

      <Header />

      <main id="cartMainContainer">
        <h1>Checkout</h1>
        <h3 id="totalItem">Total Items: {totalItems}</h3>

        <div id="cartContainer">
          {/* Render cart items here */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                {/* Customize item display */}
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;

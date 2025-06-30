import React, { useEffect, useState } from "react";
import "./css/contetDetails.css"; // Note: Check spelling if there's a typo in your CSS file name
import { Helmet } from "react-helmet";

// Placeholder components for Header and Footer
const Header = () => <header>{/* Header content here */}</header>;
const Footer = () => <footer>{/* Footer content here */}</footer>;

const ContentDetails = () => {
  const [product, setProduct] = useState(null);

  // Example: Fetch product details from API or context
  useEffect(() => {
    // Placeholder for fetching product data
    // For now, simulate with empty state
    setProduct(null);
  }, []);

  return (
    <>
      <Helmet>
        <title>CONTENT DETAILS | E-COMMERCE WEBSITE BY EDYODA</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
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

      <main id="containerProduct">
        {product ? (
          <div className="product-details">
            {/* Customize product details display */}
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            {/* Add more product details as needed */}
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ContentDetails;

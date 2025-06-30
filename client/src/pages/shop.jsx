import React from "react";
import { Helmet } from "react-helmet";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      description: "This is a cool product with great features.",
      image: "https://via.placeholder.com/300x200?text=Product+1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      description: "Another amazing product for your needs.",
      image: "https://via.placeholder.com/300x200?text=Product+2",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shop | E-COMMERCE WEBSITE</title>
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8NZEg=s900-c-k-c0xffffffff-no-rj-mo"
          type="image/gif"
          sizes="16x16"
        />
      </Helmet>

      <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Our Products</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                width: "300px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "auto", borderRadius: "6px" }}
              />
              <h3 style={{ marginTop: "1rem" }}>{product.name}</h3>
              <p style={{ color: "#666" }}>{product.description}</p>
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {product.price}
              </p>
              <button
                style={{
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;

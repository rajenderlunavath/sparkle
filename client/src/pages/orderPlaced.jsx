import React from "react";
import "./css/orderPlaced.css";
import { Helmet } from "react-helmet";

// Placeholder components for Header and Footer
const Header = () => <header>{/* Header content here */}</header>;
const Footer = () => <footer>{/* Footer content here */}</footer>;

const OrderPlaced = () => {
  return (
    <>
      <Helmet>
        <title>ORDER PLACED | E-COMMERCE WEBSITE BY EDYODA</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8N580g=s900-c-k-c0xffffffff-no-rj-mo"
          type="image/gif"
          sizes="16x16"
        />
        <script
          src="https://kit.fontawesome.com/4a3b1f73a2.js"
          crossOrigin="anonymous"
          defer
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />

      <div id="orderContainer">
        <div id="check">
          <i className="fas fa-check-circle"></i>
        </div>
        <div id="aboutCheck">
          <h1>Order Placed Successfully!</h1>
          <p>We've sent you an email with the Order details.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderPlaced;

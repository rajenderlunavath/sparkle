import React from "react";
import "./css/header.css";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8NZEg=s900-c-k-c0xffffffff-no-rj-mo"
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

      <header>
        <section>
          <div id="container">
            <div id="shopName">
              <a href="/">
                <b>SHOP</b>LANE
              </a>
            </div>
            <div id="collection">
              <div id="clothing">
                <a href="/clothing">CLOTHING</a>
              </div>
              <div id="accessories">
                <a href="/accessories">ACCESSORIES</a>
              </div>
            </div>
            <div id="search">
              <i className="fas fa-search search"></i>
              <input
                type="text"
                id="input"
                name="searchBox"
                placeholder="Search for Clothing and Accessories"
              />
            </div>
            <div id="user">
              <a href="/cart">
                <i className="fas fa-shopping-cart addedToCart">
                  <div id="badge">0</div>
                </i>
              </a>
              <a href="#">
                <i className="fas fa-user-circle userIcon"></i>
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

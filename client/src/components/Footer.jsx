import React from "react";
import "./footer.css";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <footer>
        <section>
          <div id="containerFooter">
            <div className="webFooter">
              <h3>online store</h3>
              <p>men clothing</p>
              <p>women clothing</p>
              <p>men accessories</p>
              <p>women accessories</p>
            </div>
            <div className="webFooter">
              <h3>helpful link</h3>
              <p>home</p>
              <p>about</p>
              <p>contact</p>
            </div>
            <div className="webFooter">
              <h3>partners</h3>
              <p>zara</p>
              <p>pantaloons</p>
              <p>levis</p>
              <p>ucb</p>
              <p>+ many more</p>
            </div>
            <div className="webFooter">
              <h3>address</h3>
              <p>building 101</p>
              <p>central avenue</p>
              <p>la - 902722</p>
              <p>united states</p>
            </div>
          </div>
          <div id="credit">
            <a href="https://linkedin.com/in/priyanka-sharma-b79401142">
              © Priyanka Sharma
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="https://www.edyoda.com/" target="_blank" rel="noopener noreferrer">
              EDYODA
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;

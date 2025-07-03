import React from "react";
import "./footer.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <footer>
        <section>
          <div id="containerFooter">
            <div className="webFooter">
              <h3><Link to = "./shop">online store</Link></h3>
            </div>
            <div className="webFooter">
              <h3>helpful link</h3>
            </div>
            <div className="webFooter">
              <h3>partners</h3>
            </div>
            <div className="webFooter">
              <h3>address</h3>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;

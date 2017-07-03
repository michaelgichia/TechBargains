/**
*
* Footer
*
*/

import React from "react";
import { Link } from "react-router";
import "!!style-loader!css-loader!./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-paragraph">
        <p>
          If you click a merchant link and buy a product or service on their
          website, we may be paid a fee by the merchant.
        </p>
      </div>
      <div className="footer-paragraph">
        <p>
          <Link className="about-us" to="/about-us">About Us</Link>
          {" "}|{" "}
          <Link className="privacy" to="/privacy-policy">
            Privacy Policy Terms of Use
          </Link>
        </p>
      </div>
      <div className="footer-paragraph">
        <p>© Copyright 2017 DealsExpert.</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

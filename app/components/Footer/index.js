/**
*
* Footer
*
*/

import React from "react";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";

import "!!style-loader!css-loader!./style.css";

function Footer() {
  return (
    <footer>
      <Grid fluid className="footer">
        <Row>
          <p>
            If you click a merchant link and buy a product or service on their
            website, we may be paid a fee by the merchant.
          </p>
        </Row>
        <Row>
          <p>About Us   |   Privacy Policy Terms of Use</p>
        </Row>
        <Row>
          <p>© Copyright 2017 DealsExpert.</p>
        </Row>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;

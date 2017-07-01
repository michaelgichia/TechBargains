/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from "react";
import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import CarouselContainer from "containers/CarouselContainer";
import Product from "containers/Product";
import { Container, Row, Col } from "reactstrap";
import "!!style-loader!css-loader!./style.css";

class HomePage extends React.PureComponent {
  state = {
    dropdownValue: "Most Recent"
  };

  handleDropdown = e => this.setState({ dropdownValue: e.target.id });

  render() {
    return (
      <Container fluid>
        <div className="row-wrapper">
          <Row>
            <div className="home-column-wrapper">
              <Col xs="12" sm="12" md="12" lg="12" xl="9">
                <Product />
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

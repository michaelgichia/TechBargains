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
import Spinner from "containers/Spinner";
import Deal from "containers/Deal";
import Coupon from "containers/Coupon";
import Stores from "containers/Stores";
import CarouselContainer from "containers/CarouselContainer";
import Product from "containers/Product";
import { Container, Row, Col } from "reactstrap";
import "!!style-loader!css-loader!./home.css";


class HomePage extends React.PureComponent {
  state = {
    dropdownValue: "Most Recent"
  };

  handleDropdown = e => this.setState({ dropdownValue: e.target.id });

  render() {
    return (
      <Container fluid>
        <Spinner />
        <div className="row-wrapper">
          <Row style={{ minWidth: "100%", margin: 0 }}>
            <Col
              className="row-wrapper-column1"
              xs="12"
              sm="12"
              md="8"
              lg="8"
              xl="8"
            >
              <CarouselContainer />
              <Product />
            </Col>
            <Col
              className="row-wrapper-column2"
              md="4"
              lg="4"
              xl="4">
              <div className="home-second-wrapper">
                <Disclaimer />
                <Deal />
                <Coupon />
                <Stores />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

const Disclaimer = () =>
  <div className="disclose-wrapper">
    <p className="disclose">
    Disclaimer: If you click a merchant link and buy a product or service on their website, we may be paid a fee by the merchant.
    </p>
  </div>

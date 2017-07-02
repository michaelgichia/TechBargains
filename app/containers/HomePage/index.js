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
import Media from "react-media";
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
        <div className="row-wrapper">
          <Row>
            <Col xs="12" sm="12" md="12" lg="8" xl="8">
              <Product />
            </Col>
            <Media
              query="(min-width: 1024px)"
              render={() =>
                <Col lg="4" xl="4">
                  <Deal />
                  <Coupon />
                  <Stores />
                </Col>}
            />
          </Row>
        </div>
      </Container>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

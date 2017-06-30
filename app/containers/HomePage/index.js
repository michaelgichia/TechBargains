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
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import "!!style-loader!css-loader!./style.css";


class HomePage extends React.PureComponent {
  state = {
    dropdownValue: "Most Recent"
  };

  handleDropdown = e => this.setState({ dropdownValue: e.target.id });

  render() {
    return (
      <Grid fluid>
        <Row style={{ marginRight: 0, marginLeft: 0 }}>
          <Col
            id="home-first-wrapper"
            xs={12}
            sm={12}
            md={12}
            lg={8}
          >
            <Col
              xsHidden 
              smHidden 
              mdHidden 
            >
              <CarouselContainer />
            </Col>
            <Product />
          </Col>
          <Col
            xsHidden 
            smHidden 
            mdHidden 
            lg={4}
          >
            <Deal />
            <Coupon />
            <Stores />
          </Col>
        </Row>
      </Grid>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

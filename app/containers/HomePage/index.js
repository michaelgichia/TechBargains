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

import Deal from 'containers/Deal';
import Coupon from 'containers/Coupon';
import Stores from 'containers/Stores';
import Dropdown from 'components/Dropdown';
import CarouselContainer from 'containers/CarouselContainer';
import Product from 'containers/Product';
// import MobileProductDetail from 'containers/MobileProductDetail';
import React from 'react';
import MediaQuery from 'react-responsive';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    dropdownValue: 'Most Recent',
  }

  handleDropdown = (e) => this.setState({ dropdownValue: e.target.id });

  render() {
    return (
      <MediaQuery minDeviceWidth={1224}>
        {(matches) => {
          if (matches) {
            return (
              <Grid fluid>
              <Row className="show-grid">
                <Col xs={12} sm={8} md={8} lg={8}>
                  <CarouselContainer />
                  <Dropdown
                    handleDropdown={this.handleDropdown}
                    dropdownValue={this.state.dropdownValue}
                  />
                  <Product />
                </Col>
                <Col xsHidden sm={4} md={4} lg={4}>
                  <Deal />
                  <Coupon />
                  <Stores />
                </Col>
              </Row>
              </Grid>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

HomePage.propTypes = {
};

export default HomePage;

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
import Dropdown from 'components/Dropdown';
import CarouselContainer from 'containers/CarouselContainer';
import Product from 'containers/Product';
import Cuopon from 'containers/Cuopon';
// import MobileProductDetail from 'containers/MobileProductDetail';
import React from 'react';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-styled-flexboxgrid';

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
              <Row>
                <Col xs={10} sm={8} smOffset={0.5} md={6} mdOffset={0.5} lg={6} lgOffset={0.5}>
                  <CarouselContainer />
                  <Dropdown
                    handleDropdown={this.handleDropdown}
                    dropdownValue={this.state.dropdownValue}
                  />
                  <Product />
                </Col>
                <Col xs={1} sm={3} md={5} lg={5}>
                    <Cuopon />
                    <Cuopon />
                    <Cuopon />
                </Col>
              </Row>
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

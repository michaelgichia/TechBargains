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
import ProductDetail from 'components/ProductDetail';
import Dropdown from 'components/Dropdown';
import CarouselContainer from 'containers/CarouselContainer';

// import MobileProductDetail from 'containers/MobileProductDetail';
import DealModal from 'components/DealModal';
import React from 'react';
import shortid from 'shortid';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import { Col, Row } from 'react-styled-flexboxgrid';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    product: {
      name: '',
      description: '',
      merchant: 'Amazon',
      backlink: '#',
      themeColor: '#9BF0E9',
      image: '',
      features: [],
      id: '',
    },
    selected: {
      merchant: '',
      backlink: '',
      name: '',
    },
    open: false,
    products: [],
    dropdownValue: 'Most Recent',
  }

  componentDidMount() {
    axios.get('/public-api/item')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ products: response.data.results });
      }
      // console.info('err', response.data.errors);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleOpen = (id) => {
    const selectedItem = this.state.products.filter((product) => product.id === id);
    this.setState({ open: true, selected: selectedItem[0] });
  };

  handleClose = () => {
    axios.get('/public-api/item')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ products: response.data.results });
      }
      // console.info('err', response.data.errors);
    });
    this.setState({ open: false });
  };

  handleDropdown = (e) => this.setState({ dropdownValue: e.target.id });


  render() {
    return (
      <MediaQuery minDeviceWidth={1224}>
        {(matches) => {
          if (matches) {
            return (
              <Row>
                <Col xs={10} sm={7} smOffset={0.5} md={6} mdOffset={0.5} lg={6} lgOffset={0.5}>
                  <CarouselContainer />
                  <Dropdown
                    handleDropdown={this.handleDropdown}
                    dropdownValue={this.state.dropdownValue}
                  />
                  <DealModal
                    handleClose={this.handleClose}
                    open={this.state.open}
                    selected={this.state.selected}
                  />
                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {
                    this.state.products.map((product, index) => (
                      <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
                        <ProductDetail
                          product={product}
                          key={shortid.generate()}
                          handleOpen={this.handleOpen}
                        />
                      </li>
                    ))
                    }
                  </ul>
                </Col>
                <Col xs={false} sm={false} md={3} lg={2}>
                  <di>Home</di>
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

HomePage.defaultProps = {
  open: false,
};

export default HomePage;

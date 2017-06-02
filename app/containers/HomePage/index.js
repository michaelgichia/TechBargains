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
// import MobileProductDetail from 'containers/MobileProductDetail';
import DealModal from 'components/DealModal';
import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

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
  }

  render() {
    return (
      <MediaQuery minDeviceWidth={1224}>
        {(matches) => {
          if (matches) {
            return (
              <Grid fluid>
                <Row>
                  <Col sm={12} xs={10} smOffset={1} md={8} mdOffset={2} lg={7} lgOffset={2}>
                    <DealModal
                      handleClose={this.handleClose}
                      open={this.state.open}
                      selected={this.state.selected}
                    />
                  </Col>
                  <Col sm={12} xs={10} smOffset={1} md={8} mdOffset={2} lg={7} lgOffset={2}>
                    <ul style={{ listStyleType: 'none' }}>
                      {
                      this.state.products.map((product, index) => (
                        <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
                          <ProductDetail
                            product={product}
                            key={index}
                            handleOpen={this.handleOpen}
                          />
                        </li>
                      ))
                    }
                    </ul>
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

HomePage.defaultProps = {
  open: false,
};

export default HomePage;
// return (
//   <Grid fluid>
//     <Row>
//       <Col sm={11.9} xs={11.9}>
//         <MobileProductDetail />
//       </Col>
//     </Row>
//   </Grid>
// );
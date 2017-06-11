/*
 *
 * Product
 *
 */

import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import ProductDetail from 'components/ProductDetail';
import DealModal from 'components/DealModal';
import shortid from 'shortid';
import axios from 'axios';

import { connect } from 'react-redux';

export class Product extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    products: [],
    open: false,
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

  render() {
    return (
      <div>
        <DealModal
          handleClose={this.handleClose}
          open={this.state.open}
          selected={this.state.selected}
        />
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {
          this.state.products.map((product) => (
            <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
              <LazyLoad height={200} offset={200}>
                <ProductDetail
                  product={product}
                  onTouchTap={this.handleOpen}
                />
              </LazyLoad>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

Product.defaultProps = {
  open: false,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Product);

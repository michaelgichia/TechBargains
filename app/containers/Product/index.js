/*
 *
 * Product
 *
 */

import React, { PropTypes } from 'react';
import LazyLoad from 'react-lazyload';
import ProductDetail from 'components/ProductDetail';
import shortid from 'shortid';
import axios from 'axios';
import { handleOpenModal, handleCloseModal } from 'containers/ReactModal/actions';


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

  handleClose = () => {
    axios.get('/public-api/item')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ products: response.data.results });
      }
    });
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {
          this.state.products.map((product) => (
            <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
              <LazyLoad height={200} offset={200}>
                <ProductDetail
                  product={product}
                  onTouchTap={() => this.props.handleOpenModal(product)}
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
};

const mapStateToProps = ({ modal }) => ({
  show: modal.show
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: (product) => dispatch(handleOpenModal(product)),
  handleCloseModal: () => dispatch(handleCloseModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

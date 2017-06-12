/*
 *
 * Product
 *
 */

import React, { PropTypes } from 'react';
import ProductDetail from 'components/ProductDetail';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { handleOpenModal } from 'containers/ReactModal/actions';
import { fetchTrendingDeals } from './actions';

export class Product extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    products: [],
    errors: '',
  }

  componentDidMount() {
    this.props.fetchTrendingDeals();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products !== this.state.products) {
      this.setState((prevState, props) =>  ({ products: props.products }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) =>  ({errors: props.errors}));
    }
  }

  render() {
    return (
      <div>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {
          this.state.products.map((product) => (
            <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
              <ProductDetail
                product={product}
                onTouchTap={() => this.props.handleOpenModal(product)}
              />
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

const mapStateToProps = ({ product }) => ({
  products: product.products,
  errors: product.errors
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: (product) => dispatch(handleOpenModal(product)),
  fetchTrendingDeals: () => dispatch(fetchTrendingDeals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

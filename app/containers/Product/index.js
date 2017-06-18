/*
 *
 * Product
 *
 */

import React, { PropTypes } from 'react';
import {
  InstantSearch,
  Hits,
  SortBy,
} from 'react-instantsearch/dom';
import 'react-instantsearch-theme-algolia/style.css';
import ProductDetail from 'components/ProductDetail';
import { CloudinaryContext } from 'cloudinary-react';
import { connect } from 'react-redux';
import { handleOpenModal } from 'containers/ReactModal/actions';
import { fetchTrendingDeals } from './actions';


export class Product extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    products: [],
    errors: '',
    searchState: {},
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
        <InstantSearch
          appId="YNZ7XXV49B"
          apiKey="90550ee45080bb58130f0ac76a4e28f5"
          indexName="item"
        >
        <SortBy
          items={[
            { value: 'expire', label: 'Expire soon' },
            { value: 'item', label: 'Most Recent' },
          ]}
          defaultRefinement="item"
        />
          <CloudinaryContext cloudName="dw3arrxnf">
            <Hits hitComponent={
              ({hit}) => {
                console.log({hit})
                return <ProductDetail
                  product={hit}
                  onTouchTap={() => this.props.handleOpenModal(hit)}
                />
              }
            } />
          </CloudinaryContext>
        </InstantSearch> 
      </div>
    );
  }
}

Product.propTypes = {
};

const mapStateToProps = ({ product }) => ({
  products: product.products,
  errors: product.errors,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: (product) => dispatch(handleOpenModal(product)),
  fetchTrendingDeals: () => dispatch(fetchTrendingDeals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

        // <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        //   <CloudinaryContext cloudName="dw3arrxnf">
        //     {
        //     this.state.products.map((product) => (
        //       <li key={shortid.generate()} style={{ marginTop: 10, marginBottom: 10 }}>
        //         <ProductDetail
        //           product={product}
        //           onTouchTap={() => this.props.handleOpenModal(product)}
        //         />
        //       </li>
        //     ))
        //     }
        //   </CloudinaryContext>
        // </ul>
        
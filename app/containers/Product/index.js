/*
 *
 * Product
 *
 */

import React from "react";
import _ from "lodash";
import shortid from "shortid";
import ProductDetail from "components/ProductDetail";
import Dropdown from "components/Dropdown";
import { connect } from "react-redux";
import { handleOpenModal } from "containers/ReactModal/actions";
import { fetchTrendingDeals } from "./actions";
import "!!style-loader!css-loader!./style.css";

export class Product extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    products: [],
    errors: "",
    dropdownValue: "Most Recent",
    expireSoon: false
  };

  componentDidMount() {
    this.props.fetchTrendingDeals();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.products !== this.state.products) {
      this.setState((prevState, props) => ({ products: props.products }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => ({ errors: props.errors }));
    }
  }

  sortByExpire = products =>
    products.sort(
      (current, next) => +new Date(current.expire) - +new Date(next.expire)
    );

  sortByCreatedAt = products =>
    products.sort(
      (current, next) =>
        +new Date(current.createdAt) - +new Date(next.createdAt)
    );

  handleDropdown = e => {
    if (e.target.id === "Expiring Soon") {
      this.setState({ dropdownValue: e.target.id, expireSoon: true });
    } else {
      this.setState({ dropdownValue: e.target.id, expireSoon: false });
    }
  };

  checkIfProductsShouldBeSort = (products, expireSoon) => {
    let newProducts;
    if (expireSoon) {
      newProducts = this.sortByExpire(products);
    } else {
      newProducts = this.sortByCreatedAt(products);
    }
    return newProducts;
  };

  render() {
    const { products, expireSoon } = this.state;
    const currentProducts = this.checkIfProductsShouldBeSort(
      products,
      expireSoon
    );
    return (
      <div>
        <Dropdown
          handleDropdown={this.handleDropdown}
          dropdownValue={this.state.dropdownValue}
        />
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {currentProducts.map(product =>
            <li
              key={shortid.generate()}
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              <ProductDetail
                product={product}
                onTouchTap={() => this.props.handleOpenModal(product)}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

Product.propTypes = {};

const mapStateToProps = ({ product }) => ({
  products: product.products,
  errors: product.errors
});

const mapDispatchToProps = dispatch => ({
  handleOpenModal: product => dispatch(handleOpenModal(product)),
  fetchTrendingDeals: () => dispatch(fetchTrendingDeals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);

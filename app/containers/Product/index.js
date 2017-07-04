/*
 *
 * Product
 *
 */

import React from "react";
import SideColumnHeader from "components/SideColumnHeader";
import Dropdown from "components/Dropdown";
import "react-instantsearch-theme-algolia/style.css";
import shortid from "shortid";
import ProductDetail from "components/ProductDetail";
import { CloudinaryContext } from "cloudinary-react";
import { connect } from "react-redux";
import { handleOpenModal } from "containers/ReactModal/actions";
import { fetchTrendingDeals } from "./actions";
import "!!style-loader!css-loader!./style.css";

export class Product extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    products: [],
    errors: "",
    dropdownValue: "Most Recent"
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

  handleDropdown = e => this.setState({ dropdownValue: e.target.id });

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return (
      <div>
        <div>
          <SideColumnHeader title="Latest Deals" />
        </div>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {this.state.products.map(product =>
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

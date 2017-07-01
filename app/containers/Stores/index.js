/*
 *
 * Stores
 *
 */

import React, { PropTypes } from "react";
import viewSize from "screen-size";
import { Link } from "react-router";
import CouponHeader from "components/CouponHeader";
import { connect } from "react-redux";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import shortid from "shortid";
import { fetchStores } from "./actions";

export class Stores extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    stores: [],
    errors: ""
  };

  componentDidMount() {
    if (viewSize().x > 992) {
      this.props.fetchStores();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stores !== this.state.stores) {
      this.setState({ stores: nextProps.stores });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  renderStores = stores =>
    stores.map(store =>
      <div className="featured-store" key={shortid.generate()}>
        <Link to={`/merchant/${store.id}`}>
          <span className="store-link" />
        </Link>
        <Image publicId={store.imageUrl}>
          <Transformation crop="scale" height="90" dpr="auto" />
        </Image>
      </div>
    );

  render() {
    return (
      <div>
        {this.state.stores.length > 0
          ? <CloudinaryContext cloudName="dw3arrxnf">
              <CouponHeader title="Popular Stores" />
              {this.renderStores(this.state.stores)}
            </CloudinaryContext>
          : <div />
        }
      </div>
    );
  }
}

Stores.propTypes = {
  stores: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired,
  fetchStores: PropTypes.func.isRequired
};

const mapStateToProps = ({ stores }) => ({
  stores: stores.stores,
  errors: stores.errors
});

const mapDispatchToProps = dispatch => ({
  fetchStores: () => dispatch(fetchStores())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stores);

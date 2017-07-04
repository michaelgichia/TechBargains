/*
 *
 * Stores
 *
 */

import React, { PropTypes } from "react";
import { Link } from "react-router";
import SideColumnHeader from "components/SideColumnHeader";
import { connect } from "react-redux";
import { Image } from "cloudinary-react";
import shortid from "shortid";
import viewSize from "screen-size";
import { fetchStores } from "./actions";

import "!!style-loader!css-loader!./stores.css";

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
      <Link to={`/merchant/${store.id}`} key={shortid.generate()}>
        <Image
          cloudName="dw3arrxnf"
          publicId={store.imageUrl}
          width="180"
          height="90"
        />
      </Link>
    );

  render() {
    return (
      <div>
        {this.state.stores.length > 0
          ? <div className="stores-items">
              <SideColumnHeader title="Popular Stores" />
              {this.renderStores(this.state.stores)}
            </div>
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

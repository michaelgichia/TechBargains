/*
 *
 * Deal
 *
 */

import React, { PropTypes } from "react";
import CouponHeader from "components/CouponHeader";
import { connect } from "react-redux";
import shortid from "shortid";
import CouponDetail from "components/CouponDetail";
import { CloudinaryContext } from "cloudinary-react";

import { fetchDeals } from "./actions";

export class Deal extends React.Component {
  state = {
    deals: [],
    errors: ""
  };

  componentDidMount() {
    this.props.fetchDeals();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deals !== this.state.deals) {
      this.setState({ deals: nextProps.deals });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  renderDeals = deals =>
    deals.map(deal => <CouponDetail coupon={deal} key={shortid.generate()} />);

  render() {
    return (
      <div>
        {this.state.deals.length > 0
          ? <CloudinaryContext cloudName="dw3arrxnf">
              <CouponHeader title="Trending Deals" />
              {this.renderDeals(this.state.deals)}
            </CloudinaryContext>
          : <div />}
      </div>
    );
  }
}

Deal.propTypes = {
  deals: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired,
  fetchDeals: PropTypes.func.isRequired
};

const mapStateToProps = ({ deals }) => ({
  deals: deals.deals,
  errors: deals.errors
});

const mapDispatchToProps = dispatch => ({
  fetchDeals: () => dispatch(fetchDeals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Deal);

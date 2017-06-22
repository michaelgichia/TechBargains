/*
 *
 * Coupon
 *
 */

import CouponHeader from "components/CouponHeader";
import React, { PropTypes } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import CouponDetail from "components/CouponDetail";
import { fetchCoupon } from "./actions";

export class Coupon extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    coupons: [],
    errors: ""
  };
  
  componentDidMount() {
    this.props.fetchCoupon();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coupons !== this.state.coupons) {
      this.setState({ coupons: nextProps.coupons });
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  renderCoupons = coupons =>
    coupons.map(coupon =>
      <CouponDetail coupon={coupon} key={shortid.generate()} />
    );

  render() {
    return (
      <div>
        <CouponHeader title="Top Coupons" />
        {this.renderCoupons(this.state.coupons)}
      </div>
    );
  }
}

Coupon.propTypes = {
  coupons: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired,
  fetchCoupon: PropTypes.func.isRequired
};

const mapStateToProps = ({ coupons }) => ({
  coupons: coupons.coupons,
  errors: coupons.errors
});

const mapDispatchToProps = dispatch => ({
  fetchCoupon: () => dispatch(fetchCoupon())
});

export default connect(mapStateToProps, mapDispatchToProps)(Coupon);

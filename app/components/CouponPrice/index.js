/**
*
* CouponPrice
*
*/

import React from 'react';
import CouponBtn from 'components/CouponBtn';
import PropTypes from 'prop-types';


class CouponPrice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-prices">
        <div className="coupon-prices-first">
          <p className="final-price"><span>{`${this.props.percentage}% Off`}</span></p>
          <p className="shipping">{ this.props.isShipped ?  this.props.isShipped : '' }</p>
        </div>
        <div className="coupon-prices-second">
          <CouponBtn coupon={this.props.coupon} />
        </div>
      </div>
    );
  }
}

CouponPrice.propTypes = {
  percentage: PropTypes.string.isRequired,
  isShipped: PropTypes.string.isRequired,
};

export default CouponPrice;


/**
*
* CouponPrice
*
*/

import React from 'react';


class CouponPrice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-prices">
        <p>
          <span className="last-price"> $99.99</span>
          <span className="percentageOff">($50.00 Off)</span>
        </p>
        <p className="final-price"><span>$49.99</span></p>
        <p className="shipping">+ free shipping</p>
      </div>
    );
  }
}

CouponPrice.propTypes = {

};

export default CouponPrice;


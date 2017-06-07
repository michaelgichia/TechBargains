/**
*
* CouponHeader
*
*/

import React from 'react';

class CouponHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="coupon-header">
        <li>Top Coupons</li>
      </ul>
    );
  }
}

CouponHeader.propTypes = {

};

export default CouponHeader;

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
        <li>Trending Deals</li>
      </ul>
    );
  }
}

CouponHeader.propTypes = {

};

export default CouponHeader;

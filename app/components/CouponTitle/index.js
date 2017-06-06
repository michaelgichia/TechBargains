/**
*
* CouponTitle
*
*/

import React from 'react';


class CouponTitle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h2 className="coupon-title">
        <a>Amazon Deal of the Day: Adobe Premiere Elements 15 Software $49.99</a>
      </h2>
    );
  }
}

CouponTitle.propTypes = {

};

export default CouponTitle;

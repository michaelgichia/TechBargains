/**
*
* CouponImage
*
*/

import React from 'react';

class CouponImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Gfp-fridge-contents.jpg" alt="" />
      </div>
    );
  }
}

CouponImage.propTypes = {

};

export default CouponImage;

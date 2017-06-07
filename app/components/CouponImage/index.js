/**
*
* CouponImage
*
*/

import React from 'react';
import PropTypes from 'prop-types';

class CouponImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-image">
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }
}

CouponImage.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default CouponImage;

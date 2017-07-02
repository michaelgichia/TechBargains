/**
*
* CouponHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import "!!style-loader!css-loader!./coupon-header.css";

class CouponHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul className="coupon-header">
        <li>{ this.props.title }</li>
      </ul>
    );
  }
}

CouponHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CouponHeader;

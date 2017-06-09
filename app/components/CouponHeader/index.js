/**
*
* CouponHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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

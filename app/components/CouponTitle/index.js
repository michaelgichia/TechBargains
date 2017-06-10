/**
*
* CouponTitle
*
*/

import React from 'react';
import PropTypes from 'prop-types';

class CouponTitle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h2 className="coupon-title">
          <div dangerouslySetInnerHTML={{ __html: this.props.name }} />
      </h2>
    );
  }
}

CouponTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CouponTitle;

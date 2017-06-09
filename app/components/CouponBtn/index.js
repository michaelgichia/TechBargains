/**
*
* CouponBtn
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


class CouponBtn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-btn">
        {
          this.props.coupon !== null && this.props.coupon.length > 0 ?
          (<Button
            bsStyle="primary"
            bsSize="sm"
            active
            bsClass="coupon-btn-btn"
          >
              Reveal Code
            </Button>
          )
          :
          (<Button
            bsStyle="primary"
            bsSize="sm"
            active
            bsClass="coupon-btn-btn"
          >
              See Deal
            </Button>
          )
        }
      </div>
    );
  }
}

CouponBtn.propTypes = {
  coupon: PropTypes.string.isRequired,
};

export default CouponBtn;

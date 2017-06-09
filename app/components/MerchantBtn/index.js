/**
*
* MerchantBtn
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';


class MerchantBtn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="merchant-btn">
        {
          this.props.coupon !== null && this.props.coupon.length > 0 ?
          (<Button
            bsStyle="primary"
            bsSize="sm"
            active
            bsClass="merchant-btn-btn"
          >
              Reveal Code
            </Button>
          )
          :
          (<Button
            bsStyle="primary"
            bsSize="sm"
            active
            bsClass="merchant-btn-btn"
          >
              See Deal
            </Button>
          )
        }
      </div>
    );
  }
}

MerchantBtn.propTypes = {
  coupon: PropTypes.string.isRequired,
};

export default MerchantBtn;

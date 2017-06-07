/**
*
* CouponBtn
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 10,
};

class CouponBtn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="coupon-btn">
        {
          this.props.coupon !== null && this.props.coupon.length > 0 ?
          (<RaisedButton
            label="Reveal Code"
            primary
            style={style}
          />
          )
          :
          (<RaisedButton
            label="See Deal"
            primary
            style={style}
          />
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

        
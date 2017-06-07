/**
*
* CouponDetail
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CouponPrice from 'components/CouponPrice';
import CouponTitle from 'components/CouponTitle';
import CouponImage from 'components/CouponImage';
import PaperZindex from 'components/PaperZindex';

class CouponDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PaperZindex>
        <CouponTitle name={this.props.coupon.name} />
        <div className="coupon-div">
          <CouponImage name={this.props.coupon.name} image={this.props.coupon.image} />
          <CouponPrice
            percentage={this.props.coupon.percentage}
            isShipped={this.props.coupon.isShipped}
            coupon={this.props.coupon.coupon}
          />
        </div>
      </PaperZindex>
    );
  }
}

CouponDetail.propTypes = {
  coupon: PropTypes.object.isRequired,
};

export default CouponDetail;

/**
*
* MerchantProducts
*
*/
import MerchantCoupon from 'components/MerchantCoupon';
import MerchantDeal from 'containers/MerchantDeal';
import CouponHeader from 'components/CouponHeader';
import React from 'react';
import Col from 'react-bootstrap/lib/Col';

class MerchantProducts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col id="merchant-id"xs={12} sm={8} md={8} lg={8}>
        <CouponHeader title="29 AMAZON COUPONS"/>
        <MerchantCoupon />
        <MerchantCoupon />
        <MerchantCoupon />
        <CouponHeader title="29 AMAZON COUPONS"/>
        <MerchantDeal />
      </Col>
    );
  }
}

MerchantProducts.propTypes = {

};

export default MerchantProducts;
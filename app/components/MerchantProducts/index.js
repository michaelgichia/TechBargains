/**
*
* MerchantProducts
*
*/
import MerchantCoupon from 'components/MerchantCoupon';
import CouponHeader from 'components/CouponHeader';
import React from 'react';
import Col from 'react-bootstrap/lib/Col';

class MerchantProducts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col xs={12} sm={9} md={8} lg={8} id="merchant-products">
        <CouponHeader title="29 AMAZON COUPONS"/>
        <MerchantCoupon />
        <MerchantCoupon />
        <MerchantCoupon />
      </Col>
    );
  }
}

MerchantProducts.propTypes = {

};

export default MerchantProducts;

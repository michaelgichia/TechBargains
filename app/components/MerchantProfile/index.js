/**
*
* MerchantProfile
*
*/

import React from 'react';
import CouponHeader from 'components/CouponHeader';
import Col from 'react-bootstrap/lib/Col';

class MerchantProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col xs={12} sm={12} md={12} lg={4} className="merchant-profile">
        <CouponHeader title={`ABOUT ${this.props.info.title}`} />
        <div
          dangerouslySetInnerHTML={{ __html: this.props.info.about }}
        />
      </Col>
    );
  }
}

MerchantProfile.defaultProps = {
  info: {
    title: '',
    about: '',
  }
};

export default MerchantProfile;

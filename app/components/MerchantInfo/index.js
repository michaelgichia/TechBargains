/**
*
* MerchantInfo
*
*/

import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import RaisedButton from 'material-ui/RaisedButton';
import CouponIcon from 'material-ui/svg-icons/action/shopping-cart';
import DealsIcon from 'material-ui/svg-icons/maps/local-offer';
import { Image } from 'cloudinary-react'


class MerchantInfo extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="merchant-info" >
        <Col xs={12} sm={4} md={3} lg={3}>
          <div className="amazon-first">
            <Image
              cloudName="dw3arrxnf"
              publicId={this.props.info.public_id}
              width="200"
              crop="scale"
            />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6} lg={6}>
          <div className="amazon-second">
            <div className="amazon-h1"><h1>{`${this.props.info.title} Deals & Coupons`}</h1></div>
            <div className="amazon-description">
              <div className="amazon-text">
                <p>{ this.props.info.description }</p>
              </div>
              <div className="amazon-button">
                <RaisedButton
                  label="Coupons"
                  primary
                  icon={<CouponIcon />}
                  className="amazon-coupon-btn"
                />
                <RaisedButton
                  label="Deals"
                  primary
                  icon={<DealsIcon />}
                  className="amazon-coupon-btn"
                />
              </div>
            </div>
          </div>
        </Col>
      </div>
    );
  }
}

MerchantInfo.propTypes = {

};

MerchantInfo.defaultProps = {
  info: {
    title: '',
    description: '',
  }
};

export default MerchantInfo;

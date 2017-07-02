/**
*
* MerchantInfo
*
*/

import React from "react";
import { Row, Col } from "reactstrap";

import RaisedButton from "material-ui/RaisedButton";
import CouponIcon from "material-ui/svg-icons/action/shopping-cart";
import DealsIcon from "material-ui/svg-icons/maps/local-offer";
import { Image } from "cloudinary-react";

import "!!style-loader!css-loader!./merchant-info.css";

class MerchantInfo extends React.PureComponent {
  render() {
    const { info } = this.props;
    return (
      <Row>
        <Col xs="12" sm="12" md="4" lg="3" xl="3">
          <InfoImage info={info} />
        </Col>
        <Col xs="12" sm="12" md="8" lg="9" xl="9">
          <InfoTitle info={info} />
          <InfoDescription info={info} />
          {Object.keys(info).length > 0 ? <InfoBtn info={info} /> : <div />}
        </Col>
      </Row>
    );
  }
}

MerchantInfo.propTypes = {};

MerchantInfo.defaultProps = {
  info: {
    title: "",
    description: ""
  }
};

export default MerchantInfo;

// Components
const InfoImage = ({ info }) =>
  <div className="merchant-info-image">
    <a href={info.backlink} target="_blank">
      <Image
        cloudName="dw3arrxnf"
        publicId={info.public_id}
        width="200"
        height="120"
        crop="scale"
      />
    </a>
  </div>

const InfoTitle = ({ info }) =>
  <div className="amazon-h1">
    {info.title !== undefined && info.title.length > 0
      ? <h1>{`${info.title} Deals & Coupons`}</h1>
      : <div />}    
  </div>

const InfoDescription = ({ info }) =>
  <div className="amazon-text">
    <p>
      {info.description}
    </p>
  </div>;

const InfoBtn = ({ info }) =>
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
      labelStyle={{
        paddingLeft: 15,
        paddingRight: 35
      }}
    />
  </div>;

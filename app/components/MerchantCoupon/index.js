/**
*
* MerchantCoupon
*
*/

import React from "react";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

import "!!style-loader!css-loader!./merchant-coupon.css";

class MerchantCoupon extends React.Component {
  render() {
    return (
      <Card className="merchant-coupon">
        <CardHeader
          className="merchant-header"
          style={{ paddingBottom: 5 }}
          textStyle={{ paddingRight: 10 }}
          titleColor="#337ab7"
          titleStyle={{
            marginBottom: 10
          }}
          subtitleStyle={{
            fontSize: 15,
            color: "#b0b0b0",
            fontFamily: "Roboto",
            marginBottom: 0,
            paddingBottom: 0
          }}
          title={<h2><a 
            href={this.props.coupon.backlink}
            style={{
              color: "#1f7dd4",
              fontFamily: "Roboto",
          }}
            target="_blank">
              {this.props.coupon.name}
              </a></h2>}
          subtitle={`From ${this.props.coupon.merchant.title} Coupons.`}
        />
        <CardActions>
          <RaisedButton
            label="Reveal Code"
            primary
            onTouchTap={this.props.onTouchTap}
            labelStyle={{ textTransform: "none", fontSize: 16 }}
          />
        </CardActions>
      </Card>
    );
  }
}

MerchantCoupon.propTypes = {};

export default MerchantCoupon;

/**
*
* MerchantCoupon
*
*/

import React from "react";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

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
            fontSize: 18,
            fontFamily: "Roboto",
            marginBottom: 5,
            lineHeight: "1.1"
          }}
          subtitleStyle={{
            fontSize: 15,
            color: "#b0b0b0",
            fontFamily: "Roboto",
            marginBottom: 0,
            paddingBottom: 0
          }}
          title={
            <div dangerouslySetInnerHTML={{ __html: this.props.coupon.name }} />
          }
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

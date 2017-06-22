/**
*
* MerchantCoupon
*
*/

import React from "react";
import YesNoBtn from "components/YesNoBtn";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class MerchantCoupon extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
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
          <YesNoBtn
            isCoupon={this.props.coupon.isCoupon}
            onTouchTap={this.props.onTouchTap}
            backlink={this.props.coupon.backlink}
          />
        </CardActions>
      </Card>
    );
  }
}

MerchantCoupon.propTypes = {};

export default MerchantCoupon;

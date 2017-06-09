/**
*
* MerchantCoupon
*
*/

import React from 'react';
import MerchantBtn from 'components/MerchantBtn';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { cyan500 } from 'material-ui/styles/colors';


class MerchantCoupon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card className="merchant-coupon">
        <CardHeader
          className="merchant-header"
          style={{ paddingBottom: 5 }}
          textStyle={{ paddingRight: 10 }}
          titleColor={cyan500}
          titleStyle={{ fontSize: 18, fontFamily: 'Roboto', marginBottom: 5, lineHeight: '1.1' }}
          subtitleStyle={{ fontSize: 15, color: '#b0b0b0', fontFamily: 'Roboto', marginBottom: 0, paddingBottom: 0 }}
          title="5% Credit Back with Amazon.com Gift Card Reload (Most Users)"
          subtitle="From: Amazon"
        />
        <CardActions>
          <MerchantBtn
            style={{ paddingLeft: '20 !important', paddingRight: '20 !important' }}
            coupon={''}
          />
        </CardActions>
      </Card>
    );
  }
}

MerchantCoupon.propTypes = {

};

export default MerchantCoupon;

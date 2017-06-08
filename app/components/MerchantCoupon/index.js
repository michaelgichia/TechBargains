/**
*
* MerchantCoupon
*
*/

import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class MerchantCoupon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
		  <Card style={{ margin: 10 }}>
		    <CardHeader
		      title="Without Avatar"
		      subtitle="Subtitle"
		      actAsExpander={true}
		      showExpandableButton={true}
		    />
		    <CardActions>
		      <FlatButton label="Action1" />
		      <FlatButton label="Action2" />
		    </CardActions>
		    <CardText expandable={true}>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
		      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
		      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
		    </CardText>
		  </Card>
    );
  }
}

MerchantCoupon.propTypes = {

};

export default MerchantCoupon;

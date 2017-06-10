/**
*
* MproductDetail
*
*/

import React from 'react';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MproductDetail = () => (
  <Card className="card-mobile">
    <CardMedia><img src="http://www.2015airjordans.com/images/nike/201311080203484712.jpg" alt="media" /></CardMedia>
    <div className="mawe">
      <p className="mawe-p">Dr.meter Soil Moisture Meter 3-in-1 Soil Tester $13.99</p>
    </div>
    <div>
      <p className="shamba">Amazon has the popular Dr.meter Soil Moisture Meter 3-in-1 Soil Tester for mike Amazon has the popular Dr.meter Soil Moisture Meter 3-in-1 Soil Tester for mike</p>
      <a className="shamba-link"href="">More Details</a>
    </div>
    <CardActions>
      <FlatButton className="dealbutton-mobile" label="See Deal" />
    </CardActions>
  </Card>
);

MproductDetail.propTypes = {

};

export default MproductDetail;

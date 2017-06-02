/**
*
* MproductDetail
*
*/

import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { style } from './style';
import { SubtitleDiv, TitleDiv } from './StyledComponents';
// import styled from 'styled-components';

const MproductDetail = ({}) => (
  <Card style={style.card}>
    <CardMedia><img src="http://www.2015airjordans.com/images/nike/201311080203484712.jpg" /></CardMedia>
    <TitleDiv>
      <p>Dr.meter Soil Moisture Meter 3-in-1 Soil Tester $13.99</p>
    </TitleDiv>
    <SubtitleDiv>
      <p>Amazon has the popular Dr.meter Soil Moisture Meter 3-in-1 Soil Tester for mike Amazon has the popular Dr.meter Soil Moisture Meter 3-in-1 Soil Tester for mike</p>
      <a href="">More Details</a>
    </SubtitleDiv>
    <CardActions>
      <FlatButton style={style.dealButton} label="See Deal" />
    </CardActions>
  </Card>
);

MproductDetail.propTypes = {

};

export default MproductDetail;

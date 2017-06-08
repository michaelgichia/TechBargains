/**
*
* MerchantProfile
*
*/

import React from 'react';
// import styled from 'styled-components';
import Col from 'react-bootstrap/lib/Col';

class MerchantProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <Col xs={12} sm={3} md={4} lg={4}>
      <p>
        Amazon is the largest Online Retailer and has become synonymous with shopping online. They sell everything from Books, Music, Games, Laptops, TVs, Electronics, Movies, Groceries and even Pet Supplies. They consistently have the great prices (although not always the lowest) and have a massive library of user reviews. 
      </p>
    </Col>
    );
  }
}

MerchantProfile.propTypes = {

};

export default MerchantProfile;

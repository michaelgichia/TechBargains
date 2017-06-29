/**
*
* CategoryProfile
*
*/

import React from 'react';
import CouponHeader from "components/CouponHeader";
import Col from "react-bootstrap/lib/Col";
import "!!style-loader!css-loader!./style.css";


function CategoryProfile({info}) {
  return (
    <Col xs={12} sm={12} md={12} lg={4}>
      <ul className="category-header">
        <li><h2>{ info.title }</h2></li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: info.about }} />
    </Col>
  );
}

CategoryProfile.propTypes = {

};

export default CategoryProfile;

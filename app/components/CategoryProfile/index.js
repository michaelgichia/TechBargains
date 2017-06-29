/**
*
* CategoryProfile
*
*/

import React from 'react';
import CouponHeader from "components/CouponHeader";
import "!!style-loader!css-loader!./style.css";


function CategoryProfile({info}) {
  return (
    <div>
      <ul className="category-header">
        <li><h2>{ info.title }</h2></li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: info.about }} />
    </div>
  );
}

CategoryProfile.propTypes = {

};

export default CategoryProfile;

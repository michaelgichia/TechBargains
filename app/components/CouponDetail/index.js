/**
*
* CouponDetail
*
*/

import React from "react";
import PropTypes from "prop-types";
import { Image } from "cloudinary-react";
import "!!style-loader!css-loader!./coupon-detail.css";


const CouponDetail = ({ coupon }) =>
  <div className="card-zindex">
    <CouponTitle coupon={coupon} />
    <div className="coupon-div">
      <CouponImage coupon={coupon} />
      <CouponPrices coupon={coupon} />
    </div>
  </div>;


CouponDetail.propTypes = {
  coupon: PropTypes.object.isRequired
};

export default CouponDetail;


// Components
/**
* Coupon Title
*/
const CouponTitle = ({ coupon }) =>
  <h2 className="coupon-detail-title">
    <a href ={`/product/${coupon.id}`} target="_self">
      {coupon.name}
    </a>
  </h2>;

/**
* Coupon Product Image
*/
const CouponImage = ({ coupon }) =>
  <a href={coupon.backlink} target="_blank">
    <Image
      cloudName="deals-expert"
      publicId={coupon.public_id}
      crop="scale"
      width="120"
      height="120"
    />
  </a>;

/**
* Coupon Price, shipping and Percentage 
*/
const CouponPrices = ({ coupon }) =>
  <div className="coupon-prices">
    <p className="coupon-prices-final-price">
      <span>
        {coupon.percentage}
      </span>
    </p>
    <p className="coupon-price-shipping">
      {coupon.isShipped ? coupon.isShipped : ""}
    </p>
  </div>;

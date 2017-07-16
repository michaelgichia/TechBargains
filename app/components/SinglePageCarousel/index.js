/**
*
* SinglePageCarousel
*
*/

import React from "react";
import CouponHeader from "components/CouponHeader";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import shortid from "shortid";
import Slider from "react-slick";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

import "!!style-loader!css-loader!./single-product-carousel.css";

function SinglePageCarousel({ banners }) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000
  };

  return (
    <div>
      <CouponHeader title="Related Products" />
      <CloudinaryContext cloudName="deals-expert">
        <Slider {...settings} className="carousel-single">
          {banners.length !== null && banners.length > 0
            ? banners.map(banner =>
                <div key={shortid.generate()}><Slide banner={banner} /></div>
              )
            : <div />}
        </Slider>
      </CloudinaryContext>
    </div>
  );
}

SinglePageCarousel.propTypes = {};

export default SinglePageCarousel;

const Slide = ({ banner }) =>
  <div className="carousel-image">
    <Card style={{border: "none", boxShadow: 0, zIndex: "none"}} className="carousel-card">
      <CardMedia style={{ minHeight: 160, margin: "auto" }}>
        <a href={banner.backlink} target="_blank">
          <Image
            cloudName="deals-expert"
            publicId={banner.public_id}
            width="160"
            height="160"
            crop="scale"
            dpr="auto"
            responsive
          />
        </a>
      </CardMedia>
      <CardTitle
        className="carousel-title"
        subtitleColor="#e6251f"
        subtitle={banner.isShipped ? banner.isShipped : "+ trending"}
      />
      <CardText color="#1f7dd4" className="carousel-body">
        <label
          onClick={() =>
            (window.location.href = `/product/${banner._id.toString()}`)}
        >
          {banner.name}
        </label>
      </CardText>
      <CardText className="carousel-body-price">
        {banner.percentage}
      </CardText>
      <CardActions>
        <RaisedButton
          label={banner.isCoupon ? "Reveal Code" : "See Deal"}
          primary={true}
          fullWidth
          onTouchTap={() =>
            (window.location.href = `/product/${banner._id.toString()}`)}
        />
      </CardActions>
    </Card>
  </div>;

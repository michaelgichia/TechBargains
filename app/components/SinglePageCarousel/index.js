/**
*
* SinglePageCarousel
*
*/

import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "!!style-loader!css-loader!slick-carousel/slick/slick.css";
import "!!style-loader!css-loader!slick-carousel/slick/slick-theme.css";
import "!!style-loader!css-loader!./style.css";

function SinglePageCarousel({ banners }) {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="carousel-div">
      <Slider {...settings} className="carousel">
        {banners.length !== null && banners.length > 0
          ? banners.map(banner => <div key={shortid.generate()}><Slide banner={banner} /></div>)
          : <div />}
      </Slider>
    </div>
  );
}

SinglePageCarousel.propTypes = {};

export default SinglePageCarousel;

const Slide = ({ banner }) =>
  <div className="carousel-image">
    <Card className="carousel-card">
      <CardMedia className="carousel-media">
        <img src={banner.image} alt={banner.name} />
      </CardMedia>
      <CardTitle className="carousel-title" subtitle="Card subtitle" />
      <CardText className="carousel-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
      </CardActions>
    </Card>
  </div>;
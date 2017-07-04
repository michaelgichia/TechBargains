/**
*
* Carousel
*
*/

import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Slider from "react-slick";

import "!!style-loader!css-loader!./carousel.css";

const settings = {
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
};

const Carousel = ({ banners }) =>
  <div className="carousel-div">
    <Slider {...settings} className="carousel">
      {banners.map(banner =>
        <div className="carousel-image" key={shortid.generate()}>
          <a href={banner.backlink}>
            <img src={banner.imageUrl} alt="carousel" />
          </a>
        </div>
      )}
    </Slider>
  </div>;

Carousel.propTypes = {
  banners: PropTypes.array.isRequired
};

export default Carousel;

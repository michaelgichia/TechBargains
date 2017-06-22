/**
*
* Carousel
*
*/

import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "!!style-loader!css-loader!slick-carousel/slick/slick.css";
import "!!style-loader!css-loader!slick-carousel/slick/slick-theme.css";
// import '!!file-loader!slick-carousel/slick/ajax-loader.gif'

class Carousel extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="carousel-div">
        <Slider {...settings} className="carousel">
          {this.props.banners.length !== null && this.props.banners.length > 0
            ? this.props.banners.map(banner =>
                <div className="carousel-image" key={shortid.generate()}>
                  <img src={banner.imageUrl} alt={banner.title} />
                </div>
              )
            : <div />}
        </Slider>
      </div>
    );
  }
}

Carousel.propTypes = {
  banners: PropTypes.array.isRequired
};

export default Carousel;

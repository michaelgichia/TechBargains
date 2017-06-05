/**
*
* Carousel
*
*/

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

// general styles
import '!!style-loader!css-loader!react-responsive-carousel/lib/styles/main.css';
// carousel styles
import '!!style-loader!css-loader!react-responsive-carousel/lib/styles/carousel.css';

class CarouselReact extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Carousel 
          autoPlay 
          infiniteLoop 
          interval={1000} 
          showIndicators={false} 
          showStatus={false}
          showThumbs={false}
        >
          <div className="carousel-image">
            <img src="http://love-the-day.com/wp-content/uploads/2014/05/Graduation-Printable-Garland.jpg"/>
          </div>
          <div className="carousel-image">
            <img src="https://www.edrawsoft.com/templates/images/business-banner.png"/>
          </div>
          <div className="carousel-image">
            <img src="http://disignworld.com/img/slide_banner.jpg"/>
          </div>
        </Carousel>
      </div>
    );
  }
}

CarouselReact.propTypes = {

};

export default CarouselReact;


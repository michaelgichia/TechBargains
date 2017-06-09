/**
*
* ThirdDiv
*
*/

import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

class ThirdDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col xs={12} sm={12} md={8} lg={8}>
        <div className="description-div">
          <div
            className="title-div"
          ><p>
            Amazon has the best selling 23andme DNA Test Kit for a low $79.00 Free Shipping. For a limited time you save 20% off the $99 regular price. This is the same low price as other DNA testing kits however 23andme is one of the few to have an optional genetic health risk reports for an extra cost.
          </p>
          </div>
          <div className="detail-div">
            <ul>
              <li>#1 Best Seller in Door Bell Kits</li>
              <li>Amazon rated 4.1 out of 5 stars with over 6200 reviews</li>
              <li>2.4 GHz or 5 GHz WiFi to a home wireless network</li>
              <li>wide-angle night vision infrared LED with 1080p video</li>
              <li>2 Way audio with noise cancellation</li>
              <li>Compatible with iOS or Android Smartphones</li>
            </ul>
          </div>
          <div className="buyer-div">
            <button
              onClick={() => this.props.handleOpen(this.props.product.id)}
              className="deal-button"
              style={{
                ...{
                  borderColor: this.props.product.themeColor,
                  color: this.props.product.themeColor
                },
              }}
            >
              SEE DEAL
            </button>
          </div>
        </div>
      </Col>
    );
  }
}

ThirdDiv.propTypes = {
  // description: PropTypes.any.isRequired,
  // product: PropTypes.any.isRequired,
  // features: PropTypes.any.isRequired,
  // id: PropTypes.any.isRequired,
};

ThirdDiv.defaultProps = {
  themeColor: "rgb(255, 132, 0)",
}

export default ThirdDiv;

// {/*dangerouslySetInnerHTML={{ __html: this.props.product.description }}*/}
// {<div dangerouslySetInnerHTML={{ __html: detail }}/>}

// {
//   this.props
//   .product
//   .features
//   .splice(0, 5)
//   .map((detail) => (
//     <li key={shortid.generate()}>
//     </li>
//   ))
// }
/**
*
* ThirdDiv
*
*/

import React from 'react';
import shortid from 'shortid';
import YesNoBtn from 'components/YesNoBtn';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class ThirdDiv extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <Col className="description-div" xs={12} md={8}>
        <Row style={{ margin: 0 }}>
          <Col>
            <div className="title-div">
              <p>
                Amazon has the best selling 23andme DNA Test Kit for a low
                $79.00 Free Shipping. For a limited time you save 20% off the
                $99 regular price. This is the same low price as other DNA
                testing kits however 23andme is one of the few to have an
                optional genetic health risk reports for an extra cost.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '0 20px 0 30px' }}>
          <Col xsHidden smHidden>
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
          </Col>
        </Row>
        <Row style={{ margin: '5px 10px' }}>
          <Col xs={4} sm={6} mdPush={1} md={5} lgPush={1} lg={3}>
            <div className="third-div-percentage">
              <p>$22.99</p>
              <h6>+ free shipping</h6>
            </div>
          </Col>
          <Col xs={8} sm={6} mdPush={1} md={5} lgPush={1} lg={5}>
            <YesNoBtn isCoupon onTouchTap={this.handleOpen} />
          </Col>
        </Row>
        <Row style={{ margin: '0px 20px' }} className="third-div-footer">
          <p>From Amazon Coupons in Audio Components</p>
        </Row>
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
  themeColor: 'rgb(255, 132, 0)',
};

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

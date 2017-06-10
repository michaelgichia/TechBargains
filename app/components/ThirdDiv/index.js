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
        <Row style={{ margin: "15px -10px" }}>
          <Col>
            <div
              className="title-div" 
              dangerouslySetInnerHTML={{ __html: this.props.product.description }}
              >
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '0 20px 0 30px' }}>
          <Col xsHidden smHidden>
            <div className="detail-div">
              <ul>
                {
                  this.props
                  .product
                  .features
                  .splice(0, 5)
                  .map((detail) => (
                    <li key={shortid.generate()}>
                      <div dangerouslySetInnerHTML={{ __html: detail }}/>
                    </li>
                  ))
                }
              </ul>
            </div>
          </Col>
        </Row>
        <Row style={{ margin: '15px 10px' }}>
          <Col xs={4} sm={6} md={6}  lg={6}>
            <div className="third-div-percentage">
              <p>{ `${this.props.product.percentage}% Off` }</p>
              <h6> { this.props.product.isShipped ? '+ free shipping':'' }</h6>
            </div>
          </Col>
          <Col style={{ margin: "auto 0px"}} xs={8} sm={6} md={6} lg={6}>
            <YesNoBtn isCoupon onTouchTap={this.handleOpen} />
          </Col>
        </Row>
        <Row style={{ margin: '0px 10px' }} className="third-div-footer">
          <p>
            { `From ${this.props.product.merchant} in ${this.props.product.category} Components` }
          </p>
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

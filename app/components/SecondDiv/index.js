/**
*
* SecondDiv
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';


      // xs={12} sm={8} md={8} lg={8}
class SecondDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
       <Col xs={12}  sm={4} md={4} lg={4}>
        <div className="imagi-div">
          <img
            alt="dealsexp"
            src={this.props.product.image}
          />
        </div>
      </Col>
    );
  }
}

SecondDiv.propTypes = {
  // product: PropTypes.any.isRequired,
  // image: PropTypes.any.isRequired,
};

export default SecondDiv;

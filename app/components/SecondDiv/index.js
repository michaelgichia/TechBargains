/**
*
* SecondDiv
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/lib/Col';

class SecondDiv extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Col xsPush={4} xs={4} mdPush={1} md={4}>
        <div className="imagi-div">
          <img alt="dealsexp" src={this.props.product.image} />
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

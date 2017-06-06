/**
*
* SecondDiv
*
*/

import React from 'react';
import PropTypes from 'prop-types';

class SecondDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <img
        alt="dealsexp"
        className="imagi-div"
        src={this.props.product.image}
      />
    );
  }
}

SecondDiv.propTypes = {
  // product: PropTypes.any.isRequired,
  // image: PropTypes.any.isRequired,
};

export default SecondDiv;

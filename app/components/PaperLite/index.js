/**
*
* PaperLite
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import "!!style-loader!cssloader!./paper-lite.css";

class PaperLite extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

PaperLite.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PaperLite;

/**
*
* PaperLite
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


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

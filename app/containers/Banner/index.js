/*
 *
 * Banner
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class Banner extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

Banner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Banner);

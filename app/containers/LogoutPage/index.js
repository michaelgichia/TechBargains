/*
 *
 * LogoutPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class LogoutPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      Sad to see you go!
      </div>
    );
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LogoutPage);

/*
 *
 * ConfirmEmail
 *
 */

import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

export class ConfirmEmail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const style = {
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      width: '80%',
      padding: 'auto',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: 50,
    };
    return (
      <Paper style={style} zDepth={1} rounded={false}>
        <span>
          <h1>Thank you!</h1>
        </span>
        <span>
          <p>We have sent you an email.</p>
          <p>Please click the link in that email and activate your account.</p>
        </span>
      </Paper>
    );
  }
}

ConfirmEmail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ConfirmEmail);

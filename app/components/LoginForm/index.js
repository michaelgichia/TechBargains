import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

class LoginForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.errors && <p>{this.props.errors}</p>}
        <Subheader style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>Login</Subheader>
        <TextField
          floatingLabelText="Email"
          hintText="Email"
          id="email"
          onChange={this.props.onChange}
          fullWidth
        />
        <TextField
          floatingLabelText="Password"
          hintText="Password"
          id="password"
          onChange={this.props.onChange}
          type="password"
          fullWidth
        />
        <br />
        <br />
        <RaisedButton
          label="Login"
          primary
          onClick={this.props.onClick}
        />
        <br />
        <br />
        <Subheader>Dont have an account? <Link to={'/register'}>Create one</Link>.</Subheader>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default LoginForm;

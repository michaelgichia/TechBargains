import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CardText from 'material-ui/Card';

function LoginForm({
  onClick,
  onChange,
  errors,
}) {
  return (
    <div>
      {errors && <p>{errors}</p>}
      <p><span>Login</span></p>
      <TextField
        floatingLabelText="Email"
        hintText="Email"
        id="email"
        onChange={onChange}
        fullWidth
      />
      <TextField
        floatingLabelText="Password"
        hintText="Password"
        id="password"
        onChange={onChange}
        type="password"
        fullWidth
      />
      <RaisedButton
        label="Login"
        primary
        onClick={onClick}
      />
      <CardText>Dont have an account? <Link to={'/register'}>Create one</Link>.</CardText>
    </div>
  );
}

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired,
};

export default LoginForm;

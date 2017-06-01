import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import shortid from 'shortid';
// Material-ui
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
  onClick,
  onChange,
  errors,
  user,
  nameError,
  emailError,
  passwordError,
}) => (
  <div>
    <h2>Register</h2>
    <div>
      <ul style={{ listStyle: 'none' }}>
        {errors && errors.map((error) => <li key={shortid.generate()}> <p>{ error }</p> </li>)}
      </ul>
      <TextField
        floatingLabelText="Name"
        hintText="Name"
        name="name"
        errorText={nameError}
        onChange={onChange}
        value={user.name}
        fullWidth
      />
      <TextField
        floatingLabelText="Email"
        name="email"
        hintText="Email"
        errorText={emailError}
        onChange={onChange}
        value={user.email}
        fullWidth
      />
      <TextField
        floatingLabelText="Password"
        hintText="Password"
        type="password"
        name="password"
        onChange={onChange}
        errorText={passwordError}
        value={user.password}
        fullWidth
      />
      <br />
      <br />
      <RaisedButton
        label="Register"
        primary
        onClick={onClick}
      />
    </div>
    <br />
    <div>Already have an account ?<Link to={'/login'}>Log in</Link></div>
  </div>
);

SignUpForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  nameError: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
};

export default SignUpForm;


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import shortid from 'shortid';
// Material-ui
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class SignUpForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h2>Register</h2>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {this.props.errors && this.props.errors.map((error) => <li key={shortid.generate()}> <p>{ error }</p> </li>)}
          </ul>
          <TextField
            floatingLabelText="Name"
            hintText="Name"
            name="name"
            errorText={this.props.nameError}
            onChange={this.props.onChange}
            value={this.props.user.name}
            fullWidth
          />
          <TextField
            floatingLabelText="Email"
            name="email"
            hintText="Email"
            errorText={this.props.emailError}
            onChange={this.props.onChange}
            value={this.props.user.email}
            fullWidth
          />
          <TextField
            floatingLabelText="Password"
            hintText="Password"
            type="password"
            name="password"
            onChange={this.props.onChange}
            errorText={this.props.passwordError}
            value={this.props.user.password}
            fullWidth
          />
          <br />
          <br />
          <RaisedButton
            label="Register"
            primary
            onClick={this.props.onClick}
          />
        </div>
        <br />
        <div>Already have an account ?<Link to={'/login'}>Log in</Link></div>
      </div>
);
  }
}

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


/*
 *
 * RegisterPage
 *
 */
import SignUpForm from 'components/SignUpForm';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'validator';
import { Container, Row, Col } from 'reactstrap';
import { registerUser } from './actions';

export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      errors: [],
      email: '',
      name: '',
      password: '',
      emailError: '',
      nameError: '',
      passwordError: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit = () => {
    if (validator.isEmpty(this.state.email)) {
      this.setState({ emailError: 'Email is required!' });
    }

    if (validator.isEmpty(this.state.name)) {
      this.setState({ nameError: 'Name is required!' });
    }

    if (validator.isEmpty(this.state.password)) {
      this.setState({ passwordError: 'Password is required!' });
    } else {
      const user = Object.assign({},
        { email: this.state.email },
        { name: this.state.name },
        { password: this.state.password }
      );
      this.props.registerUser(user);
    }
  };

  handleChange = (e) => {
    const errorObject = {};
    const errorName = `${e.target.name}Error`;
    const errorValue = '';
    this.setState(errorObject);
    // Create a current error object.
    errorObject[errorName] = errorValue;
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const user = Object.assign({},
      { email: this.state.email },
      { name: this.state.name },
      { password: this.state.password }
    );

    return (
      <Container>
        <Row>
          <Col xs="12" md="8" mdPush="2">
            <SignUpForm
              onClick={this.handleSubmit}
              onChange={this.handleChange}
              errors={this.state.errors}
              user={user}
              nameError={this.state.nameError}
              emailError={this.state.emailError}
              passwordError={this.state.passwordError}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

RegisterPage.propTypes = {
  errors: PropTypes.string.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({
  errors: auth.errors,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (visitor) => dispatch(registerUser(visitor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

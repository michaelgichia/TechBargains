import LoginForm from 'components/LoginForm';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { loginUser } from './actions';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      errors: '',
      visitor: {
        email: '',
        password: '',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = (e) => {
    const updatedVistor = { ...this.state.visitor };
    updatedVistor[e.target.id] = e.target.value;
    this.setState({ visitor: updatedVistor });
  };

  login = () => {
    this.props.loginUser(this.state.visitor);
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={10} md={4} xsOffset={1} mdOffset={1}>
            <LoginForm
              onChange={this.handleChange}
              onClick={this.login}
              errors={this.state.errors}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

LoginPage.propTypes = {
  errors: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ authorize }) => ({
  errors: authorize.errors,
  authenticated: authorize.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (response) => dispatch(loginUser(response)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

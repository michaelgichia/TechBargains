import LoginForm from "components/LoginForm";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import Paper from "material-ui/Paper";
import { loginUser } from "./actions";

class LoginPage extends Component {
  state = {
    errors: "",
    visitor: {
      email: "",
      password: ""
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors !== this.state.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = e => {
    const updatedVistor = { ...this.state.visitor };
    updatedVistor[e.target.id] = e.target.value;
    this.setState({ visitor: updatedVistor });
  };

  login = () => {
    this.props.loginUser(this.state.visitor);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="8" mdPush="2">
            <Paper
              zDepth={1}
              rounded={false}
              style={{ padding: 30, marginTop: 30 }}
            >
              <LoginForm
                onChange={this.handleChange}
                onClick={this.login}
                errors={this.state.errors}
              />
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  errors: PropTypes.string.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ authorize }) => ({
  errors: authorize.errors,
  authenticated: authorize.authenticated
});

const mapDispatchToProps = dispatch => ({
  loginUser: response => dispatch(loginUser(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

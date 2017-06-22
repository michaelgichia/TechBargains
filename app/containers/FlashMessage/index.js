/*
 *
 * FlashMessage
 *
 */

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";
import { handleOpenFlash, handleCloseFlash } from "./actions";

export class FlashMessage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    openFlash: false,
    errors: ""
  };

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.openFlash !== this.state.openFlash) {
      this.setState((prevState, props) => ({ openFlash: nextProps.openFlash }));
    }

    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => {
        return { errors: nextProps.errors };
      });
    }
  }

  render() {
    return (
      <Snackbar
        open={this.state.openFlash}
        message={this.state.errors}
        action="Dismis"
        autoHideDuration={4000}
        onRequestClose={this.props.handleCloseFlash}
        onActionTouchTap={this.props.handleCloseFlash}
      />
    );
  }
}

FlashMessage.propTypes = {};

const mapStateToProps = ({ flash }) => ({
  openFlash: flash.openFlash,
  errors: flash.errors
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenFlash: (errors) => dispatch(handleOpenFlash(errors)),
  handleCloseFlash: () => dispatch(handleCloseFlash())
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);


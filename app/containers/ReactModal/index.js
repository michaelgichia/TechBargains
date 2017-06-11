/*
 *
 * ReactModal
 *
 */

import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { handleOpenModal, handleCloseModal } from './actions';


export class ReactModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.state.open) {
      this.setState((prevState, props) =>  ({open: props.open}));
    }
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleCloseModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.handleCloseModal}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.props.handleOpenModal} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.props.handleCloseModal}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}

ReactModal.propTypes = {
};

const mapStateToProps = ({ modal }) => ({
  open: modal.open
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => dispatch(handleOpenModal()),
  handleCloseModal: () => dispatch(handleCloseModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactModal);

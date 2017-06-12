/*
 *
 * ReactModal
 *
 */

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { handleOpenModal, handleCloseModal } from './actions';


export class ReactModal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    open: false,
    product: {
      name: '',
      features: '',
      coupon: '',
      backlink: '',
      percentage: '',
      image: '',
      merchant: '',
      category: '',
      subCategory: '',
      expire: {},
      isFeatured: true,
      isCoupon: false,
      isShipped: '',
    },
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState((prevState, props) =>  ({open: props.open}));
    }
    if (nextProps.product !== this.state.product) {
      this.setState((prevState, props) =>  ({product: props.product}));
    }
  }

  handlePush = (url) => {
    const ua = navigator.userAgent.toLowerCase();
    const isIE = ua.indexOf('msie') !== -1;
    const version = parseInt(ua.substr(4, 2), 10);

    if (isIE && version < 9) {
      const link = document.createElement('a');
      link.href = url;
      document.body.appendChild(link);
      link.click();
    } else { 
      window.location.href = url; 
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Back"
        labelStyle={{ color: "rgb(103, 109, 121)", fontWeight: 600 }}
        primary={true}
        onTouchTap={this.props.handleCloseModal}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.props.handleOpenModal} />
        <Dialog
          title={
            <div className="modal-header">
              <h2>Copy the code below and paste at checkout</h2>
              <div>{ this.state.product.coupon }</div>
            </div>
          }
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={(e) => this.props.handleCloseModal(e)}
        >
          <div className="modal-body">
            <div>
              <FlatButton 
                label={`go to ${this.state.product.merchant.title}`}
                backgroundColor="#2eba37"
                labelStyle={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 20, 
                  textTransform: "none",
                }}
                href={this.state.product.backlink}
                target="_blank"
                fullWidth
                hoverColor="#7fdbb6"
                keyboardFocused={true}
                onTouchTap={() => this.handlePush(this.state.product.backlink)}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

ReactModal.propTypes = {
};

const mapStateToProps = ({ modal }) => ({
  open: modal.open,
  product: modal.product,
});

const mapDispatchToProps = (dispatch) => ({
  handleOpenModal: () => dispatch(handleOpenModal()),
  handleCloseModal: () => dispatch(handleCloseModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactModal);

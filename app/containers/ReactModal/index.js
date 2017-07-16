/*
 *
 * ReactModal
 *
 */

import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { connect } from "react-redux";
import { handleOpenModal, handleCloseModal } from "./actions";
import "!!style-loader!css-loader!./react-modal.css";

export class ReactModal extends React.Component {
  state = {
    open: false,
    product: {
      name: "",
      features: "",
      coupon: "",
      backlink: "",
      percentage: "",
      image: "",
      merchant: {},
      category: {},
      subCategory: [],
      expire: {},
      isFeatured: true,
      isCoupon: false,
      isShipped: ""
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState((prevState, props) => ({ open: props.open }));
    }
    if (nextProps.product !== this.state.product) {
      this.setState((prevState, props) => ({ product: props.product }));
    }
  }

  handlePush = url => {
    const ua = navigator.userAgent.toLowerCase();
    const isIE = ua.indexOf("msie") !== -1;
    const version = parseInt(ua.substr(4, 2), 10);

    if (isIE && version < 9) {
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
    } else {
      window.location.href = url;
    }
  };

  render() {
    const { product, open } = this.state;
    const { handleCloseModal } = this.props;
    const actions = [
      <ModalFooter />,
      <FlatButton
        label="Back"
        labelStyle={{ color: "rgb(103, 109, 121)", fontWeight: 600 }}
        primary
        onTouchTap={handleCloseModal}
      />
    ];

    return (
      <div>
        <Dialog
          contentStyle={{ width: "100%" }}
          title={<ModalTitle product={product} />}
          actions={actions}
          modal={false}
          open={open}
          autoScrollBodyContent
          onRequestClose={e => handleCloseModal(e)}
          contentClassName="modal-body"
        >
          <ModalButton product={product} handlePush={this.handlePush} />
          <div
            className="description-modal"
            dangerouslySetInnerHTML={{ __html: product.features }}
          />
        </Dialog>
      </div>
    );
  }
}

ReactModal.propTypes = {};

const mapStateToProps = ({ modal }) => ({
  open: modal.open,
  product: modal.product
});

const mapDispatchToProps = dispatch => ({
  handleOpenModal: () => dispatch(handleOpenModal()),
  handleCloseModal: () => dispatch(handleCloseModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactModal);

// Components

const ModalTitle = ({ product }) =>
  <div className="modal-header">
    <div className="modal-header-string">
      <h2>Copy the code below and paste at checkout</h2>
      <div className="modal-coupon">
        {product.coupon}
      </div>
    </div>
  </div>;

const ModalButton = ({ product, handlePush }) =>
  <div className="modal-body-btn">
    <FlatButton
      label={`go to ${product.merchant.title}`}
      backgroundColor="rgb(29, 161, 242)"
      labelStyle={{
        color: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 20,
        textTransform: "none"
      }}
      hoverColor="#00d7ff"
      keyboardFocused={true}
      onTouchTap={() => handlePush(product.backlink)}
    />
  </div>

const ModalFooter = () =>
  <div className="rc-modal-footer">
    <p>
      If you click a merchant link and buy a product or service on their
      website, we may be paid a fee by the merchant.
    </p>
  </div>;

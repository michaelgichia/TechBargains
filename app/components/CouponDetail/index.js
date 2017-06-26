/**
*
* CouponDetail
*
*/

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PaperZindex from "components/PaperZindex";
import { handleOpenModal } from "containers/ReactModal/actions";
import { Image, Transformation } from "cloudinary-react";
import "!!style-loader!css-loader!./style.css";

class CouponDetail extends React.Component {

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
      window.open(url, "_blank");
    }
  };

  render() {
    return (
      <PaperZindex>
        <label
          className="coupon-title"
          onClick={() =>
            (window.location.href = `/product/${this.props.coupon.id}`)}
        >
          {this.props.coupon.name}
        </label>
        <div className="coupon-div">
          <div className="coupon-image">
            <Image publicId={this.props.coupon.public_id}>
              <Transformation
                width="180"
                crop="scale"
                height="180"
                dpr="auto"
              />
            </Image>
          </div>
          <div className="coupon-prices">
            <p className="shipping">
              {this.props.coupon.isShipped ? this.props.coupon.isShipped : ""}
            </p>
            <p className="final-price">
              <span>{this.props.coupon.percentage}</span>
            </p>
          </div>
        </div>
      </PaperZindex>
    );
  }
}

CouponDetail.propTypes = {
  coupon: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleOpenModal: product => dispatch(handleOpenModal(product))
});

export default connect(null, mapDispatchToProps)(CouponDetail);

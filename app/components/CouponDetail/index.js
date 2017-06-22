/**
*
* CouponDetail
*
*/

import React from "react";
import PropTypes from "prop-types";
import PaperZindex from "components/PaperZindex";
import Button from "react-bootstrap/lib/Button";

class CouponDetail extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PaperZindex>
        <h2 className="coupon-title">
          <div dangerouslySetInnerHTML={{ __html: this.props.coupon.name }} />
        </h2>
        <div className="coupon-div">
          <div className="coupon-image">
            <img src={this.props.coupon.image} alt={this.props.coupon.name} />
          </div>
          <div className="coupon-prices">
            <div className="coupon-prices-first">
              <p className="final-price">
                <span>{`${this.props.coupon.percentage}% Off`}</span>
              </p>
              <p className="shipping">
                {this.props.coupon.isShipped ? this.props.coupon.isShipped : ""}
              </p>
            </div>
            <div className="coupon-prices-second">
              <div className="coupon-btn">
                {this.props.coupon.coupon !== null &&
                  this.props.coupon.coupon.length > 0
                  ? <Button
                      bsStyle="primary"
                      bsSize="sm"
                      active
                      bsClass="coupon-btn-btn"
                    >
                      Reveal Code
                    </Button>
                  : <Button
                      bsStyle="primary"
                      bsSize="sm"
                      active
                      bsClass="coupon-btn-btn"
                    >
                      See Deal
                    </Button>}
              </div>
            </div>
          </div>
        </div>
      </PaperZindex>
    );
  }
}

CouponDetail.propTypes = {
  coupon: PropTypes.object.isRequired
};

export default CouponDetail;

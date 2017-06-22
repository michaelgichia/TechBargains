/**
*
* YesNoBtn
*
*/

import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import "!!style-loader!css-loader!./style.css";


class YesNoBtn extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="yes-no-btn-wrapper">
        {this.props.isCoupon
          ? <RaisedButton
              label="REVEAL COUPON"
              primary
              onTouchTap={this.props.onTouchTap}
              labelStyle={{ fontSize: 13 }}
            />
          : <RaisedButton
              label="SEE DEAL"
              href={this.props.backlink}
              target="_blank"
              primary
              labelStyle={{ paddingLeft: 5, paddingRight: 5, fontSize: 13 }}
            />}
      </div>
    );
  }
}

YesNoBtn.propTypes = {
  isCoupon: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired
};

export default YesNoBtn;

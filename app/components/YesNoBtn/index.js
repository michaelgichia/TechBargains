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
              overlayStyle={{ backgroundColor: "rgba(51, 105, 231, 0.4)" }}
              label="Reveal Code"
              primary
              onTouchTap={this.props.onTouchTap}
              labelStyle={{ textTransform: "none", fontSize: 16 }}
            />
          : <RaisedButton
              overlayStyle={{ backgroundColor: "rgba(51, 105, 231, 0.4)" }}
              label="See Deal"
              href={this.props.backlink}
              target="_blank"
              primary
              labelStyle={{
                textTransform: "none",
                paddingLeft: 30,
                paddingRight: 30,
                fontSize: 16
              }}
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

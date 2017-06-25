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
  render() {
    return (
      <div className="yes-no-btn-wrapper">
        {this.props.isCoupon
          ? <RaisedButton
              label="Reveal Code"
              primary
              onTouchTap={this.props.onTouchTap}
              labelStyle={{ textTransform: "none", fontSize: 16 }}
            />
          : <RaisedButton
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

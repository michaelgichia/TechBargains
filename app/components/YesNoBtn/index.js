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
      window.open(url, '_blank');
    }
  }

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
              onTouchTap={() => this.handlePush(this.props.backlink)}
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

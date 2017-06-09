/**
*
* YesNoBtn
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
// import styled from 'styled-components';


class YesNoBtn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        { this.props.isCoupon ?
        (
          <RaisedButton
            label="REVEAL COUPON"
            primary
            onTouchTap={this.props.onTouchTap}
            labelStyle={{ fontSize: 12 }}
          />
        )
        :
        (
          <RaisedButton
            label="SEE DEAL"
            target="_blank"
            href="http://getbootstrap.com/"
            primary
            labelStyle={{ fontSize: 12 }}
          />
        )
      }
      </div>
    );
  }
}

YesNoBtn.propTypes = {
  isCoupon: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired,
};

export default YesNoBtn;

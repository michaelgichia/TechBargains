/**
*
* BackButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class BackButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FlatButton
        label="Back"
        primary
        hoverColor="none"
        onTouchTap={this.props.onTouchTap}
        style={{
          border: 'solid 1.5px #ee6e73',
          margin: 10,
          color: '#ee6e73',
        }}
      />
    );
  }
}


BackButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired,
};

export default BackButton;

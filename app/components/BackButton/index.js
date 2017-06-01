/**
*
* BackButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';


function BackButton({ onTouchTap }) {
  return (
    <FlatButton
      label="Back"
      primary
      hoverColor="none"
      onTouchTap={onTouchTap}
      style={{
        border: 'solid 1.5px #ee6e73',
        margin: 10,
        color: '#ee6e73',
      }}
    />
  );
}

BackButton.propTypes = {
  onTouchTap: PropTypes.func.isRequired,
};

export default BackButton;

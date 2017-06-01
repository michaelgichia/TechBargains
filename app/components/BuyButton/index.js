import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

function BuyButton({ url, currentStore }) {
  return (
    <FlatButton
      href={url}
      target="_blank"
      label={`SHOP NOW ON ${currentStore}`}
      primary
      keyboardFocused
      labelStyle={{ color: '#fff', fontWeight: 600 }}
      hoverColor="#ee6e73"
      backgroundColor="#ee6e73"
      rippleColor="#ef9a9a"
      style={{ margin: 10, paddingLeft: 30, paddingRight: 30 }}
    />
  );
}

BuyButton.propTypes = {
  url: PropTypes.string.isRequired,
  currentStore: PropTypes.string.isRequired,
};

export default BuyButton;

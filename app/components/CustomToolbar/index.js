import React from 'react';

class CustomToolbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="toolbar">
        <button className="ql-bold"></button>
        <button className="ql-underline"></button>
        <button className="ql-link">
        </button>
      </div>
    );
  }
}

CustomToolbar.propTypes = {

};

export default CustomToolbar;

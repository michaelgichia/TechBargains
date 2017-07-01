/**
*
* Panel
*
*/

import React from "react";
import "!!style-loader!css-loader!./panel.css";

function Panel({ headerElement, children }) {
  return (
    <div className="react-panel">
      <div className="react-panel-header">
        {headerElement}
      </div>
      <div className="react-panel-body">
        {children}
      </div>
    </div>
  );
}

Panel.propTypes = {};

export default Panel;

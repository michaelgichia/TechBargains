/**
*
* Panel
*
*/

import React from 'react';
import "!!style-loader!css-loader!./style.css";


function Panel({ headerElement, children }) {
  return (
    <div style={{padding: 30}}>
    <div className="react-panel">
    <div className="react-panel-header">
      {headerElement}
    </div>
    <div className="react-panel-body">
      {children}
    </div>

    </div>

    </div>
  );
}

Panel.propTypes = {

};

export default Panel;

/**
*
* Disclaimer
*
*/

import React from 'react';
import "!!style-loader!css-loader!./style.css";

class Disclaimer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        <ul className="disclaim-store-header">
            <li>
              <h2>DISCLAIMER</h2>
            </li>
        </ul>
        <p>If you click a merchant link and buy a product or service on their website, we may be paid a fee by the merchant.</p>
      </div>
    );
  }
}

Disclaimer.propTypes = {

};

export default Disclaimer;

/**
*
* Topper
*
*/

import React from 'react';

class Topper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="topper">
        <p>Top Seller</p>
      </div>
    );
  }
}

Topper.propTypes = {

};

export default Topper;

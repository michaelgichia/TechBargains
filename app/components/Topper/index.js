/**
*
* Topper
*
*/

import React from 'react';
// import styled from 'styled-components';


class Topper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div  className="topper">
      	<div className="allert">Top Seller</div>
      </div>
    );
  }
}

Topper.propTypes = {

};

export default Topper;

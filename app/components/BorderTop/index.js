/**
*
* BorderTop
*
*/

import React from 'react';
// import styled from 'styled-components';


class BorderTop extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
      	className="pretty-border" style={{ backgroundColor: this.props.product.themeColor }}
      >
      </div>
    );
  }
}

BorderTop.propTypes = {

};

export default BorderTop;

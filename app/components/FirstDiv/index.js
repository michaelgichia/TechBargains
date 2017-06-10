/**
*
* FirstDiv
*
*/

import React from 'react';

class FirstDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
        className="mango"
        dangerouslySetInnerHTML={{ __html: this.props.product.name }}
      />
    );
  }
}

FirstDiv.propTypes = {

};

export default FirstDiv;


/**
*
* FirstDiv
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';

class FirstDiv extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div
        className="mango"
        dangerouslySetInnerHTML={{ __html: '<p>Dr.meter Auto-Ranging Digital Clamp Multimeter $13.99</p>' }}
      />
    );
  }
}

FirstDiv.propTypes = {

};

export default FirstDiv;
        // <div
        //   className="mango"
        //   dangerouslySetInnerHTML={{ __html: this.props.product.name }}
        // />

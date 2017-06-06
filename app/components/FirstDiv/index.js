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
          dangerouslySetInnerHTML={{ __html: this.props.product.name }}
        />
    );
  }
}

FirstDiv.propTypes = {

};

export default FirstDiv;

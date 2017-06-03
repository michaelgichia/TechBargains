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
      <Paper className="first-div">
        <img
          alt="dealsexp"
          className="imagi-div"
          src={this.props.product.image}
        />
      </Paper>
    );
  }
}

FirstDiv.propTypes = {

};

export default FirstDiv;

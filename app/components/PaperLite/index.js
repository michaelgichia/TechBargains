/**
*
* PaperLite
*
*/

import React from 'react';
// import styled from 'styled-components';


class PaperLite extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="card">
        {this.props.children}
      </div>
    );
  }
}

PaperLite.propTypes = {

};

export default PaperLite;

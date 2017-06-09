/**
*
* PaperZindex
*
*/

import React from 'react';
// import styled from 'styled-components';


class PaperZindex extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="card-zindex">
        {this.props.children}
      </div>
    );
  }
}

PaperZindex.propTypes = {

};

export default PaperZindex;

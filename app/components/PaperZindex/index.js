/**
*
* PaperZindex
*
*/

import React from 'react';
import PropTypes from 'prop-types';


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
  children: PropTypes.any.isRequired,
};


export default PaperZindex;

/**
*
* Dropdown
*
*/

import React from 'react';
// import styled from 'styled-components';


class Dropdown extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
			<div className="dropdown__lite">
			  <span>Mouse over me</span>
			  <div className="dropdown-content-lite">
			    <p>Hello World!</p>
			  </div>
			</div>
    );
  }
}

Dropdown.propTypes = {

};

export default Dropdown;


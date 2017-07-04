/**
*
* SideColumnHeader
*
*/

import React from 'react';
import "!!style-loader!css-loader!./side-column-header.css";
// import styled from 'styled-components';


function SideColumnHeader({ title }) {
  return (
    <header className="deal-header">
      <h3>{ title }</h3>
    </header>
  );
}

SideColumnHeader.propTypes = {

};

export default SideColumnHeader;

/**
*
* BottomNav
*
*/

import "!!style-loader!css-loader!./botom-nav.css";
import React from "react";
import shortid from 'shortid';

class BottomNav extends React.PureComponent {
  state = {};

  render() {
    return (
      <ul className="react-dropdown">
        <li className="rt-dropdown" key={shortid.generate()}>
          <a href="" className="rt-dropbtn">Life style</a>
          <div className="rt-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="rt-dropdown" key={shortid.generate()}>
          <a href="" className="rt-dropbtn">Electronics</a>
          <div className="rt-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="rt-dropdown" key={shortid.generate()}>
          <a href="" className="rt-dropbtn">Sationaries</a>
          <div className="rt-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    );
  }
}

BottomNav.propTypes = {};

export default BottomNav;

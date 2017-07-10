/**
*
* BottomNavBar
*
*/

import React from "react";
import "!!style-loader!css-loader!./bottomnavbar.css";

function BottomNavBar() {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <CustomDropdown />
          <CustomDropdown />
          <CustomDropdown />
        </ul>
      </div>
    </nav>
  );
}

BottomNavBar.propTypes = {};

export default BottomNavBar;

const CustomDropdown = () =>
  <li className="nav-item dropdown">
    <a
      className="nav-link dropdown-toggle"
      id="navbarDropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Home & Lifestyle
    </a>
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <a className="dropdown-item" href="#">
        Action
      </a>
      <a className="dropdown-item" href="#">
        Another action
      </a>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </div>
  </li>

/**
*
* BottomNavBar
*
*/

import React from "react";
import "!!style-loader!css-loader!./bottomnavbar.css";

// navbar-toggler navbar-toggler-right

function BottomNavBar({ subCategory, categoryUrl, isDropdownOpen }) {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light navbar-bg-color">
      <div
        className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <DropdownWrapper
            subCategory={subCategory}
            categoryUrl={categoryUrl}
          />
          <DropdownWrapper
            subCategory={subCategory}
            categoryUrl={categoryUrl}
          />
          <DropdownWrapper
            subCategory={subCategory}
            categoryUrl={categoryUrl}
          />
        </ul>
      </div>
    </nav>
  );
}

BottomNavBar.propTypes = {};

export default BottomNavBar;

const DropdownWrapper = ({ categoryUrl, subCategory }) =>
  <li className="nav-item dropdown">
    <Menu categoryUrl={categoryUrl} />
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <SubMenu subCategory={subCategory} />
      <SubMenu subCategory={subCategory} />
      <SubMenu subCategory={subCategory} />
    </div>
  </li>;

/**
 * Menu for navbar
 * 
*/
const Menu = ({ categoryUrl }) =>
  <a
    className="nav-link dropdown-toggle"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    href={categoryUrl}
  >
    Home & Lifestyle
  </a>;

/**
 * Submenu for navbar
 * 
*/
const SubMenu = ({ subCategory }) =>
  <a className="dropdown-item" href={subCategory}>
    Home & Lifestyle
  </a>;

/**
*
* Dropdown
*
*/

import React from "react";
import PropTypes from "prop-types";

import "!!style-loader!css-loader!./dropdown.css";

class Dropdown extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="styled-dropdown">
        <ul>
          <li><h2>{this.props.dropdownValue}</h2></li>
          <li id="dropdown-btn" className="drp-dropdown" style={{ float: "right" }}>
            <label htmlFor="dropdown-btn" className="dropdown-btn">
              <strong>{this.props.dropdownValue}</strong>
            </label>
            <div className="dropdown-content">
              <button onClick={this.props.handleDropdown} id="Expiring Soon">
                Expiring Soon
              </button>
              <button onClick={this.props.handleDropdown} id="Most Recent">
                Most Recent
              </button>
              <button onClick={this.props.handleDropdown} id="Editors Choice">
                Editors Choice
              </button>
            </div>
          </li>
          <li
            id="platinum-id"
            className="dropdown-label"
            style={{ float: "right" }}
          >
            <label htmlFor="platinum-id">Refine by:</label>
          </li>
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  dropdownValue: PropTypes.string.isRequired,
  handleDropdown: PropTypes.func.isRequired
};

export default Dropdown;

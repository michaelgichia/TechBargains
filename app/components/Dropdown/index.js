/**
*
* Dropdown
*
*/

import React from 'react';
import PropTypes from 'prop-types';


class Dropdown extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="gold">
        <ul>
          <li><h2>{ this.props.dropdownValue }</h2></li>
          <li className="platinum" style={{ float: 'right' }}>
            <label className="platinumbtn"><strong>{ this.props.dropdownValue }</strong></label>
            <div className="platinum-content">
              <button onClick={ this.props.handleDropdown } id="Expiring Soon">Expiring Soon</button>
              <button onClick={this.props.handleDropdown} id="Most Recent">Most Recent</button>
              <button onClick={this.props.handleDropdown} id="Editors Choice">Editors Choice</button>
            </div>
          </li>
          <li id="platinum-id" className="platinum-label" style={{ float: 'right' }}>
            <label htmlFor="platinum-id">Refine by:</label>
          </li>
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  dropdownValue: PropTypes.string.isRequired,
  handleDropdown: PropTypes.func.isRequired,
};

export default Dropdown;

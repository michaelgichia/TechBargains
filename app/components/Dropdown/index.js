/**
*
* Dropdown
*
*/

import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

import "!!style-loader!css-loader!./dropdown.css";


class Dropdown extends React.PureComponent {
  render() {
    return (
      <div className="filters-wrapper">
        <header className="filters">
          <Row>
            <Col xs="12" sm="7">
              <h2 className="dropper-h2">Latest Deals</h2>
            </Col>
            <Col sm="5" className="dropper-column">
              <div className="dropperdown">
                <button className="dropperbtn">
                  {this.props.dropdownValue}
                </button>
                <div className="dropperdown-content">
                  <a onClick={this.props.handleDropdown} id="Expiring Soon">
                    Expiring Soon
                  </a>
                  <a onClick={this.props.handleDropdown} id="Most Recent">
                    Most Recent
                  </a>
                  <a onClick={this.props.handleDropdown} id="Editors Choice">
                    Editors Choice
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </header>
      </div>
    );
  }
}

Dropdown.propTypes = {
  dropdownValue: PropTypes.string.isRequired,
  handleDropdown: PropTypes.func.isRequired
};

export default Dropdown;

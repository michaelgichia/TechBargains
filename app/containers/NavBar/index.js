import React from "react";
import shortid from "shortid";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";
import NavbarCollapse from "react-bootstrap/lib/NavbarCollapse";
import TopNav from "containers/TopNav";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { fetchNavItems } from "./actions";

class Navigation extends React.Component {
  state = {
    expanded: false,
    navItems: [
      { name: "Lifestyle & Home", categoryArray: ["Shoes", "Dress", "glass"] },
      {
        name: "Computers & Electronics",
        categoryArray: ["Shoes", "Dress", "glass"]
      },
      { name: "Lifestyle & Home", categoryArray: ["Shoes", "Dress", "glass"] },
      { name: "Health & Wellness", categoryArray: ["Shoes", "Dress", "glass"] },
      { name: "Seasonal Specials", categoryArray: ["Shoes", "Dress", "glass"] },
      { name: "Business", categoryArray: ["Shoes", "Dress", "glass"] }
    ]
  };

  componentDidMount() {
    this.props.fetchNavItems();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.navItems.length > 0 &&
      nextProps.navItems !== this.state.navItems
    ) {
      this.setState((prevState, props) => ({ navItems: props.navItems }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => ({ errors: props.errors }));
    }
  }

  handleToggle = () => this.setState({ expanded: !this.state.expanded });

  handleTouchTap = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleMenuItemOnselect = (eventKey, event) =>
    (window.location.href = `/category/${eventKey}`);

  displayItems = navItems =>
    navItems.map(navItem =>
      <MenuItem
        onSelect={this.handleMenuItemOnselect}
        key={shortid.generate()}
        eventKey={navItem.id}
      >
        {navItem.title}
      </MenuItem>
    );

  render() {
    return (
      <div style={gems65.navbar}>
        <TopNav onLeftIconButtonTouchTap={this.handleTouchTap} />
        <Navbar
          className="navbar-bottom"
          collapseOnSelect
          expanded={this.state.expanded}
          onToggle={this.handleToggle}
        >
          <NavbarCollapse>
            <Nav>
              {this.state.navItems.slice(0, 7).map((navItem, index) =>
                <NavDropdown
                  key={shortid.generate()}
                  eventKey={navItem.id}
                  title={navItem.name}
                  id="basic-nav-dropdown"
                >
                  {this.displayItems(navItem.categoryArray)}
                </NavDropdown>
              )}
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ navItems }) => ({
  navItems: navItems.navItems,
  errors: navItems.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNavItems: () => dispatch(fetchNavItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

// style
const gems65 = {
  navbar: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 5
  },
  navbarTop: {
    marginBottom: 0,
    maxHeight: 50
  },
  navbarBottom: {
    marginTop: 45
  }
};

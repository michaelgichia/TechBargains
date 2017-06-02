import React from 'react';
import shortid from 'shortid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import TopNav from 'containers/TopNav';
import axios from 'axios';

const gems65 = {
  navbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 5,
  },
  navbarTop: {
    marginBottom: 0,
    maxHeight: 50,
  },
  navbarBottom: {
    marginTop: 45,
  },
};

class Navigation extends React.Component {
  state = {
    expanded: false,
    navItems: [
      { name: 'Lifestyle & Home', categoryArray: ['Shoes', 'Dress', 'glass'] },
      { name: 'Computers & Electronics', categoryArray: ['Shoes', 'Dress', 'glass'] },
      { name: 'Lifestyle & Home', categoryArray: ['Shoes', 'Dress', 'glass'] },
      { name: 'Health & Wellness', categoryArray: ['Shoes', 'Dress', 'glass'] },
      { name: 'Seasonal Specials', categoryArray: ['Shoes', 'Dress', 'glass'] },
      { name: 'Business', categoryArray: ['Shoes', 'Dress', 'glass'] },
    ],
  };

  componentDidMount() {
    axios.get('/public-api/all/subcategory')
    .then((response) => {
      if (response.data.confirmation === 'success') {
        this.setState({ navItems: [...response.data.results] });
      }
      console.info('err', response.data.errors);
    });
  }

  handleToggle = () => this.setState({ expanded: !this.state.expanded });

  handleTouchTap = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  generateNavIndex = (index, i) => ((index + 1) + ((i + 1) / 10));

  displayItems = (items, index) => items.map((val, i) => (
    <MenuItem
      key={shortid.generate()}
      eventKey={this.generateNavIndex(index, i)}
    >
      {val}
    </MenuItem>
  ));

  render() {
    return (
      <div style={gems65.navbar}>
        <TopNav
          onLeftIconButtonTouchTap={this.handleTouchTap}
        />
        <Navbar
          className="navbar-bottom"
          collapseOnSelect
          expanded={this.state.expanded}
          onToggle={this.handleToggle}
        >
          <NavbarCollapse>
            <Nav>
              {
                this.state.navItems.map((value, index) => (
                  <NavDropdown
                    key={index}
                    eventKey={index + 1}
                    title={value.name}
                    id="basic-nav-dropdown"
                  >
                    { this.displayItems(value.categoryArray, index) }
                  </NavDropdown>
                ))
              }
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;


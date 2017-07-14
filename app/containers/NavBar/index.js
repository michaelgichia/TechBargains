import React from "react";
import AutoComplete from "components/AutoComplete";
import { InstantSearch, Configure } from "react-instantsearch/dom";
import shortid from "shortid";
import TopNav from "containers/TopNav";
import { connect } from "react-redux";
import { fetchNavItems, fetchStoreItems } from "./actions";

import "!!style-loader!css-loader!./style.css";

class Navigation extends React.Component {
  state = {
    isDropdownOpen: false,
    navbar: [
      { name: "Lifestyle & Home", categoryArray: [] },
      {
        name: "Computers & Electronics",
        categoryArray: []
      },
      { name: "Lifestyle & Home", categoryArray: [] },
      { name: "Health & Wellness", categoryArray: [] },
      { name: "Seasonal Specials", categoryArray: [] },
      { name: "Business", categoryArray: [] }
    ],
    stores: [],
    subCategory: "",
    categoryUrl: ""
  };

  componentDidMount() {
    this.props.fetchNavItems();
    this.props.fetchStoreItems();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.navbar !== this.state.navbar) {
      this.setState((prevState, props) => ({ navbar: props.navbar }));
    }
    if (nextProps.stores !== this.state.stores) {
      this.setState(() => ({ stores: nextProps.stores }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => ({ errors: props.errors }));
    }
  }

  handleDropDown = () =>
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });

  handleStoreItemOnselect = id => (window.location.href = `/merchant/${id}`);

  handleMenuItemOnselect = id => (window.location.href = `/category/${id}`);

  displayStores = storeItems =>
    storeItems.map(store =>
      <MenuItem
        onClick={() => this.handleStoreItemOnselect(store._id.toString())}
        key={shortid.generate()}
        eventKey={store._id.toString()}
      >
        {store.title}
      </MenuItem>
    );

  displayItems = navItems =>
    navItems.map(navItem =>
      <MenuItem
        onClick={() => this.handleMenuItemOnselect(navItem.id)}
        key={shortid.generate()}
        eventKey={navItem.id}
      >
        {navItem.title}
      </MenuItem>
    );

  render() {
    const { isDropdownOpen, stores } = this.state;
    return (
      <div style={gems65.navbar}>
        <TopNav onLeftIconButtonTouchTap={this.handleDropDown} />
        <nav className="navbar navbar-toggleable-md navbar-light navbar-bg-color">
          <div
            className={`collapse navbar-collapse ${isDropdownOpen
              ? "show"
              : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <div className="small-screen-wrapper">
                <InstantSearch
                  appId="YNZ7XXV49B"
                  apiKey="90550ee45080bb58130f0ac76a4e28f5"
                  indexName="Products"
                >
                  <AutoComplete />
                  <Configure hitsPerPage={5} />
                </InstantSearch>
              </div>
              <DropdownWrapper
                onMenuClick={() => window.location.href = "/#"}
                menuName="Stores"
                children={this.displayStores(stores)}
              />
              {this.state.navbar.slice(0, 7).map(nav => {
                return (
                  <DropdownWrapper
                    onMenuClick={() => this.handleMenuItemOnselect(nav.id)}
                    key={shortid.generate()}
                    menuName={nav.name}
                    children={this.displayItems(nav.categoryArray)}
                  />

                );
              }
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ navItems }) => ({
  navbar: navItems.navbar,
  stores: navItems.stores,
  errors: navItems.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNavItems: () => dispatch(fetchNavItems()),
  fetchStoreItems: () => dispatch(fetchStoreItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


/**
 * DropdownWrapper
 * 
*/
const DropdownWrapper = ({ categoryUrl, children, onMenuClick, menuName }) =>
  <li className="nav-item dropdown">
    <Menu onMenuClick={onMenuClick} menuKey={1} menuName={menuName} />
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      {children}
    </div>
  </li>;

/**
 * Menu for navbar
 * 
*/
const Menu = ({ menuName, menuKey, onMenuClick }) =>
  <a
    className="nav-link dropdown-toggle"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    key={menuKey}
    onClick={onMenuClick}
  >
    {menuName}
  </a>;

/**
 * MenuItem for navbar
 * 
*/
const MenuItem = ({ children, eventKey, onClick }) =>
  <a className="dropdown-item" key={eventKey} onClick={onClick}>
    {children}
  </a>;

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

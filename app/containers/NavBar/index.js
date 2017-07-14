import React from "react";
import { InstantSearch, Configure } from "react-instantsearch/dom";
import AutoComplete from "components/AutoComplete";
import BottomNavBar from "components/BottomNavBar";
import shortid from "shortid";
import TopNav from "containers/TopNav";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { fetchNavItems, fetchStoreItems } from "./actions";

import "!!style-loader!css-loader!./style.css";

class Navigation extends React.Component {
  state = {
    isDropdownOpen: false,
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
    ],
    stores: [
      { title: "Amazon", _id: "5953959ff7508b41b9c1ab06" },
      { title: "AT&T Wireless", _id: "59539620f7508b41b9c1ab07" },
      { title: "B&H Photo Video", _id: shortid.generate() },
      { title: "Dell", _id: shortid.generate() },
      { title: "Dell Small Business", _id: shortid.generate() },
      { title: "eBay", _id: shortid.generate() },
      { title: "Groupon", _id: shortid.generate() },
      { title: "HP", _id: shortid.generate() },
      { title: "Lenovo", _id: shortid.generate() },
      { title: "Microsoft Store", _id: shortid.generate() },
      { title: "Office Depot® & OfficeMax®", _id: shortid.generate() },
      { title: "Sprint", _id: shortid.generate() },
      { title: "T-Mobile", _id: shortid.generate() },
      { title: "Verizon Wireless", _id: shortid.generate() },
      { title: "cdkeys", _id: shortid.generate() },
      { title: "DailySteals", _id: shortid.generate() },
      { title: "TorGuard", _id: shortid.generate() }
    ],
    subCategory: "",
    categoryUrl: "",
  };

  componentDidMount() {
    this.props.fetchNavItems();
    this.props.fetchStoreItems();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.navItems.length > 0 &&
      nextProps.navItems !== this.state.navItems
    ) {
      this.setState((prevState, props) => ({ navItems: props.navItems }));
    }
    if (nextProps.stores !== this.state.stores) {
      this.setState(() => ({ stores: nextProps.stores }));
    }
    if (nextProps.errors !== this.state.errors) {
      this.setState((prevState, props) => ({ errors: props.errors }));
    }
  }

  handleDropDown = () => this.setState({ isDropdownOpen: !this.state.isDropdownOpen })


  handleStoreItemOnselect = (eventKey, event) =>
    (window.location.href = `/merchant/${eventKey}`);

  displayStores = storeItems =>
    storeItems.map(store =>
      <MenuItem
        onSelect={this.handleStoreItemOnselect}
        key={shortid.generate()}
        eventKey={store._id.toString()}
      >
        {store.title}
      </MenuItem>
    );

  handleMenuItemOnselect = (eventKey, event) =>
    (window.location.href = `/category/${eventKey}`);

  // displayItems = navItems =>
  //   navItems.map(navItem =>
  //     <MenuItem
  //       onSelect={this.handleMenuItemOnselect}
  //       key={shortid.generate()}
  //       menuKey={shortid.generate()}
  //     >
  //       {navItem.title}
  //     </MenuItem>
  //   );

  displayItems = navItems =>
    navItems.map(navItem =>
      <MenuItem
        key={shortid.generate()}
        menuKey={shortid.generate()}
      >
        {navItem.title}
      </MenuItem>
    );

  render() {
    const { isDropdownOpen, subCategory, categoryUrl, stores } = this.state;
    return (
      <div style={gems65.navbar}>
        <TopNav onLeftIconButtonTouchTap={this.handleDropDown} />
        <nav className="navbar navbar-toggleable-md navbar-light navbar-bg-color">
          <div
            className={`collapse navbar-collapse ${isDropdownOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <DropdownWrapper>
                {this.displayStores(stores)}
              </DropdownWrapper>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ navItems }) => ({
  navItems: navItems.navItems,
  stores: navItems.stores,
  errors: navItems.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNavItems: () => dispatch(fetchNavItems()),
  fetchStoreItems: () => dispatch(fetchStoreItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


// const DropdownWrapper = ({ categoryUrl, subCategory }) =>
//   <li className="nav-item dropdown">
//     <Menu categoryUrl={categoryUrl} menuKey={1} />
//     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//       <MenuItem subCategory={subCategory} eventKey={1}/>
//       <MenuItem subCategory={subCategory} eventKey={2}/>
//       <MenuItem subCategory={subCategory} eventKey={3}/>
//     </div>
//   </li>;


const DropdownWrapper = ({ categoryUrl, subCategory, children }) =>
  <li className="nav-item dropdown">
    <Menu categoryUrl={categoryUrl} menuKey={1} menuName="Stores" />
    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      {children}
    </div>
  </li>;

/**
 * Menu for navbar
 * 
*/
const Menu = ({ menuName, categoryUrl, menuKey }) =>
  <a
    className="nav-link dropdown-toggle"
    id="navbarDropdownMenuLink"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    href={categoryUrl}
    key={menuKey}
  >
   { menuName }
  </a>;

/**
 * MenuItem for navbar
 * 
*/
const MenuItem = ({ children, subCategory, eventKey }) =>
  <a className="dropdown-item" href={subCategory} key={eventKey}>
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

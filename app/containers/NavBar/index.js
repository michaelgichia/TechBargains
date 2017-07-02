import React from "react";
import { InstantSearch, Configure } from "react-instantsearch/dom";
import AutoComplete from "components/AutoComplete";
import shortid from "shortid";
import TopNav from "containers/TopNav";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { fetchNavItems, fetchStoreItems } from "./actions";

import "!!style-loader!css-loader!./style.css";

class Navigation extends React.Component {
  state = {
    expanded: false,
    isOpen: false,
    dropdownOpen: false,
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
    ]
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

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleToggle = () => this.setState({ expanded: !this.state.expanded });

  handleDropDown = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

  handleTouchTap = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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

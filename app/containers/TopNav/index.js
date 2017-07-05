import React from "react";
import { browserHistory } from "react-router";
import AutoComplete from "components/AutoComplete";
import PropTypes from "prop-types";
import AppBar from "material-ui/AppBar";
import HomeIcon from "components/HomeIcon";
import { InstantSearch, Configure } from "react-instantsearch/dom";

// style
import "!!style-loader!css-loader!./style.css";
import { style } from "./style";

class TopNav extends React.Component {
  state = {
    windowWidth: window.innerWidth,
    searchState: {}
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  onSearchStateChange = nextSearchState => {
    this.setState({ searchState: nextSearchState });
  };

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return (
      <AppBar
        className="top-nav"
        onTitleTouchTap={() => browserHistory.push("/")}
        style={style.appBar}
        titleStyle={
          this.state.windowWidth < 768
            ? style.smallScreenStyle
            : style.largeScreenStyle
        }
        title={
          <div className="home-icon">
            <HomeIcon />
            <span className="first">Deals</span>
            <span className="second">Expert</span>
          </div>
        }
        iconStyleLeft={style.iconStyleLeft}
        showMenuIconButton={this.state.windowWidth < 768}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
      >
        <div className="large-screen-wrapper">
          <InstantSearch
            appId="YNZ7XXV49B"
            apiKey="90550ee45080bb58130f0ac76a4e28f5"
            indexName="item"
            searchState={this.state.searchState}
            onSearchStateChange={this.onSearchStateChange}
          >
            <AutoComplete />
            <Configure hitsPerPage={5} />
          </InstantSearch>
        </div>
      </AppBar>
    );
  }
}

TopNav.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired
};

export default TopNav;

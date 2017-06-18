import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import {InstantSearch, Hits, SearchBox, Pagination, Highlight} from 'react-instantsearch/dom';
import EventListener, { withOptions } from 'react-event-listener';
import { jewels } from './jewels';
// import styled from 'styled-components';

function Product({hit}) {
  return (
    <div style={{marginTop: '10px'}}>
      <span className="hit-name">
        <Highlight attributeName="name" hit={hit} />
      </span>
    </div>
  );
};

function Search() {
  return (
    <div className="container">
      <SearchBox />
      <Hits hitComponent={Product} />
      <Pagination />
    </div>
  );
}

class TopNav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    windowWidth: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return (
      <AppBar
        title="Title"
        showMenuIconButton={this.state.windowWidth < 768}
        onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}
        titleStyle={jewels.titleStyle}
        style={jewels.appBar}
        iconStyleLeft={jewels.iconStyleLeft}
      >
        {/*<InstantSearch
          appId="YNZ7XXV49B"
          apiKey="90550ee45080bb58130f0ac76a4e28f5"
          indexName="item"
        >
         <Search/>
        </InstantSearch>
      */}
      </AppBar>
    );
  }
}

TopNav.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired,
};

export default TopNav;


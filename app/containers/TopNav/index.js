import React from 'react';
import AutoComplete from 'components/AutoComplete';
import PropTypes from 'prop-types';
// Material-ui
import AppBar from 'material-ui/AppBar';
// Algolia
import { InstantSearch, Configure } from 'react-instantsearch/dom';
// style
import 'react-instantsearch-theme-algolia/style.css';
import { style } from './style';


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
        titleStyle={style.titleStyle}
        style={style.appBar}
        iconStyleLeft={style.iconStyleLeft}
      >
        <InstantSearch
          appId="YNZ7XXV49B"
          apiKey="90550ee45080bb58130f0ac76a4e28f5"
          indexName="Products"
        >
          <AutoComplete />
          <Configure hitsPerPage={1} />
        </InstantSearch>
      </AppBar>
    );
  }
}

TopNav.propTypes = {
  onLeftIconButtonTouchTap: PropTypes.func.isRequired,
};

export default TopNav;

